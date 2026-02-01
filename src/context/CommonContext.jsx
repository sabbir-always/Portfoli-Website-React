import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
const CommonContextProvider = createContext();

const CommonContext = ({ children }) => {
    const [projects, setProjects] = useState({ isLoading: false, data: [], error: null })
    const updateProjectsState = (newState) => { setProjects(prev => ({ ...prev, ...newState })) };

    const fetchProjectsData = async () => {
        try {
            updateProjectsState({ isLoading: true, error_message: null });
            const response = await axios.get('http://localhost:5000/projects')

            if (response && response) {
                updateProjectsState({ data: response.data });
            }

        } catch (error) {
            console.log(error);
            updateProjectsState({ error: error });
        } finally {
            updateProjectsState({ isLoading: false });
        }
    }


    return <CommonContextProvider.Provider value={{ projects, fetchProjectsData }}>
        {children}
    </CommonContextProvider.Provider>
}

export default CommonContext;

export const useCommonContext = () => {
    const context = useContext(CommonContextProvider);
    if (!context) { throw new Error("useCommonContext must be used within a CommonContextProvider") }
    return context;
};
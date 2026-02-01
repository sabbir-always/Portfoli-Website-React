import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
const CommonContextProvider = createContext();

const CommonContext = ({ children }) => {

    return <CommonContextProvider.Provider value={{}}>
        {children}
    </CommonContextProvider.Provider>
}

export default CommonContext;

export const useCommonContext = () => {
    const context = useContext(CommonContextProvider);
    if (!context) { throw new Error("useCommonContext must be used within a CommonContextProvider") }
    return context;
};
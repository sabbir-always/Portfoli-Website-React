import { FaRegFolder } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './ProjectComponents.css'

const ProjectComponents = ({ data }) => {
    return (
        <div className='project_card_holder border border-dark'>
            <div className="d-flex align-items-center justify-content-between">
                <div className='project_card_folder_icon'><FaRegFolder /></div>
                <a href={data.github} target='_new' className='project_card_github_icon'><FiGithub /></a>
            </div>
            <div className='project_card_content'>
                <Link to='' className='project_card_headline'>{data.name}</Link>
                <p className='project_card_subheadline'>{data.description}</p>
                <p className='project_card_miniheadline'>{data.language}</p>
            </div>
        </div>
    )
}

export default ProjectComponents
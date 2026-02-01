import WebLayouts from '../layouts/WebLayouts'
import { FaNode, FaFigma, FaRegEnvelope, FaPhoneAlt, FaRegFolder } from 'react-icons/fa';
import { BiLogoTypescript, BiSolidCreditCardFront, BiSupport } from "react-icons/bi";
import { RiReactjsLine, RiNextjsLine } from "react-icons/ri";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { SiMongodb, SiExpress } from "react-icons/si";
import { BsWindowFullscreen } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdArchitecture } from "react-icons/md";
import { LuDatabaseZap } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HERO_IMAGE from '../assets/hero-image.png';
import MERN_IMAGE from '../assets/mern-logo.png';
import './HomePage.css';

const HomePage = () => {

    return (
        <WebLayouts>
            {/* --- HOME SECTION --- */}
            <section className='home_section'>
                <div className="container">
                    <div className="row align-items-center gap-5 gap-sm-0">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className='d-flex flex-column gap-3'>
                                <div className='d-block'><span className='section_headline'><GoArrowRight /> Hi, I’m Sabbir</span></div>
                                <h2 className='home_section_headline'>MERN Stack<span style={{ color: 'gray' }}> Web Developer</span><br />building scalable and modern web applications.</h2>
                                <p className='home_section_subheadline'>Currently working as a MERN Stack Web Developer in Bangladesh, I enjoy building secure, scalable, and user-friendly web applications.</p>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <Link to='' className='home_section_btn1'>Download CV</Link>
                                    <Link to='' className='home_section_btn2'>Appointment</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className='hero_image_holder'>
                                <div className="hero_image_wrapper">
                                    <img src={HERO_IMAGE} alt="HERO IMAGE" className="img-fluid" />
                                </div>
                                <div className='coding_language_icon_holder'>
                                    <img src={MERN_IMAGE} className='img-fluid' alt="MERN IMAGE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ABOUT EXPERIENCE --- */}
            <section className='about_experience'>
                <div className="container">
                    <div className="row border border-dark">
                        <div className="col-6 col-md-3">
                            <div className="about_experience_count_holder border-sm-end border-dark">
                                <h4 className='about_experience_count'>03+</h4>
                                <p className='about_experience_text'>Years of Experience</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="about_experience_count_holder border-sm-end border-dark">
                                <h4 className='about_experience_count'>20+</h4>
                                <p className='about_experience_text'>Completed Projects</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="about_experience_count_holder border-sm-end border-dark">
                                <h4 className='about_experience_count'>15+</h4>
                                <p className='about_experience_text'>Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="about_experience_count_holder">
                                <h4 className='about_experience_count'>10+</h4>
                                <p className='about_experience_text'>Technologies Used</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className='about_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='d-flex flex-column gap-3'>
                                <div className='d-block'><span className='section_headline'><GoArrowRight /> About Myself</span></div>
                                <h2 className='about_section_headline'>Full-Stack MERN Developer Building Modern Web Applications.</h2>
                                <p className='about_section_subheadline'>I’m a MERN Stack Web Developer from Bangladesh with a strong focus on building scalable, secure, and high-performance web applications. I work with MongoDB, Express.js, React, and Node.js to develop full-stack solutions that solve real-world problems.</p>
                                <p className='about_section_subheadline'>I love learning new technologies, solving problems, and building applications that are fast, secure, and to use. Coding for me is not just work—it’s something I genuinely enjoy.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 my-4 my-sm-0">
                                    <div className='about_card_holder border border-dark'>
                                        <div className='about_card_folder_icon'><MdArchitecture /></div>
                                        <span className='about_card_headline'>Scalable Architecture</span>
                                        <span className='about_card_subheadline'>I build scalable full-stack architectures that grow smoothly as your application and user base expand.</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='about_card_holder border border-dark'>
                                        <div className='about_card_folder_icon'><HiMiniArrowTrendingUp /></div>
                                        <span className='about_card_headline'>High Performance</span>
                                        <span className='about_card_subheadline'>I focus on performance optimization to ensure fast load times, efficient APIs, and smooth user experiences.</span>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <div className="about_card_reviews border border-dark">
                                        <div className='about_card_review_box'>
                                            <h4 className='about_card_review_headline'>100%</h4>
                                            <p className='about_card_review_subheadline'>Client Setisfied</p>
                                        </div>
                                        <div className='about_card_review_box'>
                                            <h4 className='about_card_review_headline'>24/7</h4>
                                            <p className='about_card_review_subheadline'>Support System</p>
                                        </div>
                                        <div className='about_card_review_box'>
                                            <h4 className='about_card_review_headline'>Fast</h4>
                                            <p className='about_card_review_subheadline'>Delivery Project</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TECH STACK AND EXPERTISE --- */}
            <section className='tech_stack_experties'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center gap-2 mb-5">
                                <h2 className='section_headline_name'><span className='section_headline_name_color'>Tech Stack</span> and Experties</h2>
                                <p className='section_subheadline_name'>Tools and technologies I use to bring ideas to life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><SiMongodb /></div>
                                <span className='tech_stack_name'>MongoDB</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><SiExpress /></div>
                                <span className='tech_stack_name'>Express JS</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><RiReactjsLine /></div>
                                <span className='tech_stack_name'>React Js</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><FaNode /></div>
                                <span className='tech_stack_name'>Node Js</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><RiNextjsLine /></div>
                                <span className='tech_stack_name'>Next Js</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><BiLogoTypescript /></div>
                                <span className='tech_stack_name'>TypeScript</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><TbBrandReactNative /></div>
                                <span className='tech_stack_name'>Native</span>
                            </div>
                        </div>
                        <div className="col-4 col-md-1 mb-3 mb-sm-0 g-md-1">
                            <div className="tech_stack_box border border-dark">
                                <div className='tech_stack_icon'><FaFigma /></div>
                                <span className='tech_stack_name'>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICE SECTION --- */}
            <section className='service_section'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center gap-2 mb-5">
                                <h2 className='section_headline_name'><span className='section_headline_name_color'>Our</span> Service</h2>
                                <p className='section_subheadline_name'>We deliver smart solutions to grow your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className='service_card_holder border border-dark'>
                                <div className='service_card_icon'><CgWebsite /></div>
                                <h2 className='service_card_headline'>Responsive Web Design</h2>
                                <p className='service_card_subheadline'>We create modern, mobile-friendly websites that look great and perform perfectly on all devices.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className='service_card_holder border border-dark'>
                                <div className='service_card_icon'><BiSolidCreditCardFront /></div>
                                <h2 className='service_card_headline'>Frontend Development</h2>
                                <p className='service_card_subheadline'>Clean, fast, and interactive user interfaces built with modern technologies for the best user experience.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 mb-sm-0">
                            <div className='service_card_holder border border-dark'>
                                <div className='service_card_icon'><LuDatabaseZap /></div>
                                <h2 className='service_card_headline'>Backend Development</h2>
                                <p className='service_card_subheadline'>Secure and scalable backend solutions to power your applications and manage data efficiently.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 mb-sm-0">
                            <div className='service_card_holder border border-dark'>
                                <div className='service_card_icon'><BsWindowFullscreen /></div>
                                <h2 className='service_card_headline'>Full-Stack Solutions</h2>
                                <p className='service_card_subheadline'>Complete end-to-end web solutions combining frontend, backend, and database integration.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 mb-sm-0">
                            <div className='service_card_holder border border-dark'>
                                <div className='service_card_icon'><IoIosOptions /></div>
                                <h2 className='service_card_headline'>Website Optimization</h2>
                                <p className='service_card_subheadline'>We optimize speed, performance, and SEO to ensure your website ranks better and loads faster.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='service_card_holder border border-dark'>
                                <div className='service_card_icon'><BiSupport /></div>
                                <h2 className='service_card_headline'>Maintenance & Support</h2>
                                <p className='service_card_subheadline'>Ongoing support, updates, and maintenance to keep your website secure and up to date.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROJECT SECTION --- */}
            <section className='project_section'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center gap-2 mb-5">
                                <h2 className='section_headline_name'><span className='section_headline_name_color'>Featured</span> and Projects</h2>
                                <p className='section_subheadline_name'>A selection of projects showcasing my skills, creativity, and experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>eCommerce Website</Link>
                                    <p className='project_card_subheadline'>Full-featured eCommerce platform with cart, checkout, and admin panel.</p>
                                    <p className='project_card_miniheadline'>React, Node.js, MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Portfolio Website</Link>
                                    <p className='project_card_subheadline'>Personal portfolio website to showcase projects and skills.</p>
                                    <p className='project_card_miniheadline'>React, Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Blog Application</Link>
                                    <p className='project_card_subheadline'>Blog platform with user authentication and CRUD operations.</p>
                                    <p className='project_card_miniheadline'>Next.js, Node.js, MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Task Management App</Link>
                                    <p className='project_card_subheadline'>Task management system with status tracking and deadlines.</p>
                                    <p className='project_card_miniheadline'>React, Express.js, MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Chat Application</Link>
                                    <p className='project_card_subheadline'>Real-time chat application with user login and messaging.</p>
                                    <p className='project_card_miniheadline'>React, Node.js, Socket.io</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Learning Management System</Link>
                                    <p className='project_card_subheadline'>Online learning platform with courses and student dashboard.</p>
                                    <p className='project_card_miniheadline'>React, Node.js, MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Restaurant Management System</Link>
                                    <p className='project_card_subheadline'>Restaurant system with menu, orders, and admin control.</p>
                                    <p className='project_card_miniheadline'>React, Node.js, MySQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className='project_card_holder border border-dark'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className='project_card_folder_icon'><FaRegFolder /></div>
                                    <a href='https://github.com/' target='_new' className='project_card_github_icon'><FiGithub /></a>
                                </div>
                                <div className='project_card_content'>
                                    <Link to='' className='project_card_headline'>Authentication System</Link>
                                    <p className='project_card_subheadline'>Secure authentication system with JWT and role-based access.</p>
                                    <p className='project_card_miniheadline'>Node.js, Express.js, MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CONTACT SECTION --- */}
            <section className='contact_section'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center gap-2 mb-5">
                                <h2 className='section_headline_name'><span className='section_headline_name_color'>Let's Work</span> Together</h2>
                                <p className='section_subheadline_name'>Have a project in mind? Let’s make it happen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-sm-0">
                            <div className="p-3 p-sm-4 border border-dark">
                                <form className='row'>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="name" className="form-label form_label">Your Name</label>
                                        <input type="text" className="form-control rounded-0" id="name" />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="email" className="form-label form_label">Email address</label>
                                        <input type="email" className="form-control rounded-0" id="email" />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="phone" className="form-label form_label">Phone Number</label>
                                        <input type="number" className="form-control rounded-0" id="phone" />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="message" className="form-label form_label">Your Message</label>
                                        <textarea className="form-control rounded-0" id="message" rows='3' />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-end">
                                            <button className='contact_btn'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h6 className='contact_section_headline'>Let's Contact</h6>
                            <p className='contact_section_subheadline'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure esse repellat ex officiis, at commodi minima magni repudiandae sequi quo.</p>
                            <div className='contact_holder border border-dark'>
                                <div className='contact_holder_icon'><FaRegEnvelope /></div>
                                <div className='contact_holder_text_box'>
                                    <span className='contact_holder_text_headline'>Email Address</span>
                                    <span className='contact_holder_text_subheadline'>conatct.sabbirhosain@gmail.com</span>
                                </div>
                            </div>
                            <div className='contact_holder border border-dark'>
                                <div className='contact_holder_icon'><FaPhoneAlt /></div>
                                <div className='contact_holder_text_box'>
                                    <span className='contact_holder_text_headline'>Phone Number</span>
                                    <span className='contact_holder_text_subheadline'>+880 1793 273 702 / +880 1774 988 485</span>
                                </div>
                            </div>
                            <div className='contact_holder border border-dark'>
                                <div className='contact_holder_icon'><FaMapLocationDot /></div>
                                <div className='contact_holder_text_box'>
                                    <span className='contact_holder_text_headline'>Address</span>
                                    <span className='contact_holder_text_subheadline'>Rajshahi Bangladesh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </WebLayouts>
    )
}

export default HomePage
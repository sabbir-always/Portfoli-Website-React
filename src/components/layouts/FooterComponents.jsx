import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaRegEnvelope, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import './FooterComponents.css'

const FooterComponents = () => {
    return (
        <div className='footer_section'>
            <div className="container">
                <div className="row justify-content-center justify-content-md-between gap-3 gap-sm-0">
                    <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center justify-content-start">
                            <div className="d-flex align-items-center gap-1">
                                <span className='navbar_brand_logo'>Web</span>
                                <span className='navbar_brand_logo_text'>Solution</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center justify-content-center">
                            <span className='footer_copyright_text'>© {new Date().getFullYear()} Sabbir Hosain. All rights reserved.</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-end gap-2">
                            <a href="" target='_new' className='footer_social_icons'><FaFacebookF /></a>
                            <a href="" target='_new' className='footer_social_icons'><FaLinkedinIn /></a>
                            <a href="" target='_new' className='footer_social_icons'><FaWhatsapp /></a>
                            <a href="" target='_new' className='footer_social_icons'><FaTelegramPlane /></a>
                            <a href="" target='_new' className='footer_social_icons'><FaRegEnvelope /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponents
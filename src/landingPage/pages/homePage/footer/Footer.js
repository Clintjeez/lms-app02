import React from "react";
import "./Footer.scss";
import Facebook from "./social-icons/fb.svg";
import LinkedIn from "./social-icons/linkedin.svg";
import Instagram from "./social-icons/instagram.svg";
import Twitter from "./social-icons/twitter.svg";
import YouTube from "./social-icons/yt.svg";

function Footer() {
    return (
        <section id="footer-features">
            <div className="container">
                <div className="main-footer">
                    <div className="footer-links row">
                        {/* Column1 */}
                        <div className="company col">
                            <h4>Company</h4>
                            <ul className="list">
                            <li><a href="About">About</a></li>
                            <li><a href="Jobs at Zustech">Jobs at Zustech</a></li>
                            <li><a href="Press">Press</a></li>
                            <li><a href="Become a teacher">Become a teacher</a></li>
                            <li><a href="Privacy Policy">Privacy policy</a></li>
                            <li><a href="Terms of use">Terms of use</a></li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="resources col">
                            <h4>Resources</h4>
                            <ul className="list">
                            <li><a href="Teaching handbook">Teaching handbook</a></li>
                            <li><a href="Company">Company</a></li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="community col">
                            <h4>Community</h4>
                            <ul className="list">
                            <li><a href="Go premium">Go premium</a></li>
                            <li><a href="Partners">Partners</a></li>
                            <li><a href="Blog">Blog</a></li>
                            </ul>
                        </div>
                        {/* Column4 */}
                        <div className="support col">
                            <h4>Support</h4>
                            <ul className="list">
                            <li><a href="Help Center">Help Center</a></li>
                            <li><a href="FAQ">FAQ</a></li>
                            <li><a href="Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-icons row">
                        <p className="latest-date-footer col">
                            &copy;{new Date().getFullYear()} Zustech Ltd
                        </p>
                        <div className="col2"></div>
                        <div className="col3"></div>
                        <div className="social-icons">
                            <div className="end-footer col">
                                <ul>
                                    <li className="social-media-icons"><a href="https://www.facebook.com/Zustech" target="_blank" rel="noreferrer nofollow">
                                    <img src={Facebook} alt="facebook" className="fb-icon" />
                                    </a></li>
                                    <li className="social-media-icons"><a href="coming soon" target="_blank" rel="noreferrer nofollow">
                                    <img src={YouTube} alt="youtube" className="yt-icon" />
                                    </a></li>
                                    <li className="social-media-icons"><a href="https://www.linkedin.com/company/zustech-limited/about/" target="_blank" rel="noreferrer nofollow">
                                    <img src={LinkedIn} alt="linkedin" className="li-icon" />
                                    </a></li>
                                    <li className="social-media-icons"><a href="https://www.instagram.com/zustech/" target="_blank" rel="noreferrer nofollow">
                                    <img src={Instagram} alt="instagram" className="insta-icon" />
                                    </a></li>
                                    <li className="social-media-icons"><a href="https://twitter.com/zustech" target="_blank" rel="noreferrer nofollow">
                                    <img src={Twitter} alt="twitter" className="tw-icon" />
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
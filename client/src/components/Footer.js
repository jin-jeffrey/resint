import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div classNameName="footer">
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates on our application!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"></input>
                                        <button className="btn btn_get btn_get_two" type="submit">Send</button>
                                        <p className="mchimp-errmessage" style={{ display: "none;"}}></p>
                                        <p className="mchimp-sucmessage" style={{ display: "none;"}}></p>
                                    </form>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" >
                                    <h3 className="f-title f_600 t_color f_size_18">Useful Links</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">Leetcode</a></li>
                                        <li><a href="#">HackerRank</a></li>
                                        <li><a href="#">Repl.it</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                                    <h3 className="f-title f_600 t_color f_size_18">Team</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-linkedin"></a>
                                        <a href="#" className="fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© Resint Inc.. 2022 All rights reserved.</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>Made with <i className="icon_heart"></i> in <a href="#">Resint</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </ div>
    );
}

export default Footer;
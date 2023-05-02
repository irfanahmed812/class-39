import React from 'react';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './w-logo.png';
import fb from './img/fb.png';
import ins from './img/ins.png';
import tw from './img/tw.png';
import yt from './img/yt.png';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <img src={logo} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac a tempor a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac a tempor a.</p>
                                <h4 className="text-white">GET CONNECTED</h4>
                                <div className="social pb-3">
                                    <div className="row">
                                        <div className="col-lg-1 col-sm-3">
                                            <img src={fb} alt="" />
                                        </div>
                                        <div className="col-lg-1 col-sm-3">
                                            <img src={tw} alt="" />
                                        </div>
                                        <div className="col-lg-1 col-sm-3">
                                            <img src={yt} alt="" />
                                        </div>
                                        <div className="col-lg-1 col-sm-3">
                                            <img src={ins} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- section --> */}
                        <div className="col-lg-2 col-sm-4 abcd">
                            <div className="single-box">
                                <h2>Network</h2>
                                <ul>
                                    <li><a href="#test">Smartlink</a></li>
                                    <li><a href="#test">CPA Offers</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 abcd">
                            <div className="single-box">
                                <h2>ADVERTISER</h2>
                                <ul>
                                    <li><a href="#test">Advertisers</a></li>
                                    <li><a href="#test">Agencies</a></li>
                                    <li><a href="#test">Products</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 abcd">
                            <div className="single-box">
                                <h2>PUBLISHERS</h2>
                                <ul>
                                    <li><a href="#test">Services</a></li>
                                    <li><a href="#test">Contest</a></li>
                                    <li><a href="#test">Contest</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-4 abcd">
                            <div className="single-box">
                                <h2>NEWSFEED</h2>
                                <ul>
                                    <li><a href="#test">Blog</a></li>
                                    <li><a href="#test">Offers</a></li>
                                    <li><a href="#test">Affiliate</a></li>
                                    <li><a href="#test">Tips</a></li>
                                    <li><a href="#test">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-deg pb-3">
                        <span></span>
                    </div>
                    {/* <!-- copyright --> */}
                    <div className="d-flex justify-content-between footer-li">
                        <div className="text-start text-white copy">
                            <span>&copy; Copyright 2023 - Footer Layout | Developed by <a className="text-decoration-none text-danger"
                                href="https://www.facebook.com/irfanahmed812i" target='__blank'>Irfan Ahmed</a></span>
                        </div>
                        <div className="text-end">
                            <a href="#test">Terms and Conditions (Affiliates)</a>
                            <a className='ms-2' href="#test">Advertiser Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
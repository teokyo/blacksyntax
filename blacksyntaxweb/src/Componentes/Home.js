import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home">
                <div className="home_background_container prlx_parent">
                {/*<div className="home_background prlx" style={{backgroundImage:"url('../images/slider_background.jpg')"}}></div>*/}
                <div className="home_background prlx">
                <img src="../images/slider_background.jpg" alt="" width="1200" height="1100" />
                </div>
                </div>

               { /* div className hero */}
                <div className="hero_slider_container">

                    {/*div slider*/}
                    <div className="owl-carousel owl-theme hero_slider">

                        {/* Slider Item */}
                        <div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
                            <span>by</span>
                            <span><img src="images/colorlib.png" alt=""/></span>
                                <span>GO!</span>
                                <span>Get your freebie template now!</span>
				            </div>

                            {/*slider team */}
                            <div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
                                <span>by</span>
                                <span><img src="images/colorlib.png" alt=""/></span>
                                    <span>GO!</span>
                                    <span>Get your freebie template now!</span>
				            </div>

                                {/*slider item */}
                                <div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
                                    <span>by</span>
                                    <span><img src="images/colorlib.png" alt=""/></span>
                                        <span>GO!</span>
                                        <span>Get your freebie template now!</span>
				        </div>

                </div>

                                {/* Hero Slider Navigation Left */}
                                <div className="hero_slider_nav hero_slider_nav_left">
                                    <div className="hero_slider_prev d-flex flex-column align-items-center justify-content-center trans_200">
                                        <i className="fas fa-chevron-left trans_200"></i>
                                    </div>
                                </div>

                                {/* Hero Slider Navigation Right */}
                                <div className="hero_slider_nav hero_slider_nav_right">
                                    <div className="hero_slider_next d-flex flex-column align-items-center justify-content-center trans_200">
                                        <i className="fas fa-chevron-right trans_200"></i>
                                    </div>
                                </div>

                            </div>

                            <div className="hero_side_text_container">
                                <div className="double_arrow_container d-flex flex-column align-items-center justify-content-center">
                                    <div className="double_arrow nav_links" data-scroll-to=".icon_boxes">
                                        <i className="fas fa-chevron-left trans_200"></i>
                                        <i className="fas fa-chevron-left trans_200"></i>
                                    </div>
                                </div>
                                <div className="hero_side_text">
                                    <h2>Modern design easy to use</h2>
                                    <p>Maecenas id orci rutrum, vehicula nunc sit amet, fringilla ante. Nulla efficitur vitae ligula commodo varius.</p>
                                </div>
                            </div>

                            <div className="next_section_scroll">
                                <div className="next_section nav_links" data-scroll-to=".icon_boxes">
                                    <i className="fas fa-chevron-down trans_200"></i>
                                    <i className="fas fa-chevron-down trans_200"></i>
                                </div>
                            </div>

                        </div>
                    );
                }
            }
export default Home;
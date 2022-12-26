import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>Office Location</span>
                    </span>

                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon}/>
                        <a href="tel:123456789">123456789</a>
                    </span>
                    
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <a href="mailto:support@ishop.com">support@ishop.com</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        Sign In
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright 2022 by Online Tutorials, Inc.</span>
            <span>All Rights Reserved</span>
        </div>
    </div>
  );
};

export default Footer
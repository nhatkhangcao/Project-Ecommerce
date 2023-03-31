import React from 'react';

function FooterComponent(props) {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer--social">
                    <h1 className="footer--social__text">
                        Contact US
                    </h1>
                    <ul className="footer--social__icons">
                        <li className="social-list"><i className="fa fa-facebook"></i></li>
                        <li className="social-list"><i className="fa fa-envelope-o"></i></li>
                        <li className="social-list"><i className="fa fa-instagram"></i></li>
                    </ul>
                </div>
                <small className="footer--cr">©2023 by me </small>
            </div>
        </footer>
    );
}

export default FooterComponent;
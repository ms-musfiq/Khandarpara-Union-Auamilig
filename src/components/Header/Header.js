import React from 'react';
import './Header.css';
import banner from '../Img/Banner-1.png';
import logo from '../Img/2.png';
import fb from '../Img/fb.jpg';

const Header = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col">
                    <img src={banner} alt=""/>
                </div>
                <div className="col">
                    <img src={logo} alt=""/>
                </div>
            </div>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav nav mt-3 custom">
                            <li className="nav-item">
                                <a className="nav-link active ps-4 pe-4 text-light" aria-current="page" href="0">হোম</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ps-4 pe-4 text-light" href="0" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    দল
                                </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="0">গঠনতন্ত্র</a></li>
                                <li><a className="dropdown-item" href="0">খান্দারপাড়া ইউনিয়ন আওয়ামী লীগ কমিটি</a></li>
                                <li><a className="dropdown-item" href="0">ওয়ার্ড কমিটি</a></li>
                                <li><a className="dropdown-item" href="0">খান্দারপাড়া ইউনিয়ন যুবলীগ লীগ কমিটি</a></li>
                                <li><a className="dropdown-item" href="0">খান্দারপাড়া ইউনিয়ন ছাত্রলীগ লীগ কমিটি</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-4 pe-4 text-light" href="0">উন্নয়ন</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-4 pe-4 text-light" href="0">সাম্প্রতিক খবর</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-4 pe-4 text-light" href="0">দলীয় খবর</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-4 pe-4 text-light" href="0">গ্যালারী</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-4 pe-4 text-light" href="0">সদস্য নিবন্ধন</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-4 pe-4 text-light" href="0">যোগাযোগ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-1 text-light" target="blank" href="https://www.facebook.com/khandarparaunionawamilileague"><img className="fbclassName" width="175" height="35" src={fb} alt="ফেসবুক"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            
        </div>
    );
};

export default Header;
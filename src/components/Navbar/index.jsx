import React from 'react';
import './navbar.css';
import { Button } from '../index';
import { Logo } from '../../assets/images';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom p-2 px-3 mx-auto w-90 fixed-top">
            <div className='d-flex align-items-center gap-2'>
                <img src={Logo} alt="appLogo" style={{height: '30px', width: '30px', objectFit: 'contain'}}/>
                <a className="navbar-brand" href="/">Afforai</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Affiliate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Help center</a>
                    </li>
                </ul>
            </div>

            <div className="d-flex align-items-center gap-2">
                <Button style={{color: 'gray', border: '1px solid lightgray'}}>Log in</Button>
                <Button>Try for free</Button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

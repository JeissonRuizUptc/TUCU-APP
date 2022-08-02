import React from 'react';
import logo from '@icons/logoTucu.png';
import regionCOL from '../icons/RegionType.png';
import userIcon from '../icons/user.png';
import './styles/NavHome.scss';

const NavHome = () => {
    return (
        <div>
            <nav className="navbar navbar-fixed-top">
                <div className="navbar-items">
                    <div className="navbar-left">
                        <img src={logo} alt="logo" className="logo-img" />
                        <img src={regionCOL} alt="logo" className="region-img" />
                        <p className='company-name'>Robinfood</p>
                    </div>


                    <div className="navbar-right">
                        <div className='navbar-right-data-user'>
                            <h4>Andrés González</h4>
                            <p>Administrador</p>
                        </div>
                        <div className='navbar-right-img-user'>
                            <img src={userIcon} alt="" />
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavHome;
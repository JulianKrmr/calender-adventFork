import React from 'react';
import './Header.scss';

const Header = () => {
    return(
        <div className="container-header">
            <image src={require("../assets/background.jpg")} alt="Background-Image"/>
        </div>
    );
}

export default Header;
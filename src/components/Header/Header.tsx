import * as React from 'react';
import './Header.css';

interface HeaderProps{
    name: string;
}

const Header:React.FC<HeaderProps> = (props) => {
    return(
        <div className="body">
            <h1 className="header">{props.name}</h1>
        </div>
        
    )
}

export default Header;
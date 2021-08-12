import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';


const MainPage: React.FC = () => {
    return(
        <div>
            <Header name = "MainPage" />
            <Link to="/login">LoginPage</Link>
        </div>
        
    )
}

export default MainPage;
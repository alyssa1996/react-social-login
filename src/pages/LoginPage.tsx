import * as React from 'react';
import GoogleSocialLogin from '../components/GoogleLogin/GoogleLogin';
import Header from '../components/Header/Header';

const LoginPage: React.FC = () => {
    return(
        <div>
            <Header name="LoginPage"/>
            <GoogleSocialLogin/>
        </div>
        
    )
}

export default LoginPage;
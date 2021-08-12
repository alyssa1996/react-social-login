import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import * as dotenv from 'dotenv';

dotenv.config()

const responseGoogle = (response:any) => {
  console.log(response);
}

const GoogleSocialLogin:React.FC = () =>{
    let history = useHistory();
    const ClientID:any = process.env.REACT_APP_GOOGLE_LOGIN

    const getUserinfo = (response:any) =>{
        console.log(response.profileObj)
        history.push('/detail', response.profileObj)
    }

    return(
        <GoogleLogin
            clientId={ClientID}
            render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            )}
            buttonText="Login"
            onSuccess={getUserinfo}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleSocialLogin;
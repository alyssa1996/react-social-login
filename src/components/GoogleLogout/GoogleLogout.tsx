import * as React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';
import * as dotenv from 'dotenv';

dotenv.config()


const GoogleSocialLogout:React.FC = () => {
    let history = useHistory();
    const ClientID:any = process.env.REACT_APP_GOOGLE_LOGIN

    const logout = () => {
        history.push("/")
        return(
            alert("logout successfully")
        )
    }

    return(
        <GoogleLogout
      clientId={ClientID}
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
    )
}

export default GoogleSocialLogout;
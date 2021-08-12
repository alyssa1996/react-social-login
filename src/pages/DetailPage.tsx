import * as React from 'react';
import { useHistory } from 'react-router-dom';
import GoogleSocialLogout from '../components/GoogleLogout/GoogleLogout';
import Header from '../components/Header/Header';


const DetailPage: React.FC = () => {
    let currentState:any = useHistory().location.state;

    console.log(currentState)

    return(
        <div>
            <Header name="DetailPage"/>
            {
                currentState.email?
                <p>{currentState.name}님의 디테일 페이지입니다!</p>
                :
                <p></p>
            }
            <GoogleSocialLogout/>
        </div>
        
    )
}

export default DetailPage;
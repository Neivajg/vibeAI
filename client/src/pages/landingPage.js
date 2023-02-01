import React from 'react'
import { Link } from 'react-router-dom'
import AuthConsumer from '../hooks/useAuth'

import "../styles/styles.css"
import logo from '../assets/LOGO_VIBEAI_2.png'

const LandingPage = () => {
    const [{ isAuth }] = AuthConsumer();
    
    return (
        <>
            <div className='bodyLanding'>
                <img src={logo} alt='vibeAI' id='logoLanding'></img>
                <div className='cardLanding'>

                    <h1 className='title'>The final Music Recommendation System</h1>
                    <br></br>
                    <p className='text'>
                        Ready to find what you were looking for?<br></br>
                        Insert two of your favorite groups or artists that you like the most, we'll take care of the rest.
                    </p>

                    {isAuth ?
                        <Link to="/home">
                            <button className='landingButton'>

                                <span>Start Now</span>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" /></svg>

                            </button>
                        </Link>

                        :
                        <Link to="/login">
                            <button className='landingButton'>

                                <span>Start Now</span>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" /></svg>

                            </button>
                        </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default LandingPage;
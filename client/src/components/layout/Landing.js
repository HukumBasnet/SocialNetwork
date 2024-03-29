import React from 'react'
import { Link } from 'react-router-dom';




const Landing = () => {
    return (
        <div className="Landing">
            <div className = 'dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-larger'> Developer Connector </h1>
                    <p className='lead'>
                        Create a developer profile/portfolio, share posts and get 
                    </p>
                    <div className='buttons'>
                        <Link to='/register' className='btn btn-primary' >
                            Sign up
                        </Link>
                        <Link to='/login' className='btn btn-light'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Landing

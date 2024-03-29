import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name] : e.target.value });

    }

    const onSubmit = async  e=> {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log('Success');
        }
    };




    return (
        <Fragment>
            <h1 className="large text-primary">Sign up</h1>
            <p className="lead">
                <i className='fas fa-user'/> Create Your Account
            </p>
            <form className='form' onSubmit = { e => onSubmit(e) }>
               <div className='form-group'>
                    <input 
                        type='text'
                        placeholder = 'Name'
                        name = 'name'
                        value = { name}
                        onChange = { e => onChange(e) }
                        required   
                   />
                </div> 

               

                <div className='form-group'>
                    <input 
                        type='email'
                        placeholder = 'Email'
                        name = 'email'
                        value = { email}
                        onChange = { e => onChange(e) }
                        required   
                   />
                </div> 

                <div className='form-group'>
                    <input 
                        type='password'
                        placeholder = 'password'
                        name = 'password'
                        value = { password}
                        onChange = { e => onChange(e) }
                        minLength = '6' 
                   />
                </div> 

                <div className='form-group'>
                    <input 
                        type='password'
                        placeholder = 'Confirm password'
                        name = 'password2'
                        value = { password2}
                        onChange = { e => onChange(e) }
                        minLength = '6' 
                   />
                </div> 
                <input type = 'submit' className = 'btn btn-primary' value='Register' />
            </form>
            <p className ='my-1'>
                Already have an account ? <Link to = '/login'> Sign in</Link>
            </p>
        </Fragment>
      
    )
}

export default Register

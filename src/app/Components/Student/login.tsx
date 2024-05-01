import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { TextField, Button } from '@mui/material';
import AllList from './Menu/allList';
import "./Css/login.css"
import LoginMenu from '../login-menu';
import { RootState } from "../redux/store"
import { useDispatch, useSelector } from 'react-redux';
import { counter } from '../redux/slice/state';
const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [show, setShow] = useState(true);
    const toShow = useSelector((state: any) => state?.feature?.toShow)
    console.log("Count:- ", toShow)
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { email, password } = formData;
        if (email == "a" && password == "a") {
            toast.success("Login Success")
            dispatch(counter(false))
            // setShow(false)
        } else {
            toast.error(`${email} not found..!!. Failed Login.`)
            setShow(true)
        }
    };
    return (
        <div>
            {toShow ? <div className='Student-div'> <b>Student Login</b>
                <form action="submit" onSubmit={(e) => handleSubmit(e)}>
                    <div className='login-field'>
                        <TextField name='email' id="standard-basic" label="Student Email" variant="standard" onChange={(e) => handleChange(e)} />
                        <TextField name='password' id="standard-basic" label="password" variant="standard" onChange={(e) => handleChange(e)} />
                        <Button variant="outlined" onClick={(e) => handleSubmit(e)}>SUBMIT</Button>
                    </div>
                </form>
            </div>
                :
                null
                //  <AllList />
            }

        </div >
    )
}

export default Login
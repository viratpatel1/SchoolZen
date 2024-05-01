import { Button, TextField } from '@mui/material'
import React from 'react'
import "./Css/login.css"

const TeacherLogin = () => {
    return (
        <div className='Teacher-div'>
            <b>Teacher Login</b>
            <form className='login-field' action="">
                <TextField id="standard-basic" label="Teacher Email" variant="standard" />
                <TextField id="standard-basic" label="password" variant="standard" />
                <Button variant="outlined">SUBMIT</Button>
                {/* <input type="text" placeholder='Teacher Email' />
                <input type="password" name="" id="" placeholder='password' />
                <button style={{ backgroundColor: "lightgrey", borderRadius: "5px" }} type="button">Submit</button> */}
            </form>
        </div>
    )
}

export default TeacherLogin
import React from 'react'
import "./css/header.css"
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='unversity'>
                    {/* <b>logo</b> */}
                    <Image
                        alt='logo'
                        src="./photos/school-svgrepo-com.svg"
                        width={25}
                        height={25}
                    />
                    <b>Unversity name</b>
                </div>
                <div>
                    <p>Something</p>
                </div>
                <div className='user'>
                    <b>User name</b>
                    <button type='button'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header
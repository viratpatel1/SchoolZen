import React, { useState } from 'react';
import "../Css/dashboard.css"
import Image from 'next/image';

const Dashboard = () => {

    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h1 className='msg'>
                Hi Virat Patel
            </h1>
            <div className='dashboard'>
                <div className='student-detail'>
                    <div className='scores'>
                        <div>
                            <p>Progress</p>
                            <p>--</p>
                        </div>
                        <div>
                            <p>Avg Score</p>
                            <p>100</p>
                        </div>
                        <div>
                            <p>Rank</p>
                            <p>15</p>
                        </div>
                        <div>
                            <p>Percentage</p>
                            <p>80%</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            {/* Graph and other */}
                        </div>
                    </div>
                </div>
                <div className='student-profile'>
                    <div className='profile-div'>
                        <div className='profile-pic'>
                            <div className='pic'>
                                <label htmlFor="fileInput">
                                    <Image
                                        src={image || './photos/student-light.svg'}
                                        alt="Profile Photo"
                                        className="profile-photo-img"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="edit-btn">Edit</div>
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="fileInput"
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                />
                                {/* <input type="file" accept="image/*" name="Profile pic" id="" /> */}
                                {/* <div className='imagePreview'></div> */}
                                {/* Photo */}
                            </div>
                            <b>Virat Patel</b>
                        </div>
                    </div>
                    <div>
                        Other details
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import Attendance from './attendance';

// const buttonLabels: any = {
//     ATTENDANCE: 'ATTENDANCE',
//     TIME_TABLE: 'TIME TABLE',
//     HOLIDAY_LIST: 'HOLIDAY LIST',
//     EVENTS: 'EVENTS',
//     TO_DO_LIST: 'TO DO LIST',
//     SYLLABUS: 'SYLLABUS',
//     ANOUNCEMENT: 'ANOUNCEMENT',
// };

// const AllList = () => {
//     const [type, setType] = useState(<Attendance />);

//     const handleSubmit = (e: any) => {
//         console.log(e);
//         setType(e);
//     };

//     return (
//         <>
//             {type}
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: '10%',
//                     left: '3%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '15px',
//                 }}
//             >
//                 {Object.keys(buttonLabels).map((label: any) => (
//                     <Button
//                         key="ds"
//                         variant="outlined"
//                         onClick={() => handleSubmit(label)}
//                     >
//                         {buttonLabels[label]}
//                     </Button>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default AllList;






import React, { useState } from 'react'
import { Button } from '@mui/material';
import Attendance from './attendance';
import Holiday from './holiday';
// import Header from '../../common/header';
import "./Css/student-menu.css"
import Dashboard from './dashboard';


const AllList = () => {
    const [type, setType] = useState(<Dashboard />)
    const data: any = {
        "ATTENDANCE": <Attendance />,
    }
    const handleSubmit = (e: any) => {
        setType(e)
    }
    return (
        <>
            {/* <Header /> */}
            <div className='student-menu'>
                <div className='menu'>
                    <ul className='menu-list'>
                        <li><Button onClick={() => handleSubmit(<Dashboard />)}>PROFILE</Button></li>
                        <li><Button onClick={() => handleSubmit(<Attendance />)}>ATTENDANCE</Button></li>
                        <li><Button onClick={() => handleSubmit("TIME TABLE")}>TIME TABLE</Button></li>
                        <li><Button onClick={() => handleSubmit(<Holiday />)}>HOLIDAY LIST</Button></li>
                        <li><Button onClick={() => handleSubmit("EVENTS")}>EVENTS</Button></li>
                        <li> <Button onClick={() => handleSubmit("TO DO LIST")}>TO DO LIST</Button></li>
                        <li><Button onClick={() => handleSubmit("SYLLABUS")}>SYLLABUS</Button></li>
                        <li><Button onClick={() => handleSubmit("ANOUNCEMENT")}>ANOUNCEMENT</Button></li>
                    </ul>
                    {/* <Button onClick={() => handleSubmit("STUDENT PROFILE")}>PROFILE</Button>
                    <Button onClick={() => handleSubmit(<Attendance />)}>ATTENDANCE</Button>
                    <Button onClick={() => handleSubmit("TIME TABLE")}>TIME TABLE</Button>
                    <Button onClick={() => handleSubmit(<Holiday />)}>HOLIDAY LIST</Button>
                    <Button onClick={() => handleSubmit("EVENTS")}>EVENTS</Button>
                    <Button onClick={() => handleSubmit("TO DO LIST")}>TO DO LIST</Button>
                    <Button onClick={() => handleSubmit("SYLLABUS")}>SYLLABUS</Button>
                    <Button onClick={() => handleSubmit("ANOUNCEMENT")}>ANOUNCEMENT</Button> */}
                </div>
                <div className='menu-content'>
                    {type}
                </div>
            </div>
        </>
    )
}

export default AllList
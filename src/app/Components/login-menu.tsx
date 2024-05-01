import React, { useState } from 'react';
import Image from 'next/image';
import ParentIndex from './Parent';
import StudentIndex from './Student';
import "./Css/login-menu.css"
import TeacherIndex from './Teacher';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { counter } from './redux/slice/state';
import AllList from './Student/Menu/allList';

const LoginMenu = () => {
    const toShow = useSelector((state: any) => state?.feature?.toShow)
    // const [show, setShow] = useState(true)
    const [student, setStudent] = useState(false)
    const [parent, setParent] = useState(false)
    const [teacher, setTeacher] = useState(false)
    const [soon, setSoon] = useState(false)
    const dispatch = useDispatch()

    const handleLogin = (e: string) => {
        switch (e) {
            case "Student":
                setStudent(true)
                setParent(false)
                setTeacher(false)
                // setShow(false)
                break;
            case "Parent":
                setParent(true)
                setTeacher(false)
                setStudent(false)
                // setShow(false)
                break;
            case "Teacher":
                setTeacher(true)
                setParent(false)
                setStudent(false)
                // setShow(false)
                break;
            case "Coming soon":
                setSoon(true)
                setStudent(false)
                setParent(false)
                setTeacher(false)
                // setShow(false)
                break;
            case "default":
                dispatch(counter(true))
                // setShow(true)
                setStudent(false)
                setParent(false)
                setTeacher(false)
                setSoon(false)
                break;

            default:
                // setShow(true)
                break;
        }
    }

    return (
        <div>
            {toShow ? <>
                <div className='main'>
                    <div className='left-section'>
                        <div className='left-centered'>
                            <div className='left-content'>
                                <div className='top'>
                                    <Image
                                        src='./photos/school-svgrepo-com.svg'
                                        alt='school-svg'
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className='bottom'>
                                    <Image
                                        src='./photos/man-student.svg'
                                        alt='man'
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src='./photos/woman-student.svg'
                                        alt='women'
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src='./photos/student-graduation.svg'
                                        alt='graduation'
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className='welcome'>
                                    <h2>UNIVERSITY NAME</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-section'>
                        <div className='right-centered'>
                            <b>Log in as</b>
                            <div className='upper-right'>
                                {/* <table>
                                    <tr>
                                        <th className='content-student'>Student</th>
                                        <th>Parent</th>
                                        <th>Teacher</th>
                                        <th>Coming Soon</th>
                                    </tr>
                                </table> */}
                                <div tabIndex={0} className='content content-student' onClick={() => handleLogin("Student")}>
                                    Student
                                </div>
                                <div tabIndex={0} className='content' onClick={() => handleLogin("Parent")}>
                                    Parent
                                </div>
                                <div tabIndex={0} className='content' onClick={() => handleLogin("Teacher")}>
                                    Teacher
                                </div>
                                <div tabIndex={0} className='content content-soon' onClick={() => handleLogin("Coming Soon")}>
                                    Coming Soon
                                </div>
                            </div>
                            <div className='lower-right'>
                                <div className='form-div'>
                                    {
                                        student ? <>
                                            <StudentIndex />
                                        </> : null
                                    }
                                    {
                                        parent ? <>
                                            <ParentIndex />
                                        </> : null
                                    }
                                    {
                                        teacher ? <>
                                            <TeacherIndex />
                                        </> : null
                                    }
                                    {
                                        soon ? <>
                                            <h3>Coming Soon</h3>
                                        </> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer theme="colored" />
                </div>

            </> : <AllList />}
            {/* </> : <Header />} */}
        </div>
    )
}

export default LoginMenu



















{/* <div className='right-content'>
                                {show ? <>
                                    <Image
                                        className='content-img-1'
                                        src='/photos/student-light.svg'
                                        alt='student'
                                        width={80}
                                        height={80}
                                    />
                                    <p className="tooltip-1" onClick={() => handleLogin("Student")} >Student</p>
                                    <Image
                                        className='content-img-2'
                                        src='/photos/person-feeding.svg'
                                        alt='person-feeding'
                                        width={80}
                                        height={80}
                                    />
                                    <p className="tooltip-2" onClick={() => handleLogin("Parent")}>Parent</p>
                                    <Image
                                        className='content-img-3'
                                        src='/photos/teacher-female.svg'
                                        alt='teacher'
                                        width={80}
                                        height={80}
                                    />
                                    <p className="tooltip-3" onClick={() => handleLogin("Teacher")}>Teacher</p>
                                    <Image
                                        className='content-img-4'
                                        src='/photos/student-head.svg'
                                        alt='Other'
                                        width={80}
                                        height={80}
                                    />
                                    <p className="tooltip-4" onClick={() => handleLogin("Coming soon")}>Coming soon</p>
                                </> : null}
                                {
                                    student ? <>
                                        <StudentIndex />
                                    </> : null
                                }
                                {
                                    parent ? <>
                                        <ParentIndex />
                                    </> : null
                                }
                                {
                                    teacher ? <>
                                        <TeacherIndex />
                                    </> : null
                                }
                                {
                                    soon ? <>
                                        <h3>Coming Soon</h3>
                                    </> : null
                                }
                            </div> */}
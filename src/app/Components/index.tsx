'use client'
import React, { useState } from 'react'
import ParentIndex from './Parent'
import StudentIndex from './Student'
import TeacherIndex from './Teacher'
import LoginMenu from './login-menu'
import Header from './common/header'
import { useSelector } from 'react-redux'

const Index = () => {
    const toShow = useSelector((state: any) => state?.feature?.toShow)
    const [student, setStudent] = useState(false)
    const [parent, setParent] = useState(false)
    const [teacher, setTeacher] = useState(false)
    const handleStudent = () => {
        setStudent(!student)
        setParent(false)
        setTeacher(false)
    }
    const handleParent = () => {
        setParent(!parent)
        setStudent(false)
        setTeacher(false)
    }
    const handleTeacher = () => {
        setTeacher(!teacher)
        setStudent(false)
        setParent(false)
    }
    return (
        <div>
            {!toShow ? <Header /> : null}
            <LoginMenu />

            {/* <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center", textAlign: "center" }}>
                <button style={{
                    backgroundColor: "blue", color: 'white', borderRadius: "3px", padding: " 10px"
                }} onClick={handleStudent}>Student</button>
                <button style={{
                    backgroundColor: "pink", color: 'black', borderRadius: "3px", padding: " 10px"
                }} onClick={handleParent}>Parent</button>
                <button style={{
                    backgroundColor: "black", color: 'white', borderRadius: "3px", padding: " 10px"
                }} onClick={handleTeacher}>Teacher</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center", textAlign: "center", marginTop: "15%" }}>
                {student ? <StudentIndex /> : parent ? <ParentIndex /> : teacher ? <TeacherIndex /> : null}
            </div> */}
        </div>
    )
}

export default Index
import React from 'react'
import Holidays from 'date-holidays'

const Holiday = () => {
    return (
        <div>
            <ul style={{ display: "flex", flexDirection: "column" }}>
                <li>New year</li>
                <li>Independance day</li>
                <li>Republic day</li>
                <li>Diwali</li>
                <li>Holi</li>
                <li>Chrishmas</li>
                <li>Other</li>
            </ul>
        </div>
    )
}

export default Holiday
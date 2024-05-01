import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Attendance = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default Attendance;
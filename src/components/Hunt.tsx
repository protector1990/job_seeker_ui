import React from 'react';
import JobHunt from '../dto/hunt';

interface HuntProps {
    hunts: JobHunt[];
}

const Hunt : React.FC<HuntProps> = ({hunts}) => {
    return (
        <div>
        {hunts.map((hunt) => (
            <div>name: {hunt.name}, startDate: {hunt.start_date}</div>
        ))}
        </div>
    );
}

export default Hunt;
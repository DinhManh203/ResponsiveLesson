"use client"

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
];

const EvenCalendar = () => {
    const [value, setValue] = useState<Value>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setValue(new Date()); // chỉ chạy khi đã client
    }, []);

    if (!isClient) return null; // tránh render trước khi client ready

    return (
        <div className='bg-white rounded-md p-4'>
            <Calendar onChange={setValue} value={value} />
            <div className='flex flex-col gap-4 mt-4'>
                {events.map(event => (
                    <div className='border p-3 rounded-md shadow-sm' key={event.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>{event.title}</h1>
                            {/* <span>{event.time}</span> */}
                        </div>
                        <p className='text-sm text-gray-600'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EvenCalendar;

"use client"

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary events
const events = [
    {
        id: 1,
        title: "Team Sync Meeting",
        time: "10:00 AM - 11:00 AM",
        description: "Weekly team sync to review progress and blockers.",
    },
    {
        id: 2,
        title: "Client Call",
        time: "1:00 PM - 2:00 PM",
        description: "Project update and Q&A session with the client.",
    },
    {
        id: 3,
        title: "Design Review",
        time: "4:00 PM - 5:00 PM",
        description: "Review new mockups and provide feedback.",
    }
];

const EvenCalendar = () => {
    const [value, setValue] = useState<Value>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setValue(new Date());
    }, []);

    if (!isClient) return null;

    return (
        <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-3xl mx-auto">
            <Calendar 
                onChange={setValue} 
                value={value} 
                className="react-calendar mb-6" 
            />
            
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Events</h2>
                <Image src="/moreDark.png" alt="More" width={20} height={20} className='cursor-pointer' />
            </div>

            <div className="space-y-4">
                {events.map(event => (
                    <div 
                        key={event.id} 
                        className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium text-base text-gray-900">{event.title}</h3>
                            <span className="text-sm text-gray-500">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EvenCalendar;

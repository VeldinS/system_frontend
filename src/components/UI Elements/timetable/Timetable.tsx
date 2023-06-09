import React from "react";

import './timetable.css'

export interface Course {
    name: string | undefined;
    venue?: string | undefined;
    start: number | undefined; // start time in hours (e.g. 9.5 for 9:30am)
    end: number | undefined; // end time in hours (e.g. 12.5 for 12:30pm)
    day: string | undefined; // day of the week (e.g. "Monday")
}

interface TimetableProps {
    courses: Course[];
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const HOURS = [
    { start: 9, end: 11 },
    { start: 11, end: 13 },
    { start: 13, end: 15 },
    { start: 15, end: 17 },
    { start: 17, end: 19 },
];


const Timetable: React.FC<TimetableProps> = ({ courses }) => {
    const slots:any[] = [];

    // create a slot for every hour block
    for (const day of DAYS) {
        for (const hour of HOURS) {
            const start = hour.start
            const end = hour.end

            const course = courses.find(
                (c) => c.day === day && c.start === start && c.end === end
            );

            const slot = {
                day,
                start,
                end,
                course: course ? course.name : "",
                venue: course?.venue || "",
            };

            slots.push(slot);
        }
    }

    return (
        <table className="timetable">
            <thead>
            <tr>
                <th></th>
                {DAYS.map((day) => (
                    <th key={day}>{day}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {HOURS.map((hour) => (
                <tr key={hour.start}>
                    <td className="timetable-hour">
                        {hour.start}:00 - {hour.end}:00
                    </td>
                    {DAYS.map((day) => {
                        const slot = slots.find(
                            (s) => s.day === day && s.start === hour.start
                        );
                        return (
                            <td key={`${day}-${hour.start}`} className="timetable-slot">
                                {slot.course} <br/> <br/>
                                {slot.venue}
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Timetable;

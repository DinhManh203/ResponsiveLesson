import React from 'react';
import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart"
import AttendanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
import EvenCalendar from '@/components/EvenCalendar';

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-4'>
        {/* User Cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle charts */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom charts */}
        <div className='w-full h-[500px]'>
            <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EvenCalendar />
      </div>
    </div>
  )
}

export default AdminPage

'use client'
import { DatePicker } from 'antd';
export default function CalenderPage({year, month, day, weekDay}) {






    return (
        <>
            

            {/* <DatePicker onChange={onChange} needConfirm /> */}
            <div className='relative bg-white w-[320px] h-[480px] flex justify-center items-center flex-col gap-5 text-stone-950'>
                <div className='absolute top-4 left-4'>{year}</div>
                <div className='absolute top-4 right-4'>{month}</div>
                <div className='text-[240px]'>{day}</div>
                <div className='text-[60px]'>{weekDay}</div>
            </div>

           
        </>

    );
}

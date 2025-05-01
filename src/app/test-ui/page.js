'use client'

import CalendarPage from '@/component/other/CalenderPage';

export default function testUi() {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        alert("你選的是: " + dateString);
      };
    
      const days = [
        {year:"2025", month:"五月", day:"01", weekDay:"星期四"},
        {year:"2025", month:"五月", day:"02", weekDay:"星期五"},
        {year:"2025", month:"五月", day:"03", weekDay:"星期六"},
        {year:"2025", month:"五月", day:"04", weekDay:"星期日"},
        {year:"2025", month:"五月", day:"05", weekDay:"星期一"},
        {year:"2025", month:"五月", day:"06", weekDay:"星期二"},
        {year:"2025", month:"五月", day:"07", weekDay:"星期三"},
        {year:"2025", month:"五月", day:"08", weekDay:"星期四"}
      ]
    return (
        
            <div className='w-screen h-screen bg-gray-100 flex justify-center items-center flex-col gap-5 overflow-auto'>
                
            
            <CalendarPage year="2025" month="MAY" day="01" weekDay="THU"></CalendarPage>
            <CalendarPage year="2025" month="MAY" day="02" weekDay="THU"></CalendarPage>
            <CalendarPage year="2025" month="MAY" day="03" weekDay="THU"></CalendarPage>
            <CalendarPage year="2025" month="MAY" day="04" weekDay="THU"></CalendarPage>
            <CalendarPage year="2025" month="MAY" day="05" weekDay="THU"></CalendarPage>
            <CalendarPage year="2025" month="MAY" day="06" weekDay="THU"></CalendarPage>
            <CalendarPage year="2025" month="MAY" day="07" weekDay="THU"></CalendarPage>
            {
                days.map((day, index) =>(
                    <CalendarPage key={"cal" + index} year={day.year} month={day.month} day={day.day} weekDay={day.weekDay}></CalendarPage>
                ))
            }
        </div>
        
    );
}

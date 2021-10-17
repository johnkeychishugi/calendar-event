import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from './events'
import { useState } from 'react';

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const views = ['month', 'week', 'agenda'];
  const maxTime = new Date();
  const [color,setColor] = useState('#3174ad');

  maxTime.setHours(0,0,0);

  const handleChangeColor = () =>{
      if(color === 'red'){
        setColor('#3174ad');
      }else{
        setColor('red');
      }
  }
  
  return (
    <div>
      <div className="title">Calender Event</div>
      <div className="btn-color">
        <button onClick={handleChangeColor}>Change Color of event</button>
      </div>
      <Calendar
        views={views}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={event => alert(event.title)}
        max= {maxTime}
        eventPropGetter={() => {
            let newStyle = {  
              backgroundColor: `${color}`, 
            }
            return {
              style: newStyle
            };
          }
        }
      />
    </div>
  )
}

export default MyCalendar;
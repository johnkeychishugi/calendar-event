import { Calendar, momentLocalizer } from 'react-big-calendar';
import swal from 'sweetalert';
import moment from 'moment';
import myEventsList from './events'
import { useState } from 'react';

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const views = ['month', 'week', 'agenda'];
  const maxTime = new Date();
  maxTime.setHours(0,0,0);
  const [color,setColor] = useState('#3174ad');

  const handleChangeColor = () =>{
      if(color === 'red'){
        setColor('#3174ad');
      }else{
        setColor('red');
      }
  }

  const handleShow = (id) =>{
      swal({
        text: `${id}`,
        title: "This is the externel ID of this Event",
        icon: "info",
      });
  }
  
  return (
    <div className="my-calendar">
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
        onSelectEvent={event => handleShow(event.external_ID)}
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
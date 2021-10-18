import { Calendar, momentLocalizer } from 'react-big-calendar';
import swal from 'sweetalert';
import moment from 'moment';
import events from './events'
import { useState } from 'react';

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const views = ['month', 'week', 'agenda'];
  const [myEvents,setMyEvents] = useState(events);
  const maxTime = new Date();
  maxTime.setHours(0,0,0);
  const [color,setColor] = useState('#3174ad');
  const [externelId,setExternelId] = useState(''); 

  //Function handling changing color
  const handleChangeColor = () =>{
      if(color === '#f1356d'){
        setColor('#3174ad');
      }else{
        setColor('#f1356d');
      }
  }

  //Function handling to show the external ID in pop up
  const handleShow = (id) =>{
      swal({
        title: "This is the externel ID of this Event",
        text: `${id}`,
        icon: "info",
      });
  }

  //Function for tracking changing in the input filter
  const handlChangeInput = (filterData) => {
      setExternelId(filterData);
      if(!filterData){
        setMyEvents(events);
      }
  }

  //Fubction handling filting process
  const handleFilter = () =>{
     if(externelId){
      const re = /^[0-9\b]+$/;
      if(re.test(externelId)){
          const filter = myEvents.filter((event)=>{
            return event.external_ID === parseInt(externelId);

          });

          setMyEvents(filter);
      }else{
        swal({
          title: "Data type",
          text: 'Input filter must a number',
          icon: "warning",
        });
      }
     }else{
      swal({
        title: "Input filter is Required",
        text: 'Input filter must contain something',
        icon: "warning",
      });
     }
  }
  
  return (
    <div className="my-calendar">
      <div className="title">Calendar Event</div>
      <div className="btn-color">
        <button onClick={handleChangeColor}>Change Color of event</button>
      </div>
      <div className="filter">
        <input type="text" 
                required
                value ={externelId} 
                onChange={ (e) => handlChangeInput(e.target.value) } />
        <button onClick={handleFilter}>Filter Events</button>
      </div>
      <Calendar
        views={views}
        localizer={localizer}
        events={myEvents}
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
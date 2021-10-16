import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from './events'

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const views = ['month', 'week', 'agenda'];
  
  return (
    <div>
      <div className="title">Calender Event</div>
      <Calendar
        views={views}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={event => alert(event.title)}

      />
    </div>
  )
}

export default MyCalendar;
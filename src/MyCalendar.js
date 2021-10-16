import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from './events'

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const allViews = Object.keys(Views).map(k => Views[k]);

  //Filter only month, week and Agenda view
  const filterViews = allViews.filter((view)=>{
      return view === 'month' ||   view === 'week' || view === 'agenda';
  });

  return (
    <div>
      <div className="title">Calender Event</div>
      <Calendar
        views={filterViews}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MyCalendar;
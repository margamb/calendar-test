import React, { useState, useEffect } from 'react';
import supabase from '../supabase';
import './Events.css';
import trash from './img/icon-trash.svg';
import { groupByDate, sortObject } from '../utils';
import HeaderDate from './HeaderDate.js';

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log('Mounting events');
    async function fetchData() {
      let { data } = await supabase.from('Events').select('*');
      const grouped = groupByDate(data);
      const sorted = sortObject(grouped);
      setEvents(sorted);
    }
    fetchData();
  }, []);

  function renderEvents() {
    const dates = Object.keys(events);
    return dates.map((date) => {
      return (
        <div>
          <HeaderDate date={date} />
          {/* <h1>{date}</h1> */}
          {events[date].map((ev) => (
            <div className="event" key={ev.id}>
              <div className="event_box1">
                <img className="event_img" src={ev.image} alt={ev.name} />
                <h1 className="event_title">{ev.name}</h1>
              </div>
              <div className="event_box2">
                <p className="event_date">{ev.date}</p>
                <div className="more_delete_btns">
                  <p className="moreInfo">info</p>
                  <img className="trash" src={trash} />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    });
  }

  return <div className="events">{renderEvents()}</div>;
  // return (
  //   <div className="events">
  //     {events.map((ev) => (
  //       <div className="event" key={ev.id}>
  //         <div className="event_box1">
  //           <img className="event_img" src={ev.image} alt={ev.name} />
  //           <h1 className="event_title">{ev.name}</h1>
  //         </div>
  //         <div className="event_box2">
  //           <p className="event_date">{ev.date}</p>
  //           <div className="more_delete_btns">
  //             <p className="moreInfo">info</p>
  //             <img className="trash" src={trash} />
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Events;

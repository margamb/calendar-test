import React, { useState, useEffect } from 'react';
import supabase from '../supabase';
import './Events.css';
import trash from './img/icon-trash.svg';
import { getTodayDate, groupByDate, sortObject } from '../utils';
import HeaderDate from './HeaderDate.js';

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log('Mounting events');

    const date = getTodayDate();

    async function fetchData() {
      let { data } = await supabase
        .from('Events')
        .select('*')
        // filtrar eventos a partir de hoy
        .gte('date', date);
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
        <div className="boxevents-1">
          <HeaderDate date={date} />
          {events[date].map((ev) => {
            const time = ev.hour ? ev.hour.slice(0, -3) + 'h' : null;
            return (
              <div className="event" key={ev.id}>
                <div className="event_box1">
                  <img className="event_img" src={ev.image} alt={ev.name} />
                  <h1 className="event_title">{ev.name}</h1>
                </div>
                <div className="event_box2">
                  <p className="event_date">{time}</p>
                  <div className="more_delete_btns">
                    <p className="moreInfo">info</p>
                    <img className="trash" src={trash} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  }

  return (
    <div className="eventsTime">
      <div className="boxevents-2">
        <div className="img-globe-box2"></div>
      </div>
      <div className="events">{renderEvents()}</div>
    </div>
  );
};

export default Events;

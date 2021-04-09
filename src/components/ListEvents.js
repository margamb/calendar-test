import React, { useState, useEffect } from 'react';
import supabase from '../supabase';
import './ListEvents.css';

import { getTodayDate, groupByDate, sortObject } from '../utils';
import Events from './Events.js';

const ListEvents = () => {
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
        <div className="event_list_1">
          <Events events={events} date={date} />
        </div>
      );
    });
  }

  return (
    <div className="eventsTime">
      <div className="event_list_2">
        <div className="img-globe-box2"></div>
      </div>
      <div className="events">{renderEvents()}</div>
    </div>
  );
};

export default ListEvents;

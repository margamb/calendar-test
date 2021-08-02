import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import './EventsList.css';
import { Loading } from '../';

import { getTodayDate, groupByDate, sortObject } from '../../utils/tools';
import {EmptyEvents, EventsListItem} from '../';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const today = getTodayDate();

    async function fetchData() {
      let data = await api.getEventsFromDate(today);
      const grouped = groupByDate(data);
      const sorted = sortObject(grouped);
      setEvents(sorted);

      if (data.length <= 0) {
        setStatus('empty');
      } else {
        setStatus('loaded');
      }
    }
    fetchData();
  }, []);

  function renderEvents() {
    const dates = Object.keys(events);
    return dates.map((date) => {
      return (
        <div key={date} className="event_list_1">
          <EventsListItem events={events} date={date} />
        </div>
      );
    });
  }

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'empty') {
    return <EmptyEvents />;
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

export default EventsList;

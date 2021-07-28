import React from 'react';
import './EventsListItem.css';
import { Link, useHistory } from 'react-router-dom';

import useUser from '../../hooks/useUser'
import api from '../../utils/api';

import HeaderDate from './HeaderDate.js';
import {PencilIcon, TrashIcon} from '../Icons';

const EventsListItem = ({ events, date}) => {
  let history = useHistory();
  const [user] = useUser()

  async function deleteEvents(id) {
    await api.deleteEvent(id);

    history.go(0);
  }

  return (
    <div>
      <HeaderDate date={date} />
      {events[date].map((ev) => {
        const time = ev.hour ? ev.hour.slice(0, -3) + 'h' : null;
        return (
          <div className="event" key={ev.id}>
            <div className="event_box_1">
              <img className="event_img" src={ev.image} alt={ev.name} />
              <h1 className="event_title">{ev.name}</h1>
            </div>
            <div className="event_box_2">
              <p className="event_date">{time}</p>
              <div className="more_delete_btns">
                {user.id === ev.user && (
                  <div>
                    <Link to={{ pathname: '/createEvents', state: { ev } }}>
                      <PencilIcon className="icon_edit" />
                    </Link>
                    <span onClick={() => deleteEvents(ev.id)}>
                      <TrashIcon className="icon_delete" />
                    </span>
                  </div>
                )}
              </div>
              <Link className="more_info" to={`/events/${ev.id}`}>
                Info
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsListItem;

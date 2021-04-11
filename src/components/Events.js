import React from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import trash from './img/icon-trash.svg';

import HeaderDate from './HeaderDate.js';

const Events = ({ events, date, userId }) => {
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
                <Link className="more_info" to={`/events/${ev.id}`}>
                  Info
                </Link>
                {userId === ev.user && (
                  <div>
                    <img className="icon_trash" src={trash} />
                    <p>editar</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;

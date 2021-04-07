import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InfoDetailEvent.css';
import IconCalendar from '../components/img/IconCalendar.js';
import IconClock from '../components/img/IconClock.js';
import IconLocation from '../components/img/IconLocation.js';
import IconLink from '../components/img/IconLink.js';
import IconZoomIn from '../components/img/IconZoomIn.js';
import IconTarget from '../components/img/IconTarget.js';

import supabase from '../supabase';

const InfoDetailEvent = () => {
  const [event, setEvent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      let { data } = await supabase.from('Events').select('*').eq('id', id);
      setEvent(...data);
    }
    fetchData();
  }, []);

  console.log('🐷', event);
  const age = event.age ? event.age : 'este evento no tiene edad recomenda';
  const city = event.city ? event.city : 'no se sabe la ciudad';
  const address = event.address ? event.address : 'no se sabe la direccion';
  const information = event.information
    ? event.information
    : 'No se ha añadido ninguna informacion extra';
  const link = event.link ? event.link : 'no hay link del evento';
  const date = event.date ? event.date : 'no hay fecha del evento';
  const hour = event.hour ? event.hour : '- -';
  return (
    <>
      <div className="information-detail">
        <img className="image" src={event.image} />
        <div className="information-detail-text">
          <div className="info-detail-date">
            <h1 className="information-detail-title">{event.name}</h1>
            <div className="information-detail-items-date">
              <IconCalendar className="calendar" />
              <p className="icon-text">{date}</p>
            </div>
            <div className="information-detail-items-date">
              <IconClock className="clock" />
              <p className="icon-text">{hour} horas</p>
            </div>
          </div>

          <div className="information-detail-items">
            <IconLocation className="location" />
            <p>{city}</p>
          </div>
          <div className="information-detail-items">
            <IconLocation className="location" />
            <p>{address}</p>
          </div>

          <div className="information-detail-items">
            <IconTarget className="location" />
            <p>{age} años</p>
          </div>

          <div className="information-detail-items">
            <IconZoomIn className="location" />
            <p>{information}</p>
          </div>

          <div className="information-detail-items">
            <IconLink className="location" />
            <p>{link}</p>
          </div>
          <div className="cat-info"></div>
        </div>
      </div>

      {/* <pre>
        <code>{JSON.stringify(event)}</code>
      </pre> */}
    </>
  );
};

export default InfoDetailEvent;

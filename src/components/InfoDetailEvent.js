import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './InfoDetailEvent.css';
import IconCalendar from '../components/img/IconCalendar.js';
import IconClock from '../components/img/IconClock.js';
import IconLocation from '../components/img/IconLocation.js';
import IconLink from '../components/img/IconLink.js';
import IconZoomIn from '../components/img/IconZoomIn.js';
import IconTarget from '../components/img/IconTarget.js';
import IconReset from '../components/img/IconReset.js';
import { formatDate } from '../utils';

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

  const age = event.age ? event.age : '- -';
  const city = event.city ? event.city : '- -';
  const address = event.address ? event.address : '- - ';
  const information = event.information ? event.information : '- -';
  const link = event.link ? event.link : '- -';

  const hour = event.hour ? event.hour.slice(0, -3) : '- -';
  const date1 = formatDate(event.date);
  const date = date1 ? date1 : '- -';

  return (
    <div className="detail-box">
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
        className="reset-Info-detail"
      >
        <IconReset />
      </Link>

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
      <div className="footer"></div>
    </div>
  );
};

export default InfoDetailEvent;

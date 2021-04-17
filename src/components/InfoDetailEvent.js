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
import { formatDate } from '../utils/tools';

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
    <div className="info_detail_container">
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
        className="info_detail_reset"
      >
        <IconReset />
      </Link>

      <div className="info_detail">
        <img
          className="info_detail_image"
          src={event.image}
          alt="Poster del evento"
          title="Poster del evento"
        />
        <div className="info_detail_text">
          <div className="info_detail_date">
            <h1 className="info_detail_title">{event.name}</h1>
            <div className="info_detail_items_date">
              <IconCalendar className="icon_calendar" />
              <p className="icon-text">{date}</p>
            </div>
            <div className="info_detail_items_date">
              <IconClock className="icon_clock" />
              <p className="icon-text">{hour} horas</p>
            </div>
          </div>

          <div className="info_detail_items">
            <IconLocation className="icon_items" />
            <p className="icon_info">{city}</p>
          </div>
          <div className="info_detail_items">
            <IconLocation className="icon_items" />
            <p className="icon_info">{address}</p>
          </div>

          <div className="info_detail_items">
            <IconTarget className="icon_items" />
            <p className="icon_info">{age} años</p>
          </div>

          <div className="info_detail_items">
            <IconZoomIn className="icon_items" />
            <p className="icon_info">{information}</p>
          </div>

          <div className="info_detail_items">
            <IconLink className="icon_items" />
            <p className="icon_info">{link}</p>
          </div>
          <div className="info_cat_img"></div>
        </div>
      </div>
      <div className="info_detail_footer"></div>
    </div>
  );
};

export default InfoDetailEvent;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventDetails.css';

import {
  CalendarIcon,
  ClockIcon,
  CrossIcon,
  LinkIcon,
  LocationIcon,
  LoupeIcon,
  TargetIcon
} from '../Icons';

import { formatDate } from '../../utils/tools';

import api from '../../utils/api';

const EventDetails = () => {
  const [event, setEvent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      let data = await api.getEventDetails(id);
      setEvent(...data);
    }
    fetchData();
  }, [id]);

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
        <CrossIcon />
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
              <CalendarIcon className="icon_calendar" />
              <p className="icon-text">{date}</p>
            </div>
            <div className="info_detail_items_date">
              <ClockIcon className="icon_clock" />
              <p className="icon-text">{hour} horas</p>
            </div>
          </div>

          <div className="info_detail_items">
            <LocationIcon className="icon_items" />
            <p className="icon_info">{city}</p>
          </div>
          <div className="info_detail_items">
            <LocationIcon className="icon_items" />
            <p className="icon_info">{address}</p>
          </div>

          <div className="info_detail_items">
            <TargetIcon className="icon_items" />
            <p className="icon_info">{age} años</p>
          </div>

          <div className="info_detail_items">
            <LoupeIcon className="icon_items" />
            <p className="icon_info">{information}</p>
          </div>

          <div className="info_detail_items">
            <LinkIcon className="icon_items" />
            <p className="icon_info">{link}</p>
          </div>
          <div className="info_cat_img"></div>
        </div>
      </div>
      <div className="info_detail_footer"></div>
    </div>
  );
};

export default EventDetails;

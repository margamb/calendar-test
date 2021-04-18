import React, { useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import './CreateEvents.css';
import api from '../utils/api';
import defaultImage from './img/events-img.svg';
import IconReset from '../components/img/IconReset.js';
import useUser from '../hooks/useUser';

const CreateEvents = () => {
  const [user] = useUser();
  let location = useLocation();

  const [eventImg, setEventImg] = useState(
    location?.state?.ev?.image || defaultImage
  );
  const [eventDate, setEventDate] = useState(
    location?.state?.ev?.date || new Date()
  );
  const [eventLink, setEventLink] = useState(location?.state?.ev?.link || '');
  const [eventName, setEventName] = useState(location?.state?.ev?.name || '');
  const [eventAge, setEventAge] = useState(location?.state?.ev?.age || '');
  const [eventCity, setEventCity] = useState(location?.state?.ev?.city || '');
  const [eventAddress, setEventAddress] = useState(
    location?.state?.ev?.address || ''
  );
  const [eventInformation, setEventInformation] = useState(
    location?.state?.ev?.information || ''
  );

  const [eventHour, setEventHour] = useState(
    (location?.state?.ev?.hour && location?.state?.ev?.hour.slice(0, -3)) || ''
  );

  let history = useHistory();

  function handleEventImg(ev) {
    setEventImg(ev.target.value);
  }

  function handleEventDate(ev) {
    setEventDate(ev.target.value);
  }

  function handleEventLink(ev) {
    setEventLink(ev.target.value);
  }

  function handleEventName(ev) {
    setEventName(ev.target.value);
  }

  function handleEventAge(ev) {
    setEventAge(ev.target.value);
  }

  function handleEventCity(ev) {
    setEventCity(ev.target.value);
  }

  function handleEventAddress(ev) {
    setEventAddress(ev.target.value);
  }

  function handleEventInformation(ev) {
    setEventInformation(ev.target.value);
  }

  function handleEventHour(ev) {
    setEventHour(ev.target.value);
  }

  async function handleFormEvent(ev) {
    ev.preventDefault();
    const eventData = {
      name: eventName,
      image: eventImg,
      date: eventDate,
      link: eventLink,
      age: eventAge,
      city: eventCity,
      address: eventAddress,
      information: eventInformation,
      hour: eventHour,
      user: user.id,
    };

    if (!location.state?.ev?.id) {
      const data = await api.createEvent(eventData);
      history.push('/events/' + data[0].id);
    } else {
      await api.updateEvent(location.state.ev.id, eventData);
      history.push('/events/' + location.state.ev.id);
    }
  }

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset className="reset-Info-createEvent" />
      </Link>
      <div className="create-event-box">
        <div className="box-create-event-img">
          <div className="create-event-img"></div>
        </div>
        <div className="form_event">
          <h2 className="create_event_title">Crear Evento</h2>
          <form className="event_form" onSubmit={handleFormEvent}>
            <label className="event_form_label" htmlFor="text">
              Imagen del evento
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              placeholder="url de la imagen"
              value={eventImg}
              onChange={handleEventImg}
            />
            <label htmlFor="start" className="event_form_label">
              Fecha
            </label>
            <input
              className="event_form_input"
              type="date"
              id="start"
              name="trip-start"
              placeholder={Date.now()}
              value={eventDate}
              min={Date.now()}
              max="2021-12-31"
              onChange={handleEventDate}
            ></input>
            <label htmlFor="start" className="event_form_label">
              Hora
            </label>
            <input
              className="event_form_input"
              type="text"
              id="name"
              placeholder="17:00"
              onChange={handleEventHour}
              value={eventHour}
            ></input>
            <label className="event_form_label" htmlFor="text">
              Link del evento
            </label>
            <input
              type="text"
              id="name"
              value={eventLink}
              className="event_form_input"
              placeholder="https://margamartinez.com/"
              onChange={handleEventLink}
            />
            <label htmlFor="name" className="event_form_label">
              Nombre del Evento
            </label>
            <input
              value={eventName}
              type="text"
              id="name"
              className="event_form_input"
              onChange={handleEventName}
            />
            <label htmlFor="name" className="event_form_label">
              Edad recomendada
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              onChange={handleEventAge}
              value={eventAge}
            />
            <label htmlFor="name" className="event_form_label">
              Población
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              onChange={handleEventCity}
              value={eventCity}
            />
            <label htmlFor="name" className="event_form_label">
              Dirección
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              placeholder="Calle Martin n4"
              onChange={handleEventAddress}
              value={eventAddress}
            />
            <label htmlFor="textarea" className="event_form_label">
              Información adicional:
            </label>
            <textarea
              className="event_form_input"
              id="textarea"
              name="textarea"
              onChange={handleEventInformation}
              value={eventInformation}
            ></textarea>
            <input
              type="submit"
              value={location?.state?.ev?.id ? 'Editar evento' : 'Crear evento'}
              className="event_btn"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvents;

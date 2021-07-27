import React, { useState } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import './CreateEvents.css';
import api from '../utils/api';
import defaultImage from './img/events-img.svg';
import IconReset from '../components/img/IconReset.js';
import useUser from '../hooks/useUser'

const CreateEvents = () => {
  const [user] = useUser()
  const location = useLocation();
  const history = useHistory();

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

  const [eventTime, setEventTime] = useState(
    (location?.state?.ev?.hour && location?.state?.ev?.hour.slice(0, -3)) || ''
  );


  const formHandlers = {
    eventAddress: setEventAddress,
    eventAge: setEventAge,
    eventCity: setEventCity,
    eventDate: setEventDate,
    eventTime: setEventTime,
    eventImage: setEventImg,
    eventInformation: setEventInformation,
    eventLink: setEventLink,
    eventName: setEventName,
    default: () => {console.warn('No event handler')}
  }

  function handleInputChange(ev) {
    const fn = formHandlers[ev.target.id] || formHandlers.default
    fn(ev.target.value)
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
      hour: eventTime,
      user: user.id,
    };

    if (!location.state?.ev?.id) {
      await api.createEvent(eventData);
      history.push('/');
    } else {
      await api.updateEvent(location.state.ev.id, eventData);
      history.push('/');
    }
  }

  const isSubmitDisabled = !eventName || !eventTime || !eventDate;

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
            <label className="event_form_label" htmlFor="eventImage">
              Imagen del evento
            </label>
            <input
              type="text"
              id="eventImage"
              className="event_form_input"
              placeholder="url de la imagen"
              value={eventImg}
              onChange={handleInputChange}
            />
            <label htmlFor="eventDate" className="event_form_label">
              Fecha
            </label>
            <input
              className="event_form_input"
              type="date"
              id="eventDate"
              name="trip-start"
              placeholder={Date.now()}
              value={eventDate}
              min={Date.now()}
              max="2021-12-31"
              onChange={handleInputChange}
            ></input>
            <label htmlFor="eventTime" className="event_form_label">
              Hora
            </label>
            <input
              className="event_form_input"
              type="text"
              id="eventTime"
              placeholder="Ej: 17:00"
              onChange={handleInputChange}
              value={eventTime}
              required
            ></input>
            <label className="event_form_label" htmlFor="eventLink">
              Link del evento
            </label>
            <input
              type="text"
              id="eventLink"
              value={eventLink}
              className="event_form_input"
              placeholder="https://margamartinez.com/"
              onChange={handleInputChange}
            />
            <label htmlFor="eventName" className="event_form_label">
              Nombre del Evento
            </label>
            <input
              value={eventName}
              type="text"
              id="eventName"
              className="event_form_input"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="eventAge" className="event_form_label">
              Edad recomendada
            </label>
            <input
              type="text"
              id="eventAge"
              className="event_form_input"
              onChange={handleInputChange}
              value={eventAge}
            />
            <label htmlFor="eventCity" className="event_form_label">
              Población
            </label>
            <input
              type="text"
              id="eventCity"
              className="event_form_input"
              onChange={handleInputChange}
              value={eventCity}
            />
            <label htmlFor="eventAddress" className="event_form_label">
              Dirección
            </label>
            <input
              type="text"
              id="eventAddress"
              className="event_form_input"
              placeholder="Calle Martin n4"
              onChange={handleInputChange}
              value={eventAddress}
            />
            <label htmlFor="eventInformation" className="event_form_label">
              Información adicional:
            </label>
            <textarea
              className="event_form_input"
              id="eventInformation"
              name="textarea"
              onChange={handleInputChange}
              value={eventInformation}
            ></textarea>
            <input
              type="submit"
              value={location?.state?.ev?.id ? 'Editar evento' : 'Crear evento'}
              className="event_btn"
              disabled={isSubmitDisabled}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvents;

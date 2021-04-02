import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CreateEvents.css';
import supabase from '../supabase';

const CreateEvents = () => {
  const defaultImage =
    'https://64.media.tumblr.com/f56e03ccd8d5cc27a3c0632f795a7605/tumblr_ofr2xfiwjm1qfkrjeo1_1280.png';

  const [eventImg, setEventImg] = useState(defaultImage);
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLink, setEventLink] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventAge, setEventAge] = useState('');
  const [eventCity, setEventCity] = useState('');
  const [eventAddress, setEventAddress] = useState('');
  const [eventInformation, setEventInformation] = useState('');
  const [eventData, setEventData] = useState('');

  let history = useHistory();

  function handleEventImg(ev) {
    setEventImg(ev.target.value);
    console.log('eventImg', eventImg);
  }

  function handleEventDate(ev) {
    setEventDate(ev.target.value);
    console.log('eventDate', eventDate);
  }

  function handleEventLink(ev) {
    setEventLink(ev.target.value);
    console.log('eventLink', eventLink);
  }

  function handleEventName(ev) {
    setEventName(ev.target.value);
    console.log('eventNeame', eventName);
  }

  function handleEventAge(ev) {
    setEventAge(ev.target.value);
    console.log('eventAge', eventAge);
  }

  function handleEventCity(ev) {
    setEventCity(ev.target.value);
    console.log('eventCity', eventCity);
  }

  function handleEventAddress(ev) {
    setEventAddress(ev.target.value);
    console.log('eventAddress', eventAddress);
  }

  function handleEventInformation(ev) {
    setEventInformation(ev.target.value);
    console.log('eventInformation', eventInformation);
  }

  async function handleFormEvent(ev) {
    ev.preventDefault();
    const { data, error } = await supabase.from('Events').insert([
      {
        name: eventName,
        image: eventImg,
        date: eventDate,
        link: eventLink,
        age: eventAge,
        city: eventCity,
        address: eventAddress,
        information: eventInformation,
      },
    ]);
    console.error(error);
    history.push('/');

    // setEventData({
    //   eventImg: eventImg,
    //   eventLink: eventLink
    //   eventName: eventName,
    //   eventAge: eventAge,
    //   eventCity: eventCity,
    //   eventAddress: eventAddress,
    //   eventInformation: eventInformation,
    // });
  }

  return (
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
          placeholder="2021-07-22"
          min={Date.now()}
          max="2021-12-31"
          onChange={handleEventDate}
        ></input>
        <label className="event_form_label" htmlFor="text">
          Link del evento
        </label>
        <input
          type="text"
          id="name"
          className="event_form_input"
          placeholder="https://margamartinez.com/"
          onChange={handleEventLink}
        />
        <label htmlFor="name" className="event_form_label">
          Nombre del Evento
        </label>
        <input
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
        />
        <label htmlFor="name" className="event_form_label">
          Población
        </label>
        <input
          type="text"
          id="name"
          className="event_form_input"
          onChange={handleEventCity}
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
        />
        <label htmlFor="textarea" className="event_form_label">
          Información adicional:
        </label>
        <textarea
          className="event_form_input"
          id="textarea"
          name="textarea"
          onChange={handleEventInformation}
        ></textarea>
        <input type="submit" value="Crear evento" className="event_btn" />
      </form>
    </div>
  );
};

export default CreateEvents;

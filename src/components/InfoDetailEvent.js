import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InfoDetailEvent.css';

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
          <h1 className="information-detail-title">{event.name}</h1>
          <p className="information-detail-items">
            <span className="title-items ">Fecha: </span>
            {date}, {hour} horas
          </p>
          <p className="information-detail-items">
            <span className="title-items">Ciudad: </span>
            {city}
          </p>
          <p className="information-detail-items">
            <span className="title-items">Direccion: </span>
            {address}
          </p>
          <p className="information-detail-items">
            <span className="title-items">Edad recomendada: </span>
            {age} años
          </p>
          <p className="information-detail-items">
            <span className="title-items">Informacion adicional: </span>
            {information}
          </p>
          <p className="information-detail-items">
            <span className="title-items">Link: </span>
            {link}
          </p>
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

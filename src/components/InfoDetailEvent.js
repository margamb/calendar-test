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
  return (
    <>
      <div>
        <h1>{event.name}</h1>
        <img className="image" src={event.image} />
        <p>{age}</p>
        <p>{event.city}</p>
        <p>{event.address}</p>
        <p>{event.information}</p>
        <p>{event.link}</p>
        <p>{event.date}</p>
        <p>{event.hour}</p>
      </div>
      {/* <pre>
        <code>{JSON.stringify(event)}</code>
      </pre> */}
    </>
  );
};

export default InfoDetailEvent;

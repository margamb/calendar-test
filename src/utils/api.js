import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jtzdiqdrkhylonwhhkah.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNzEyMzQ3MywiZXhwIjoxOTMyNjk5NDczfQ.zZexenEmZqOR12kv_HHqk92H9Psh9XuYqJQ_fSRn7-A';
const supabase = createClient(supabaseUrl, supabaseKey);

const api = {};

api.createEvent = async function (eventData) {
  const { data } = await supabase.from('Events').insert([eventData]);
  return data;
};

api.updateEvent = async function (eventId, eventData) {
  const { data } = await supabase
    .from('Events')
    .update(eventData)
    .eq('id', eventId);

  return data;
};

api.deleteEvent = async function (eventId) {
  await supabase.from('Events').delete().eq('id', eventId);
};

api.getEventDetails = async function (eventId) {
  const { data } = await supabase.from('Events').select('*').eq('id', eventId);
  return data;
};

api.getEventsFromDate = async function (date) {
  let { data } = await supabase
    .from('Events')
    .select('*')
    // filtrar eventos a partir de la fecha que le pongamos
    .gte('date', date);
  return data;
};

api.signIn = async function ({ email, password }) {
  const { data } = await supabase.auth.signIn({
    email,
    password,
  });

  return data.user;
};

api.signUp = async function ({ email, password }) {
  const { data } = await supabase.auth.signUp({
    email,
    password,
  });

  return data.user;
};

export default api;

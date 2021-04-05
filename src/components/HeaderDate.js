import React from 'react';
import './HeaderDate.css';
const HeaderDate = ({ date }) => {
  console.log('date', date);
  // let dateTest = new Date(date);
  // console.log(dateTest.getMonth());
  // console.log(dateTest.getDay());

  let months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  let weekdays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  let dateObject = new Date(date);
  let month = months[dateObject.getMonth()];
  let weekday = weekdays[dateObject.getDay()];
  let day = dateObject.getDate();

  // function renderMonth() {
  //   for (let i; i <= dateTest.length; i++) {
  //     if (dateTest === 0) {
  //       return 'Enero';
  //     }
  //     if (dateTest === 1) {
  //       return 'Febrero';
  //     }
  //     if (dateTest === 2) {
  //       return 'Marzo';
  //     }
  //   }
  // }

  return (
    <div className="headerDate">
      {/* <h1>{date}</h1> */}
      <h1 className="headerDate-title">
        {weekday} | <span className="headerDate-day">{day}</span> de {month}
      </h1>
    </div>
  );
};

export default HeaderDate;

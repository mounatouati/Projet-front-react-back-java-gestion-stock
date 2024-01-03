import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, subMonths, addMonths } from 'date-fns';
import classNames from 'classnames';
import './Calendar.css'; // Créez ce fichier CSS pour personnaliser le style du calendrier

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const startDate = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const endDate = endOfWeek(lastDayOfMonth, { weekStartsOn: 1 });
  const totalDays = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)) + 1;

  const days = [];
  let day = startDate;

  // Créez un tableau contenant tous les jours du mois en cours
  for (let i = 0; i < totalDays; i++) {
    days.push(day);
    day = addDays(day, 1);
  }

  // Gestion de la navigation entre les mois précédents et suivants
  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={goToPreviousMonth}>Précédent</button>
        {format(currentDate, 'MMMM yyyy')}
        <button onClick={goToNextMonth}>Suivant</button>
      </div>
      <div className="weekdays">
        <div className="weekday">Lundi</div>
        <div className="weekday">Mardi</div>
        <div className="weekday">Mercredi</div>
        <div className="weekday">Jeudi</div>
        <div className="weekday">Vendredi</div>
        <div className="weekday">Samedi</div>
        <div className="weekday">Dimanche</div>
      </div>
      <div className="days">
        {days.map((date, index) => (
          <div
            key={index}
            className={classNames('day', {
              'day-other-month': !isSameMonth(date, currentDate),
              'day-today': isSameDay(date, new Date()),
              'day-selected': isSameDay(date, currentDate),
            })}
            onClick={() => setCurrentDate(date)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
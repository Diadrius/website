import React, { useState, useEffect } from 'react';

interface CalendarPickerProps {
  selectedDates: Date[];
  onDateChange: (dates: Date[]) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ selectedDates, onDateChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    // getDay returns 0 for Sunday (Europe is Monday), 1 for Monday, etc.
    // We want 0 for Monday, 6 for Sunday for correct alignment in calendar
    return (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    clickedDate.setHours(0, 0, 0, 0); // Normalize to start of day

    const isSelected = selectedDates.some(date => date.getTime() === clickedDate.getTime());

    if (isSelected) {
      onDateChange(selectedDates.filter(date => date.getTime() !== clickedDate.getTime()));
    } else {
      onDateChange([...selectedDates, clickedDate].sort((a, b) => a.getTime() - b.getTime()));
    }
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentMonth);
    const startDay = firstDayOfMonth(currentMonth);
    const days = [];

    // Fill leading empty days
    for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }

    // Fill days of the month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      date.setHours(0, 0, 0, 0); // Normalize to start of day
      const isSelected = selectedDates.some(selected => selected.getTime() === date.getTime());
      const isToday = date.toDateString() === new Date().toDateString(); // Re-added this line
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Normalize to start of day
      const isPast = date.getTime() < now.getTime();

      days.push(
        <div
          key={i}
          className={`text-center py-2 rounded-md transition-colors duration-200 
            ${isPast ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}
            ${isToday ? `border-2 border-ocher` : ''}
            ${isSelected && !isPast ? `bg-ocher text-white` : ''}
            ${!isSelected && !isPast ? `hover:bg-ocher hover:bg-opacity-50 text-dark-green` : ''}
          `}
          onClick={isPast ? undefined : () => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className={`px-3 py-1 rounded-md bg-ocher text-white hover:bg-ocher-dark transition-colors duration-200`}>
          Vorige
        </button>
        <h2 className="text-lg font-semibold text-dark-green">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={nextMonth} className={`px-3 py-1 rounded-md bg-ocher text-white hover:bg-ocher-dark transition-colors duration-200`}>
          Volgende
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-dark-green font-medium">
        {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(day => (
          <div key={day} className="text-center py-2">{day}</div>
        ))}
        {renderDays()}
      </div>
      {selectedDates.length > 0 && (
        <div className="mt-4">
          <h3 className="text-md font-semibold text-dark-green">Geselecteerde datums:</h3>
          <ul className="list-disc list-inside text-text-light text-sm">
            {selectedDates.map((date, index) => (
              <li key={index}>{date.toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarPicker;

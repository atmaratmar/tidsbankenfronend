import React from 'react';
import EventCalendar from './EventCalendar';

function Calendar() {
  return (
    <div>
    <EventCalendar/>
    </div>
  );
}
export default Calendar;

















// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import { DateUtils } from "react-day-picker";

// const Users = {
//  1: ['Mirko', 'Gianni'],
//   8: ['Elena'],
//   9: ['Irene'],
//   12: ['Paolo', 'Giorgia'],
//   18: ['Claudia'],
//   22: ['Maria', 'Luigi'],
//   25: ['Simone'],
//   26: ['Marta'],
// };

// function renderDay(day) {

//   const date = day.getDate();
//   const dateStyle = {
//     position: 'absolute',
//     color: 'lightgray',
//     bottom: 0,
//     right: 0,
//     fontSize: 25,
//   };
//   const birthdayStyle = { fontSize: '0.8em', textAlign: 'left' };
//   const cellStyle = {
//     height: 50,
//     width: 60,
//     position: 'relative',
//   };
//   return (
//     <div style={cellStyle}>
//       <div style={dateStyle}>{date}</div>
//       {Users[date] &&
//         Users[date].map((name, i) => (
//           <div key={i} style={birthdayStyle}>
//             🎁 {name}
//           </div>
//         ))}
//     </div>
//   );
// }

// export default function Example() {
//   return (
//     <DayPicker
//       canChangeMonth={true}
//       className="Birthdays"
//       renderDay={renderDay}
//     />
//   );
// }


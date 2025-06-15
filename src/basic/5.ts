// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const isWeekend = (day) => {};

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
const isWeekend = (day: DayOfWeek): boolean => {
  return day === "Saturday" || day === "Sunday";
};
isWeekend("Monday"); // false
isWeekend("Saturday"); // true

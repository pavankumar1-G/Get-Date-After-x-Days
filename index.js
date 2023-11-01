const addDays = require("date-fns/addDays");

const getdateAfterAdddays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getdateAfterAdddays;

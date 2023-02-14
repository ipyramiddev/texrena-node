/**
* @desc   Function that returns a current date
* @param     -
* @return             current date
*/

const getCurrentDate = () => {
  const currentDate = new Date();

  return currentDate;
}

/**
* @desc     Function that returns a yesterday date
* @param    none
* @return             yesterday date
*/

const getYesterdayDate = () => {
  const currentDate = getCurrentDate();
  const oneDay = 1000*60*60*24;
  const dayBefore = new Date(currentDate-oneDay);

  return dayBefore;
}

/**
* @desc     Function that returns a date in isoString format
* @param    date     any date
* @return            date in isoString format
*/

const formatDateToIsoString = date => {
  const dateToIsoString = new Date(date).toISOString() 
  
  return dateToIsoString;
}

/**
* @desc      Function that returns a date in isoString format
* @param     mins     any date
* @return             date-time from now
*/

const minutesFromNow = (minutes) => {
    const now = getCurrentDate();
    now.setMinutes(now.getMinutes() + minutes);
    return now;
}

module.exports = {
  getCurrentDate,
  getYesterdayDate,
  formatDateToIsoString,
  minutesFromNow,
}
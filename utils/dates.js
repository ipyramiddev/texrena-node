const oneDay = 1000*60*60*24;

/**
* @desc   Function that returns a current date
* @param     -
* @return             current date
*/

exports.getCurrentDate = () => {
  const currentDate = new Date();

  return currentDate;
}

/**
* @desc   Function that returns a yesterday date
* @param     -
* @return             yesterday date
*/

exports.getYesterdayDate = () => {
  const currentDate = this.getCurrentDate()
  const dayBefore = new Date(currentDate-oneDay);

  return dayBefore;
}

/**
* @desc   Function that returns a date in isoString format
* @param     date     any date
* @return             date in isoString format
*/


exports.formatDateToIsoString = date => {
  const dateToIsoString = new Date(date).toISOString() 
  
  return dateToIsoString;
}

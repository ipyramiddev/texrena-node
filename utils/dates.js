const oneDay = 1000*60*60*24;

exports.getCurrentDate = () => {
  const currentDate = new Date();

  return currentDate;
}

exports.getYesterdayDate = () => {
  const yesterday = new Date(Date.now()-oneDay);
  
  return yesterday;
}

exports.formatDateToIsoString = date => {
  const dateToIsoString = new Date(date).toISOString() 
  
  return dateToIsoString;
}

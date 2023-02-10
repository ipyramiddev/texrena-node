exports.getCurrentDate = () => {
  const currentDate = new Date();

  return currentDate;
}

exports.getYesterdayDate = () => {
  const oneDay = 1000*60*60*24;
  const currentDate = new Date(Date.now()-oneDay);
  
  return currentDate;
}

exports.formatDateToIsoString = date => {
  const dateToIsoString = new Date(date).toISOString() 
  
  return dateToIsoString;
}

var getDateDifferenceInDays = function(startDate, endDate) {

  var from = new Date(startDate);
  var to = new Date(endDate);
  var today = new Date();
  
  if(from.getDate() < today.getDate() || to.getDate() < today.getDate())
    return -1;
  
  return Math.floor((to.getTime()-from.getTime())/(24*3600*1000)+1);
};

//the function accepts the start and end date in string.
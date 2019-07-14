function formatTime (a) {

  var days = 1440;
  var hours = 60;
  var dayOut;
  var hoursOut;
  var minutesOut;
     
    while(a >= days){
        dayOut++;
        a = a - days; 
    }
 
    while (a >= hours){
        hoursOut++;
        a = a - hours;
        }
    
    minutesOut = a;

    return `${dayOut}day(s)${hoursOut}hour(s)${minutesOut}minute(s)`;
}

formatTime (27274);


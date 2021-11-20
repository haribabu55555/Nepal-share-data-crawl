const moment =require('moment');
var startTime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(startTime);

setInterval(() => {
    const endTime=moment();
    const diff=moment.duration(endTime.diff(startTime));
    console.log(diff.humanize(true));    
}, 1000);


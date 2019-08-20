const ordinal = require("ordinal");
const {days, months} = require("date-name");

exports.formatDate = function(date, format){
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag =>{
        if(tag == "YYYY") return date.getFullYear();
        if(tag == "M") return date.getMonth();
        if(tag == "MMMM") return months[date.getMonth()];
        if(tag =="D") return date.getDate();
        if(tag == "Do") return ordinal(date.getDate());
        if(tg =="dddd") return days[date.getDay()];
    });
};

let a = 100;


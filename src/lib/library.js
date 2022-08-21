 export const numberWithCommas=(x) =>x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

 export const positiveNumber=(x)=>x<0?0:x;
 
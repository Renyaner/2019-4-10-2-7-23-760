module.exports = function main(inputs) { 
   var pt =inputs.parkTime;
   var dis = inputs.distance;
   var price = Math.round(6+(pt>0?pt*0.25:0)+(dis>2?(dis>8?(dis-2)*0.8+(dis-8)*0.4:(dis-2)*0.8):0));
   return price; 
}
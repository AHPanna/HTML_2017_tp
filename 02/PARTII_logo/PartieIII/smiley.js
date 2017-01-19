
window.onload = function () {
  var canv1 = document.getElementById('mon_canvas');
  var context1 = canv1.getContext('2d');

  context1.strokeStyle = "black";
  context1.fillStyle = "black";
 context1.beginPath();
context1.arc(250, 280, 200, 0, 2 * Math.PI);
context1.stroke();

context1.beginPath();
context1.arc(170, 220, 50, 0, 2 * Math.PI);
context1.stroke();
context1.fillStyle = "black";
context1.fill();

context1.beginPath();
context1.arc(330, 220, 50, 0, 2 * Math.PI);
context1.stroke();
context1.fillStyle = "black";
context1.fill();


var img = document.getElementById("logo");
 context1.drawImage(img, 150, 350,200,100);



context1.beginPath();
context1.moveTo(250, 250);
context1.lineTo(240, 320);
context1.fillStyle = "black";
context1.fill();
context1.moveTo(240, 320);
context1.lineTo(280, 320);
context1.fillStyle = "black";
context1.fill();
context1.moveTo(280, 320);
context1.lineTo(250, 250);
context1.fillStyle = "black";
context1.fill();
context1.stroke();




}

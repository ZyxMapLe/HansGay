window.setTimeout("getip()",1000);
function getip(){
  var xhr=new XMLHttpRequest();
  var url='https://api.ipify.org?format=json';
  xhr.onloadend=function(){
  data=JSON.parse(this.responseText);
  document.getElementById("ipmukaks").textContent=data.ip
};
xhr.open("GET",url,true);
xhr.send();
}

window.setTimeout("totalhit()",1000);
function totalhit(){
  var xhr = new XMLHttpRequest();
  var url = `https://api.countapi.xyz/hit/zenz.herokuapp.com/visits`;
  xhr.onloadend = function(){
 
  data = JSON.parse(this.responseText);
  document.getElementById('hitmu').textContent = data.value;
  };
  xhr.open("GET", url, true);
  xhr.send();
}

window.setTimeout("startTime()",1000);
function startTime(){
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('timenows').innerHTML=h+":"+m+":"+s;
  t=setTimeout('startTime()',500);
}
  function checkTime(i)
{
  if (i<10)
{
  i="0" + i;
}
  return i;
}
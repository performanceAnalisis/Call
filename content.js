 

//creo el boton llamar (aunque no lo uso en esta extension)

var callBtn = document.createElement("button");
  callBtn.innerHTML = "Llamar";
  callBtn.type = "llamar";
  callBtn.name = "formBtn";
  document.body.appendChild(callBtn);



//asigno el alt+c al boton llamar


document.querySelector("body > button").setAttribute("accesskey","c");


//tarea a realizar cuando presiono firmar

callBtn.addEventListener("click", () => {
console.log("Boton Clickeado");



chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  // Callback
  sendResponse({ message: 'Content script has received that message ⚡' });
});




});
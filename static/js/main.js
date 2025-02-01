console.log('main.js loaded');

var labelUsername = document.getElementById('label-username');
var inputUsername = document.getElementById('username');
var btnjoin = document.getElementById('btn-join');
var username;
var webSocket;

function webSocketOnMessage(e) {
    var parsedData = JSON.parse(e.data);
    var message = parsedData['message'];
    console.log('Message:', message);
}
btnjoin.addEventListener('click', function() {
    username = inputUsername.value;
    if (username) {
        console.log('username:', username);
        labelUsername.innerHTML = 'Username: ' + username;
    }
    inputUsername.value = '';
    inputUsername.disabled = true;
    inputUsername.style.display = 'none';
    btnjoin.disabled = true;
    btnjoin.style.display = 'none';
    // var labelUsername = document.getElementById('label-username');
    labelUsername.innerHTML = 'Username: ' + username;



    var loc = window.location;
    var wsStart = 'ws://';
    if (loc.protocol == 'https:') {
        wsStart = 'wss://';
    }
var roomName = "general";  // Replace with dynamic room name if needed
var endpoint = wsStart + loc.host + "/ws/chat/" + roomName + "/";
    console.log('endpoint:', endpoint);

    webSocket = new WebSocket(endpoint);
    webSocket.addEventListener('open', function(e) {
        console.log('Connection opened');
        // webSocket.send(JSON.stringify);
    });
    webSocket.addEventListener('message', webSocketOnMessage);
    webSocket.addEventListener('close', function(e) {
        console.log('Connection closed');
    });
    webSocket.addEventListener('error', function(e) {
        console.log('Error:', e);
    });
});


// console.log('main.js loaded');

// var labelUsername = document.getElementById('label-username');
// var inputUsername = document.getElementById('username');
// var btnjoin = document.getElementById('btn-join');
// var username;
// var webSocket;

// function webSocketOnMessage(e) {
//     var parsedData = JSON.parse(e.data);
//     var message = parsedData['message'];
//     console.log('Message:', message);
// }
// btnjoin.addEventListener('click', function() {
//     username = inputUsername.value;
//     if (username) {
//         console.log('username:', username);
//         labelUsername.innerHTML = 'Username: ' + username;
//     }
//     inputUsername.value = '';
//     inputUsername.disabled = true;
//     inputUsername.style.display = 'none';
//     btnjoin.disabled = true;
//     btnjoin.style.display = 'none';
//     // var labelUsername = document.getElementById('label-username');
//     labelUsername.innerHTML = 'Username: ' + username;



//     var loc = window.location;
//     var wsStart = 'ws://';
//     if (loc.protocol == 'https:') {
//         wsStart = 'wss://';
//     }
// var roomName = "general";  // Replace with dynamic room name if needed
// var endpoint = wsStart + loc.host + "/ws/chat/" + roomName + "/";
//     console.log('endpoint:', endpoint);

//     webSocket = new WebSocket(endpoint);
//     webSocket.addEventListener('open', function(e) {
//         console.log('Connection opened');
//         // webSocket.send(JSON.stringify);
//     });
//     webSocket.addEventListener('message', webSocketOnMessage);
//     webSocket.addEventListener('close', function(e) {
//         console.log('Connection closed');
//     });
//     webSocket.addEventListener('error', function(e) {
//         console.log('Error:', e);
//     });
// });
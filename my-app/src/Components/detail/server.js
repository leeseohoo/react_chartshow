// const app = require('express')()
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)

// io.on('connection', socket => {
//     socket.on('message', msg => {
//         console.log(msg)
//         console.log("receive from client: ", JSON.parse(msg))
//         ws.send("send to client: echo ", JSON.parse(msg)) // python 으로 데이터 보낸다, python에서 data 변수에 들어감
    
//         let data = JSON.parse(msg)
//         let ur = data.user
//         let hr = data.heartrate
//         let rp = data.resp
//         let tp = data.temp
    
//         console.log(ur)
//         console.log(hr)
//         console.log(rp)
//         console.log(tp)
//     })
// })
// server.listen(8080)

// // Require HTTP module (to start server) and Socket.IO
// var http = require('http');
// io = require('socket.io');

// // Start the server at port 8080
// let express = require('express')
// const app = express()
// const server = http.createServer(app)
// // var server = http.createServer(function(req, res){ 
//     // Send HTML headers and message
//     // res.writeHead(200,{ 'Content-Type': 'text/html' }); 
//     // res.end('<h1>Hello Socket Lover!</h1>');
// // });
// server.listen(8080);

// // Create a Socket.IO instance, passing it our server
// var socket = io(server);

// // Add a connect listener
// socket.on('connection', function(client){ 
//     // Success!  Now listen to messages to be received
//     // client.on('message', msg => {
//     //             console.log("receive from client: ", JSON.parse(msg))
//     //             ws.send("send to client: echo ", JSON.parse(msg)) // python 으로 데이터 보낸다, python에서 data 변수에 들어감
            
//     //             let data = JSON.parse(msg)
//     //             let ur = data.user
//     //             let hr = data.heartrate
//     //             let rp = data.resp
//     //             let tp = data.temp
            
//     //             console.log(ur)
//     //             console.log(hr)
//     //             console.log(rp)
//     //             console.log(tp)
                
//     //             // module.exports = {
//     //             //     ur, hr, rp, tp
//     //             // };
            
//     //         });
//     client.on('message', msg => { 
//         console.log('Received message from client!',JSON.parse(msg));
//         let data = JSON.parse(msg)
//         let ur = data.user
//         let hr = data.heartrate
//         let rp = data.resp
//         let tp = data.temp
    
//         console.log(ur)
//         console.log(hr)
//         console.log(rp)
//         console.log(tp)
//     });
//     // client.on('disconnect',function(){
//     //     clearInterval(interval);
//     //     console.log('Server has disconnected');
//     // });

// });

// import SockJS from 'sockjs-client'
// const Stomp = require('stompjs');
// let stompClient;

// const connect = (event) => {
  
//     if(1) {//'ws://localhost:8080/ws'
//       var socket = new SockJS('ws://localhost:8080');
//       stompClient.current = Stomp.over(socket);
//       stompClient.current.connect({}, () => {
//         setTimeout(function() {
//           onConnected()
//         }, 500)
//       })
//     }
  
// }

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port:8080 });

wss.on('connection', ws => {
    ws.on('message', msg => {
        console.log("receive from client: ", JSON.parse(msg))
        ws.send("send to client: echo ", JSON.parse(msg)) // python 으로 데이터 보낸다, python에서 data 변수에 들어감
    
        let data = JSON.parse(msg)
        let ur = data.user
        let hr = data.heartrate
        let rp = data.resp
        let tp = data.temp
    
        console.log(ur)
        console.log(hr)
        console.log(rp)
        console.log(tp)
        
        // module.exports = {
        //     ur, hr, rp, tp
        // };
    
    });
    ws.on('close', ()=> {
        console.log('disconnected');
    });

});

module.exports = {
    wss
};
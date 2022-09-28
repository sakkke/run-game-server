const { io } = require('socket.io-client')

const socket = io('http://localhost:3000')

socket.on('connect', () => {
  console.log(`[client] connect: ${socket.id}`)
})

socket.emit('wave')

socket.on('disconnect', () => {
  console.log(`[client] disconnect: ${socket.id}`)
})

import { serve } from 'https://deno.land/std@0.150.0/http/server.ts'
import { Server } from 'https://deno.land/x/socket_io@0.1.1/mod.ts'

const io = new Server()

io.on('connection', socket => {
  console.log(`[server] connection: ${socket.id}`)

  socket.on('wave', () => {
    console.log(`[server] wave: ${socket.id}`)
  })

  socket.on('disconnect', () => {
    console.log(`[server] disconnect: ${socket.id}`)
  })
})

await serve(io.handler(), {
  port: 3000,
})

const socketIo = require('socket.io');
function initializeSocket(server) {
        const io = socketIo(server,{
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        },
        
        });
        io.on('connection', (socket) => {
                const clinet_id=socket.id;
                const user_id=socket.handshake.query.user_id;
                socket.join(user_id);
                socket.join(clinet_id);
                const rooms = io.sockets.adapter.rooms;
                const user_id_to_check=socket.handshake.query.Xid;
                const isUserConnected = rooms.has(user_id_to_check);
                let message="Offline";
                if (isUserConnected) {
                    message="Online"
                }
                io.to(user_id_to_check).to(user_id).emit('is_online', message);
                socket.on('disconnect', () => {
                    message="Offline"
                    io.to(socket.handshake.query.Xid).emit('is_online', message);
                    socket.leave(socket.id);
                    socket.leave(socket.handshake.query.user_id);
                    
                });
                socket.on('chat message', (message,user_id,sender_id,timeOfMessage,imageBuffer) => {
                io.to(user_id).emit('recive', message,sender_id,timeOfMessage,imageBuffer);
                        
                });
                socket.on('lineConnection',(r_id,text)=>{
                    let msg='typing...'
                    if(text=='off'){
                        msg='online';
                    }
                    io.to(r_id).emit('is_online', msg);
                })
        
              
        });
        return io;
}
module.exports = {initializeSocket};
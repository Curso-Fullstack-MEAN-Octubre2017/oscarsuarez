var SocketIoManager = function (io) {
    this.io = io;

    io.on('connection', function (socket) {
        console.log('Un cliente se ha conectado');
        socket.emit('log:message', 'Una conexion establecida');

        /**
         *
         */
        socket.on("join", (msg) => {
            socket.username = msg;
            socket.emit('log:message', "El usuario " + socket.username + " se ha conectado.");
        });

        /**
         *
         */
        socket.on('send:event', function (event) {
            console.log("Recibiendo send:event", event);
            io.emit('log:message', "Se recibido un evento '" + event.eventName + "' con datos: " + event.eventData);
            io.emit(event.eventName, event.eventData);
        });
    });
};
module.exports = SocketIoManager;
import Hapi from 'hapi';
import Good from 'good';

let server = new Hapi.Server();
server.connection({ port: 8080 });

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        myFileReporter: [
		  {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{ log: '*', response: '*', error: '*'}]
          }, {
              module: 'good-squeeze',
              name: 'SafeJson'
          }, {
              module: 'good-file',
              args: ['./log/hapi.log']
          }
		]
    }
};

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.register({
    register: require('good'),
	options
}, function (err) {
    if (err) throw err;
    
    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

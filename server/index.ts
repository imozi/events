import path from 'path';
import { create, router, defaults, bodyParser } from 'json-server';

const SERVER_PORT = 3001;

const server = create();
const routes = router(path.resolve(__dirname, 'db.json'));

server.use(defaults({}));
server.use(bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((respone) => {
    setTimeout(respone, 800);
  });
  next();
});

server.use(routes);

// запуск сервера
server.listen(SERVER_PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${SERVER_PORT} port`);
});

import path from 'path';
import { create, router, defaults, bodyParser } from 'json-server';
import dotenv from 'dotenv';

dotenv.config();

const isDEV = JSON.parse(process.env.IS_DEV as string);

const SERVER_PORT = isDEV ? process.env.BACKEND_PORT_DEV : process.env.BACKEND_PORT_PROD;

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

server.listen(SERVER_PORT, () => {
  console.log(`🚀 Backend is running on http://localhost:${SERVER_PORT}`);
});

# Тестовое задание "Список мероприятий"

<img src="https://github.com/imozi/events/assets/29326762/d013b282-4dd1-4328-bedc-f3230cf43b2e" width="800">


### [Прототип дизайна в Figma](https://www.figma.com/file/MXOIe4843Fiy2vM5yfxTrL/Testing?type=design&node-id=0%3A1&mode=design&t=1yKYsWcYGZVHYlTm-1)

## Технологии

- Архитектурный подход - [FSD](https://feature-sliced.design/ru/docs/get-started/overview)
 
- Сборщик проекта - [Webpack](https://webpack.js.org/)

- ЯП TypeScript - [TS](https://www.typescriptlang.org/)

- Библиотека - [ReactJS](https://reactjs.org/)

- Стейт-менеджер [Redux](https://redux.js.org/) - набор инструментов [Redux Toolkit](https://redux-toolkit.js.org/) - [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

- В качестве backend - [JSON Server](https://github.com/typicode/json-server)

- Форматирования кода - [Prettier](https://prettier.io/)

- Статический анализ кода JS/TS Eslint - [Eslint](https://www.typescriptlang.org/)

- Статический анализ кода CSS Stylelint - [Stylelint](https://stylelint.io/)

- Используется контеризация -  [Docker](https://www.docker.com/)

- Инструмент тестирования - [Jest](https://jestjs.io/)

- Инструмент Pre-commit - [lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape)


## Развернуть проект локально и запуск в DEV режиме

-  `git clone https://github.com/imozi/events.git`

-  `cd events`

-  `npm i`

-  переименовать **.simple.env** в **.env** и изменить значение переменной `IS_DEV` на `true` указать свои порты при необходимости `FRONTEND_PORT_DEV` и `BACKEND_PORT_DEV`

-  запустить проект `npm run start:dev`


## Развернуть проект локально и запуск в PROD режиме

-  `git clone https://github.com/imozi/events.git`

-  `cd events`

-  `npm i`

-  переименовать **.simple.env** в **.env** и изменить значение переменной `IS_DEV` на `false` указать свои порты при необходимости `FRONTEND_PORT_PROD` и `BACKEND_PORT_PROD`

-  запустить проект `npm run build:prod && npm run start:prod`


## Запуск проекта в PROD режиме в окружение в Docker на сервере

-  `git clone https://github.com/imozi/events.git`

-  `cd events`

-  `npm i`

-  переименовать **.simple.env** в **.env** и изменить значение переменной `IS_DEV` на `false` указать свои порты при необходимости `FRONTEND_PORT_PROD` и `BACKEND_PORT_PROD`

-  запустить командку `docker compose up -d`

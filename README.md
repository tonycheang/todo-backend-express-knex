# Installation

1. Clone this repository using `git clone git@github.com:tonycheang/Fullstack-Boiler.git`
2. Run `yarn install`
3. Run `cd client && yarn install`
4. Add SSL (server.crt, server.key, server.pem) into ./localhost-ssl
5. Add SSL (server.crt, server.pem) into ./client/node_modules/webpack-dev-server/ssl
6. Create a postgres database for the project.
7. Add Postgres credentials into .env to connect to a database.
8. Run `yarn dev`.
9. Navigate to `https://localhost:3000/` and check:
    - Create React App main page loads
    - Submitting into form echoes back from server

## mb-restaurant-manager-server

This project acts as a backend support for the frontend app [`mb-restaurant-manager-ui`](https://github.com/bouskaM/mb-restaurant-manager-ui).

### Install project dependencies

```bash
npm install
```

### Initialize the database
To generate mock data into the database (takes just a few seconds), run:

```bash
node db/init.js
```

### Start the server
To start the server run:
```bash
node app.js
```
### DB + server
Or to generate new data and start the server run:
```bash
npm start
```

## Developer notes
I've added random delays on the API to simulate large data transfer (between 500ms and 3000ms)

# Track My Time

An university project for Project 1 course.

Track My Time is an application that tracks time spend in websites and uses the generated data to improve the user productivity using visualizations and alerts.

## Requirements

- mongodb  
- node
- npm

### Api run instructions

The api is located in [api](api/):

You may meed to have mongodb installed in your machine and running locally.
If everything is okay it should be running on `http://localhost:27017`, if it is running in another port you can change MONGO_URL on .env . So you just need to do the following:

`cd api`

`cp .env.example .env`

`npm install`

`npm start`

### Client run instructions

The client is located in [client](client/):

`cd client`

To run the client is only required to run:

`npm install`

`npm start`

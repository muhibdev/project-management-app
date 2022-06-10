const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const cors = require('cors');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect to DataBase
connectDB();

app.use(cors());

app.listen(port, console.log(`Server running on ${port}`));

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const server = express();
const port = 4000;

// http://localhost:${port}/graphql
server.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

server.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
})

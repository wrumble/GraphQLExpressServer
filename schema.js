const graphql = require('graphql');
const lodash = require('lodash');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
} = graphql

// Fake data
var users = [
    {id: 1, firstName: 'Wayne', lastName: 'Rumble'},
    {id: 2, firstName: 'Ben', lastName: 'Rumble'},
    {id: 3, firstName: 'Scott', lastName: 'Rumble'}
];

// Model
User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
    })
});

// Query
RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: {
            type: User,
            args: { id: { type: GraphQLInt } },
            resolve(_parent, args) {
                // Find the data
                return lodash.find(users, { id: args.id })
            }
        }
    }
});

// Export
module.exports = new GraphQLSchema({
    query: RootQuery
})
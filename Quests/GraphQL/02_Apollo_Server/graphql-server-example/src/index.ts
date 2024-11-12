import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

  type Book {
    id: id
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

`;

const books = [
	{
		id: 1,
		title: "The Awakening",
		author: "Kate Chopin",
	},

	{
		id: 2,
		title: "City of Glass",
		author: "Paul Auster",
	},
];

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    getBookById(bookId: ID): Book
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }

`;

const books = [
	{
		id: "0",
		title: "The Awakening",
		author: "Kate Chopin",
	},

	{
		id: "1",
		title: "City of Glass",
		author: "Paul Auster",
	},
];

const resolvers = {
	Query: {
		books: () => books,
		getBookById: (_, args) => books.find((book) => book.id === args.bookId),
	},
	Mutation: {
		addBook: (_, args) => {
			const lastId = Number.parseInt(books.at(-1).id, 10);
			const newId = (lastId + 1).toString();
			books.push({
				title: args.title,
				author: args.author,

				id: newId,
			});

			return books.at(-1);
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);

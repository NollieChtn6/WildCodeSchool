import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://spacex-production.up.railway.app/",
	cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
);
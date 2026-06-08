import { MantineProvider } from "@mantine/core";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "@mantine/core/styles.css";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "./lib/react-query.ts";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Initialize query client
const queryClient = new QueryClient(queryClientConfig);

// Render the app
// biome-ignore lint/style/noNonNullAssertion: #root is always defined
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<MantineProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</MantineProvider>
		</StrictMode>,
	);
}

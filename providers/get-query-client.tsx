import { defaultShouldDehydrateQuery, isServer, keepPreviousData, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: 1000 * 60 * 15,
            staleTime: 2000,
            retry: 0,
            placeholderData: keepPreviousData,
            initialDataUpdatedAt: Date.now(),
            queryFn: (params): unknown => {
                return queryClient.getQueryData(params.queryKey);
            },
        },
        dehydrate: {
            // include pending queries in dehydration
            shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
        },
    },
});

function makeQueryClient() {
    return queryClient;
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
    if (isServer) {
        // Server: always make a new query client
        return makeQueryClient();
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}

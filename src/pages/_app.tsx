import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import "../styles/prism-atom-dark.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default MyApp;

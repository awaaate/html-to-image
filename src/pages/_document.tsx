import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
          
                    <link
                        href="https://fonts.googleapis.com/css?family=Fira+Mono"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript initialColorMode="dark" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

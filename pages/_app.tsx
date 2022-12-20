import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { resetDaily, resetWeekly, updateLastVisit } from "../Components/resets";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    resetDaily(), resetWeekly(), updateLastVisit();
  }
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

import "../styles/globals.css";
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import Header from "@/components/header/header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Header></Header>
      <Component {...pageProps} />
    </MeshProvider>
  );
}

export default MyApp;
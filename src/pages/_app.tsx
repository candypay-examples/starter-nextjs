import { CandyPayProvider } from "@candypay/react-checkout-sdk";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CandyPayProvider publicApiKey={process.env[`NEXT_PUBLIC_CP_API`]!}>
      <Component {...pageProps} />
    </CandyPayProvider>
  );
}

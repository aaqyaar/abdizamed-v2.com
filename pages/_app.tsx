import React from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Suspense fallback={<div>Loading.....</div>}>
      <Component {...pageProps} />
    </React.Suspense>
  );
}

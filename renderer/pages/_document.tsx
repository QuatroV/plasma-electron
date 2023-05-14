import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="overflow-hidden">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#042940" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">

        <head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="icon" type="image/svg+xml" href="logo_v2.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>nen.ae</title>
          <Head />
        </head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}
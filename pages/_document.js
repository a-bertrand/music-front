// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
          <Head>
            <link href="https://fonts.googleapis.com/css?family=Magra" rel="stylesheet" />
            <meta name="description" content="À l’École de Musiques Actuelles, vous jouez l’instrument dès le premier cours. Vous pourrez y apprendre : la guitare / la basse / la batterie" />
            <meta charSet='utf-8' />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
    )
  }
}

export default MyDocument
import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { globalStyles } from "../styles/global.stitches";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <Head>
          {CssBaseline.flush()}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(e, f, g, h, i){
                        $salespanel = window.$salespanel || (window.$salespanel = []);
                        __sp = i;
                        var a=f.createElement(g);
                        a.type="text/javascript";
                        a.async=1;
                        a.src=("https:" == f.location.protocol ? "https://" : "http://") + h;
                        var b = f.getElementsByTagName(g)[0];
                        b.parentNode.insertBefore(a,b);
                     })(window, document, "script", "salespanel.io/src/js/9d77c2a3-5edd-4c89-9b66-a8fd2df4470f/sp.js", "9d77c2a3-5edd-4c89-9b66-a8fd2df4470f");`,
            }}
          />
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

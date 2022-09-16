import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://estarlincito.tech/static/media/favicon-96x96.2c60b5c1b9aab9f1400b.ico"
      />
    </Helmet>
  );
};

export default Head;

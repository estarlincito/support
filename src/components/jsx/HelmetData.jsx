import { Helmet } from "react-helmet";
const card_img = require.context("../assets/img", true);

// use to get props
// <HelmetData url="" title="" description="" img=""/>

const HelmetData = (props) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Estarlincito" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content={`https://estarlincito.tech${card_img(`./${props.img}`)}`}
        sizes="152x152"
      />
      {/* <link rel="icon" href={card_img("./favicon-96x96.ico")} /> */}
      <title>{props.title}</title>
      {/* %PUBLIC_URL%/favicon-96x96.ico */}
    </Helmet>
  );
};

export default HelmetData;

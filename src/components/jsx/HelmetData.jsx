import { Helmet } from "react-helmet";
const card_img = require.context("../assets/img", true);

// use to get props
// <HelmetData url="" title="" description="" img=""/>

const HelmetData = (props) => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      {/* <title>...</title>
      <meta name="title" content="" />
      <meta name="description" content="ffff" /> */}

      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" /> */}

      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" /> */}

      <title>{props.title}</title>
      {/* <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Estarlincito" /> */}

      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:url" content={props.url} />

      {/* <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} /> */}

      {/* <meta
        property="og:image"
        content={`https://estarlincito.tech${card_img(`./${props.img}`)}`}
        sizes="152x152"
      /> */}
    </Helmet>
  );
};

export default HelmetData;

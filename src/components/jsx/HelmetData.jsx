import { Helmet } from "react-helmet";
const card_img = require.context("../assets/img", true);

  // use to get props
  // <HelmetData url="" title="" description="" img=""/> 

const HelmetData = (props) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={card_img(`./${props.img}`)} />
      <link rel="icon" href="%PUBLIC_URL%/favicon-96x96.ico" />
      <title>{props.title}</title>

    </Helmet>
  );
};

export default HelmetData;

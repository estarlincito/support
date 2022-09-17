import { Helmet } from "react-helmet";
// const card_img = require.context("../assets/img", true);

const HelmetData = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};

export default HelmetData;

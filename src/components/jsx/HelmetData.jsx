import { Helmet } from "react-helmet";

const HelmetData = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};

export default HelmetData;

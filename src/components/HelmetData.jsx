import { HelmetProvider } from "react-helmet-async";

const HelmetData = (props) => {
  return (
    <HelmetProvider>
      <title>{props.title}</title>
    </HelmetProvider>
  );
};

export default HelmetData;

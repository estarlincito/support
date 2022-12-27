import { useState } from "react";

const hash = () => {
  const [hash, setHash] = useState(window.location.href);

  const hashChangeHandler = () => {
    setHash(window.location.href);
  };

  window.addEventListener("hashchange", hashChangeHandler);

  return hash;
};

export default hash;

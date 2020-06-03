import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

Page404.propTypes = {};

function Page404(props) {
  let history = useHistory();

  const handleGoHomeClick = () => {
    history.goBack();
  };

  return (
    <div>
      Oh! no not found page 404
      <button onClick={handleGoHomeClick}>Go home page</button>
    </div>
  );
}

export default Page404;

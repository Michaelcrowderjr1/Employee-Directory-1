import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Click on column headers to sort or use the search box to filter
        your results.
      </p>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main>
      <div className="four0fourpage">
        <div className="four0four"></div>
        <h1>OOPS!!!</h1>
        <p>We can't seem to find the page you're looking for <br/>
        Make sure that you have the correct URL and that the file exists.</p>
        <Link className="gohome" to="/">Go Home</Link>
      </div>
    </main>
  );
};
import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
  return (
    <button className="p-2 m-2">
      <Link to={props.to}>{props.name}</Link>
    </button>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
  return (
    <button className="p-4 hover:shadow-2xl hover:border-r-2 hover:rounded-xl hover:text-accent">
        <Link to={props.to}>{props.name}</Link>
    </button>
  );
}

import React from "react";
import header from "./header";
const Header = () => (
  <ul>
    {header.map(item => (
      <li key={item.id}>
        <a href={item.link}>{item.title}</a>
      </li>
    ))}
  </ul>
);

export default Header;

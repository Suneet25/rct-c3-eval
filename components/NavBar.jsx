import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Link href="/">
          <h1 style={{ color: "cyan" }}>Suneet Panigrahi</h1>
        </Link>
        <Link href="/projects">
          <h1 style={{ color: "cyan" }}>Projects</h1>
        </Link>
      </div>
      <br />
      <br />
      <hr />
      <hr />
    </div>
  );
};

export default NavBar;

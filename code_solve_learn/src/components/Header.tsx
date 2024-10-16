import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="tw-bg-gray-800 tw-text-white tw-py-4">
      <div className="tw-flex tw-justify-between tw-items-center tw-container tw-mx-auto">
        <h2 className="tw-text-lg">Code. Solve. Learn</h2>
        <nav className="tw-flex tw-gap-4 tw-items-center">
          <Link className="tw-text-white" to="/">
            Home
          </Link>
          <Link className="tw-text-white" to="/articles">
            Articles
          </Link>
          <Link className="tw-text-white" to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tw-bg-gray-800 tw-text-white tw-py-4 tw-text-center">
      <p>© {currentYear} CodeSolveLearn.com, All Rights Reserved.</p>
    </footer>
  );
}

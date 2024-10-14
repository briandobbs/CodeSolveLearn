import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} CodeSolveLearn.com, All Rights Reserved.</p>
    </footer>
  );
}

import React from "react";

export default function NavItem({ url, text, children, className }) {
  return (
    <>
      {children !== undefined ? (
        <li className={className}>{children}</li>
      ) : (
        <li className={className}>
          <a
            className="nav-link"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {text}
          </a>
        </li>
      )}
    </>
  );
}

import React from 'react';

const ConfigLinks = ({ links }) => {
  return (
    <div className="config-links">
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default ConfigLinks;

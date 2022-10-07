import React from 'react';

export default function SectionFooter({ section }) {
  return (
    <article className="flex flex-col">
      <h3>{section.title}</h3>
      {section.links.map((link, index) => {
        const key = `section${index}`;
        return (
          <a key={key} href="/">
            {link.text}
          </a>
        );
      })}
    </article>
  );
}

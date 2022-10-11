import React from 'react';

export default function SectionFooter({ section }) {
  return (
    <article className="flex flex-col align-bottom">
      <h3 className="h-[34px] w-full text-center mb-[25px] font-medium text-[25px] font-Nunito">
        {section.title}
      </h3>
      <div className="flex flex-col justify-center h-[135px] box-border leading-[27.28px]">
        {section.links.map((link, index) => {
          const key = `section${index}`;
          return (
            <a
              className="w-full text-center font-Nunito text-[20px] font-normal"
              key={key}
              href="/"
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </article>
  );
}

// src/components/Accordion.js
import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const AccordionItem = ({ id, content, isOpen, onClick }) => {
  const itemStyle = {
    // borderBottom: "1px solid #ccc",
  };

  const titleStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  };

  const contentStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <li>
      <div style={titleStyle} onClick={() => onClick(id)}>
        <h2 className="font-display font-medium text-slate-900 dark:text-white">
          {content.title}
        </h2>
        <span className="font-display font-medium text-slate-900 dark:text-white">
          {isOpen ? (
            <RiArrowDropDownLine fontSize={"44px"} />
          ) : (
            <RiArrowDropRightLine fontSize={"44px"} />
          )}
        </span>
      </div>
      <ul
        role="list"
        style={contentStyle}
        className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
      >
        {content?.links?.map((link, i) => (
          <li key={link.href} className="relative">
            <NavLink
              to={link.href}
              end={i == 0 ? true : false}
              prefetch="intent"
              className={({ isActive }) =>
                clsx(
                  "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                  isActive
                    ? "font-semibold text-sky-500 before:bg-sky-500"
                    : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                )
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
        {content?.subDocs &&
          content?.subDocs?.map((section, index) => (
            <li key={section.title}>
              <div style={titleStyle} onClick={() => onClick(section.title)}>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <span className="font-display font-medium text-slate-900 dark:text-white">
                  {isOpen ? (
                    <RiArrowDropDownLine fontSize={"44px"} />
                  ) : (
                    <RiArrowDropRightLine fontSize={"44px"} />
                  )}
                </span>
              </div>
              <ul
                role="list"
                className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
              >
                {section?.links?.map((link, i) => (
                  <li key={link.href} className="relative">
                    <NavLink
                      to={link.href}
                      end={i == 0 ? true : false}
                      prefetch="intent"
                      className={({ isActive }) =>
                        clsx(
                          "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                          isActive
                            ? "font-semibold text-sky-500 before:bg-sky-500"
                            : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                        )
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </li>
  );
};

const Accordion = ({ items, index }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionItem
      id={index}
      content={items}
      isOpen={openIndex === index}
      onClick={handleClick}
    />
  );
};

export default Accordion;

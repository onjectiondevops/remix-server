import clsx from "clsx";
import { Link, NavLink } from "@remix-run/react";
import * as React from "react";

import { Dialog } from "@headlessui/react";
import config from "~/docs.config";
import Accordion from "../Accordion";

export default function Navigation({ navigation }) {
  return (
    <nav className={clsx("text-base lg:text-sm px-1")}>
      <ul role="list" className="space-y-1">
        {navigation &&
          navigation.map((section, id) => {
            return (
              <React.Fragment key={id}>
                <Accordion items={section} index={id} />
              </React.Fragment>
            );
          })}
      </ul>
    </nav>
  );
}

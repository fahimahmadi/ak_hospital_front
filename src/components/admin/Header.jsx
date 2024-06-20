import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { getDataFromLS } from "../../utilities/helpers";

/* styles */
const submenu = {
  maxHeight: 0,
  overflow: "hidden",
  transition: "max-height 0.3s ease-out",
};
const submenu_open = {
  maxHeight: "500px" /* You can adjust this value */,
  transition: "max-height 0.3s ease-in",
};

function Header({classes}) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <div className={"header bg-gray-200 text-gray-700 h-12 "+classes}>
      <div className="containe flex justify-end px-8 py-2 h-full">
        <ul className="flex items-center gap-x-6">
          <li>
            <Icon icon="mingcute:notification-fill" className="text-2xl" />
          </li>
          <li className="flex items-center justify-center gap-x-2 h-full">
            <img
              src="https://picsum.photos/id/1/100/100"
              alt="profile picture"
              className="rounded-full h-full"
            />
            <button
              onClick={toggleDropdown}
              className="hover:shadow-sm border relative"
            >
              <Icon icon="iconamoon:arrow-down-2-duotone" />
              <ul
                className={`profile w-32 bg-gray-500 text-white absolute -left-12 top-8 rounded-sm flex-col gap-y-3 text-sm text-start transition-max-height duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen ? "max-h-64" : "max-h-0"
                }`}
                style={dropdownOpen ? submenu_open : submenu}
              >
                <li className="hover:bg-gray-600 p-3">پروفایل</li>
                <li className="hover:bg-gray-600 p-3">پیام ها</li>
                <li className="hover:bg-gray-600 p-3">خروج</li>
              </ul>
            </button>
            <span
              className="hover:text-shadow-md text-sm font-semibold"
              style={{ direction: "ltr" }}
            >
              {getDataFromLS("user")?.fullname}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header
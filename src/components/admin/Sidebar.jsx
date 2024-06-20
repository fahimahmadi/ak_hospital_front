import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const navItems = [
  {
    icon: "ic:sharp-manage-accounts",
    title: "مدیریت کاربران",
    isExpand: false,
    sub_items: [
      {
        title: "لیست کاربران ",
        link: "/user/list",
        icon: "ri:user-add-fill",
      },
      {
        title: "تعریف و ویرایش نقش ها ",
        link: "/user/delete",
        icon: "mingcute:user-edit-fill",
      },
    ],
  },
  {
    icon: "hugeicons:access",
    title: "مدیریت دسترسی",
    isExpand: false,
    sub_items: [
      {
        title: "",
        link: "",
        icon: "",
      },
    ],
  },
  {
    icon: "fluent:content-view-24-filled",
    title: "مدیریت محتوا",
    isExpand: false,
    sub_items: [
      {
        title: "اطلاعیه ها",
        link: "/announcement",
        icon: "mdi:announcement",
      },
      {
        title: "درباره",
        link: "/about",
        icon: "icon-park-solid:announcement",
      },
      {
        title: "گالری",
        link: "/gallery",
        icon: "mdi:images",
      },
    ],
  },
  {
    icon: "arcticons:services",
    title: "مدیریت خدمات",
    isExpand: false,
    sub_items: [
      {
        title: "لیست خدمات شفاخانه",
        link: "/service/list",
        icon: "material-symbols:medical-services",
      },
    ],
  },
  {
    icon: "wpf:doctors-bag",
    title: "مدیریت داکتران",
    isExpand: false,
    sub_items: [
      {
        title: "لیست داکتران ",
        link: "/doctor/list",
        icon: "fa6-solid:user-doctor",
      },
    ],
  },
];

function Sidebar({ classes }) {
  const [items, setItems] = useState(navItems);

  const handleNavItemClicked = (e) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i == e.target.id ? { ...item, isExpand: !item.isExpand } : item
      )
    );
  };
  //w-full md:w-2/5 lg:w-3/12 xl:w-2/12
  return (
    <div className={"bg-gray-600 place-self-stretch" + classes}>
      <div className="top h-24 bg-gray-700 py-8 px-3 flex justify-between items-center">
        <span className="text-gray-100 font-titrtge text-xl">مدیریت سایت</span>

        <Icon
          icon="dashicons:admin-settings"
          className="text-gray-100 text-3xl"
        />
      </div>
      <div className="bottom h-auto bg-gray-800">
        <h4 className="text-gray-100 font-yekan ps-3 py-5 hidden lg:block">
          داشبــــورد
        </h4>
        <h3 className="text-gray-100 text-xl font-yekan ps-3 py-5 lg:hidden">
          داشبورد
        </h3>
        <ul className="text-gray-100 flex flex-col gap-y-0.5">
          {items?.map((item, id) => (
            <span key={id}>
              <li
                id={id}
                className="px-5 py-4 bg-gray-600 hover:bg-gray-500 cursor-pointer flex items-center justify-between"
                onClick={handleNavItemClicked}
              >
                <span className="flex items-center gap-x-2">
                  <Icon icon={item.icon} />
                  <span>{item.title}</span>
                </span>
                <span>
                  <Icon
                    icon="fe:arrow-right"
                    className={
                      item.isExpand
                        ? "animate-rotate-down"
                        : "animate-rotate-up"
                    }
                  />
                </span>
              </li>
              <ul
                className={`sub right-0 bg-gray-400 text-sm ${
                  item.isExpand ? "animate-down" : "animate-up"
                }`}
              >
                {item.sub_items?.map((sub_item, index) => (
                  <Link to="/admin/user/create" key={index}>
                    <li className="py-2 px-5 flex items-center gap-x-2 hover:text-gray-600 hover:bg-gray-100">
                      <Icon icon={sub_item.icon} />
                      <span>{sub_item.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

export const adminMenu = [
  {
    //quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.crud",
        link: "/system/user-manage",
      },
      {
        name: "menu.admin.crudredux",
        link: "/system/user-redux",
      },
    ],
  },
  {
    //quản lý events
    name: "menu.admin.manage-events",
    menus: [
      {
        name: "menu.admin.manage-events",
        link: "/system/manage-events",
      },
    ],
  },
  {
    //quản lý ticket
    name: "menu.admin.manage-ticket",
    menus: [
      {
        name: "menu.admin.manage-ticket",
        link: "/system/manage-ticket",
      },
    ],
  },
  // {
  //   //quản lý chuyên khoa
  //   name: "menu.admin.manage-specialty",
  //   menus: [
  //     {
  //       name: "menu.admin.manage-specialty",
  //       link: "/system/manage-specialty",
  //     },
  //   ],
  // },
];
export const doctorMenu = [
  {
    name: "menu.admin.manage-user",
    menus: [
      {
        //quan ly ke hoach kham benh cua bac si
        name: "menu.doctor.manage-schedule",
        link: "/doctor/manage-schedule",
      },
      {
        //quan ly benh nhan kham benh cua bac si
        name: "menu.doctor.manage-patient",
        link: "/doctor/manage-patient",
      },
    ],
  },
];

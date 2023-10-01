import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const sidebarItems = (role: string) => {
  const sidebarDefaultItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "Account Profile",
          key: "profile",
        },
        {
          label: "Change Password",
          key: "change-password",
        },
      ],
    },
  ];

  const sidebarStudentItems = [];

  const sidebarAdminItems = [];

  if (role === "student") return sidebarDefaultItems;
};

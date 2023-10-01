import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

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

  const sidebarCommonAdminItems = [
    {
      label: <Link href={`/${role}/manage-students`}>Manage Students</Link>,
      key: "manage-students",
    },
  ];

  if (role === "student") return sidebarDefaultItems;
  else if (role === "admin") return sidebarCommonAdminItems;
};

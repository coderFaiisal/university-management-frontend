import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.STUDENT;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        position: "sticky",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        PH-UNIVERSITY
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;

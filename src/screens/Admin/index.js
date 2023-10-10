import React from "react";
import adminStyles from "./Admin.module.scss";
import List from "./List";
import Overview from "./Statistical";

const Admin = () => {
  return (
    <div className={adminStyles["admin"]}>
      <div className={adminStyles["admin__list"]}>
        <List />
      </div>
      <div className={adminStyles["admin__view"]}>
        <Overview />
      </div>
    </div>
  );
};

export default Admin;

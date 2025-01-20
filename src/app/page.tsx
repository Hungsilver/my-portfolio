import React from "react";
import LayoutUser from "./(anonymous)/layout";
import HomeUserPage from "./(anonymous)/HomPage";

const page = () => {
  return (
    <LayoutUser>
      <HomeUserPage />
    </LayoutUser>
  );
};

export default page;

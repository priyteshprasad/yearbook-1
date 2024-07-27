import { Avatar, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./LeftDrawer.scss";

const LeftDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  const [imageWidth, setImageWidth] = useState(56);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      setImageWidth(156);
    } else {
      setImageWidth(56);
    }
  }, [isOpen]);
  return (
    <div className={`left_drawer_container ${isOpen ? "open" : "close"}`}>
      <button onClick={toggleDrawer}>{isOpen ? "close" : "open"}</button>
      <div className="profile_details">
        <Avatar
          alt="Remy Sharp"
          src="./assets/profile_images/user_image.jpg"
          sx={{ width: imageWidth, height: imageWidth }}
        />
        <h2>Remy Sharp</h2>
        <p>
          "Keep doing the good work and one day you will succeed, that what my
          mother used to say"
        </p>
      </div>
      <Divider variant="middle" />
      <div className="yearbook_title_list">
        <h3>My Yearbooks</h3>
        <p>Nitrr 2020</p>
        <p>JNV 2015</p>
        <p>Add new +</p>
      </div>
      <Divider variant="middle" />
    </div>
  );
};

export default LeftDrawer;

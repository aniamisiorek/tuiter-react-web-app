import React from "react";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
  return(
      <>
        <div>
          <h3>Home</h3>
        </div>
        <WhatsHappening/>
        <TuitsList/>
      </>
  );
};
export default HomeComponent;
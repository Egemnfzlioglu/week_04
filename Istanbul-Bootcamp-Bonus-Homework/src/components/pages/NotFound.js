import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <h2
        style={{
          textShadow: "-53rem 2px 2px #01ccaa",
          fontSize: "50px",
          fontWeight: "bold",
          color: "#fff",
          textAlign: "right",
          marginTop: "1%",
          backgroundColor: "#333",
          padding: "2%",
        }}
      >
        {" "}
        404 NoT FOUND
      </h2>

      <img
        src="https://www.antegrup.com.tr/images/404.gif"
        alt="404-Not-Found-gif"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default NotFound;

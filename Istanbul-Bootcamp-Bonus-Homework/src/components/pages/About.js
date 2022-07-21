import React from "react";

const About = () => {
  return (
    <div className="container"  style={{textAlign:"center "}}>
      <h1 style={{color:"#f45f47",margin:"2%"}}> Hakkımızda </h1>
      <p style={{margin:"0 10%" ,margin:"2%"}}>
        1980 yılından beri Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Vel corporis minus ipsam ex saepe sequi, laudantium dolore atque
        cum fugiat placeat omnis rem obcaecati reprehenderit eum cumque porro
        exercitationem dolorum. Dolores eum aut, illo, id inventore perferendis
        illum quos vel optio, sunt tempora sit est accusamus! Laborum
        exercitationem temporibus minus?
      </p>
      <img
        src="https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8"
        alt="photo"
        style={{
          height: " 60vh",
          margin: "1%",
          borderRadius: "5px 25%  ",
        }}
      />
    </div>
  );
};

export default About;

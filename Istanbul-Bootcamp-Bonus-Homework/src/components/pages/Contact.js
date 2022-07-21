import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img
              src="https://static.wixstatic.com/media/5ac092_fed681de238f4bcf852100ef2a120deb~mv2.gif"
              alt="Contact"
              style={{ width: "100%", border: "none" }}
            />
          </div>

          <div className="col-md-6 mt-5  " style={{ textAlign: "center" }}>
            <h2 className="mt-5"> İletişim</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              delectus debitis corporis voluptatibus, consequuntur incidunt,
              consectetur ullam ipsa expedita ex dolorum obcaecati dolores.
              Consequuntur fuga praesentium quam! Voluptate odio a, possimus quo
              facere suscipit magni?
            </p>

            <h2 className="mt-5">Adres</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quia dolorum, quod eius tenetur amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;





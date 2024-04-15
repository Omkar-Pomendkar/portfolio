import React from "react";
import "./About.css";
import omkar from "../../assets/omkar.jpeg";
import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1> About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={omkar} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a quae
              sed voluptatibus veniam soluta? Ut suscipit debitis aperiam iusto?
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis totam itaque accusamus in inventore ipsum?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>JAVASCRIPT</p> <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>TYPESCRIPT</p> <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;

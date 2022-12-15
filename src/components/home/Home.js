import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Meg from "../../images/Meg.png";
import Holmenkollbakken from "../../images/P1120530.JPG";
import Caffeine from "../../images/caffeine.png";
import JSFW from "../../images/JSFW.png";
import Sneaky from "../../images/sneaky.png";

export default function HomePage() {
  return (
    <>
      <h3>Welcome!</h3>
        <section className="welcome">
          <div>
            <h4>I am a Frontend-developer, based in Oslo, Norway. I have studied at Noroff university college to gain my skills in frontend developing.</h4>
          </div>
          <div>
            <img src={Meg} height="350px" alt="Et bilde av meg i Oslo" />
          </div>
        </section>
        <hr />
        <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="links">
          <Card className="cardContent">
            <h3>Sneaky</h3>
            <img src={Sneaky} alt="Screenshot of a page from Sneaky"/>
            <hr />
            <p>Semester Project 2. Made with HTML, SCSS and vanilla JS. An e-commerce website with both customer-facing and admin pages.</p>
            <a href="https://github.com/havardsollie/havard-sollie_semester-project2">GitHub</a>
          </Card>
          <Card className="cardContent">
            <h3>JS Frameworks</h3>
            <img src={JSFW} alt="Screenshot of a page from the JS frameworks assignment"/>
            <hr />
            <p>Course Assignment. Made with ReactJS. No styling yet. A project practicing JWT tokens and react-routing to get familiar with a framework.</p>
            <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-havardsollie">GitHub</a>
          </Card>
          <Card className="cardContent">
            <h3>Caffeine</h3>
            <img src={Caffeine} alt="Screenshot of a page from the Caffeine project"/>
            <hr />
            <p>Project Exam 2. Made with ReactJS and SCSS. Caffeine, a social media platform where users can post, interact and follow each other. A user may edit and delete posts and personalize a profile page.</p>
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-havardsollie">GitHub</a>
            <a href="https://caffeine-havardsollie.netlify.app/">Visit page</a>
          </Card>
        </div>
      </section>
      <hr />
      <section class="info">
        <div class="img">
            <img src={Holmenkollbakken} alt="Holmenkollbakken i Oslo" />
        </div>
        <div>
            <p>Based in Oslo, Norway, this is the view to the west from my apartment. Holmenkollbakken and Nordmarka is a great inspiration of mine.</p>
          </div>
      </section>
      <hr />
      <section className="portfolio">
        <div className="links">
          <Card className="cardContent">
            <Button className="linkButton"><a href="github.com/havardsollie">GitHub</a></Button>
          </Card>
          <Card className="cardContent">
            <Button className="linkButton"><a href="https://www.linkedin.com/in/h%C3%A5vard-sollie-878886149/">LinkedIn</a></Button>
          </Card>
          <Card className="cardContent">
            <Button className="linkButton"><a href="twitter.com/hsollie">Twitter</a></Button>
          </Card>
        </div>
      </section>
    </>
  )
}
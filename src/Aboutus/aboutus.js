import React from "react";
import { Avatar } from "@mui/material";
import "./aboutus.css";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import VisionIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import ExploreIcon from "@mui/icons-material/Explore";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function AboutUs() {
  return (
    <div className="aboutUs">
      <h1>Welcome to Our Story</h1>
      <p>
        We are Adrian Pardo and Julian Reyes, the visionary minds behind an
        innovative project that brought a unique touch to campus life at Adolfo
        Ibanez University.
      </p>

      <div className="aboutUs__story">
        <PersonIcon className="aboutUs__icon" />
        <h2>Our Journey Begins</h2>
        <p>
          It all started during a Software Design class at AIU, where our paths crossed.
          Fueled by a shared passion for technology, we embarked on a mission to
          enhance the student experience.
        </p>
      </div>

      <div className="aboutUs__story">
        <SchoolIcon className="aboutUs__icon" />
        <h2>The Spark of Inspiration</h2>
        <p>
          Late-night coding sessions fueled by caffeine inspired us to do our best to clone Instagram
          so that we may pass with bright colors our class exam.
        </p>
      </div>

      <div className="aboutUs__story">
        <CodeIcon className="aboutUs__icon" />
        <h2>Coding Nights and Coffee</h2>
        <p>
          Nights filled with lines of code and endless cups of coffee became the
          norm as we worked to bring our vision to life.
        </p>
      </div>

      <div className="aboutUs__story">
        <CameraAltIcon className="aboutUs__icon" />
        <h2>Cloning Instagram - The AIU Edition</h2>
        <p>
          After weeks of dedication, we proudly introduced "Instagram Clone" – a
          very accurate Instagram clone that we used for our amazing end-of-semester exam.
        </p>
      </div>

      <div className="aboutUs__story">
        <VisionIcon className="aboutUs__icon" />
        <h2>Our Vision for the Future</h2>
        <p>
          We want to make our own social media app in the future that
          has its unique properties that make it better than the competition.
        </p>
      </div>

      <div className="aboutUs__story">
        <ExploreIcon className="aboutUs__icon" />
        <h2>Join Us on This Exciting Adventure</h2>
        <p>
          As we continue to push boundaries and redefine what's possible in
          technology, we invite you to join us on this exciting adventure.
        </p>
      </div>

      <div className="aboutUs__story">
        <GroupIcon className="aboutUs__icon" />
        <h2>Join Us on Our Journey</h2>
        <p>
          Connect with us and be part of our growing community,
          we will always welcome you. Your support means the world to us!
        </p>
      </div>

      <p>Thank you for being part of our story.</p>

      <p>
        Adrian Pardo & Julian Reyes
      </p>
    </div>
  );
}

export default AboutUs;





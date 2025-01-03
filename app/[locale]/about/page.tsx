import { Fragment } from "react";

import AboutContent from "./_components/AboutContent";
import AboutService from "./_components/AboutService";
import AboutTeam from "./_components/AboutTeam";
import "./about.css";

export default function About() {
  return (
    <Fragment>
      <AboutContent />
      <AboutService />
      <AboutTeam />
    </Fragment>
  );
}

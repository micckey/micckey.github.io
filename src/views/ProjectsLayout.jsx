import { Outlet, useLocation } from "react-router-dom";
import MinimalNavBar from "../components/MinimalNavBar";

export default function ProjectsLayout() {
  const location = useLocation();
  let githubLink = "";

  // Define GitHub links based on the current location
  if (location.pathname === "/projects") {
    githubLink = "https://github.com/micckey/";
  } else if (location.pathname === "/projects/booking-bee") {
    githubLink = "https://github.com/micckey/Booking-Bee";
  } else if (location.pathname === "/projects/dojo-notes") {
    githubLink = "https://github.com/micckey/Dojo_Notes";
  } else if (location.pathname === "/projects/joy-threads") {
    githubLink = "https://github.com/micckey/Joy-Threads";
  } else if (location.pathname === "/projects/passion-pick") {
    githubLink = "https://github.com/micckey/PassionPicks";
  } else if (location.pathname === "/projects/karate-clash") {
    githubLink = "https://github.com/username/Karate_Clash";
  }

  return (
    <>
      <MinimalNavBar githubLink={githubLink} />
      <Outlet />
    </>
  );
}

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ProjectsPage from "./views/ProjectsPage";
import BookingBee from "./views/BookingBee";
import DojoNotes from "./views/DojoNotes";
import JoyThreads from "./views/JoyThreads";
import PassionPick from "./views/PassionPick";
import DefaultLayout from "./views/DefaultLayout";
import ProjectsLayout from "./views/ProjectsLayout";
import KarateClash from "./views/KarateClash";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<ProjectsLayout />}>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/booking-bee" element={<BookingBee />} />
        <Route path="/projects/dojo-notes" element={<DojoNotes />} />
        <Route path="/projects/joy-threads" element={<JoyThreads />} />
        <Route path="/projects/passion-pick" element={<PassionPick />} />
        <Route path="/projects/karate-clash" element={<KarateClash />} />
      </Route>
    </Routes>
  );
}

export default App;

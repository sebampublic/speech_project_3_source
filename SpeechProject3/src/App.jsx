import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./Header";
import Stereotypes from "./Stereotypes";
import DiveristyAndInclusion from "./DiversityAndInclusion";
import Page1 from "./Page1";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <Header />

      <Box>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Stereotypes" element={<Stereotypes />} />
          <Route
            path="/DiversityAndInclusion"
            element={<DiveristyAndInclusion />}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
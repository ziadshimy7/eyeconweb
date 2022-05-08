import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Recommended from "./components/Recommended/Recommended";
import Banner from "./components/Banner/Banner";
import PlantsFlowers from "./components/PlantsFlowers/PlantsFlowers";
import PlantCare from "./components/PlantCare/PlantCare";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Recommended />
      <Banner />
      <PlantsFlowers />
      <PlantCare />
      <News />
      <Footer />
    </>
  );
}

export default App;

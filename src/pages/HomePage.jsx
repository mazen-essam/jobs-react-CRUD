import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobList from "../components/JobList";
import ViewAllJobs from "../components/ViewAllJobs";
function HomePage() {
  return (
    <>
      
      <Hero />
      <HomeCards />
      <JobList isHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;

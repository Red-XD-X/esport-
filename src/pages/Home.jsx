import Footer from "../components/Footer";
import HomeHero from "../components/Home/HomeHero";
import RecentProjects from "../components/Home/RecentProjects";
import TrendingGamesSection from "../components/Home/TrendingGamesSection";

function Home() {
  return (
    <>
  <HomeHero></HomeHero>
  <TrendingGamesSection />
  <RecentProjects />
      <Footer></Footer>
    </>
  );
}

export default Home;

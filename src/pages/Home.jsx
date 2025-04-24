import Footer from "../components/Footer";
import HomeHero from "../components/Home/HomeHero";
import RecentProjects from "../components/Home/RecentProjects";
import TrendingGamesSection from "../components/Home/TrendingGamesSection";
import NewsletterSection from "../components/NewsletterSection";

function Home() {
  return (
    <>
      <HomeHero></HomeHero>
      <TrendingGamesSection />
      <RecentProjects />
      <NewsletterSection />
      <Footer></Footer>
    </>
  );
}

export default Home;

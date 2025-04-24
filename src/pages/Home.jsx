import Footer from "../components/Footer";

function Home({ isAuthenticated }) {
    return (
      <>
            <h1 className="text-2xl font-bold mb-4">Home Page</h1>
            {isAuthenticated ? (
                <p>Welcome back! You are signed in.</p>
            ) : (
                <p>Welcome! Please sign in to access all features.</p>
            )}
<Footer></Footer></>
    );
  }
  
  export default Home;

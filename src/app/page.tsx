import Hero from "./components/Hero";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <div>
      <main className="pt-20">
        <Hero />
      </main>
      <Nav />
    </div>
  );
};

export default Home;

import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import CategoryIcons from "../components/Home/CategoryIcons";

function Home() {
  return (
    <>
      <Hero />
      {/* <CategoryIcons /> */}
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
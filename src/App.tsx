import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Product from "@/scenes/product";
import Team from "./scenes/team";
import Shopping from "./scenes/shopping";
import Footer from "./scenes/footer";


import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";





function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Product)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.screenY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
        <Home setSelectedPage={setSelectedPage} />
        <Product setSelectedPage={setSelectedPage} />
        <Team setSelectedPage={setSelectedPage} />
        <Shopping setSelectedPage={setSelectedPage} />
        <Footer setSelectedPage={setSelectedPage} />

    </div>
  );
}

export default App;

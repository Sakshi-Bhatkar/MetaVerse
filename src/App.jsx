import React from "react";
import Navbar from "s:/MetaVerse/src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Quotes from "./components/Quotes/Quotes"
import Banner from "./components/Banner/Banner"
import Banner2 from "./components/Banner/Banner2"
 function App() {

  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
       <Navbar/> 
       <Hero/>
       <Quotes/>
       <Banner/>
       <Banner2/>
    </main>
  );
};
 export default App;
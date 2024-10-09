import React from "react";
import Navbar from "s:/MetaVerse/src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Quotes from "./components/Quotes/Quotes"
 function App() {

  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
       <Navbar/> 
       <Hero/>
       <Quotes/>
    </main>
  );
};
 export default App;
import React from "react";
import { useEffect, useState } from "react";

function Greetings() {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setGreeting("good morning");
    } else if (currentTime < 18) {
      setGreeting("good afternoon");
    } else if (currentTime < 22) {
      setGreeting("good evening");
    } else {
      setGreeting("good night");
    }
  }, []);

  return (  
    <div>
      <h3 className='text-white text-lg font-medium'>Hey there, </h3>
      <h2 className='text-white text-lg font-medium'><span className='text-teal-200 text-lg font-medium'>{greeting}</span> and welcome</h2>
      <h2 className='text-white text-lg font-medium'> to the Weather App!</h2>
    </div>
  );
}

export default Greetings;

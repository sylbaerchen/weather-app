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

  return <h2 className='text-white text-lg font-medium'>Hey there, {greeting} and welcome!</h2>;
}

export default Greetings;

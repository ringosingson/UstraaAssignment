import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    //fetch("https://official-joke-api.appspot.com/jokes/random")
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json));
  }, [url]);

  return result;
};

//this code is not use yet

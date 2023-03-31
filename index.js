fetch("https://jrkapitest.onrender.com/")
  .then((response) => response.json())
  .then((data) => console.log(data));
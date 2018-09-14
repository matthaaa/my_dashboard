const init = () => {
  document.getElementById("header").onclick = function() {test()};

  const test = () => {
    console.log("Hello this is a test.");
  }
}

init();

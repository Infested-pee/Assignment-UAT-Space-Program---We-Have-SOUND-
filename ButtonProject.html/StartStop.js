// when start button is hit, disable start button and enable stop button
function Start() {
    document.getElementById("Stop").disabled = false;
    document.getElementById("Start").disabled = true;
  }

  // when stop button is hit, disable stop button and enable start button
  function Stop() {
    document.getElementById("Stop").disabled = true;
    document.getElementById("Start").disabled = false;
  }
  const line = document.getElementById('line');
  
  // Initial angle
  let angle = 0;

  // Function to update the rotation
  function rotateLine() {
    // Update the rotation angle
    angle += 2;

    // Apply the rotation transform to the line
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    // Call the function again in 20 milliseconds for smooth animation
    setTimeout(rotateLine, 20);
  }

  // Start the rotation
  rotateLine();
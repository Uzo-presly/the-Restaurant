

  
    document.addEventListener("DOMContentLoaded", function() {
      const paragraphs = [
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Libero blanditiis eius atque adistinctio,quisquam inventore quia vitae necessitatibus! Libero.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Delectus nemo dolores tempora nonlibero. Sint errorunde officiis minus quibusdam!",
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Velit atque aliquam incidunt quas dolorum minus, totam temporibus? Non, recusandae placeat.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Delectus nemo dolores tempora non libero. Sint <br> error unde officiis minus quibusdam!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Fuga tempora ut harum porro repellendus illo quam fugiat voluptates, eius provident!"
    
      ];
      const htext = [
      "Spicy delicious chicken wings",
      "Simple and tasty recipes ",
      "Everyone can be a chef in their own kitchen ",
      "Check out @foodieland on Instagram ",
      "Try this delicious recipe to make your day"
    
      ];
      let currentIndex = 0;
      const htagContainer = document.getElementById("theH1");
      const switchButton = document.getElementById("leftBttn");

      function displayCurrentH1() {
        htagContainer.innerHTML = htext[currentIndex];
      }

      switchButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % htext.length;
        displayCurrentH1();
      });

      // Display the first H1 text initially
      displayCurrentH1();

    
    const paragraphContainer = document.getElementById("thePtag");
   
    function displayCurrentParagraph() {
        paragraphContainer.innerHTML = paragraphs[currentIndex];
    }

    switchButton.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % paragraphs.length;
      displayCurrentParagraph();
    });

    // Display the first paragraph text initially
    displayCurrentParagraph();
    });
 





/*  How it works*/

/* <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Switch Paragraphs on Click</title>
  <style>
    #text-container {
      font-size: 20px;
      padding: 20px;
      border: 1px solid #444;
      width: 500px;
      margin: 20px auto;
      text-align: center;
    }
    #switch-button {
      display: block;
      margin: 10px auto;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="text-container"></div>
  <button id="switch-button">Switch Paragraph</button>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const paragraphs = [
        "This is the first paragraph of text.",
        "Here is the second paragraph, providing more information.",
        "The third paragraph adds additional context and details.",
        "This is the fourth paragraph, offering a different perspective.",
        "Finally, the fifth paragraph wraps things up."
      ];
      let currentIndex = 0;
      const textContainer = document.getElementById("text-container");
      const switchButton = document.getElementById("switch-button");

      function displayCurrentParagraph() {
        textContainer.innerHTML = paragraphs[currentIndex];
      }

      switchButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % paragraphs.length;
        displayCurrentParagraph();
      });

      // Display the first paragraph initially
      displayCurrentParagraph();
    });
  </script>
</body>
</html>
 */
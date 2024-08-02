document.addEventListener("DOMContentLoaded", function() {
    // Define the array of paragraphs
    const paragraphs = [
      "    Spicy delicious chicken wings <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Libero blanditiis eius atque adistinctio,quisquam inventore quia vitae necessitatibus! Libero.",
      "Simple and tasty recipes <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Delectus nemo dolores tempora nonlibero. Sint errorunde officiis minus quibusdam!",
      ">Everyone can be a chef in their own kitchen <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Velit atque aliquam incidunt quas dolorum minus, totam temporibus? Non, recusandae placeat.",
      "Check out @foodieland on Instagram <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Delectus nemo dolores tempora non libero. Sint <br> error unde officiis minus quibusdam!",
      "h2>Try this delicious recipe to make your day <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Fuga tempora ut harum porro repellendus illo quam fugiat voluptates, eius provident!"
    ];

    // Select a random index from the array
    const randomIndex = Math.floor(Math.random() * paragraphs.length);

    // Get the div element
    const textContainer = document.getElementById("ite2");

    // Set the innerHTML of the div to the randomly selected paragraph
    textContainer.innerHTML = paragraphs[randomIndex];
  });


  /* How It Works
HTML Structure:

The <div> with the id="text-container" will display the paragraph.
JavaScript:

An array paragraphs contains the five different paragraphs.
Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
Math.floor() rounds down to the nearest integer, so multiplying by paragraphs.length gives an integer index.
The innerHTML of the text-container div is set to the randomly selected paragraph.
Each time the page loads, a different paragraph will be displayed in the div. */

 /*  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Paragraph</title>
    <style>
      #text-container {
        font-size: 20px;
        padding: 20px;
        border: 1px solid #ddd;
        width: 300px;
        margin: 0 auto;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div id="text-container"></div>
  
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        // Define the array of paragraphs
        const paragraphs = [
          "Paragraph 1: This is the first paragraph.",
          "Paragraph 2: This is the second paragraph.",
          "Paragraph 3: This is the third paragraph.",
          "Paragraph 4: This is the fourth paragraph.",
          "Paragraph 5: This is the fifth paragraph."
        ];
  
        // Select a random index from the array
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
  
        // Get the div element
        const textContainer = document.getElementById("text-container");
  
        // Set the innerHTML of the div to the randomly selected paragraph
        textContainer.innerHTML = paragraphs[randomIndex];
      });
    </script>
  </body>
  </html>
   */
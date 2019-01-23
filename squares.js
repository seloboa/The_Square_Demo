document
  .getElementById('GenerateSquares')
  .addEventListener('click', function() {
    const colors = ['blue', 'green', 'yellow', 'orange'];
    generateDom(colors);
  });

function generateDom(colorsArr) {
  const squaresDiv = document.querySelector("#squares");
  colorsArr.forEach(color => {
    const square = document.createElement('div');
    square.style.backgroundColor = color;
    squaresDiv.appendChild(square);
  });

  const commandsList = document.getElementById('commands');
}

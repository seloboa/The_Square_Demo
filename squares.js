document
  .getElementById('GenerateSquares')
  .addEventListener('click', function() {
    if (document.getElementById('squaresList').children.length === 0) {
      const colors = ['blue', 'green', 'yellow', 'orange'];
      generateDom(colors);
    }
  });

function generateDom(colorsArr) {
  const squaresDiv = document.getElementById('squaresList');
  colorsArr.forEach(color => {
    const square = document.createElement('div');
    square.className = 'squares';
    square.id = color;
    square.style.display = 'inline-block';
    square.style.margin = '50px';
    square.style.backgroundColor = color;
    square.style.height = '100px';
    square.style.width = '100px';
    squaresDiv.appendChild(square);
  });

  const commandsList = document.getElementById('commands');

  ['Show', 'Hide'].forEach(command => {
    const button = document.createElement('button');
    button.innerHTML = `${command} All Squares`;
    button.addEventListener('click', function() {
      const curSquares = document.getElementsByClassName('squares');
      if (command === 'Show') {
        Array.from(curSquares).forEach(
          square => (square.style.display = 'inline-block')
        );
      } else {
        Array.from(curSquares).forEach(
          square => (square.style.display = 'none')
        );
      }
    });
    commandsList.appendChild(button);
  });

  colorsArr.forEach(color => {
    const button = document.createElement('button');
    button.addEventListener('click', function() {
      const square = document.getElementById(color);
      if (!square.style.display || square.style.display === 'inline-block') {
        square.style.display = 'none';
      } else {
        square.style.display = 'inline-block';
      }
    });
    button.innerHTML = `Toggle ${color}`;
    commandsList.appendChild(button);
  });
}

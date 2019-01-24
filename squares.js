const generateSquare = document.getElementById('GenerateSquares');

generateSquare.addEventListener('click', function() {
  const input = document.getElementById('colorInput');
  if (
    document.getElementById('squaresList').children.length === 0 &&
    input.value !== ''
  ) {
    const colors = input.value.split(', ');
    generateDom(colors);
    input.style.display = 'none';
    generateSquare.innerHTML = 'Restart The Demo';
  } else {
    location.reload();
  }
});

function generateDom(colorsArr) {
  const squaresDiv = document.getElementById('squaresList');
  const buttonsList = document.getElementById('buttonsList');

  colorsArr.forEach(color => {
    console.log('here');
    const square = document.createElement('div');
    square.className = 'squares';
    square.id = color;
    square.style.backgroundColor = color;
    if (square.style.backgroundColor) {
      squaresDiv.appendChild(square);
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
      button.style.backgroundColor = color;
      buttonsList.appendChild(button);
    }
  });

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
    buttonsList.appendChild(button);
  });
}

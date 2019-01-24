document
  .getElementById('GenerateSquares')
  .addEventListener('click', function() {
    const colors = ['blue', 'green', 'yellow', 'orange'];
    generateDom(colors);
  });

function generateDom(colorsArr) {
  const squaresDiv = document.getElementById("squaresList");
  colorsArr.forEach(color => {
    const square = document.createElement('div');
    square.id = color;
    square.style.backgroundColor = color;
    square.style.height = '100px'
    square.style.width = '100px';
    squaresDiv.appendChild(square);
  });

  const commandsList = document.getElementById('commands');
  colorsArr.forEach(color =>{
    const button = document.createElement('button');
    button.id = `${color}Button`
    button.addEventListener('click', function(){
      const square = document.getElementById(color);
      square.style.display = 'none';
    })
    button.innerHTML = `Toggle ${color}`
    commandsList.appendChild(button);
  })
}

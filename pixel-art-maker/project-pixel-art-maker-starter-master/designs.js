function makeGrid() {

  //set variables from input and store as constants. These variables are not reassigned.
  const width = $('#input_width').val();
  const height = $('#input_height').val();
  const table = document.getElementById("pixel_canvas");

  //create table from input values
  for (let i = 0; i < height; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
      //Change background colour on click of cell
      cell.onclick = () => {
        cell.style.backgroundColor = colorPicker.value;
      };
    }
  }
}
//simple function to reset the grid.
function removeGrid() {
  $('tr').remove();
}
//submit form and create grid
$('#sizePicker').on('submit', function(e) {
  removeGrid();
  makeGrid();
  e.preventDefault();
});

//remove styles from cells with reset button 
$('#reset').click(function() {
  $('#pixel_canvas').find('*').css('background-color', '');
});
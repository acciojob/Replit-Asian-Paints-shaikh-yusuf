//your JS code here. If required.
 function changeColor() {
      // Get input values
      var blockId = document.getElementById('block_id').value;
      var color = document.getElementById('color_id').value;

      // Reset all grid items to transparent background
      resetColors();

      // Change background color of the selected grid item
      document.getElementById(blockId).style.backgroundColor = color;
    }

    function resetColors() {
      // Reset background color of all grid items to transparent
      var gridItems = document.getElementsByClassName('grid-item');
      for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent';
      }
// Select color input
/*let color = $("#colorPicker").val();
// Select size input
let height = $("#inputHeight").val();
let width = $("#inputWeight").val();*/

// When size is submitted by the user, call makeGrid()

class Grid {

	/*paintGrid() {
		$("td").on("click", function() {
			var color = $("#colorPicker").val();
			$(this).css( "background-color", color);
		})
	}*/

	makeGrid() {
		$("#sizePicker").one("submit", function(e) {
			let height = $("#inputHeight").val();
			let width = $("#inputWeight").val();
			var vertical;
			for (var i = 1; i <= height; i++) {
				var vertical = document.createElement("tr");
				for (var j = 1; j <= width; j++) {
					var horizontal = document.createElement("td");
					vertical.append(horizontal);
					$("#pixelCanvas").append(vertical);
				}
			};
			e.preventDefault();
			$("td").on("click", function() {
				var color = $("#colorPicker").val();
				$(this).css( "background-color", color);
			})
		})
	}
}

let creation = new Grid();
creation.makeGrid();

/*function makeGrid() {

// Your code goes here!

}*/

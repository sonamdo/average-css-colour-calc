// Function that takes 2 colors and returns the average

function avgColor(col1, col2){ //I usually use arrow functions but wanted access to arguments object

  val1 = 0;
  val2 = 0;
  val3 = 0;

  for(i = 0; i < arguments.length; i++){ // divides each color into three segments then converts to hexadecimal value
    val1 += parseInt(arguments[i].slice(0,2),16)
    val2 += parseInt(arguments[i].slice(2,4),16)
    val3 += parseInt(arguments[i].slice(4,6),16)
  }

  val1 = Math.round(val1/arguments.length);// using argument.length allows for more then 2 colors as arguments
  val2 = Math.round(val2/arguments.length);
  val3 = Math.round(val3/arguments.length);

  newColor = val1.toString(16) + val2.toString(16) + val3.toString(16);// converting back to string

  console.log(newColor)
  return newColor

}

avgColor('000000', 'ffffff')// example using white and black, also tested with three arguments and other colors

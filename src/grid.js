import calcRows from "./calcRows";
import isArray from "./helpers/isArray";

// For each object in your data array,
// adds properties for `row` and `column` so you can lay out the data.
// If you do not specify rows, uses calcRows(data.length) to calculate an optimal number of rows.
export default function grid(data, rows){

  // errors

  // no data argument
  if (!data){
    throw new Error("You must pass data as a first argument.");
  }

  // the data argument is not an array
  if (!isArray(data)) {
    throw new Error("Data must be an array.");
  }

  // there is a rows argument but it is not a positive integer
  if (rows && (parseInt(rows) !== rows || Number(rows) <= 0)) {
    throw new Error("Rows must be a positive integer.");
  }

  // default rows
  rows = rows ? rows : calcRows(data.length);

  // an out array
  var out = [];

  // first, figure out how many columns there will be
  var columns = Math.ceil(data.length / rows);

  // second, figure out which row each data point is in
  data.forEach(function(d, i){
    d.row = Math.ceil((i + 1) / columns);
    return d;
  });

  // third, figure out which column each data point is in
  for (var r = 1; r <= rows; r++){
    var match = data.filter(function(d){ return d.row == r });
    match.forEach(function(d, i){
      d.column = i + 1;
      out.push(d);
    });
  }
  
  return out;

}
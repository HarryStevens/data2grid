"use strict";

var expect = require("chai").expect;
var data2grid = require("../build/data2grid");

function makeData(){
	var data = [];
	for ( var i = 1; i <= 12; i++ ){
		data.push( { id: i } );
	}
	return data;
}

describe("#data2grid", function() {
	// calcRows
	it("should calculate an optimal number of rows", function(){
		expect(data2grid.calcRows(makeData().length)).to.equal(4);
	});

	// grid
	it("should make a grid when rows are not specified", function(){
		expect(data2grid.grid(makeData())[0].row).to.equal(1);
		expect(data2grid.grid(makeData())[0].column).to.equal(1);

		var data = makeData();
		expect(data2grid.grid(data)[data.length - 1].row).to.equal(4);

		var data = makeData();
		expect(data2grid.grid(data)[data.length - 1].column).to.equal(3);
	});	

	it ("should make a grid when the number of rows specified are fewer than optimal", function(){
		expect(data2grid.grid(makeData(), 2)[0].row).to.equal(1);
		expect(data2grid.grid(makeData(), 2)[0].column).to.equal(1);

		var data = makeData();
		expect(data2grid.grid(data, 2)[data.length - 1].row).to.equal(2);

		var data = makeData();
		expect(data2grid.grid(data, 2)[data.length - 1].column).to.equal(6);
	});

	it ("should make a grid when the number of rows specified are greater than optimal", function(){
		expect(data2grid.grid(makeData(), 6)[0].row).to.equal(1);
		expect(data2grid.grid(makeData(), 6)[0].column).to.equal(1);

		var data = makeData();
		expect(data2grid.grid(data, 6)[data.length - 1].row).to.equal(6);

		var data = makeData();
		expect(data2grid.grid(data, 6)[data.length - 1].column).to.equal(2);
	});

	it ("should make a grid when the data length is not divisible by the number of rows specified", function(){
		expect(data2grid.grid(makeData(), 5)[0].row).to.equal(1);
		expect(data2grid.grid(makeData(), 5)[0].column).to.equal(1);

		var data = makeData();
		expect(data2grid.grid(data, 5)[data.length - 1].row).to.equal(4);

		var data = makeData();
		expect(data2grid.grid(data, 5)[data.length - 1].column).to.equal(3);
	});

	// errors
	it ("should throw an error when you run calcRows without a number", function(){
		expect(function(){ data2grid.calcRows() }).to.throw(Error);
	});

	it ("should throw an error when you run calcRows with a negative integer", function(){
		expect(function(){ data2grid.calcRows(-1) }).to.throw(Error);
	});

	it ("should throw an error when you run calcRows with a float", function(){
		expect(function(){ data2grid.calcRows(2.2) }).to.throw(Error);
	});

	it ("should throw an error when you run calcRows with a non-numerical data type", function(){
		expect(function(){ data2grid.calcRows("2.2") }).to.throw(Error);
	});

	it ("should throw an error when you run grid without arguments", function(){
		expect(function(){ data2grid.grid() }).to.throw(Error);
	});	

	it ("should throw an error when you run grid with the first argument as something other than an array", function(){
		expect(function(){ data2grid.grid({data: ["good"]}) }).to.throw(Error);
	});

	it ("should throw an error when you run grid with the second argument as a negative integer", function(){
		expect(function(){ data2grid.grid(makeData(), -1) }).to.throw(Error);
	});

	it ("should throw an error when you run grid with the second argument as a float", function(){
		expect(function(){ data2grid.grid(makeData(), 2.2) }).to.throw(Error);
	});

	it ("should throw an error when you run grid with the second argument as a non-numerical data type", function(){
		expect(function(){ data2grid.grid(makeData(), "2.2") }).to.throw(Error);
	});

});
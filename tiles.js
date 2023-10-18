"use strict";

//inputs
var lengthOfRoom = 10;
var widthOfRoom = 6;
var areaOfRoom = lengthOfRoom * widthOfRoom;
//console.log("The area of the room is: " + areaOfRoom); //60

var lengthOfTile = 1;
var widthOfTile = 1;
var areaOfTile = lengthOfTile * widthOfTile;
//console.log("The area of one tile is: " + areaOfTile);

//there are 12 tile in a box = 12sqft.per box
var areaOfTile;
var tileInBox = 12;
var areaOfbox = tileInBox * areaOfTile;

var numberOfCasesForRoom = areaOfRoom / areaOfTile;

//we need 10% extra of tile
var extraTile = 10 / 100;

//you want 10% more tiles, How many boxes do you need?
var totalCasesNeeded = numberOfCasesForRoom * extraTile;

console.log(totalCasesNeeded);

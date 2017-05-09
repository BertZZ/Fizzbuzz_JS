function SheepPen() {
  this.sheep = [];
};

SheepPen.prototype.add = function(sheep) {
  this.sheep.push(sheep);
};

var pen = new SheepPen()
pen.add("Tim");
console.log(pen.sheep);

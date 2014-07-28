var twoDpoint = new Point2D(3, 4)
var threeDpoint = new Point3D(1, 4, 6)
console.log(threeDpoint)

function Point2D(x, y){
	this._x = x;
	this._y = y;
}

function Point3D(x, y, z){
	// dynamically bind this refrence.. or something
	Point2D.call(this, x, y)
	this._z = z
}

/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._front = 0;
  this._rear = 0;
  this._count = 0;
  this._storage = {};
};

Queue.prototype.add = function(value) {
  this._storage[this._count] = value;
  this._rear += 1;
  this._count += 1;
};

Queue.prototype.remove = function() {
  return this._storage[this._front++];
};

module.exports = Queue;

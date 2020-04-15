
export function Dot(x, y, radius, acceleration, drag) {
  this.x = x
  this.y = y
  this.px = x
  this.py = y
  this.tx = x
  this.ty = y
  this.r = radius
  this.pr = radius
  this.a = acceleration
  this.v = 0
  this.d = drag
}

Dot.prototype.adjustXYR = function (width, height) {
  this.x = width * this.px
  this.y = height * this.py
  this.r = Math.min([width, height]) * this.pr
}

Dot.prototype.render = function (context) {
  context.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
  context.fillStyle = '#708000'
  context.fill()
}

Dot.prototype.update = function (width, height, dt) {
  let Dx = this.tx - this.px
  let Dy = this.ty - this.py
  let D = Math.sqrt(Dx * Dx + Dy * Dy)
  this.v += this.a
  let vx = Dx && Dx / D - (Dx / Math.abs(Dx)) * this.d * this.v * this.v
  let vy = Dy && Dy / D - (Dy / Math.abs(Dy)) * this.d * this.v * this.v
  let dx = vx * dt, dy = vy * dt
  this.px = (Dx * Dx > dx * dx) ? this.px + dx : this.tx
  this.py = (Dy * Dy > dy * dy) ? this.py + dy : this.ty
  this.adjustXYR(width, height)
}

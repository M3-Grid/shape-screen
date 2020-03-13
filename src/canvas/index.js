const RENDER_RATE = 100

export const world = {
  paused: true,
  previousTime: 0,
  currentTime: 0,
  dt: 100
}

export const play = () => {
  world.paused = false
  render()
}

export const pause = () => {
  world.paused = true
  clear()
}

export const clear = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  const { width, height } = canvas
  context.clearRect(0, 0, width, height)
}

const update = () => {
}

const draw = (context, width, height) => {
  context.fillStyle = '#ffff80'
  context.fillRect(0, 0, width, height)
  context.beginPath()
  context.fillStyle = '#7080aa'
  context.beginPath()
  context.arc(width/2, height/2, height/2, 0, 2 * Math.PI)
  context.fill()
}

const render = () => {
  if (!world.paused) {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const { width, height } = canvas
    update()
    clear()
    draw(context, width, height)
    setTimeout(render, RENDER_RATE)
  }
}

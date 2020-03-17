const RENDER_RATE = 100

export const world = {
  paused: true,
  previousTime: new Date().getTime(),
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
  let currentTime = new Date().getTime()
  world.dt = currentTime - world.previousTime
  world.previousTime = currentTime
}

const draw = (context, width, height) => {
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, width, height)
  context.beginPath()
  context.fillStyle = '#7080aa'
  const radius = height*0.45
  context.beginPath()
  context.arc(width/2, height/2, radius, 0, 2*Math.PI)
  context.stroke()
}

const render = () => {
  if (!world.paused) {
    const canvas = document.getElementById('canvas')
    if (canvas) {
      const context = canvas.getContext('2d')
      const { width, height } = canvas
      update()
      clear()
      draw(context, width, height)
      setTimeout(render, RENDER_RATE)
    }
  }
}

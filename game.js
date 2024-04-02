console.log("teste")
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

c.fillStyle = 'black'
c.fillRect(0, 0, canvas.width, canvas.height)


class Player {
    constructor({posotion, velocity}) {
        this.posotion = posotion // {x, y} 
        this.velocity = velocity
    }

    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.posotion.x, this.posotion.y, 100, 100)
        c.arc(this.posotion.x, this.posotion.y, 5, 0, Math.PI * 2, false)
        c.fillStyle = 'red'
        c.fill()

        c.moveTo(this.posotion.x + 30, this.posotion.y)
        c.lineTo(this.posotion.x - 10, this.posotion.y - 10)
        c.lineTo(this.posotion.x - 10, this.posotion.y + 10)
        c.closePath()

        c.strokeStyle = 'white'
        c.stroke()
    }
}

const player = new Player({
  posotion: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity:{ x: 0, y: 0},  
})




const keys = {
    w: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    console.log('animate')

    player.draw()
}


animate()

// controles
window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyW':
            console.log('w was pressed')
            break
        case 'KeyA':
            console.log('a was pressed')
            break
        case 'KeyD':
            console.log('d was pressed')
            break
    }
})
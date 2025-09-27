const {app, Browserwindow} = require('electron')

const createWindow = () => {
    const win = new Browserwindow({
        width: 800,
        height: 600
    })

    win.loadFile('./src/index.html')
}

app.whenReady().then( () => {
    createWindow()
})

console.log("Eternal luv bboy");
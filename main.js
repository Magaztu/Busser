const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        // titleBarOverlay: true,
        // titleBarStyle: 'hidden'
    })

    win.loadFile('./src/index.html')
}

app.whenReady().then( () => {
    createWindow()
})

console.log("Eternal luv bboy");
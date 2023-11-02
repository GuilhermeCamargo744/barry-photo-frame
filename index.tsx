const { app, BrowserWindow } = require('electron')


function createWindow(){
    const win = new BrowserWindow({
        fullscreen: true
    })
    win.loadURL('http://localhost:3000')

}


app.on('ready', createWindow)
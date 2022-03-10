const {BrowserWindow} = require('electron')

function crateWindow(){
    new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration : true
        }
    })
    window.loadFile('src/ui/index.hltm');
}

module.exports = {
    crateWindow
}
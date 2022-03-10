const {crateWindow} = require('./main')
const {app} = require('electron')

app.whenReady().then(crateWindow);


import { app, BrowserWindow } from 'electron'

function createWindow() {
    const window = new BrowserWindow({
        title: "vite-react-electron",
        width: 700,
        height: 130,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        // },
        alwaysOnTop: true,
        transparent: true,
        autoHideMenuBar: true,
        skipTaskbar: true,
        center: false,
        frame: false,
        focusable: false
    })

    window.setIgnoreMouseEvents(true)

    if (process.env.VITE_DEV_SERVER_URL) {
        window.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
        window.loadFile('dist/index.html');
    }
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
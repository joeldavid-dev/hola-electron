const { app, BrowserWindow } = require('electron')

// Incluir el módulo Node.js 'path'
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300,
        webPreferences: {
            // La cadena __dirname apunta a la ruta del script
            // actualmente en ejecución (en este caso la raiz
            // del proyecto)
            preload: path.join(__dirname, 'preload.js')
            // La API path.join une varios segmentos de rutas,
            // creando una cadena de ruto combinada
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    // Crear una ventana si no hay una cuando se activa la aplicación
    // en MacOS
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Implementa el cierre de toda la aplicación al cerrar de
// todas las ventanas, excepto en MacOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


// El siguiente código accede al objeto Node.js process.versions
// y ejecuta una función auxiliar básica replaceText para insertar
// los números de versión en el documento HTML
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})
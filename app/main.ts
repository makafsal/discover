const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
// const { handleOpen } = require('./APIs/handleOpen.ts');
// const { listDirectoryFiles } = require('./APIs/listFiles.ts');
const { listDirectoryFiles } = require('./services/files.ts')

try {
  require('electron-reloader')(module)
} catch (_) { }

const createWindow = () => {
  console.log(__dirname)
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  });

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  mainWindow.setMenuBarVisibility(false);
  mainWindow.maximize();
  mainWindow.loadFile("./app/index.html");
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  // ipcMain.handle('dialog:openFile', handleOpen);
  const home = app.getPath('home');
  console.log(home)

  createWindow();

  ipcMain.handle('listFiles', listDirectoryFiles(home));

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
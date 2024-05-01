const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

let win;
const createWindow = async () => {
  win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
};

ipcMain.handle('customFuncion', async (event, arg) => {
  return new Promise(function (resolve, reject) {
    resolve('sucesso');
  });
});

app.whenReady().then(() => {
  createWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

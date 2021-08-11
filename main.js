const { app, BrowserWindow } = require('electron');
let mainWindow = null;
//判断命令行脚本的第二参数是否含--debug
function makeSingleInstance () {
    if (process.mas) return;
    app.requestSingleInstanceLock();
    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}
function createWindow () {
    const windowOptions = {
        width: 800,
        height: 424,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true, // 是否集成 Nodejs
            preload: __dirname + '/preload.js' // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
        }
    };
    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL("http://localhost:3000/login");
    // mainWindow.loadURL(path.join('file://', __dirname, '/build/index.html'));
    //接收渲染进程的信息
    const ipc = require('electron').ipcMain;

    ipc.on("login",function () {
        mainWindow.setFullScreen(true);
    });

    ipc.on("logout",function () {
        mainWindow.setFullScreen(false);
    });
}
makeSingleInstance();
//app主进程的事件和方法
app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
module.exports = mainWindow;
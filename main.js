const { app, BrowserWindow, ipcMain } = require('electron');
require('@electron/remote/main').initialize()
let mainWindow;
function  createWindow() {
  process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
  mainWindow = new BrowserWindow({
    hasShadow: false,
    devTools: false,
    frame: false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
  })
  mainWindow.loadFile('index.html');
  mainWindow.maximize();
  mainWindow.show();
}
function createChildWindow() {
  childWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  childWindow.loadFile("mainWindow.html");
  
  childWindow.once("ready-to-show", () => {
    childWindow.maximize();
    childWindow.show();
  });
}

function createCenterWindow() {
  centerWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  centerWindow.loadFile("centerWindow.html");
  centerWindow.once("ready-to-show", () => {
    centerWindow.maximize();
    centerWindow.show();
  });
}

function createPostWindow() {
  postWindow = new BrowserWindow({
    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  postWindow.loadFile("postWindow.html");
  postWindow.once("ready-to-show", () => {
    postWindow.maximize();
    postWindow.show();
  });
}
function createDolznostWindow() {
  dolznostWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  dolznostWindow.loadFile("dolznostWindow.html");
  dolznostWindow.once("ready-to-show", () => {
    dolznostWindow.maximize();
    dolznostWindow.show();
  });
}

ipcMain.on("openPost", (event, arg) => {
  createPostWindow();
});
ipcMain.on("closePostWindow", (event, arg) => {
  postWindow.close();
});

function createNomTovtWindow() {
  nomTovWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  nomTovWindow.loadFile("nomTovWindow.html");
  nomTovWindow.once("ready-to-show", () => {
    nomTovWindow.maximize();
    nomTovWindow.show();
  });
}
ipcMain.on("openNomTov", (event, arg) => {
  createNomTovtWindow();
  childWindow.hide();
});
ipcMain.on("closeNomTov", (event, arg) => {
  nomTovWindow.close();
  childWindow.show();
});

function createNomTovtUserWindow() {
  nomTovUserWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  nomTovUserWindow.loadFile("nomTovUserWindow.html");
  nomTovUserWindow.once("ready-to-show", () => {
    nomTovUserWindow.maximize();
    nomTovUserWindow.show();
  });
}
ipcMain.on("openNomTovUser", (event, arg) => {
  createNomTovtUserWindow();
  mainUserWindow.hide();
});
ipcMain.on("closeNomTovUser", (event, arg) => {
  nomTovUserWindow.close();
  mainUserWindow.show();
});

function createSaleWindow() {
  saleWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  saleWindow.loadFile("saleWindow.html");
  saleWindow.once("ready-to-show", () => {
    saleWindow.maximize();
    saleWindow.show();
  });
}
ipcMain.on("openSale", (event, arg) => {
  createSaleWindow();
  childWindow.hide();
});
ipcMain.on("closeSale", (event, arg) => {
  saleWindow.close();
  childWindow.show();
});

function createSaleUserWindow() {
  saleUserWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  saleUserWindow.loadFile("saleUserWindow.html");
  saleUserWindow.once("ready-to-show", () => {
    saleUserWindow.maximize();
    saleUserWindow.show();
  });
}
ipcMain.on("openSaleUser", (event, arg) => {
  createSaleUserWindow();
  mainUserWindow.hide();
});
ipcMain.on("closeSaleUser", (event, arg) => {
  saleUserWindow.close();
  mainUserWindow.show();
});

function createPersonalWindow() {
  personalWindow = new BrowserWindow({

    modal: true,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  personalWindow.loadFile("personalWindow.html");
  personalWindow.once("ready-to-show", () => {
    personalWindow.maximize();
    personalWindow.show();
  });
}
ipcMain.on("openPersonal", (event, arg) => {
  createPersonalWindow();
  childWindow.hide();
});
ipcMain.on("closePersonalWindow", (event, arg) => {
  personalWindow.close();
  childWindow.show();
});

function createMainUserWindow() {
  mainUserWindow = new BrowserWindow({
    modal: false,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainUserWindow.loadFile("mainUserWindow.html");
  mainUserWindow.once("ready-to-show", () => {
    mainUserWindow.maximize();
    mainUserWindow.show();
  });
}
ipcMain.on("openUserChildWindow", (event, arg) => {
  createMainUserWindow();
  mainWindow.hide();
});
ipcMain.on("closeUserChildWindow", (event, arg) => {
  mainUserWindow.close();
  mainWindow.show();
});

function createClientWindow() {
  clientWindow = new BrowserWindow({
    modal: false,
    show: false,
    hasShadow: false,
    devTools: false,
    titleBarStyle: `hidden`,
    skipTaskbar:false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  clientWindow.loadFile("clientWindow.html");
  clientWindow.once("ready-to-show", () => {
    clientWindow.maximize();
    clientWindow.show();
  });
}
ipcMain.on("openClient", (event, arg) => {
  createClientWindow();
});
ipcMain.on("closeClient", (event, arg) => {
  clientWindow.close();
});

ipcMain.on("openDolznost", (event, arg) => {
  createDolznostWindow();
});
ipcMain.on("closeDolznostWindow", (event, arg) => {
  dolznostWindow.close();
});

ipcMain.on("openChildWindow", (event, arg) => {
  createChildWindow();
  mainWindow.hide();
});
ipcMain.on("closeApp", (event, arg) => {
  childWindow.close();
  mainWindow.show();
});
ipcMain.on("closeAppAuth", (event, arg) => {
  mainWindow.close();
});
ipcMain.on("closeCenterWindow", (event, arg) => {
  centerWindow.close();
  childWindow.show();
});
ipcMain.on("openCenter", (event, arg) => {
  createCenterWindow();
  childWindow.hide();
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
const { app, BrowserWindow, Menu, Tray } = require("electron");
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} = require("electron-devtools-installer");
const path = require("path");
const isDev = require("electron-is-dev");

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const getIcon = () => {
  if (process.platform === "win32")
    return `${path.join(__dirname, "/icons/icon.ico")}`;
  if (process.platform === "darwin")
    return `${path.join(__dirname, "/icons/icon.icns")}`;
  return `${path.join(__dirname, "/icons/16x16.png")}`;
};

let mainWindow;
let tray = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    title: "Tempus",
    show: false,
    frame: false,
    icon: getIcon(),
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    if (isDev) {
      installExtension(REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS);
      mainWindow.webContents.openDevTools();
    }
  });

  // Tray ///////////////////////////////////////////////////////////

  tray = new Tray(getIcon());

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Developer Tools",
      async click() {
        await installExtension(REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS);
        mainWindow.toggleDevTools();
      },
    },
    { type: "separator" },
    { label: "Exit", role: "close" },
  ]);

  tray.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  //   mainWindow.on("show", () => {
  //     tray.setHighlightMode("always");
  //   });

  //   mainWindow.on("hide", () => {
  //     tray.setHighlightMode("never");
  //   });

  tray.setToolTip("Tempus.");

  tray.setContextMenu(contextMenu);

  // Tray End ////////////////////////////////////////////////////////

  mainWindow.on("closed", () => (mainWindow = null));
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

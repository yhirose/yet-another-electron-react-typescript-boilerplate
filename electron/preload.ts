import { remote } from 'electron';

(window as any).interop = {
  platform: process.platform,

  executeJavaScriptWithUserGesture(fn: () => void) {
    (window as any).interop.trampoline = fn;
    const win = remote.getCurrentWindow();
    win.webContents.executeJavaScript(`
      interop.trampoline();
    `, true);
  },

  toggleDevTools() {
    const win = remote.getCurrentWindow();
    win.webContents.once('devtools-opened', () => win.webContents.focus());
    (win as any).toggleDevTools();
  }
};

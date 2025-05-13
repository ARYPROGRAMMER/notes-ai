import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error("Context Isolation must be enabled in the BrowserWindow")
}

try{
  contextBridge.exposeInMainWorld('context', {
    // smth
  })
} catch (error) {
  console.log(error)
}

import fs from 'fs';
import os from 'os';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import {APP_ROOT as app_root} from '../root.js';

const __dirname = app_root;

import CONFIG from '../config.cjs';

// determine where this code is running 

export const DEBUG = false;
export const DEBUG2 = false;

export const newSessionId = () => (Math.random()*1137).toString(36);

export const APP_ROOT = DEBUG ? 
  path.resolve('.')
  :
  path.resolve(__dirname, '..');
console.log({APP_ROOT});
export const appDir = () => DEBUG ?
  path.resolve(os.homedir(), '.config', 'dosyago', 'grader', 'dev', 'appData', `${(CONFIG.organization || CONFIG.author).name}`, `service_${CONFIG.name}`)
  :
  path.resolve(os.homedir(), '.config', 'dosyago', 'grader', 'appData', `${(CONFIG.organization || CONFIG.author).name}`, `service_${CONFIG.name}`)
export const expiredSessionFile = () => path.resolve(appDir(), 'old-sessions.json')
export const sessionDir = sessionId => path.resolve(appDir(), 'sessions', sessionId)
export const app_data_dir = sessionId => path.resolve(sessionDir(sessionId), `ui-data`);
export const temp_browser_cache = sessionId => path.resolve(sessionDir(sessionId), `ui-cache`);
export const logFile = () => path.resolve(appDir(), 'launcher.log');

export const sleep = ms => new Promise(res => setTimeout(res, ms));

if ( ! fs.existsSync(appDir()) ) {
  fs.mkdirSync(appDir(), {recursive: true});
}

export function say(o) {
  console.log(JSON.stringify(o));
}

export function delayThrow(msg) {
  // collect the stack while it's in frame
  const err = new TypeError(msg);

  // throw after delay
  setTimeout(() => { throw err; }, 0);

  return void 0;
}

import path from 'path';
import fs from 'fs';

import AdmZip from 'adm-zip';

import CONFIG from '../src/config.cjs';
import {APP_ROOT} from '../src/lib/common.js';

const file = new AdmZip();

console.log({APP_ROOT});
file.addLocalFile(
  (CONFIG.DEBUG ? 
    path.resolve(APP_ROOT, 'build', 'service.cjs') 
    :
    path.resolve(APP_ROOT, 'src', 'build', 'service.cjs')
  ), 
  'app'
)
file.addLocalFile(path.resolve(APP_ROOT, 'src', 'config.cjs'));
file.addLocalFolder(path.resolve(APP_ROOT, 'src', 'public'), 'app/public');
file.addLocalFolder(path.resolve(APP_ROOT, 'src', 'ui_inject'), 'app/ui_inject');

fs.writeFileSync(path.resolve(APP_ROOT, 'build', 'app.zip'), file.toBuffer());



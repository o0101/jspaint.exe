import Grader from './index.js';
import {openDemo, windowDemo} from './demos/index.js';
import {sleep} from './lib/common.js';

start();

async function start() {
  await Grader.go({uiName:'1'});
}

async function startDemo() {
  // create App
    await Grader.go({noWindow:true});

  // demo 1
    let {UI} = await openDemo();
    await sleep(2000);

    Grader.ui.close(UI);

  // demo 2
    ({UI} = await windowDemo());

    await sleep(2000);
    Grader.ui.close(UI)
}





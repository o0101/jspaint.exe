import Grader from './../index.js';

// open a UI window
  export async function openDemo() {
    return await Grader.ui.open({doLayout:true, uiName: 'open', keepService: true});
  }


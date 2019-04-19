import Detector from './utils/detector';
import App from './app';

// Check environment and set the Config helper
if (__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! -----');

  // Config.isDev = true;
}

function init() {
  // Check for webGL capabilities
  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  } else {
    const container = document.getElementById('appContainer');
    new App(container);
  }
}

init();

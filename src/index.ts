import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './testext';

/**
 * Initialization data for the testext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'testext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension testext is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The testext server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default extension;

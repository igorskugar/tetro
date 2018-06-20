import { sound } from 'pixi.js';
import InputManager from 'client/managers/InputManager';
import Scene from 'client/modules/Scene';
import actions from 'client/constants/actions';
import scenes from 'client/constants/scenes';

class ControlsScene extends Scene {
  constructor({ id }) {
    super({ id });

    this.onAnyActionDown = this.onAnyActionDown.bind(this);

    this.init();
  }

  init() {
    // TODO: add controls
    // this.addControls();
    sound.play('bgm', { loop: true });

    this._actionListeners = [
      InputManager.getInstance().onActionDown(actions.ANY, this.onAnyActionDown)
    ];
  }

  onAnyActionDown() {
    this.sceneManager.loadScene(scenes.SOLO_GAME);
  }

  onExit(cb) {
    this._actionListeners.forEach(listener => listener());
    super.onExit(cb);
  }

  // addControls() {
  // }
}

export default ControlsScene;

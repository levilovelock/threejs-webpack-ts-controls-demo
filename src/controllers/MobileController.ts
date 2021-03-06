import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import GameCanvas from '../game/GameApp';

export default class MobileController {
    controls: OrbitControls;

    constructor(canvas: GameCanvas) {
        this.controls = new OrbitControls(canvas.getCamera(), canvas.getRenderer().domElement);
    }

    handleControl(): void {
        this.controls.update();
    }
}

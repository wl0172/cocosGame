import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Button')
export class Button extends Component {
	start() {

	}

	update(deltaTime: number) {

	}

	//去play
	butPlayToMin() {
		console.log('我是init - butPlayToMin - 去main场景 ======')
		director.preloadScene('main', (err) => {
			if (!err) {
				director.loadScene('main', function () {});
			}
		});
	}
	// 去2
	but2() {
		console.log('我是init - but2 - ======')
	}
}


import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mainButton1')
export class mainButton1 extends Component {
	start() {

	}

	update(deltaTime: number) {

	}

	mainButton1() {
		console.log('我是main - but1 返回到首页,==========')
		director.preloadScene('init', (err) => {
			if (!err) {
				director.loadScene('init', function () {

				});
			}
		});
	}
}


import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bgTransForm')
export class bgTransForm extends Component {


	// 背景移动
	moveBg() {
		let bgList = this.node.children || []
		for (let i of bgList){
			let y = i.position.y += -3
			i.setPosition(new Vec3(0, y, 0));
			if (i.position.y <= -1500) {
				i.setPosition(new Vec3(0, 1500, 0));
			}
		}
	}

	// 1、先执行 - 首次加载
	onLoad() {

	}
	// 2、执行
	start() {

	}
	// 每帧都执行
	update(deltaTime: number) {
		this.moveBg()
	}
}


import { _decorator, Component, Node, tt } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('scenesChange')
export class scenesChange extends Component {
	start() {
		console.log('我是init-scenesChange-==========')

		console.log(this.node.children,'===========')
		

		console.log(cc.view.getCanvasSize(),'-=-=-=-=-=')
	}

	update(deltaTime: number) {

	}

	
}


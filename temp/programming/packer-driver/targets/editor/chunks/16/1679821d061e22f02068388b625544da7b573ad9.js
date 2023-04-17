System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, bgTransForm;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a4132UQ5VMAr0KfGmYjTF6", "bgTransForm", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bgTransForm", bgTransForm = (_dec = ccclass('bgTransForm'), _dec(_class = class bgTransForm extends Component {
        moveBg() {
          let bgList = this.node.children || [];

          for (let i of bgList) {
            bgList[i].setPosition(new Vec3(0, -30, 0));
            console.log(i.pY, '===='); // if (bgList[i].position.y <= -1500) {
            // 	bgList[i].position.y = 1500
            // }
            // console.log(bgList[i].position.y, '000-=-=-=-=-=')
            // bgList[i].setPosition
            // bgList[i].setPosition(new Vec3(0, -30, 0));
          }
        } // 1、先执行 - 首次加载


        onLoad() {
          setInterval(() => {
            this.moveBg();
          }, 1500);
        } // 2、执行


        start() {} // 每帧都执行


        update(deltaTime) {// this.moveBg()
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1679821d061e22f02068388b625544da7b573ad9.js.map
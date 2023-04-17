System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, bgTransForm;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a4132UQ5VMAr0KfGmYjTF6", "bgTransForm", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bgTransForm", bgTransForm = (_dec = ccclass('bgTransForm'), _dec(_class = class bgTransForm extends Component {
        moveBg() {
          var bgList = this.node.children || [];
          console.log(bgList, '=====');

          for (var i = 0; i < bgList.length; i++) {
            bgList[i].position.y += -3;

            if (bgList[i].position.y <= -1500) {
              bgList[i].position.y = 1500;
            }

            console.log(bgList[i].position.y, '000-=-=-=-=-=');
          }
        } // 1、先执行 - 首次加载


        onLoad() {
          setTimeout(() => {
            this.moveBg();
          }, 3000);
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
//# sourceMappingURL=b3a4a363548cc7bf0a08478337b461fc9a5fe86b.js.map
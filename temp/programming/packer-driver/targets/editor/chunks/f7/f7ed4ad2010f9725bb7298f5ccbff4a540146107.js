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
        constructor(...args) {
          super(...args);
          this.bgImage = {
            bg1: this.node.children[0],
            bg2: this.node.children[1]
          };
        }

        moveBg() {
          console.log(this.bgImage, '=======');
        } // 1、先执行 - 首次加载


        onLoad() {
          this.moveBg();
        } // 2、执行


        start() {} // 每帧都执行


        update(deltaTime) {
          setTimeout(() => {}, 3000);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7ed4ad2010f9725bb7298f5ccbff4a540146107.js.map
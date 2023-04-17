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
        // 背景移动
        moveBg() {
          var bgList = this.node.children || [];

          for (var i of bgList) {
            var y = i.position.y += -3;
            i.setPosition(new Vec3(0, y, 0));

            if (i.position.y <= -1500) {
              i.setPosition(new Vec3(0, 1500, 0));
            }
          }
        } // 1、先执行 - 首次加载


        onLoad() {} // 2、执行


        start() {} // 每帧都执行


        update(deltaTime) {// this.moveBg()
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eddfd75c837b1f35102db138bff57683aa0074dc.js.map
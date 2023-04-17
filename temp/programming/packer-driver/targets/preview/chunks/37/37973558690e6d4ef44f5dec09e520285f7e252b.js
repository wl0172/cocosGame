System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, bgTran;

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

      _export("bgTran", bgTran = (_dec = ccclass('bgTran'), _dec(_class = class bgTran extends Component {
        constructor() {
          super(...arguments);
          this.properties = void 0;
        }

        // 1、先执行 - 首次加载
        onLoad() {
          console.log(this.properties, '==========');
        } // 2、执行


        start() {} // 每帧都执行


        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37973558690e6d4ef44f5dec09e520285f7e252b.js.map
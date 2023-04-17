System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, scenesChange;

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

      _cclegacy._RF.push({}, "4dc924T64ZBDaMdJJ0I/mJi", "scenesChange", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scenesChange", scenesChange = (_dec = ccclass('scenesChange'), _dec(_class = class scenesChange extends Component {
        start() {
          console.log('我是init-scenesChange-==========');
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ba000cc9b0f03741c5670df51d1e479464cfd09.js.map
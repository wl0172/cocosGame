System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, mainButton1;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e24bcCOm1dDwbwMcD3UsVzj", "mainButton1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mainButton1", mainButton1 = (_dec = ccclass('mainButton1'), _dec(_class = class mainButton1 extends Component {
        start() {}

        update(deltaTime) {}

        mainButton1() {
          console.log('我是main - but1 返回到首页,==========');
          director.preloadScene('init', err => {
            if (!err) {
              director.loadScene('init', function () {});
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4e7f9c369ec081c216456fdb635ab907c2954c3.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, Button;

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

      _cclegacy._RF.push({}, "1f47a14C95H/Yj8t9RkC5z7", "initButton1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Button", Button = (_dec = ccclass('Button'), _dec(_class = class Button extends Component {
        start() {}

        update(deltaTime) {} //去play


        butPlayToMin() {
          console.log('我是init - butPlayToMin - 去main场景 ======');
          director.preloadScene('main', err => {
            if (!err) {
              director.loadScene('main', function () {});
            }
          });
        } // 去2


        but2() {
          console.log('我是init - but2 - ======');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f1b4db2b13d8f9d9f8130b6a90faeb48f867e2c.js.map
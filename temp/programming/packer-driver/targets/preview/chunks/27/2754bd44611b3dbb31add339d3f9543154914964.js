System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, crypto, scenesChange;

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
      } = _decorator); // Node.js

      crypto = require("crypto");

      _export("scenesChange", scenesChange = (_dec = ccclass('scenesChange'), _dec(_class = class scenesChange extends Component {
        start() {
          console.log('我是init-scenesChange-==========');
          decrypt();
        }

        update(deltaTime) {}

        decrypt(encryptedData, sessionKey, iv) {
          var decipher = crypto.createDecipheriv("aes-128-cbc", Buffer.from(sessionKey, "base64"), Buffer.from(iv, "base64"));
          var ret = decipher.update(encryptedData, "base64");
          ret += decipher.final();
          return ret;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2754bd44611b3dbb31add339d3f9543154914964.js.map
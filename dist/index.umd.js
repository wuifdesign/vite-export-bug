(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("redux")) : typeof define === "function" && define.amd ? define(["exports", "redux"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.reactPanther = {}, global.redux));
})(this, function(exports2, redux) {
  "use strict";
  const test = () => {
    console.log("123");
  };
  Object.defineProperty(exports2, "test2", {
    enumerable: true,
    get: function() {
      return redux.test2;
    }
  });
  exports2.test = test;
  Object.keys(redux).forEach(function(k) {
    if (k !== "default" && !exports2.hasOwnProperty(k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: function() {
          return redux[k];
        }
      });
  });
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2[Symbol.toStringTag] = "Module";
});

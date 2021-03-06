// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Esy = require("../Esy.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Filename = require("bs-platform/lib/js/filename.js");

function $less$less(f, g, x) {
  return Curry._1(f, Curry._1(g, x));
}

var projPath = Curry._1(Filename.dirname, __dirname);

Jest.describe("Esy.status", (function (param) {
        return Jest.testPromise("Checking if running esy status in __dirname works: " + projPath, undefined, (function (param) {
                      return Esy.status(projPath).then((function (param) {
                                    var tmp;
                                    tmp = param.tag ? Jest.fail("Esy.getStatus should not have failed") : Jest.Expect.toBe(true, Jest.Expect.expect(param[0].isProject));
                                    return Promise.resolve(tmp);
                                  }));
                    }));
      }));

exports.$less$less = $less$less;
exports.projPath = projPath;
/* projPath Not a pure module */

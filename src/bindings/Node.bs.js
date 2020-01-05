// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Sys = require("bs-platform/lib/js/sys.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_sys = require("bs-platform/lib/js/caml_sys.js");
var Filename = require("bs-platform/lib/js/filename.js");
var FsStubJs = require("./fs-stub.js");
var Child_process = require("child_process");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function ofPromiseError (error){return error.message || 'Unknown error'};

var $$Error = {
  ofPromiseError: ofPromiseError
};

function writeFile(prim, prim$1) {
  return FsStubJs.writeFile(prim, prim$1);
}

function readFile(prim) {
  return FsStubJs.readFile(prim);
}

function mkdir$prime(prim) {
  return FsStubJs.mkdir(prim);
}

function exists(prim) {
  return FsStubJs.exists(prim);
}

function mkdir(p, path) {
  var forceCreate = p !== undefined ? p : false;
  if (forceCreate) {
    return FsStubJs.exists(path).then((function (doesExist) {
                  if (doesExist) {
                    return Promise.resolve(/* () */0);
                  } else {
                    var homePath = Caml_sys.caml_sys_getenv(Sys.unix ? "HOME" : "USERPROFILE");
                    if (path === homePath) {
                      return Promise.reject([
                                  Caml_builtin_exceptions.failure,
                                  "mkdir(~p=true) received home path and it was not found"
                                ]);
                    } else {
                      return mkdir(true, Curry._1(Filename.dirname, path)).then((function (param) {
                                    return FsStubJs.mkdir(path);
                                  }));
                    }
                  }
                }));
  } else {
    return FsStubJs.mkdir(path);
  }
}

var Fs = {
  writeFile: writeFile,
  readFile: readFile,
  mkdir$prime: mkdir$prime,
  exists: exists,
  mkdir: mkdir
};

var Options = { };

function exec(cmd, options) {
  return new Promise((function (resolve, reject) {
                Child_process.exec(cmd, options, (function (err, stdout, stderr) {
                        if (err == null) {
                          return resolve(/* tuple */[
                                      stdout,
                                      stderr
                                    ]);
                        } else {
                          console.log(err);
                          return reject([
                                      Caml_builtin_exceptions.failure,
                                      "Error during exec"
                                    ]);
                        }
                      }));
                return /* () */0;
              }));
}

var ChildProcess = {
  Options: Options,
  exec: exec
};

var Path = { };

exports.$$Error = $$Error;
exports.Fs = Fs;
exports.ChildProcess = ChildProcess;
exports.Path = Path;
/* ./fs-stub.js Not a pure module */

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/usuarios              ->  index
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.getPaises = getPaises;
exports.registroUsuario = registroUsuario;
var model = require('./usuario.model');

function login(req, res) {
  var usuario = [req.body.user, req.body.password];
  model.login(usuario, function (resp) {
    res.json(resp);
  });
};

function getPaises(req, res) {
  model.getPaises(function (resp) {
    res.json(resp);
  });
};

function registroUsuario(req, res) {
  var data = req.body.usuario;
  model.registroUsuario(data, function (resp) {
    res.json(resp);
  });
};
//# sourceMappingURL=usuario.controller.js.map

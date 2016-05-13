'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


describe('Usuario API:', function () {

  describe('GET /api/usuarios', function () {
    var usuarios;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/usuarios').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        usuarios = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      usuarios.should.be.instanceOf(Array);
    });
  });
});
//# sourceMappingURL=usuario.integration.js.map

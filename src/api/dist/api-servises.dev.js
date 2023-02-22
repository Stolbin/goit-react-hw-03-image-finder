"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImages = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_KEY = '32628056-fce49f0093e538c5a69cf5c6c';
_axios["default"].defaults.baseURL = 'https://pixabay.com/api/';
_axios["default"].defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal'
};

var getImages = function getImages(query, page) {
  var _ref, data;

  return regeneratorRuntime.async(function getImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('', {
            params: {
              q: query,
              page: page,
              per_page: 12
            }
          }));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getImages = getImages;
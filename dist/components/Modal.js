"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ModalWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n"])));
const ModalCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 500px;\n    height: 70px;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n    position: relative;\n"])));
const Button = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 25px;\n    height: 25px;\n    background-color: #EEC643;\n    color: #141414;\n    border: none;\n    border-radius: 50%;\n    font-size: 20px;\n    font-weight: bold;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    cursor: pointer;\n"])));
const Background = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(20, 20, 20, 0.5);\n    z-index: 0;\n"])));
const Modal = _ref => {
  let {
    showModal,
    setShowModal,
    Name,
    showBGModal
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showModal ? /*#__PURE__*/_react.default.createElement(ModalWrapper, null, /*#__PURE__*/_react.default.createElement(ModalCard, null, /*#__PURE__*/_react.default.createElement("p", null, Name), /*#__PURE__*/_react.default.createElement(Button, {
    onClick: () => setShowModal(false)
  }, "X")), showBGModal ? /*#__PURE__*/_react.default.createElement(Background, {
    onClick: () => setShowModal(false)
  }) : null) : null);
};
var _default = Modal;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _UpdatedUserAvatarService = _interopRequireDefault(require("../../../services/UpdatedUserAvatarService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserAvatarController {
  async update(request, response) {
    const updateUserAvatar = _tsyringe.container.resolve(_UpdatedUserAvatarService.default);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = UserAvatarController;
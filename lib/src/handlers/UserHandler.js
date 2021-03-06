"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
class UserHandler {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._userService = new UserService_1.UserService();
    }
    async list(request, reply) {
        try {
            const query = request.payload;
            const user = await this._userService.list(query, this.query);
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(e.message).code(500);
        }
    }
    async findOne(request, reply) {
        try {
            const { id } = request.params;
            const user = await this._userService.findOne({ _id: id });
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(e.message).code(500);
        }
    }
    async create(request, reply) {
        try {
            const user = request.payload;
            const newUser = await this._userService.create(user);
            return reply(newUser);
        }
        catch (e) {
            console.log(e);
            return reply(e.message).code(500);
        }
    }
    async update(request, reply) {
        try {
            const { id } = request.params;
            const item = request.payload;
            const updatedUser = await this._userService.update({ _id: id }, item);
            return reply(updatedUser);
        }
        catch (e) {
            console.log(e);
            return reply(e.message).code(500);
        }
    }
    async signIn(request, reply) {
        try {
            const user = request.payload;
            const updatedUser = await this._userService.signIn(user);
            return reply(updatedUser);
        }
        catch (e) {
            console.log(e);
            return reply(e.message).code(500);
        }
    }
    async remove(request, reply) {
        try {
            const { id } = request.params;
            const user = await this._userService.remove(id);
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(e.message).code(500);
        }
    }
}
exports.UserHandler = UserHandler;
//# sourceMappingURL=UserHandler.js.map
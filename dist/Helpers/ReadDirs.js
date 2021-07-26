"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const Paths_1 = require("../Consts/Paths");
const resolvePath = (name) => {
    const tempName = name.toLowerCase().replace(' ', '-');
    const path = Paths_1.Paths[`${tempName}`];
    return path ? path : undefined;
};
const readDirAsync = util_1.promisify(fs_1.default.readdir);
const ReadDirs = (pathName) => __awaiter(void 0, void 0, void 0, function* () {
    const resolvedPath = resolvePath(pathName);
    console.log(resolvedPath);
    const directoryPath = path_1.default.join(process.env.DIRNAME ? process.env.DIRNAME : ``, `${resolvedPath ? resolvedPath : pathName}`);
    console.log(directoryPath);
    try {
        const files = yield readDirAsync(directoryPath);
        files.push('All files sent, Sir!');
        console.log(files);
        return files;
    }
    catch (error) {
        console.log(error.message);
        return undefined;
    }
});
exports.default = ReadDirs;
//# sourceMappingURL=ReadDirs.js.map
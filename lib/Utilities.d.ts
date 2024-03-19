/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library of the Mastodon CLI

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import * as Types from "./Types.js";
export declare function extractArguments(argv: Array<string>): Types.Arguments;
export declare const info: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const _default: {
    extractArguments: typeof extractArguments;
    info: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
};
export default _default;

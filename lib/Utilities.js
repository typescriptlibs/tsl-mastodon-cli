/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library of the Mastodon CLI

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Functions
 *
 * */
export function extractArguments(argv) {
    const args = {};
    let lastKey = '$';
    let lastValue;
    for (const value of argv) {
        if (value[0] === '-') {
            lastKey = value.replace(/^-+/gu, '');
            lastValue = args[lastKey];
            if (lastValue instanceof Array) {
                lastValue.push(true);
            }
            else if (typeof lastValue !== 'undefined') {
                args[lastKey] = [lastValue, true];
            }
            else {
                args[lastKey] = true;
            }
        }
        else {
            lastValue = args[lastKey];
            if (lastValue instanceof Array) {
                if (typeof lastValue[lastValue.length - 1] === 'boolean') {
                    lastValue[lastValue.length - 1] = value;
                }
                else {
                    lastValue.push(value);
                }
            }
            else if (typeof lastValue === 'string') {
                args[lastKey] = [lastValue, value];
            }
            else {
                args[lastKey] = value;
            }
        }
    }
    return args;
}
export const info = console.info.bind(console);
/* *
 *
 *  Default Export
 *
 * */
export default {
    extractArguments,
    info
};
//# sourceMappingURL=Utilities.js.map
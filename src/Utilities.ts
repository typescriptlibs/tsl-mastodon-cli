/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library of the Mastodon CLI

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import * as Types from "./Types.js";


/* *
 *
 *  Functions
 *
 * */


export function extractArguments (
    argv: Array<string>
): Types.Arguments {
    const args: Types.Arguments = {};

    let lastKey = '$';
    let lastValue: Types.ArgumentValue;

    for ( const value of argv ) {

        if ( value[0] === '-' ) {

            lastKey = value.replace( /^-+/gu, '' );
            lastValue = args[lastKey];

            if ( lastValue instanceof Array ) {
                lastValue.push( true );
            }
            else if ( typeof lastValue !== 'undefined' ) {
                args[lastKey] = [lastValue, true];
            }
            else {
                args[lastKey] = true;
            }

        }
        else {

            lastValue = args[lastKey];

            if ( lastValue instanceof Array ) {
                if ( typeof lastValue[lastValue.length - 1] === 'boolean' ) {
                    lastValue[lastValue.length - 1] = value;
                }
                else {
                    lastValue.push( value );
                }
            }
            else if ( typeof lastValue === 'string' ) {
                args[lastKey] = [lastValue, value];
            }
            else {
                args[lastKey] = value;
            }

        }

    }

    return args;
}


export const info = console.info.bind( console );


/* *
 *
 *  Default Export
 *
 * */


export default {
    extractArguments,
    info
};

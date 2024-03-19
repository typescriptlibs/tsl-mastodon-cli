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


import * as Mastodon from 'tsl-mastodon-api';


/* *
 *
 *  Declarations
 *
 * */


export type Arguments = Record<string, ArgumentValue>;


export type ArgumentValue = ( boolean | string | Array<( boolean | string )> );


export interface Context {
    api: Mastodon.API;
    api2: Mastodon.API;
}

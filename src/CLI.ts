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


import * as FS from 'node:fs';

import * as Mastodon from 'tsl-mastodon-api';

import * as Status from './Status.js';

import * as Types from './Types.js';

import * as Utilities from './Utilities.js';


/* *
 *
 *  Constants
 *
 * */


export const HELP = `
npx tsl-mastodon-cli [COMMAND] [OPTIONS]

COMMAND:
  post-status  Posts a status to the timeline.

OPTIONS:
  --api        [str]  API address of the Mastodon server.
  --api2       [str]  API v2 address of the Mastodon server.
  --help -h           Show this help.
  --media      [str]  Media path.
  --text       [str]  Text string.
  --token      [hex]  API token.
  --version -v        Shows the CLI version.
  --visibility [str]  Post visibility: direct, private, public, unlisted.

`;


export const VERSION = JSON.parse(
    FS.readFileSync(
        new URL( '../package.json', import.meta.url ).href.substring( 7 ),
        'utf8'
    )
).version;


/* *
 *
 *  Functions
 *
 * */


export async function run (
    argv: Array<string>
): Promise<string> {
    const args = Utilities.extractArguments( argv );

    if ( args.h || args.help ) {
        return HELP;
    }

    if ( args.v || args.version ) {
        return VERSION;
    }

    const api = args.api || args.api2;
    const api2 = args.api2 || args.api;

    if (
        typeof api !== 'string' ||
        typeof api2 !== 'string'
    ) {
        throw new Error( 'API address missing.' );
    }

    const token = args.token;

    if ( typeof token !== 'string' ) {
        throw new Error( 'API token missing.' );
    }

    const context: Types.Context = {
        api: new Mastodon.API( {
            api_url: api,
            access_token: token,
            api_version: 1
        } ),
        api2: new Mastodon.API( {
            api_url: api2,
            access_token: token,
            api_version: 2
        } )
    };

    switch ( args.$ ) {
        case 'post-status':
            return await Status.postStatus( context, args );
        case undefined:
            throw new Error( 'Command missing.' );
        default:
            throw new Error( `Unknown command: ${args.$}` );
    }

}


/* *
 *
 *  Default Export
 *
 * */


export default {
    HELP,
    VERSION,
    run
};

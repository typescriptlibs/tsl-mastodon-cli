#!/usr/bin/env node
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library of the Mastodon CLI

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


'use strict';


/* *
 *
 *  Import
 *
 * */


import * as CLI from '../lib/index.js';


/* *
 *
 *  Runtime
 *
 * */


try {
    console.info( await CLI.run(
        process.argv.slice( process.argv0 === 'node' ? 2 : 0 )
    ) );
} catch ( error ) {
    console.error( error );
    process.exit( 1 );
}

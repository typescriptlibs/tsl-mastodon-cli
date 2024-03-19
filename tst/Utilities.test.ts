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

import * as CLI from 'tsl-mastodon-cli';

import test from '@typescriptlibs/tst';


/* *
 *
 *  Tests
 *
 * */


test( 'Utilities.extractArguments', async ( assert: test.Assert ) => {

    const args = CLI.Utilities.extractArguments( [
        '-z', '-z'
    ] );

    assert.deepStrictEqual(
        args.z,
        [true, true],
        '"z" argument should contain an array of booleans.'
    );

} );

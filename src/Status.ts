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

import * as Types from './Types.js';

import * as Utilities from './Utilities.js';


/* *
 *
 *  Functions
 *
 * */


export async function postStatus (
    context: Types.Context,
    args: Types.Arguments
): Promise<string> {
    let statusPost: Mastodon.JSON.StatusPost;

    if ( args.media ) {
        const mediums = (
            args.media instanceof Array ?
                args.media :
                [args.media]
        );
        const post: Mastodon.JSON.MediaStatusPost = {
            media_ids: []
        };

        for ( const media of mediums ) {
            const file = await Mastodon.Utilities.fileFrom( '' + media );

            Utilities.info( file.name, file.size + ' bytes' );

            const result = await context.api2.postMediaAttachment( {
                file
            }, true );

            post.media_ids.push( result.json.id );
        }

        if ( args.text ) {
            post.status = '' + args.text;
        }

        statusPost = post;
    }
    else {
        const post: Mastodon.JSON.TextStatusPost = {
            status: '' + args.text
        };

        statusPost = post;
    }

    if ( args.visibility ) {
        statusPost.visibility = ( '' + args.visibility ) as Mastodon.JSON.StatusVisibility;
    }

    const status = ( await context.api.postStatus( statusPost ) ).json as Mastodon.JSON.Status;

    return status.url || status.uri || status.id;
}


/* *
 *
 *  Default Export
 *
 * */


export default {
    postStatus
};

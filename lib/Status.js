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
import * as Utilities from './Utilities.js';
/* *
 *
 *  Functions
 *
 * */
export async function postStatus(context, args) {
    let statusPost;
    if (args.media) {
        const mediums = (args.media instanceof Array ?
            args.media :
            [args.media]);
        const post = {
            media_ids: []
        };
        for (const media of mediums) {
            const file = await Mastodon.Utilities.fileFrom('' + media);
            Utilities.info(file.name, file.size + ' bytes');
            const result = await context.api2.postMediaAttachment({
                file
            }, true);
            post.media_ids.push(result.json.id);
        }
        if (args.text) {
            post.status = '' + args.text;
        }
        statusPost = post;
    }
    else {
        const post = {
            status: '' + args.text
        };
        statusPost = post;
    }
    if (args.visibility) {
        statusPost.visibility = ('' + args.visibility);
    }
    const status = (await context.api.postStatus(statusPost)).json;
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
//# sourceMappingURL=Status.js.map
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library of the Mastodon CLI

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export declare const HELP = "\nnpx tsl-mastodon-cli [COMMAND] [OPTIONS]\n\nCOMMAND:\n  post-status  Posts a status to the timeline.\n\nOPTIONS:\n  --api        [str]  API address of the Mastodon server.\n  --api2       [str]  API v2 address of the Mastodon server.\n  --help -h           Show this help.\n  --media      [str]  Media path.\n  --text       [str]  Text string.\n  --token      [hex]  API token.\n  --version -v        Shows the CLI version.\n  --visibility [str]  Post visibility: direct, private, public, unlisted.\n\n";
export declare const VERSION: any;
export declare function run(argv: Array<string>): Promise<string>;
declare const _default: {
    HELP: string;
    VERSION: any;
    run: typeof run;
};
export default _default;

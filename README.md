TypeScript Library of the Mastodon CLI
======================================

TypeScript library to access a Mastodon server from command line and in shell scripts.



[![CodeQL](https://github.com/typescriptlibs/tsl-mastodon-cli/workflows/CodeQL/badge.svg)](https://github.com/typescriptlibs/tsl-mastodon-cli/actions/workflows/codeql.yml)
[![Node.js](https://github.com/typescriptlibs/tsl-mastodon-cli/workflows/Node.js/badge.svg)](https://github.com/typescriptlibs/tsl-mastodon-cli/actions/workflows/node.js.yml)
[![npm](https://img.shields.io/npm/v/tsl-mastodon-cli.svg)](https://www.npmjs.com/package/tsl-mastodon-cli)
[![license](https://img.shields.io/npm/l/tsl-mastodon-cli.svg)](https://github.com/typescriptlibs/tsl-mastodon-cli/blob/main/LICENSE.md)



Installation
------------

Run the following command for usage in NPM projects:

```Shell
npm install tsl-mastodon-cli
```

Run the following command for global installation:

```Shell
npm install --global tsl-mastodon-cli
```



Access Token
------------

You need an access token for communication with a Mastodon server.

1. Open your Mastodon website and go to the profile settings of the account.

2. In the profile settings open the section 'Development'.

3. Create a new application and use the related access token.



Examples
--------

```Shell
$ npx tsl-mastodon-cli post-status \
--api 'https://mastodon.example/api/v1/' \
--token 'ABC' \
--media 'animation.gif' \
--text 'Hello, World!' \
--visibility public
```



Avaliable Options
-----------------

The available options are not settled yet.
Please run `npx tsl-mastodon-cli --help` to get the latest overview.



Links
-----

* [github.com/typescriptlibs/tsl-mastodon-cli](https://github.com/typescriptlibs/tsl-mastodon-cli/releases)

* [npmjs.com/package/tsl-mastodon-cli](https://www.npmjs.com/package/tsl-mastodon-cli)

* [typescriptlibs.eu](https://typescriptlibs.eu/)

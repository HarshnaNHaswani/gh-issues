oclif-gh-issues
=================

oclif GitHub Issues CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @harshna/github-issues
$ issues COMMAND
running command...
$ issues (--version)
@harshna/github-issues/0.0.0 win32-x64 node-v16.13.0
$ issues --help [COMMAND]
USAGE
  $ issues COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`issues help [COMMAND]`](#issues-help-command)
* [`issues all`](#issues-all)
* [`issues create`](#issues-create)
* [`issues all`](#issues-add-reminder)
* [`issues plugins`](#issues-plugins)
* [`issues plugins:install PLUGIN...`](#issues-pluginsinstall-plugin)
* [`issues plugins:inspect PLUGIN...`](#issues-pluginsinspect-plugin)
* [`issues plugins:install PLUGIN...`](#issues-pluginsinstall-plugin-1)
* [`issues plugins:link PLUGIN`](#issues-pluginslink-plugin)
* [`issues plugins:uninstall PLUGIN...`](#issues-pluginsuninstall-plugin)
* [`issues plugins:uninstall PLUGIN...`](#issues-pluginsuninstall-plugin-1)
* [`issues plugins:uninstall PLUGIN...`](#issues-pluginsuninstall-plugin-2)
* [`issues plugins update`](#issues-plugins-update)




## `issues help [COMMAND]`

Display help for issues.

```
USAGE
  $ issues help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for issues.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.16/src/commands/help.ts)_

```

## `issues all  [COMMAND]`

USAGE
  $ issues all [-c <value>] [-f]

FLAGS
  -c, --columns=<value>  [NOT IMPLEMENTED] specify columns to be displayed: url, title, body, comments_url, labels, repository
  -f, --force

DESCRIPTION
  Get all your issues

EXAMPLES
  $ issues all
```
_See code: [dist/commands/all.ts](/dist/commands/all.js)_

## `issues create  [COMMAND]`
You can either use flags or arguments or a mix of both

If neither is provided, you'll be prompted for required fields (owner, repo, title)
```
USAGE
  $ issues create [OWNER] [REPO] [TITLE] [BODY] [-o <value>] [-r <value>] [-t <value>] [-b <value>] [-m <value>] [-l <value>] [-a <value>] [-f]

ARGUMENTS
  OWNER  owner of the issue
  REPO   GitHub repository
  TITLE  title of the issue
  BODY   content of the issue

FLAGS
  -a, --assignees=<value>  assignee1,assignee2 e.g. jKamala,petejames,
  -b, --body=<value>       content of the issue
  -f, --force
  -l, --labels=<value>     label1,label2: bug,good first issue,
  -m, --milestone=<value>  milestone of the issue
  -o, --owner=<value>      owner of the issue
  -r, --repo=<value>       GitHub repository
  -t, --title=<value>      title of the issue

DESCRIPTION
  create a new issue
  SYNTAX
  → issues create
  → issues create -a, --assignees=<value>, -b, --body=<value>,-f, --force,[ -l, --labels]=<value>, [-m|--milestone]=<value> [-o|--owner]=<value> [-r|--repo]=<value> [-t
  |--title]=<value>
  → issues create [OWNER] [REPO] [TITLE] [BODY]

EXAMPLES
  $ issues create
```
_See code: [dist/commands/create.ts](/dist/commands/create.js)_
## `issues add-reminder  [COMMAND]`

- See [Design.md](/design.md) to add one-time setup for google reminder 
- List  existing events
- adds event for all your current issues
- Needs update:
  * fix login error
  * customize start/end date
  * update existing event when this command is called again

```
USAGE
  $ issues add-reminder [-f]

FLAGS
  -f, --force

DESCRIPTION
  add reminder for your issues [BROKEN](error in auth)

EXAMPLES
  $ issues add-reminder
```
_See code: [dist/commands/add-reminder.ts](/dist/commands/add-reminder.js)_

## `issues plugins`

List installed plugins.

```
USAGE
  $ issues plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ issues plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

## `issues plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ issues plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ issues plugins add

EXAMPLES
  $ issues plugins:install myplugin 

  $ issues plugins:install https://github.com/someuser/someplugin

  $ issues plugins:install someuser/someplugin
```

## `issues plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ issues plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ issues plugins:inspect myplugin
```

## `issues plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ issues plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ issues plugins add

EXAMPLES
  $ issues plugins:install myplugin 

  $ issues plugins:install https://github.com/someuser/someplugin

  $ issues plugins:install someuser/someplugin
```

## `issues plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ issues plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ issues plugins:link myplugin
```

## `issues plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ issues plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ issues plugins unlink
  $ issues plugins remove
```

## `issues plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ issues plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ issues plugins unlink
  $ issues plugins remove
```

## `issues plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ issues plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ issues plugins unlink
  $ issues plugins remove
```

## `issues plugins update`

Update installed plugins.

```
USAGE
  $ issues plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`oex help [COMMAND]`](#oex-help-command)
* [`oex plugins`](#oex-plugins)
* [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
* [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
* [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
* [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
* [`oex plugins update`](#oex-plugins-update)

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin 

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

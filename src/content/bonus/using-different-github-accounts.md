---
title: 'Using multiple github accounts'
description: 'An explanation of the problem we encountered in class and how to solve it'
hasSlides: false
links: {
  'SSH config reference': 'https://www.ssh.com/academy/ssh/config',
  'Guide on using ssh with config': 'https://linuxize.com/post/using-the-ssh-config-file/'
}
---

## SSH config for multiple accounts

By default SSH looks for a config file under `~/.ssh/config`.

The content of this file follows the following general structure:

```
HOST hostname1
  SSH_OPTION value
  SSH_OPTION value

HOST hostname2
  SSH_OPTION value

HOST *
  SSH_OPTION value
```

In order to use multiple github accounts on the same computer,
we need to setup a dedicated `HOST` section for the repository that
belong to our alternate account:

```
HOST alt-github.com
  HostName github.com
  IdentityFile ~/.ssh/second-key.pub

HOST *
  IdentityFile ~/.ssh/regular-key.pub
```

The `HOST` identifier can be anything you want.

## Setup remote using the alt url

When cloning or adding remotes use the `alt-github.com` host instead of
the regular github url:

```bash
git remote add my-remote git@alt-github.com:path/to/repo
# OR
git clone git@alt-github.com:path/to/repo
```

This will ensure that when performing remote operations (`pull` and `push`),
SSH will use the correct key.

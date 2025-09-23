---
title: 'Homework 1'
description: 'Create your personal github page'
order: 1
hasSlides: false
links: {
}
---

## Homework requirements

> Setup your personal Github page.

1. Setup your environment to work with github (see below for specific instructions)
2. Create a new repository **on Github** with the name `{your-handle}.github.io`
3. Setup a local repository in your environment
4. Setup the github repo as a remote in your local repository
5. Create an index.html file with a "Hello world" greeting
6. Commit and push the index file
7. Make sure that the greeting is deployed to your github page at https://{your-handle}.github.io
8. **Every day for 5 days**:
    - make changes to the index file
    - commit the changes
    - push them to remote repository

### Suggestions

The contents of the page is NOT important for the course. The important part is to
practice using git daily - committing and pushing changes.

You can add multiple pages to your site and link them together - feel free to experiment
and apply knowledge from other courses.

Add a readme file that describes how your code works.

Use the `git status`, and `git log` command to examine your repository state and history.

Practice staging only part of the changes you've made. Try to write meaningful commit messages.

## Guide: Setup Github repository

1. Log into your Github profile
![empty github profile](/public/hw1/001-empty-github-profile.png)
(starting with an empty github profile is not required)

Before we create a our repository we will setup our authentication

2. Open your Github settings
![github settings](/public/hw1/002-settings.png)

We will use create BOTH a PAT (personal access token) and an SSH key.
This will allow you to push to the repositories through either HTTPS or SSH.

3. Add an classic access token with all repository scopes

> **COPY and SAVE your token**

![](/public/hw1/003-classic-tokens.png)
![](/public/hw1/004-repo-access.png)

4. In your environment, create an ssh key pair

On MacOS and Linux (including online terminal):
**See details about using the online terminal below**

```bash
ssh-keygen -t ed25519 -C "{your-email}"
```

On Window with `Git for Windows` using the bash console.
More details how to install git with bash for windows will be listed below.

```bash
ssh-keygen.exe -t ed25519 -C "{your-email}"
```

![generate-ssh-key](/public/hw1/create-ssh-key-pair.png)

The above commands will create 2 files in the `~/.ssh/` directory:

- `id_ed25519` - your private key - **DO NOT SHARE THIS**
- `id_ed25519.pub` - your public key - copy this to Github

5. Add the **public** key to Github

Open the SSH keys tab in your Github settings
![](/public/hw1/add-ssh-key-page.png)

Paste the full contents of the `id_ed25519.pub` file and save it
![](/public/hw1/add-ssh-key.png)

6. Create a repository named `{your-handle}.github.io`

![](/public/hw1/008-create-github-repo.png)

Next you need to setup your local repository.

## Setting up on your personal computer

**On Linux**, install `git` using your systems package manager. For example:

```bash
apt install git # for Debian / Ubuntu
pacman -Sy git # for Arch
dnf install git # for Fedora
```

**On MacOS**, use `brew` to install git, or download and install it through the [git website](https://git-scm.com/downloads)

```bash
brew install git
```

**On Window**, install git and git bash from the [git website](https://git-scm.com/downloads)
![install git](/public/hw1/windows-install-git.png)

After installation, git bash should appear in your start menu
![find git bash in start menu](/public/hw1/windows-start-git-bash.png)

Git bash provides a decent way of using bash and git on Windows
![run git bash](/public/hw1/windows-git-bash.png)

## Setup a local repository

1. Use the instructions above to create an SSH key pair

3. Create a local repository, create an `index.html` file and commit it

![](/public/hw1/007-config-and-commit.png)

4. Add the Github repository as a remote

There are 2 options:

- SSH
- HTTPS

When using `HTTPS`, setup the remote using the command:

```bash
git remote add github https://{your-handle}:{your-PAT}@github.com/{your-handle}/{your-handle}.github.io.git
```

See [HTTPS repository with PAT](https://stackoverflow.com/questions/18935539/authenticate-with-github-using-a-token) for more details

If you are using `SSH`, add the remote with this command:

```bash
git remote add github git@github.com:{your-handle}/{your-handle}.github.io.git
```

5. Push too the remote repository

![](/public/hw1/009-push-to-remote.png)

Verify the commit has been pushed on the repository page
![](/public/hw1/010-see-commit-github.png)

6. Enable `Github Pages` in the repository's Github settings

![github pages settings](/public/hw1/011-github-pages.png)
(this might be enabled by default, should look like the picture above)

7. Open your personal github site at https://{your-handle}.github.io
![](/public/hw1/012-visit-page.png)

## Specifics of using the online terminal

> **WARNING**: The online terminal linked in this site is a good way to play around, but it is
> NOT suitable for daily, repeated use. Each time you refresh the page, all your files
> and settings WILL BE LOST.
>
> Use it only as a last resort, if you are unable to setup your own environment.

1. Enable networking

The emulated VM comes with a handy script to enable internet access from within the virtual machine:

```bash
./networking.sh
```

![](/public/hw1/005-start-networking.png)

2. Follow the guide for creating a local repository from above

If you create your SSH keys in the online terminal, **DOWNLOAD BOTH your keys** so you can reuse it later.

![](/public/hw1/download-file-from-online-terminal.png)

### For repeated use of the online terminal

1. Copy your **private** key to the online terminal using the upload / download widget on the page

![](/public/hw1/download-file-from-online-terminal.png)

2. Clone your existing github repository

![github repo clone ui](/public/hw1/get-clone-url.png)

> If you choose to use HTTPS, you will need to alter the URL to include authentication as shown above

3. Make changes and deploy them to Github

Use `git add`, `git commit` and `git push`

> Unfortunately, you will need to repeat this every time your refresh the online terminal.

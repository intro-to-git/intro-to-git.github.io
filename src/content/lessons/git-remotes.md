---
title: 'Working with remote repositories'
description: "Remote repositories are copies of the same repository in different locations"
order: 5
state: 'upcoming'
tags: ['git']
links: {
  'Working with remotes': 'https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes',
  'Comparison of git hosting services': 'https://www.git-tower.com/blog/git-hosting-services-compared',
}
---

## Short recap

- Git commands are local-first

- Commit often and write good commit messages

- Be careful with commands that can permanently delete files

---

<class-note>

This section will mention branches, but will NOT explain them in any detail.
Don't panic! We will focus on them in the next section.

</class-note>

---

## Remote Repositories

A **remote repository** is a independent version of the project hosted somewhere else (like GitHub, GitLab, or Bitbucket).

It enables collaboration and serves as a backup.

---

### Local vs Remote

![remote-example](https://git-scm.com/book/en/v2/images/remote-branches-1.png)

---

## Remote does NOT mean online

You can clone a local repository into another local directory.

The clone will have the original repo set as its **origin remote**.

> This can be very useful for experimentation without requiring
> an internet connection or more complicated setups.

---

### Common Online Hosting Services

- **GitHub** - Most popular, great for open source
- **GitLab** - Good for enterprise, built-in CI/CD
- **Bitbucket** - Integrates well with Atlassian tools
- **Azure DevOps** - Microsoft's solution
- **Self-hosted** - Your own server

---

## Cloning

The main way to start using remote repositories is by cloning.

Every time you clone a project from github, your local copy has
the original as its **origin remote**.

```bash
git clone https://github.com/user/repo.git
```

---

By default git will clone into the current directory,
creating a directory with the repository's name.

You can provide a different local path:
```bash
git clone https://path/to/repo /path/to/local/clone
```

---

## Adding a Remote

You can add any number of additional remotes:

```bash
# Add a remote repository
git remote add test-server ssh://user@host/srv/project

# List remotes
git remote -v

# Show detailed remote info
git remote show origin
```

---

### Network protocols

Git supports a number of protocols:

- file (local)
- https
- ssh
- git (bespoke)

> We will explore the specifics of these in a later section.

---

### Common Remote Names

- **origin** - Default name for the remote repository that was cloned
- **upstream** - Often used for the original repository when you've forked
- **fork** - Sometimes used for your fork of someone else's repository

> Remote names are local to your repository, choose names that make sense for you.

---

## Fetching and Pulling

```bash
# Download changes without merging
git fetch

# Download and merge changes
# from a specific remote and branch
git pull origin main

# Pull with rebase instead of merge
git pull --rebase origin main
```

---

## Pushing to Remote

```bash
# Push current branch to remote
git push

# Push current branch (may be any)
# to the main branch on the remote
git push origin main

# Push and set upstream tracking
git push -u origin feature-branch

# Push all branches
git push origin --all
```

---

## Tracking Remote Branches

```bash
# See all branches (local and remote)
git branch -a

# Create local branch that tracks remote
git checkout -b feature-branch origin/feature-branch

# Simplified version (Git 2.23+)
# Auto-tracks if remote exists
git switch feature-branch
```

---

## Working with Remote Branches

```bash
# Create local branch 
git checkout -b new-feature

# make changes, commit and push to remote
git push -u origin new-feature

# Delete remote branch
git push origin --delete old-feature

# Update remote tracking branches
git fetch --prune
```

---

## Branch Lifecycle

1. **Create** branch from up-to-date main
2. **Work** on feature with regular commits
3. **Test** thoroughly before merging
4. **Request** code review
5. **Merge** to main after approval
6. **Delete** feature branch after merge
7. **Update** local main branch

---

<class-work>

### Create your personal github.io page

1. Create a repository on Github with the name `{username}.github.io`
2. Clone this repository locally
3. Create and commit an `index.html` file with some content
4. Push your changes to the remote repository
5. Enable Github pages for your repository through the `Settings` tab

> Useful link: [GitHub Pages Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

</class-work>

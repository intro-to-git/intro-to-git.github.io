---
title: 'Exploring git workflows'
description: 'There are many strategies for working on real-world projects'
order: 10
state: 'upcoming'
tags: ['git']
links: {
  'GitHub Collaboration Guide': 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests',
  'Git Flow Workflow': 'https://nvie.com/posts/a-successful-git-branching-model/',
  'Atlassian Git Tutorials': 'https://www.atlassian.com/git/tutorials/using-branches',
  'GitHub Flow Guide': 'https://guides.github.com/introduction/flow/',
}
---

Workflows are a set of rules / guidelines that prescribe how git should be used.

Workflows can apply across projects, teams or organizations.

---

Workflows can include:

- Commit message formatting rules
- Automated tooling (linters, tests)
- Branching strategy
- Collaboration strategy
- Release strategy

---

Git workflows vary greatly depending on:

- Number of developers
- Number of repositories
- Security concerns
- Infrastructure & Tooling
- Knowledge & culture

---

## Branching strategies

Branching strategies focus on how developers synchronize changes
in a structured way.

---

## Trunk-based

Everyone directly contributes to the main branch

- **PRO**: very simple and easy to just start working.

- **CON**: Can lead to frequent conflicts when developers makes changes to
the same parts of the project

---

## Feature branches

New features are developed on their own branch.

- **PRO**: keeps development isolated, conflicts only happen after a big merge
- **CON**: stacking feature branches can lead to complex merge trains

> **GOOD PRACTICE**: update feature branches often by merging main into them

---

## Git flow

A branching strategy meant to provide structure and clarity in complex projects.

Gitflow prescribes the following branches:

- **main** - Production-ready code
- **develop** - Integration branch
- **feature/{name}** - New features
- **release/{number}** - Preparing releases
- **hotfix/{ticket}** - Emergency fixes

---

## Choosing a branching strategy

For beginners and small teams, feature branches are often the sweet spot - more organized than trunk-based but simpler than Gitflow.

---

For large projects with complex versioning and release cycles, *something like* Gitflow can be very valuable in providing a clear structure.

---

## Pull vs merge requests

The 2 terms are functionally identical - a request for a second person to review and approve the changes before merging.

<bonus-content>

The pedantic difference is in where the code is hosted:

- **Pull** request - implies another remote repository (often called a `fork`)
- **Merge** request - implies just a branch in the same repository

> This is related to git's lack of fine grained permissions within a repository.

</bonus-content>

---

## Pull/merge requests vs direct merge

Pull/merge requests are not required when working on a shared repository.

You can merge into main locally and push the resulting commits manually.

> There is no point in using PRs, when working alone on a personal project.

---

However pull requests provide an explicit way for review, discussion and approval.

Most git hosting providers have additional tools and controls to make reviews mandatory.

---

## High level setups

Branching is one part of a full setup.

Another other major factor is the number of repository copies and who has access to
contribute.

---

## Personal hosted repository

The simplest workflow *(aside from just using git locally)*. Perfect for personal projects.

- Branching strategy can be as simple as `push to main` (trunk-based).

- Repository can be hosted on any of the popular providers (e.g GitHub).

- Hosted repo is accessible from anywhere in the world.

---

## Private git server

Self-hosted git on a physical server or VPS.
Perfect for small projects and homelab setups.

- Allows greater flexibility and privacy.

- Requires more technical knowledge and support.

---

## Shared repository

This is probably the most common setup - a team working on a shared repository.

Branching strategy can vary, but usually relies on
`feature branches` and `pull requests`.

![shared repository](https://git-scm.com/book/en/v2/images/centralized_workflow.png)

---

## Integration manager

A more complex fork-based setup, more popular among large open-source projects.

![integration manager](https://git-scm.com/book/en/v2/images/integration-manager.png)

---

- Developers maintain their own forks

- An integration manager pulls and merges changes from them

- Only the integration manager pushes to the `blessed repository`

- The integration manager schedules when things get merged

---

## benevolent dictator

An even more complex setup, only suitable for truly big projects - such as the Linux Kernel.

![benevolent dictator](https://git-scm.com/book/en/v2/images/benevolent-dictator.png)

---

It is similar to the integration manager setup but with an intermediate layer of `lieutenants`
that collate changes from multiple contributors.

- The dictator only pulls from the lieutenants

- Only the dictator pushed to the blessed repository

- Everyone pulls from the blessed repository as the source of truth for the project

---

## Git is flexible

These workflow examples are **NOT** set in stone.

Teams are encouraged to iterate and establish a workflow
that best fits their goals, environment and work-style.

---

## Centralized vs decentralized

- **Centralized** setups are more applicable within a single company
where all developers are trusted. Mono-repos can be seen as an extension of
this setup.

---

- **Decentralized** setups are more useful within open source, where the main owner
of the projects wants to maintain control, while allowing anyone in the world
to contribute.

---

## Local Merging Workflow Example

```bash
# Start with a up-to-date main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature-contact-form

# Do work and commit
echo "<form>Contact Form</form>" > contact.html
git add contact.html
git commit -m "feat: add contact form"
```

---

```bash
# Push feature branch to remote
git push -u origin feature-contact-form

# When feature is complete, merge back
git checkout main
git pull origin main
git merge feature-contact-form

# push the merged feature to the remote
git push origin main
```

---

## Merge Request Example

Instead of merging directly, most teams use Pull / Merge Requests for code review:

```bash
# 1. Create feature branch
git checkout -b feature-user-authentication

# do work ...

# commit and push
git commit -m "feat: added google login option"
git push -u origin feature-user-authentication

# 2. Create Pull Request through
# GitHub's web interface
```

---

During the review team members can request changes, suggest improvements
or spot bugs.

```bash
# 3. Other team member reviews the code

# 4. Once approved, merge through web interface

# 5. Pull the merged changes locally
git checkout main
git pull origin main

# delete the merged branch locally
git branch -d feature-user-authentication
```

---

## Forking Workflow Example

Same as with the Merge request, but the feature branch is hosted in a **separate** remote repo:

```bash
# 1. Fork repository on GitHub and clone your fork
git clone github/yourusername/forked-project.git

# 2. Create feature branch and work
git checkout -b fix-bug

# 3. Push to YOUR fork
git push origin fix-bug

# 4. Create Pull Request
# from your fork to the original
```

---

## Best Practices

- Have a well structured `README` file

- Setup a `.gitignore` based on your language and tooling

- Fetch `main` often and merge it into your feature branch
(to avoid big conflicts)

- Make sure to **NOT** commit and push secrets

---

## Pull request etiquette

- When contributing to a project, always respect
the project's guidelines! (usually found in a `CONTRIBUTING.md` file)

- Do NOT make trivial changes that nobody asked for.

- Do NOT demand from project owners to prioritize your contributions.

- Be polite and respectful in discussions.

---

<class-work>

### Create your first Pull request

1. Fork and clone the repository for the [class slides](https://github.com/intro-to-git/intro-to-git.github.io/)

2. Create a branch called `{your-github-handle}`

3. Add your Github handle to the `students.md` file

4. Commit and push to **your** fork

5. Open a Pull request from your fork to the main repository

</class-work>

<bonus-content>

## Fuller workflow example

```bash
# 1. Setup
mkdir team-project
cd team-project
git init
echo "# Team Project" > README.md
git add README.md
git commit -m "initial project setup"

# 2. Create remote repository on GitHub and connect
git remote add origin https://github.com/yourusername/team-project.git
git push -u origin main

# 3. Create feature branch
git checkout -b feature-user-profile
echo "<div>User Profile Component</div>" > profile.html
echo "body { margin: 0; }" > styles.css
git add .
git commit -m "feat: add user profile component and basic styles"

# 4. Continue development
echo "<script>console.log('Profile loaded');</script>" >> profile.html
git add profile.html
git commit -m "feat: add profile loading feedback"

# 5. Push feature branch
git push -u origin feature-user-profile

# 6. Simulate main branch changes (like from another developer)
git checkout main
echo "console.log('App initialized');" > app.js
git add app.js
git commit -m "feat: add app initialization"
git push origin main

# 7. Update feature branch with latest main
git checkout feature-user-profile
git merge main

# 8. Complete feature and merge
git checkout main
git pull origin main  # Get any other changes
git merge feature-user-profile
git push origin main

# 9. Clean up
git branch -d feature-user-profile
git push origin --delete feature-user-profile
```

</bonus-content>

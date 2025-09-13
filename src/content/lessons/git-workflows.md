---
title: 'Exploring git workflows'
description: 'There are many strategies for working on real-world projects'
order: 10
state: 'draft'
tags: ['git']
links: {
  'GitHub Collaboration Guide': 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests',
  'Git Flow Workflow': 'https://nvie.com/posts/a-successful-git-branching-model/',
  'Atlassian Git Tutorials': 'https://www.atlassian.com/git/tutorials/using-branches',
  'GitHub Flow Guide': 'https://guides.github.com/introduction/flow/',
}
---
### Practical Remote Workflow

```bash
# Start with a clean main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature-contact-form

# Do work and commit
echo "<form>Contact Form</form>" > contact.html
git add contact.html
git commit -m "feat: add contact form"

# Push feature branch to remote
git push -u origin feature-contact-form

# When feature is complete, merge back
git checkout main
git pull origin main  # Get latest changes
git merge feature-contact-form
git push origin main

# Clean up
git branch -d feature-contact-form
git push origin --delete feature-contact-form
```

---

## Collaboration Workflows

### Centralized Workflow

Simple workflow where everyone works on the same branch:

```
Developer A: main ---A1---A2---A3---merge
Developer B: main ---B1---B2---merge---B3
```

### Feature Branch Workflow

Each new feature gets its own branch:

```
main:        A---B---C---G---H
              \     /     \
feature-1:     D---E       \
                            \
feature-2:                   F---I
```

### Gitflow Workflow

More complex with specific branch types:

- **main** - Production-ready code
- **develop** - Integration branch
- **feature/** - New features
- **release/** - Preparing releases
- **hotfix/** - Emergency fixes

<bonus-content>

<class-note>

For beginners and small teams, Feature Branch Workflow is often the sweet spot - more organized than Centralized but simpler than Gitflow.

</class-note>

</bonus-content>

---

## GitHub/GitLab Integration

### Pull Requests / Merge Requests

Instead of merging directly, most teams use Pull Requests (GitHub) or Merge Requests (GitLab) for code review:

```bash
# 1. Create feature branch and push
git checkout -b feature-user-authentication
# ... do work ...
git push -u origin feature-user-authentication

# 2. Create Pull Request on GitHub web interface
# 3. Team reviews code
# 4. Merge through web interface
# 5. Pull the merged changes locally
git checkout main
git pull origin main
git branch -d feature-user-authentication
```

### Forking Workflow

For open source projects:

```bash
# 1. Fork repository on GitHub (creates your copy)
# 2. Clone your fork
git clone https://github.com/yourusername/project.git

# 3. Add original repository as upstream
git remote add upstream https://github.com/originalowner/project.git

# 4. Create feature branch and work
git checkout -b fix-typo

# 5. Push to your fork
git push origin fix-typo

# 6. Create Pull Request from your fork to original repository
```

---

## Common Workflows and Patterns

### Daily Development Routine

```bash
# Morning routine
git checkout main
git pull origin main

# Start new feature
git checkout -b feature-new-dashboard
# ... work throughout day with commits ...

# End of day
git push -u origin feature-new-dashboard

# Next day - get latest changes
git checkout main
git pull origin main
git checkout feature-new-dashboard
git rebase main  # Optional: keep branch up to date
```

### Release Preparation

```bash
# Create release branch
git checkout -b release/v1.2.0

# Make version updates and final tweaks
git commit -m "bump version to 1.2.0"

# Merge to main
git checkout main
git merge release/v1.2.0
git tag v1.2.0
git push origin main --tags

# Clean up
git branch -d release/v1.2.0
```

---

## Troubleshooting Common Issues

### "Branch is X commits behind main"

```bash
# Option 1: Merge main into feature
git checkout feature-branch
git merge main

# Option 2: Rebase feature onto main (cleaner)
git checkout feature-branch
git rebase main
```

### "Your branch and origin/main have diverged"

```bash
# See what happened
git log --oneline --graph --all

# Usually need to pull with merge or rebase
git pull origin main
# or
git pull --rebase origin main
```

### Accidentally Committed to Wrong Branch

```bash
# Move last commit to correct branch
git checkout correct-branch
git cherry-pick wrong-branch
git checkout wrong-branch
git reset --hard HEAD~1
```

### Lost Work After Branch Switch

```bash
# Find lost commits
git reflog

# Recover lost work
git checkout <commit-hash>
git checkout -b recovered-work
```

---

## Remote Repository Best Practices

### Repository Setup

```bash
# Initialize with README and .gitignore
git init
git add README.md .gitignore
git commit -m "initial commit"

# Connect to remote
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### Keeping Forks Updated

```bash
# Add upstream remote (original repository)
git remote add upstream https://github.com/original/repo.git

# Fetch upstream changes
git fetch upstream

# Update your main branch
git checkout main
git merge upstream/main
git push origin main
```

### Security Considerations

```bash
# Use SSH keys instead of HTTPS for frequent access
git remote set-url origin git@github.com:username/repo.git

# Never commit secrets
echo ".env" >> .gitignore
echo "config/secrets.json" >> .gitignore

# Use signed commits for important repositories
git config --global commit.gpgsign true
```

---

## Hands-On Exercise

Let's practice a complete branch and remote workflow:

### Exercise: Feature Development Simulation

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

---

## Advanced Remote Operations

### Multiple Remotes

```bash
# Add multiple remotes
git remote add upstream https://github.com/original/repo.git
git remote add fork https://github.com/yourfork/repo.git

# Push to specific remote
git push upstream main
git push fork feature-branch

# Fetch from all remotes
git fetch --all
```

### Remote Branch Management

```bash
# List remote branches
git branch -r

# Prune deleted remote branches
git remote prune origin

# Set upstream for existing branch
git branch --set-upstream-to=origin/main main
```

---

---
title: 'Fixing common problems within git'
description: 'Examples of problematic situations and how to fix them'
hasSlides: false
links: {
}
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

---

### "Your branch and origin/main have diverged"

```bash
# See what happened
git log --oneline --graph --all

# Usually need to pull with merge or rebase
git pull origin main
# or
git pull --rebase origin main
```

---

### Accidentally Committed to Wrong Branch

```bash
# Move last commit to correct branch
git checkout correct-branch
git cherry-pick wrong-branch
git checkout wrong-branch
git reset --hard HEAD~1
```

---

### Lost Work After Branch Switch

```bash
# Find lost commits
git reflog

# Recover lost work
git checkout <commit-hash>
git checkout -b recovered-work
```


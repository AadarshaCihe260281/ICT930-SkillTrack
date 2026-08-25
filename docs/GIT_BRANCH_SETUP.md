# Git Branch Setup

Recommended branch names:

- `main`
- `member1`
- `member2`
- `member3`

Suggested responsibilities for the enhanced version:

- `member1`: layout, navbar/logo, Home, responsive UI, Roadmap
- `member2`: course data, course pages, search, filters, async loading/error handling
- `member3`: Context API, dashboard, progress, achievements, quiz, certificate, profile

After creating the GitHub repository:

```bash
git init
git add .
git commit -m "chore: initialise SkillTrack frontend"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main

git checkout -b member1
git push -u origin member1

git checkout main
git checkout -b member2
git push -u origin member2

git checkout main
git checkout -b member3
git push -u origin member3
```

Create pull requests from each member branch into `main`. Use real commit messages and evidence for the contribution statement.

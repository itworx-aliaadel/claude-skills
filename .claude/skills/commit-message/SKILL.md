---
name: commit-message
description: Analyzes uncommitted changes, stages files, and generates a formatted Conventional Commit message.
---

## Git State
! `git status`
! `git diff --cached`

## Instructions
1. If no files are staged, review your modified files and use `git add` to stage the logical units of work.
2. Analyze the `git diff` for your staged changes.
3. Generate a commit message strictly following the Conventional Commits specification:
   `<type>(<optional scope>): <description>`
   
   Common types include:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `test`: Adding missing tests or correcting existing tests

4. For complex changes, add a blank line followed by a bulleted list explaining *why* the changes were made in the body of the commit.
5. Execute the commit using `git commit -m`.
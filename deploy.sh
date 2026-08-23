#!/bin/sh
# Rebuild the site and publish it to GitHub Pages.
# Usage: ./deploy.sh "what you changed"
set -e
cd "$(dirname "$0")"

# Regenerate every page from build/ before committing, so the HTML in the repo
# can never drift from the templates and content that produced it.
echo "Building..."
node build.js

# Commit first. Pulling with a dirty tree fails, and the Pages settings UI
# commits CNAME changes straight to the remote, so a pull is always needed
# before pushing or the push is rejected as a non-fast-forward.
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "${1:-Update site}"
else
  echo "No changes to commit."
fi

echo "Syncing with GitHub..."
git pull --rebase --quiet origin main

if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ]; then
  echo "Already up to date. Nothing to push."
  exit 0
fi

git push --quiet origin main
echo "Pushed. GitHub Pages rebuilds in about a minute: https://aedifico.studio/"

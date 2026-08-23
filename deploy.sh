#!/bin/sh
# Publish the current working tree to GitHub Pages.
# Usage: ./deploy.sh "what you changed"
set -e
cd "$(dirname "$0")"
git add -A
git commit -m "${1:-Update site}"
git push origin main
echo "Pushed. GitHub Pages rebuilds in about a minute: https://aedifico.studio/"

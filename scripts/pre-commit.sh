#!/bin/sh
set -e

echo "🧹 Running ESLint and Prettier before commit..."
npm run lint:fix
npm run format

echo "✅ Pre-commit checks passed."

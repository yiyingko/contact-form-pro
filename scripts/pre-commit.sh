#!/bin/sh
echo "🧹 Running ESLint and Prettier before commit..."

npm run lint:fix && npm run format

if [ $? -ne 0 ]; then
  echo "❌ Commit aborted: Lint or format failed."
  exit 1
fi

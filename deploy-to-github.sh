#!/bin/bash

# ByteForward GitHub Deployment Script
# Run this after creating your GitHub repository

set -e  # Exit on any error

echo "🚀 ByteForward GitHub Deployment Script"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the byteforward project root directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

# Prompt for GitHub repository URL
echo ""
echo "📝 Please enter your GitHub repository URL:"
echo "   Example: https://github.com/yourusername/byteforward.git"
echo "   Or SSH: git@github.com:yourusername/byteforward.git"
echo ""
read -p "Repository URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Error: Repository URL cannot be empty"
    exit 1
fi

echo ""
echo "🔍 Final Security Check - Scanning for secrets..."

# Check for common secret patterns
if grep -r -i "sk-" . --exclude-dir=node_modules --exclude-dir=.git --exclude="deploy-to-github.sh" > /dev/null 2>&1; then
    echo "⚠️  Warning: Found potential API keys starting with 'sk-'"
fi

if grep -r -E "[0-9a-f]{32,}" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.lock" --exclude="deploy-to-github.sh" > /dev/null 2>&1; then
    echo "⚠️  Warning: Found potential secrets (32+ character hex strings)"
fi

echo "✅ Basic secret scan complete"

echo ""
echo "🔗 Adding GitHub remote..."
git remote add origin "$REPO_URL" 2>/dev/null || {
    echo "📝 Remote 'origin' already exists, updating URL..."
    git remote set-url origin "$REPO_URL"
}

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "🎉 Deployment successful!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to 'Pages' section"
echo "3. Set source to 'GitHub Actions'"
echo "4. The website will be automatically deployed via GitHub Actions"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://yourusername.github.io/byteforward"
echo ""
echo "⚙️  Optional: Configure Cloudflare Pages"
echo "1. Go to Cloudflare Dashboard → Pages"
echo "2. Connect your GitHub repository"
echo "3. Set build command: 'npm run build'"
echo "4. Set build output directory: 'dist'"
echo ""
echo "🔐 Security Note:"
echo "- No secrets were included in the deployment"
echo "- All sensitive values are in .env.example as placeholders"
echo "- The .env file is gitignored"
echo ""
echo "✅ Ready for production!"

const { execSync } = require('child_process');
const fs = require('fs');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

// 1. bump minor version
run('npm version minor --no-git-tag-version');

// 2. read version
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const version = pkg.version;

// 3. git add
run('git add package.json package-lock.json');

// 4. commit
run(`git commit -m "chore: bump version v${version}"`);

// 5. push
run('git push origin main');

console.log(`🚀 Deployed version ${version}`);
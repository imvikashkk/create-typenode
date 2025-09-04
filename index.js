#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function showBanner() {
  console.log(`
${colors.blue}${colors.bold}
╔═══════════════════════════════════════╗
║         CREATE-TYPENODE 🚀            ║
║   TypeScript + Node.js Scaffolder     ║
╚═══════════════════════════════════════╝
${colors.reset}
  `);
}

function checkNodeVersion() {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split(".")[0]);

  if (majorVersion < 22) {
    log(`❌ Node.js version ${nodeVersion} is not supported.`, "red");
    log(`📋 Required: Node.js v22.19.0 or higher`, "yellow");
    log(`📥 Please upgrade Node.js: https://nodejs.org/`, "blue");
    process.exit(1);
  }

  log(`✅ Node.js ${nodeVersion} - Compatible!`, "green");
}

function validateProjectName(name) {
  if (!name || name.trim() === "") {
    return false;
  }

  // Allow '.' for current directory
  if (name === ".") {
    return true;
  }

  if (!/^[a-z0-9-_.]+$/i.test(name)) {
    log("❌ Invalid project name!", "red");
    log(
      "📋 Use only letters, numbers, hyphens, underscores, and dots",
      "yellow"
    );
    return false;
  }

  return true;
}

// Create readline interface for user input
function createReadlineInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

// Prompt user for project name
function promptForProjectName(rl) {
  return new Promise((resolve) => {
    log("📝 Where do you want to create your TypeScript project?", "cyan");
    log("💡 Options:", "blue");
    log('   • Enter a folder name (e.g., "my-app")', "yellow");
    log('   • Enter "." to use current directory', "yellow");
    log('   • Press Enter to use default name "typenode-project"', "yellow");
    console.log("");

    rl.question(
      `${colors.cyan}📁 Project location: ${colors.reset}`,
      (answer) => {
        const input = answer.trim();

        if (input === "") {
          resolve("typenode-project");
        } else if (input === ".") {
          resolve(".");
        } else {
          resolve(input);
        }
      }
    );
  });
}

function copyTemplate(
  templatePath,
  targetPath,
  projectName,
  isCurrentDir = false
) {
  if (!fs.existsSync(templatePath)) {
    log("❌ Template directory not found!", "red");
    process.exit(1);
  }

  // Create target directory if not current directory
  if (!isCurrentDir) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  // Copy all files recursively
  function copyDir(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyDir(srcPath, destPath);
      } else {
        let content = fs.readFileSync(srcPath, "utf8");

        // Replace placeholder project name in package.json
        if (entry.name === "package.json") {
          const actualProjectName = isCurrentDir
            ? path.basename(process.cwd())
            : projectName;
          content = content.replace(
            /"name": "create-typenode"/,
            `"name": "${actualProjectName}"`
          );
        }

        fs.writeFileSync(destPath, content);
      }
    }
  }

  copyDir(templatePath, targetPath);
}

function checkCurrentDirEmpty() {
  const files = fs.readdirSync(process.cwd());
  const importantFiles = files.filter(
    (file) =>
      !file.startsWith(".") &&
      file !== "node_modules" &&
      !["README.md", "LICENSE", ".gitignore"].includes(file)
  );

  return importantFiles.length === 0;
}

function promptForCurrentDirInstall(rl) {
  return new Promise((resolve) => {
    const currentDir = path.basename(process.cwd());
    log(`⚠️  Current directory "${currentDir}" is not empty!`, "yellow");
    log("📁 Contents will be mixed with template files.", "yellow");
    console.log("");

    rl.question(
      `${colors.cyan}Continue anyway? (y/N): ${colors.reset}`,
      (answer) => {
        const response = answer.toLowerCase().trim();
        resolve(response === "y" || response === "yes");
      }
    );
  });
}


function ignoreFilesRenaming(targetPath) {
  const gi = path.join(targetPath, "gitignore");
  const dotGi = path.join(targetPath, ".gitignore");
  if (fs.existsSync(gi)) {
    try { fs.renameSync(gi, dotGi); }
    catch { fs.writeFileSync(dotGi, fs.readFileSync(gi, "utf8"), "utf8"); fs.unlinkSync(gi); }
  }
}


function installDependencies(projectPath) {
  log("📦 Installing dependencies...", "yellow");

  try {
    const currentDir = process.cwd();
    process.chdir(projectPath);
    execSync("npm install", { stdio: "inherit" });
    log("✅ Dependencies installed successfully!", "green");
    process.chdir(currentDir);
  } catch (error) {
    log("❌ Failed to install dependencies:", "red");
    log(error.message, "red");
    log("💡 You can install them manually by running: npm install", "yellow");
  }
}

function showSuccessMessage(projectName, isCurrentDir = false) {
  const dirName = isCurrentDir ? "." : projectName;
  const cdCommand = isCurrentDir ? "" : `cd ${projectName}`;

  console.log(`
${colors.green}${colors.bold}🎉 Project created successfully!${colors.reset}

${colors.blue}📁 Location: ${colors.bold}${
    isCurrentDir ? "Current directory" : projectName
  }${colors.reset}
${colors.blue}📋 Next steps:${colors.reset}

  ${cdCommand ? `${colors.yellow}${cdCommand}${colors.reset}` : ""}
  ${colors.yellow}npm run dev${colors.reset}        # Start development server
  ${colors.yellow}npm run build${colors.reset}      # Build for production
  ${colors.yellow}npm run start${colors.reset}      # Run production build

${colors.blue}📚 Available Scripts:${colors.reset}
  ${colors.green}npm run dev${
    colors.reset
  }         - Development with hot reload
  ${colors.green}npm run build${colors.reset}       - Production build
  ${colors.green}npm run start${colors.reset}       - Run production server
  ${colors.green}npm run lint${colors.reset}        - Check code style
  ${colors.green}npm run format${colors.reset}      - Format code
  ${colors.green}npm run check${colors.reset}       - Run all checks

${colors.blue}🚀 Happy coding!${colors.reset}
  `);
}

async function main() {
  showBanner();

  // Check Node.js version
  checkNodeVersion();

  // Get project name from command line arguments
  let projectName = process.argv[2];
  let rl;

  // If no project name provided, prompt for it
  if (!projectName) {
    rl = createReadlineInterface();
    projectName = await promptForProjectName(rl);
  }

  // Validate project name
  if (!validateProjectName(projectName)) {
    if (rl) rl.close();
    log("❌ Invalid project name provided!", "red");
    process.exit(1);
  }

  const currentDir = process.cwd();
  let targetPath;
  let isCurrentDir = false;

  // Handle current directory installation
  if (projectName === ".") {
    isCurrentDir = true;
    targetPath = currentDir;

    // Check if current directory is empty
    if (!checkCurrentDirEmpty()) {
      if (!rl) rl = createReadlineInterface();
      const shouldContinue = await promptForCurrentDirInstall(rl);

      if (!shouldContinue) {
        log("❌ Installation cancelled by user.", "yellow");
        rl.close();
        process.exit(0);
      }
    }

    log(`🏗️  Setting up TypeScript project in current directory`, "blue");
  } else {
    targetPath = path.join(currentDir, projectName);

    // Check if directory already exists
    if (fs.existsSync(targetPath)) {
      log(`❌ Directory "${projectName}" already exists!`, "red");
      log(
        "💡 Please choose a different name or remove the existing directory",
        "yellow"
      );
      if (rl) rl.close();
      process.exit(1);
    }

    log(`🏗️  Creating project: ${projectName}`, "blue");
  }

  // Close readline interface
  if (rl) rl.close();

  try {
    // Template should be in the same directory as this script
    const templatePath = path.join(__dirname, "template");

    // Copy template files
    log("📂 Copying template files...", "yellow");
    copyTemplate(templatePath, targetPath, projectName, isCurrentDir);
    log("✅ Template files copied!", "green");

    // Rename .___ignore -> .___ignore
    ignoreFilesRenaming(targetPath);

    // Install dependencies
    installDependencies(targetPath);

    // Show success message
    showSuccessMessage(projectName, isCurrentDir);
  } catch (error) {
    log("❌ Failed to create project:", "red");
    log(error.message, "red");

    // Cleanup on failure (only if not current directory)
    if (!isCurrentDir && fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }

    process.exit(1);
  }
}

// Handle uncaught errors
process.on("uncaughtException", (error) => {
  log("❌ Unexpected error occurred:", "red");
  log(error.message, "red");
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  log("❌ Unhandled promise rejection:", "red");
  log(reason, "red");
  process.exit(1);
});

// Handle Ctrl+C gracefully
process.on("SIGINT", () => {
  console.log("\n");
  log("👋 Installation cancelled by user.", "yellow");
  process.exit(0);
});

// Run the main function
main();

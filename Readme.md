# create-typenode

```
 ████████╗██╗   ██╗██████╗ ███████╗███╗   ██╗ ██████╗ ██████╗ ███████╗
 ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝████╗  ██║██╔═══██╗██╔══██╗██╔════╝
    ██║    ╚████╔╝ ██████╔╝█████╗  ██╔██╗ ██║██║   ██║██║  ██║█████╗
    ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ██║╚██╗██║██║   ██║██║  ██║██╔══╝
    ██║      ██║   ██║     ███████╗██║ ╚████║╚██████╔╝██████╔╝███████╗
    ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝
```

[![npm version](https://badge.fury.io/js/create-typenode.svg)](https://badge.fury.io/js/create-typenode)
[![npm](https://img.shields.io/npm/dt/create-typenode.svg)](https://www.npmjs.com/package/create-typenode)
[![GitHub license](https://img.shields.io/github/license/imvikashkk/create-typenode.svg)](https://github.com/imvikashkk/create-typenode/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/imvikashkk/create-typenode.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/imvikashkk/create-typenode/stargazers/)

> **Version:** 1.1.3  
> **The fastest way to scaffold a modern TypeScript + Node.js project**

## 🚀 Quick Start

```bash
npm create typenode my-awesome-project
cd my-awesome-project
npm run dev
```

## 📦 Package Info

| Property         | Value                                      |
| ---------------- | ------------------------------------------ |
| **Package Name** | `create-typenode`                          |
| **Version**      | `1.1.3`                                    |
| **License**      | ISC                                        |
| **Author**       | Vikash Kumar Khunte                        |
| **Keywords**     | typescript, nodejs, scaffold, cli, esbuild |

## ✨ What's Included

- 🔥 **TypeScript** - Full TypeScript support with strict configuration
- ⚡ **Fast Development** - Hot reload with `tsx` for instant feedback
- 🔧 **ESBuild** - Lightning-fast build process
- 📏 **Code Quality** - ESLint + Prettier for consistent code style
- 🔍 **Type Checking** - Strict TypeScript type checking
- 🪝 **Git Hooks** - Pre-commit hooks with Husky
- 🧹 **Clean Scripts** - Comprehensive npm scripts for all tasks
- 📦 **Modern Setup** - ES modules, environment files, and more

## 📋 Requirements

- **Node.js**: `v22.19.0` or higher
- **npm**: `10.9.3` or higher

## 📁 Generated Project Structure

```
my-project/
├── .husky/                # Husky for git
├── dist/                  # Built files (generated)
├── public/                # Public folder => Make it public it in code
├── src/                   # Your Complete Container Source folder
│   └── app.ts             # Main application file
├── .env                   # Environment variables
├── .gitignore             # Git ignore rules
├── .prettierignore        # Prettier ignore rules
├── esbuild.config.ts      # ESBuild configuration
├── eslint.config.ts       # ESLint configuration
├── package.json           # Project dependencies and scripts
├── prettier.config.ts     # Prettier configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Available Scripts

| Script               | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `npm run dev`        | 🔥 Start development server with hot reload           |
| `npm run build`      | 🏗️ Build project for production                       |
| `npm run start`      | 🚀 Run production build                               |
| `npm run typecheck`  | ✅ Run TypeScript type checking                       |
| `npm run lint`       | 🔍 Check code style with ESLint                       |
| `npm run lint:fix`   | 🔧 Fix ESLint issues automatically                    |
| `npm run format`     | 🎨 Check code formatting with Prettier                |
| `npm run format:fix` | ✨ Fix formatting issues automatically                |
| `npm run check`      | 🧪 Run all checks (lint + typecheck + format)         |
| `npm run fix`        | 🛠️ Fix all auto-fixable issues                        |
| `npm run clear`      | 🧹 Clean build artifacts                              |
| `npm run ci`         | 🚦 Full CI pipeline (clean + install + check + build) |

## 🌟 IDE Setup (Recommended)

```json
{
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "javascript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifierEnding": "js",
  "javascript.preferences.importModuleSpecifierEnding": "js",
  "typescript.preferences.quoteStyle": "single",
  "javascript.preferences.quoteStyle": "single"
}
```

## 🛠️ Development Workflow

### 1. Start Development

```bash
npm run dev
```

### 2. Code Quality Checks

```bash
npm run check
```

### 3. Auto-fix Issues

```bash
npm run fix
```

### 4. Build for Production

```bash
npm run build
npm run start
```

## ⚙️ Configuration Files

### TypeScript Configuration

Configuration in `tsconfig.json`

### ESLint Configuration

Configuration in `eslint.config.ts`

### Prettier Configuration

Configuration in `prettier.config.ts`

### ESBuild Configuration

Configuration in `esbuild.config.ts`

### Environment Variables

Use `.env` file for environment-specific configuration

## 📊 Package Stats

[![npm](https://img.shields.io/npm/v/create-typenode.svg)](https://www.npmjs.com/package/create-typenode)
[![npm](https://img.shields.io/npm/dm/create-typenode.svg)](https://www.npmjs.com/package/create-typenode)
[![GitHub issues](https://img.shields.io/github/issues/imvikashkk/create-typenode.svg)](https://github.com/imvikashkk/create-typenode/issues)
[![GitHub forks](https://img.shields.io/github/forks/imvikashkk/create-typenode.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/imvikashkk/create-typenode/network/)

## 📄 License

ISC License

## 🔗 Links

- **npm Package**: https://www.npmjs.com/package/create-typenode
- **GitHub Repository**: https://github.com/imvikashkk/create-typenode
- **Issues**: https://github.com/imvikashkk/create-typenode/issues
- **Author**: [@imvikashkk](https://github.com/imvikashkk)

## 🤝 Contributing

Issues and pull requests are welcome!

---

**Built with ❤️ by Vikash KK**

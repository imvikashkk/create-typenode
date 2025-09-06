# 🚀 New Project

**The fastest way to scaffold a modern TypeScript + Node.js project**

Create TypeNode is a powerful CLI tool that instantly sets up a production-ready TypeScript Node.js project with all the modern development tools you need.


## 📋 Requirements

- **Node.js**: `v22.19.0` or higher
- **npm**: `10.9.3` or higher

## 🚀 Quick Start

### Create a new project

```bash
npm create typenode@latest
npm run dev
```

That's it! Your TypeScript Node.js project is ready to go! 🎉


## 🌟 Highly Recommended
Setup for your IDE setting.json just paste it. for fast and better development 🎉

```
{ 
   // .... other codes 

  "typescript.preferences.importModuleSpecifier": "non-relative",
  "javascript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifierEnding": "js",
  "javascript.preferences.importModuleSpecifierEnding": "js",
  "typescript.preferences.quoteStyle": "single",
  "javascript.preferences.quoteStyle": "single"
}
```


## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | 🔥 Start development server with hot reload |
| `npm run build` | 🏗️ Build project for production |
| `npm run start` | 🚀 Run production build |
| `npm run typecheck` | ✅ Run TypeScript type checking |
| `npm run lint` | 🔍 Check code style with ESLint |
| `npm run lint:fix` | 🔧 Fix ESLint issues automatically |
| `npm run format` | 🎨 Check code formatting with Prettier |
| `npm run format:fix` | ✨ Fix formatting issues automatically |
| `npm run check` | 🧪 Run all checks (lint + typecheck + format) |
| `npm run fix` | 🛠️ Fix all auto-fixable issues |
| `npm run clear` | 🧹 Clean build artifacts |
| `npm run ci` | 🚦 Full CI pipeline (clean + install + check + build) |

## 🛠️ Development Workflow

### 1. Start Development
```bash
npm run dev
```
This starts the development server with hot reload. Any changes to your TypeScript files will automatically restart the server.

### 2. Code Quality Checks
```bash
# Run all checks
npm run check

# Or run individually
npm run lint        # Check for linting issues
npm run typecheck   # Check TypeScript types
npm run format      # Check code formatting
```

### 3. Auto-fix Issues
```bash
npm run fix         # Fix linting and formatting issues
```

### 4. Build for Production
```bash
npm run build       # Creates optimized bundle in dist/
npm run start       # Run the production build
```

## ⚙️ Configuration

### TypeScript
The project uses strict TypeScript configuration with modern ES2022 target. Configuration can be found in `tsconfig.json`.

### ESLint
Configured with TypeScript-aware rules and modern JavaScript best practices. See `eslint.config.js`.

### Prettier
Ensures consistent code formatting across the project. Configuration in `.prettierrc`.

### ESBuild
Fast bundling with tree-shaking and minification for production builds. Configuration in `esbuild.config.ts`.

### Environment Variables
Use `.env` file for environment-specific configuration. The file is automatically loaded in both development and production.

## 🔧 Customization

### TypeScript Configuration
Modify `tsconfig.json` for your specific needs:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true
    // ... other options
  }
}
```

### ESLint Configuration
Modify `eslint.config.ts` for your specific needs:
```json
{
    files: ['**/*.ts'],
    languageOptions: {
      parser: eslintParserTs,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    // ... other options
  }
}
```


### ESBuild Configuration
Modify `esbuild.config.ts` for your specific needs:
```json
{
    entryPoints: ['src/app.ts'],
    bundle: true,
    platform: 'node',
    target: 'node22.14',
    outfile: 'dist/app.bundle.js',
    plugins: [
    nodeExternalsPlugin(),
    // ... other options
  }
}
```

### Prettier Configuration
Modify `prettier.config.ts` for your specific needs:
```json
{
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    // ... other options
  }
}


## 🚀 Deployment

### Build and Deploy
```bash
npm run build
npm run start
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

### Development Setup
```bash
git clone https://github.com/imvikashkk/create-typenode.git
cd create-typenode
npm install
```

## 📄 License

ISC License - feel free to use this project for any purpose.

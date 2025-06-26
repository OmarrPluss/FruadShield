# FraudWatch React - Vite Conversion

This project has been successfully converted from Create React App (CRA) to Vite.

## Changes Made

### Dependencies
- **Removed**: `react-scripts` (CRA build tool)
- **Added**: `vite` and `@vitejs/plugin-react` as development dependencies

### Configuration Files
- **Added**: `vite.config.js` - Vite configuration with React plugin
- **Modified**: `package.json` - Updated scripts to use Vite commands
- **Moved**: `index.html` from `public/` to project root
- **Updated**: `index.html` script reference to point to `/src/index.jsx`
- **Renamed**: `src/index.js` to `src/index.jsx` for proper JSX handling

### Scripts
- `npm run dev` - Start development server (replaces `npm start`)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Key Benefits of Vite
- **Faster development server** with instant hot module replacement
- **Faster builds** using esbuild and Rollup
- **Better development experience** with instant server start
- **Modern tooling** with native ES modules support

## Usage

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Notes
- All existing React components and functionality remain unchanged
- Tailwind CSS configuration is preserved
- All dependencies and features work exactly as before
- Build output is generated in the `build/` directory (same as CRA)

The conversion maintains 100% compatibility with the original application while providing the performance benefits of Vite.


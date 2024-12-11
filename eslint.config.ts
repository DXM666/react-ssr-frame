import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import type { Linter } from "eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ...eslint.configs.recommended,
    files: [
      "packages/**/*.ts",
      "packages/**/*.tsx",
      "packages/**/*.js",
      "packages/**/*.jsx",
    ],
    ignores: [
      "packages/**/node_modules",
      "node_modules",
      "example",
      "dist",
      "build",
      "*.min.js",
      "*.d.ts",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react": react,
      "react-hooks": reactHooks
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      
      // React specific rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // General rules
      "no-console": "off",
      "no-debugger": "warn"
    }
  }
] satisfies Linter.Config[];

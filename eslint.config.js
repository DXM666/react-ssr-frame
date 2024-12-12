import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // Configuration for .d.ts files
  {
    files: ["**/*.d.ts"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      // Disable all rules for declaration files
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "no-var": "off", // Allow var in .d.ts files
    },
  },
  // Configuration for other TypeScript/JavaScript files
  {
    ...eslint.configs.recommended,
    files: [
      "packages/**/*.ts",
      "packages/**/*.tsx",
      "packages/**/*.js",
      "packages/**/*.jsx",
      "@types/**/*.ts",
      "task/**/*.ts",
      "example/**/*.ts",
      "example/**/*.tsx",
    ],
    ignores: [
      "packages/**/node_modules",
      "node_modules",
      "dist",
      "build",
      "*.min.js",
      "**/*.d.ts", // Ignore .d.ts files for this config
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Disable all TypeScript strict rules for now
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-types": "off",

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // General rules
      "no-var": "error",
      "prefer-const": "warn",
    },
  },
];

module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["turbo", "next", "prettier", "plugin:import/typescript"],
    ignorePatterns: [
        ".next/*",
        ".husky/*",
        "next.config.js",
        "extension"
    ],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: false,
                },
            },
        ],
    },
};
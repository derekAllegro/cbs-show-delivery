module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"], // sentence-case is to allow Jira issues at the beginning like: build: ALM-1234 | some
  },
};

import { nextjs } from "@kiterail/eslint-config";

export default [
  ...nextjs,
  {
    ignores: ["next-env.d.ts"],
  },
];

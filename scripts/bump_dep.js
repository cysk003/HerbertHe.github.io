import { execFileSync } from "node:child_process"

execFileSync("pnpm", ["update", "--latest"], { stdio: "inherit" })

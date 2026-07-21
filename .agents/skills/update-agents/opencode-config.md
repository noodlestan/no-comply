# Opencode Configuration Setup

## Process to Update the Opencode Configuration File

**Purpose:** Create or replace the `opencode.json` file at the root of the repository.

**Procedure:** With the provided `agent-modes` listing execute the following steps:

1. Read the `.json` block listed under "## Opencode Config" below.
2. For each `agent-modes` entry, read the `SKILL.md` frontmatter and extract `metadata.opencode` values.
3. Add one entry inside the `agent: { }` for each agent mode:
   1. Use the `agent-mode.id` (strip `agent-` prefix from `name`) as the key.
   2. Copy all fields from `metadata.opencode`: `mode`, `reasoningEffort`, `textVerbosity`, `color`, `top_p`, `tools`.
   3. Add property `prompt`: set to `"{file:.agents/skills/agent-AGENT-KEY/SKILL.md}"`, replacing `AGENT-KEY` by the `agent-mode.id`.
   4. Ensure `tools.bash` is always `true` (default tool, not listed in SKILL.md).
4. Write the JSON data to `opencode.json` file at the root of the repository.
5. Display it to the user.

<!-- reference: https://opencode.ubitools.com/config/#format -->

## Opencode Config

```json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "build": {
      "disable": true
    },
    "plan": {
      "disable": true
    },
    "AGENT-KEY": {
      "mode": "primary",
      "reasoningEffort": "medium",
      "textVerbosity": "low",
      "color": "#ffffff",
      "top_p": 0.1,
      "prompt": "{file:.agents/skills/agent-AGENT-KEY/SKILL.md}",
      "tools": {
        "bash": true,
        "edit": false,
        "write": false,
        "read": true,
        "grep": true,
        "glob": true,
        "list": true,
        "lsp (experimental)": false,
        "patch": false,
        "skill": true,
        "todowrite": true,
        "todoread": true,
        "webfetch": true
      }
    }
  }
}
```

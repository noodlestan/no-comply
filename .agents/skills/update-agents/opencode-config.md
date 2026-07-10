# Opencode Configuration Setup

## Process to Update the Opencode Configuration File

**Goal:** Create or replace the `opencode.json` file at the root of the repository.

**Steps:** With the provided `agent-modes` listing execute the following steps:

1. Read the `.json` block listed under "## Opencode Config" below.
2. Add one entry inside the `agent: { }` for each `agent-modes`:
   1. Use the `agent-mode.id` as the key.
   2. Add property `"mode": "primary"` in all.
   3. Add property `prompt`: set to `"{file:.agents/skills/agent-AGENT-KEY/SKILL.md}"`, replacing `AGENT-KEY` by the `agent-mode.id`.
   4. Do not add `tools`.
3. Write the the JSON data to `opencode.json` file at the root of the repository.
4. Display it to the user.

## Opencode Config

```.json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "build": {
      "mode": "primary",
      "prompt": "{file:.agents/skills/agent-builder/SKILL.md}",
      "tools": {
        "write": true,
        "edit": true,
        "bash": true
      }
    },
    "plan": {
      "mode": "primary",
      "prompt": "{file:.agents/skills/agent-planner/SKILL.md}",
      "tools": {
        "write": false,
        "edit": false,
        "bash": false
      }
    }
  }
}
```

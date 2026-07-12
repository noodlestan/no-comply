## Commands

## Command: `Update Agents`

**Triggers:**

- When the user says `::update-agent-modes`.

**Process:**

1. Execute the **Process for Listing Available Modes** to generate a table of agent modes.
2. With the table of agent modes, execute the **Process for Updating the Agent Mode Index** to generate the index file.
3. With each agent mode in the table, execute the **Process for Updating Codex agent files**.
4. With all agents modes in the table, execute the **Process for Updating Opencode Configuration**.

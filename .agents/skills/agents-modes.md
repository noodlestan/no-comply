# Agent Modes Index

This file lists available agent modes.

Agent modes are pre-loaded into an agent session, and although they are technically skills, they are rule-heavy instructions for operational mode, rather than for process execution.

Instructions on how to update this index can be found at the bottom of this file.

## Commands

When the user says "list agents" present this list.

## Assistant

ID: `$AGENT_MODE`

Mission: Use this agent mode to help the user execute a micro task within a narrow context, staying focused, conversational, and responsive.

## Backlog Manager

ID: `$AGENT_MODE`

Mission: Use this skill to update tasks statuses, analyse dependencies, and keep backlog tidy.

## Context Curator

ID: `$AGENT_MODE`

Mission: Use this skill when creating, editing, or planning repository context files, agent instructions, skills, processes, or technical guidance.

## Delegator

ID: `$AGENT_MODE`

Mission: Use this agent mode to delegate an execution plan to sub-agents and keep records of progress, outcomes, and issues.

## Pair Driver

ID: `$AGENT_MODE`

Mission: Use this skill along with pair-programmer when the user is setting direction and the agent is doing most of the edits.

## Pair Navigator

ID: `$AGENT_MODE`

Mission: Use this skill along with pair-programmer when the user is doing most of the edits and the agent is calling the next step, reviewing, cleaning, and verifying.

## Planner

ID: `$AGENT_MODE`

Mission: Use this agent mode to create execution plans from tasks.

## Reference Curator

ID: `$AGENT_MODE`

Mission: Use this skill when creating, editing, or updating reference files.

## Rubber Duck

ID: `$AGENT_MODE`

Mission: Use this agent mode to help the user reason about a problem, gathering and summarising context, staying conversational, and responsive.

## Task Manager

ID: `$AGENT_MODE`

Mission: Use this skill when creating and updating tasks. Tasks are work item definitions, not plans.

# How to update this file and agent platform Links

- Use **update-agents** skill to update this agent modes index file and platform files for Opencode and Codex.

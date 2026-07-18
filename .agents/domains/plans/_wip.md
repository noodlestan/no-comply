# Plans WIP

## Plans Producer

**Use Cases:** Generating plans and instructions for deferred execution and processing outcomes and feedback.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Create plan drafts
- Generate plan instructions

### Mandatory Reading

READ: `.agents/domains/tasks/producer.md` - definitions and rules for working with tasks.

## Plans Consumer

**Use Cases:** Reading and interpreting plans and interacting with plan attachments.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Work with plan files to execute them.
- Attach reports to plan files.

### Mandatory Reading

READ: `.agents/domains/tasks/index.md` - definitions and rules for working with all task files.

## NEXt

CATCH: if no consumer.md files found, then THROW ERROR to user and STOP processing.

## Write plan

ADD to SKILL write-plan

- prepare commit strategy
- delegated?

## delegator

ADD SKILL delegate-plan (was execute-plan)
ADD SKILL execute-plan
ADD SKILL dryrun-plan

sub-agent => delegation

commit blueprints and delegation strategy.

worker agent / delegator agent (readers of plan use same API)

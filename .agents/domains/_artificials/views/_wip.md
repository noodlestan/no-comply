# Grammar Views — WIP

## Status

Prototype complete. Template directive system designed. Discovery view is the reference implementation.

## Done

- 4 view files created: Discovery, Consumer, Producer, Curator
- Template directive system: `::DIRECTIVE name` / `::TEMPLATE name` / `::EXAMPLE name` with `::END name`
- Two rendering formats: table (inline constructs) / definition (block constructs)
- Extraction principle: all construct content from grammar.md, no generated text
- View taxonomy: `#hoist` (all), `#consumer`, `#producer`, `#curator`
- Vocabulary tables: 2 columns only (Term | Definition), verbatim from grammar
- Discovery view: template directives, two-format split, rendered sample

## Next

1. Apply template directives to Consumer, Producer, Curator
2. Tag grammar.md constructs with `#hoist`, `#consumer`, `#producer`, `#curator`
3. Build renderer (script or agent) that processes `::` directives
4. Test pipeline end-to-end
5. Refine based on output

## Decisions

- `::DIRECTIVE name` / `::END name` (Option A) — matching open/close, descriptive names
- `::TEMPLATE` / `::EXAMPLE` share the same `::END` closure
- Block constructs rendered outside tables (fenced blocks break table cells)
- Inline constructs rendered in table (one example per row)
- `structure.is-block` field controls rendering format split
- No syntax/schema blocks in Discovery or Consumer (recognition/interpretation only)
- Curator includes syntax, schema, rules (validation reference)
- Curator vocabulary is reference only, not validated

## Open Questions

- Should the renderer be a script (deterministic) or an agent (flexible)?
- How to handle WIP constructs (Directives, Statements, Procedures) in rendering?
- Should `::DIRECTIVE` support nesting?
- How to handle constructs with no examples (Identifier, Block)?
- Should views include a "last rendered" timestamp?

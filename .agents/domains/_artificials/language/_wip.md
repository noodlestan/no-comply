# Artificial Language Module - WIP

## Plan: Primitive + ValueType

## Current State

- [ ] Phase 1: Create module structure
- [ ] Phase 2: Define ValueType: Primitive
- [ ] Phase 3: Define supporting ValueTypes
- [ ] Phase 4: Define structural primitives
- [ ] Phase 5: Define scalar primitives
- [ ] Phase 6: Bootstrap and verify
- [ ] Phase 7: Define user value types

## Phases

### Phase 1: Create Module Structure

1. Create `_artificials/language/_index__art.md` - module entry point
2. Create `_artificials/primitives/_value-types/` directory
3. Create `_artificials/primitives/_primitives/` directory

### Phase 2: Define ValueType: Primitive

Create `_artificials/primitives/_value-types/_primitive__value-type__art.md`:

```yaml
## ValueType: Primitive

primitive: Record

purpose:
Represents the meta-model used to describe interpreter-defined primitive value types.

description:
A Primitive defines a built-in Value Type whose interpretation is provided by the interpreter. Primitive definitions declare the information required to describe each primitive, including its name, generic parameters, structural attributes, presentation, and interpretation rules.

attributes:
  name: PrimitiveName
  purpose: Text
  description?: Text
  params?: PrimitiveParams
  attributes?: PrimitiveAttributes
  presentation?: PrimitivePresentation
  interpretation?: Expression
```

### Phase 3: Define Supporting ValueTypes

Create files under `_artificials/primitives/_value-types/`:

| File                                          | Instance                          | Primitive  | Purpose                                                     |
| --------------------------------------------- | --------------------------------- | ---------- | ----------------------------------------------------------- |
| `_primitive-name__value-type__art.md`         | ValueType: Primitive Name         | Identifier | Defines the name of a primitive                             |
| `_primitive-params__value-type__art.md`       | ValueType: Primitive Params       | List       | Defines the generic parameters supported by a primitive     |
| `_primitive-param__value-type__art.md`        | ValueType: Primitive Param        | Record     | Defines one generic parameter (name, type, description)     |
| `_primitive-attributes__value-type__art.md`   | ValueType: Primitive Attributes   | Map        | Defines primitive-specific attributes and their value types |
| `_primitive-presentation__value-type__art.md` | ValueType: Primitive Presentation | Expression | Defines how a primitive is represented in source syntax     |
| `_primitive-description__value-type__art.md`  | ValueType: Primitive Description  | Text       | Defines human-readable primitive documentation              |

### Phase 4: Define Structural Primitives

Create files under `_artificials/primitives/_primitives/`:

| File                         | Instance          | Purpose                                         |
| ---------------------------- | ----------------- | ----------------------------------------------- |
| `_record__primitive__art.md` | Primitive: Record | Defines structured values with named attributes |
| `_list__primitive__art.md`   | Primitive: List   | Defines ordered collections of values           |
| `_map__primitive__art.md`    | Primitive: Map    | Defines key/value collections                   |
| `_enum__primitive__art.md`   | Primitive: Enum   | Defines values from a fixed set                 |

### Phase 5: Define Scalar Primitives

Create files under `_artificials/primitives/_primitives/`:

| File                             | Instance              | Purpose                        |
| -------------------------------- | --------------------- | ------------------------------ |
| `_identifier__primitive__art.md` | Primitive: Identifier | Defines identifiers            |
| `_name__primitive__art.md`       | Primitive: Name       | Defines human-readable names   |
| `_expression__primitive__art.md` | Primitive: Expression | Defines artificial expressions |
| `_text__primitive__art.md`       | Primitive: Text       | Defines text values            |
| `_boolean__primitive__art.md`    | Primitive: Boolean    | Defines boolean values         |
| `_number__primitive__art.md`     | Primitive: Number     | Defines numeric values         |

### Phase 6: Bootstrap and Verify

1. Create `./_processes/verify-bootstrap__process__art.md` with the verification process
2. Verify `ValueType: Primitive` can describe every primitive
3. Verify primitives provide semantics for `ValueType: Primitive`
4. Document the bootstrap cycle in README.md Architecture section

### Phase 7: Define User Value Types (Future)

Once kernel exists, define domain-specific types:

- Task, TaskStatus, SpecList, Id, etc.

---

## Self-Describing Bootstrap

```
ValueType: Primitive describes → Primitive: Record, List, Map, Enum, Identifier, ...
Primitive: Record provides semantics for → ValueType: Primitive (and all other ValueTypes)
```

Neither exists independently; together they form the bootstrap layer.

---

## Current Questions

1. Where should the bootstrap verification live? In the module README or separate file?
2. Should we define Primitive semantics in the same file as the primitive, or separate?
3. How do we handle the circular dependency in documentation?
4. What's the naming convention for files? (currently: `_name__type__art.md`)

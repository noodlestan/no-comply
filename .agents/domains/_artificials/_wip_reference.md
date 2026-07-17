#### Identify Input

```
1. Identify the `<input-name>` to process.
2. If no explicit `<input-name>` is defined, infer from the most recent context.
3. If unable to determine with confidence, ALERT the user and STOP processing.
```

#### Infer

```
1. Infer the `<value>` from the most recent context.
2. If inference is ambiguous, present options to the user for confirmation.
```

#### Classify According

```
1. Classify the `<input>` according to {classification-rules}.
2. For each classification, apply the corresponding processing rules.
```

#### Operation (Group, Sort, ...)

```
1. Group the `<items>` by {grouping-criteria}.
2. Sort each group by {sorting-criteria}.
3. Return the grouped and sorted results.
```

#### Generate

```
1. Generate the `<output>` using the `<input>` and {rules}.
2. Validate the generated `<output>` against {validation-rules}.
3. Return the validated `<output>`.
```

#### Build Table

```
1. Generate a table with the following columns:
   - `{column-1}` – {Description}.
   - `{column-2}` – {Description}.
2. For each `<item>` in `<items>`, add a row with the corresponding values.
```

#### Build List

```
1. Generate a list with the following items structure:
   - `{item-1}` – {Description}.
   - `{item-2}` – {Description}.
2. For each `<item>` in `<items>`, add an item with the corresponding values.
```

#### Summarise

```
1. Summarise the `<input>` into a concise description.
2. Focus on the most important aspects.
3. Return the summary.
```

#### Assign

```
1. Assign the `<value>` to `<variable>`.
2. Use `<variable>` in subsequent steps.
```

#### Aliasing

```
1. Alias `<original>` as `<alias>`.
2. Use `<alias>` in subsequent steps.
```

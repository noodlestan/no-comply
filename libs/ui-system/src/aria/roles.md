| **HTML Element**          | **Default ARIA Role**            | **Notes**                                                |
| ------------------------- | -------------------------------- | -------------------------------------------------------- |
| `<a href>`                | `"link"`                         | Only if `href` is present                                |
| `<article>`               | `"article"`                      |                                                          |
| `<aside>`                 | `"complementary"`                |                                                          |
| `<button>`                | `"button"`                       |                                                          |
| `<datalist>`              | `"listbox"`                      |                                                          |
| `<details>`               | `"group"`                        |                                                          |
| `<dialog>`                | `"dialog"`                       |                                                          |
| `<div>`                   | `"none"` / `"region"`            | Becomes `"region"` if labeled                            |
| `<fieldset>`              | `"group"`                        |                                                          |
| `<figcaption>`            | `"none"`                         | Semantically linked to `<figure>`                        |
| `<figure>`                | `"figure"`                       |                                                          |
| `<footer>`                | `"contentinfo"`                  | Only if it's a direct child of `<body>`                  |
| `<form>`                  | `"none"` / `"form"`              | Becomes `"form"` if labeled                              |
| `<h1>`–`<h6>`             | `"heading"`                      | `aria-level` corresponds to heading level                |
| `<header>`                | `"banner"`                       | Only if it's a direct child of `<body>`                  |
| `<hr>`                    | `"separator"`                    | If it’s focusable, otherwise `"none"`                    |
| `<img>`                   | `"img"`                          | `"presentation"` if `alt=""`                             |
| `<input type="checkbox">` | `"checkbox"`                     |                                                          |
| `<input type="email">`    | `"textbox"`                      |                                                          |
| `<input type="number">`   | `"spinbutton"`                   |                                                          |
| `<input type="password">` | `"textbox"`                      |                                                          |
| `<input type="radio">`    | `"radio"`                        |                                                          |
| `<input type="range">`    | `"slider"`                       |                                                          |
| `<input type="search">`   | `"searchbox"`                    |                                                          |
| `<input type="tel">`      | `"textbox"`                      |                                                          |
| `<input type="text">`     | `"textbox"`                      |                                                          |
| `<input type="url">`      | `"textbox"`                      |                                                          |
| `<input type="submit">`   | `"button"`                       |                                                          |
| `<input type="reset">`    | `"button"`                       |                                                          |
| `<li>`                    | `"listitem"`                     | Only if inside `<ul>` or `<ol>`                          |
| `<main>`                  | `"main"`                         |                                                          |
| `<mark>`                  | `"none"`                         | Purely presentational                                    |
| `<menu>`                  | `"list"` / `"menu"`              | Becomes `"menu"` if `role="menu"` is set                 |
| `<menuitem>`              | `"menuitem"`                     |                                                          |
| `<nav>`                   | `"navigation"`                   |                                                          |
| `<ol>`                    | `"list"`                         |                                                          |
| `<option>`                | `"option"`                       | Must be inside `<select>`, `<datalist>`, or `<optgroup>` |
| `<output>`                | `"status"`                       |                                                          |
| `<progress>`              | `"progressbar"`                  |                                                          |
| `<section>`               | `"none"` / `"region"`            | Becomes `"region"` if labeled                            |
| `<select>`                | `"combobox"` / `"listbox"`       | Depends on `size` and `multiple` attributes              |
| `<summary>`               | `"button"`                       | Used inside `<details>`                                  |
| `<table>`                 | `"table"`                        |                                                          |
| `<td>`                    | `"cell"`                         | Unless in `<th>` context                                 |
| `<th>`                    | `"columnheader"` / `"rowheader"` | Depends on context                                       |
| `<textarea>`              | `"textbox"`                      |                                                          |
| `<time>`                  | `"none"`                         | No default role                                          |
| `<ul>`                    | `"list"`                         |                                                          |

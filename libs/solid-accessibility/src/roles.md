## By Category

### Navigation & Regions Roles

| **ARIA Role** | **Example Name**   | **Example Code**                              |
| ------------- | ------------------ | --------------------------------------------- |
| `navigation`  | Primary Navigation | `<div role="navigation" aria-label="..">...`  |
| `banner`      | Site Banner        | `<div role="banner" aria-labelledby="..">...` |
| `contentinfo` | Footer Section     | `<div role="contentinfo" aria-label="..">...` |
| `main`        | Main Content       | `<div role="main">...`                        |

### Widgets Roles

| **ARIA Role** | **Example Name**     | **Example Code**                                                                                                                                      |
| ------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `button`      | Submit Button        | `<button role="button" aria-label="..">...</button>`                                                                                                  |
| `checkbox`    | Privacy Checkbox     | `<input type="checkbox" role="checkbox" aria-checked="false" aria-label="..">`                                                                        |
| `radio`       | Choice Radio Buttons | `<div role="radiogroup" aria-labelledby=".."><input type="radio" name="tier" value="standard"><input type="radio" name="tier" value="premium"></div>` |
| `switch`      | Dark Mode Toggle     | `<div role="switch" aria-checked="false" aria-label="..">...`                                                                                         |
| `textbox`     | Search Input Field   | `<input type="text" role="textbox" aria-label="..">`                                                                                                  |
| `listbox`     | Dropdown Menu        | `<div role="listbox" aria-label=".."><div role="option" aria-selected="false">...`                                                                    |
| `menu`        | Navigation Menu      | `<div role="menu" aria-label=".."><div role="menuitem">...`                                                                                           |
| `dialog`      | Login Dialog         | `<div role="dialog" aria-labelledby=".." aria-hidden="true">...`                                                                                      |

### Forms Roles

| **ARIA Role** | **Example Name** | **Example Code**                                                      |
| ------------- | ---------------- | --------------------------------------------------------------------- |
| `form`        | Login Form       | `<form role="form" aria-labelledby="..">...</form>`                   |
| `group`       | Form Field Group | `<div role="group" aria-labelledby="..">...`                          |
| `textbox`     | Username Input   | `<div role="textbox" aria-placeholder=".."><input type="text"></div>` |

### Content Roles

| **ARIA Role** | **Example Name** | **Example Code**                            |
| ------------- | ---------------- | ------------------------------------------- |
| `heading`     | Section Heading  | `<div role="heading" aria-level="1">...`    |
| `paragraph`   | Text Content     | `<div role="paragraph" aria-label="..">...` |
| `list`        | Ordered List     | `<div role="list"><div role="listitem">...` |
| `listitem`    | List Item        | `<div role="listitem">...`                  |
| `image`       | Logo Image       | `<div role="img" aria-label="..">...`       |

### Alert Roles

| **ARIA Role** | **Example Name**              | **Example Code**                                                 |
| ------------- | ----------------------------- | ---------------------------------------------------------------- |
| `alert`       | Important Notification        | `<div role="alert" aria-live="assertive" aria-atomic="true">...` |
| `status`      | Non-Interruptive Notification | `<div role="status" aria-live="polite" aria-atomic="true">...`   |

### Modal Roles

| **ARIA Role** | **Example Name** | **Example Code**                                                       |
| ------------- | ---------------- | ---------------------------------------------------------------------- |
| `dialog`      | Modal Dialog     | `<div role="dialog" aria-labelledby=".." aria-hidden="true">...`       |
| `alertdialog` | Alert Modal      | `<div role="alertdialog" aria-labelledby=".." aria-hidden="false">...` |

### Other Roles

| **ARIA Role** | **Example Name** | **Example Code**                                                                  |
| ------------- | ---------------- | --------------------------------------------------------------------------------- |
| `separator`   | Section Divider  | `<div role="separator" aria-hidden="true">...`                                    |
| `tabpanel`    | Tab Content      | `<div role="tabpanel" aria-labelledby="..">...`                                   |
| `tab`         | Tab Item         | `<div role="tab" aria-controls=".." aria-selected="true">...`                     |
| `tree`        | Tree List        | `<div role="tree" aria-label=".."><div role="treeitem" aria-expanded="false">...` |
| `treeitem`    | Tree Item        | `<div role="treeitem" aria-expanded="false">...`                                  |

### And more

- log
- marquee
- timer
- definition
- directory
- feed
- math
- meter
- note
- row
- rowgroup
- term
- treegrid
- gridcell
- menuitemcheckbox
- menuitemradio
- scrollbar
- search

## By HTML Element

| **HTML Element**          | **Default ARIA Role**            | **Notes**                                                                  |
| ------------------------- | -------------------------------- | -------------------------------------------------------------------------- |
| `<a href>`                | `"link"`                         | Only if `href` is present                                                  |
| `<article>`               | `"article"`                      |                                                                            |
| `<aside>`                 | `"complementary"`                |                                                                            |
| `<button>`                | `"button"`                       |                                                                            |
| `<datalist>`              | `"listbox"`                      |                                                                            |
| `<details>`               | `"group"`                        |                                                                            |
| `<dialog>`                | `"dialog"`                       |                                                                            |
| `<div>`                   | `"none"` / `"region"`            | Becomes `"region"` if labeled                                              |
| `<fieldset>`              | `"group"`                        |                                                                            |
| `<figcaption>`            | `"none"`                         | Semantically linked to `<figure>`                                          |
| `<figure>`                | `"figure"`                       |                                                                            |
| `<footer>`                | `"contentinfo"`                  | Only if it's a direct child of `<body>`                                    |
| `<form>`                  | `"none"` / `"form"`              | Becomes `"form"` if labeled                                                |
| `<h1>`–`<h6>`             | `"heading"`                      | `aria-level` corresponds to heading level                                  |
| `<header>`                | `"banner"`                       | Only if it's a direct child of `<body>`                                    |
| `<hr>`                    | `"separator"`                    | If it’s focusable, otherwise `"none"`                                      |
| `<img>`                   | `"img"`                          | `"presentation"` if `alt=""`                                               |
| `<input type="checkbox">` | `"checkbox"`                     |                                                                            |
| `<input type="email">`    | `"textbox"`                      |                                                                            |
| `<input type="number">`   | `"spinbutton"`                   |                                                                            |
| `<input type="password">` | `"textbox"`                      |                                                                            |
| `<input type="radio">`    | `"radio"`                        |                                                                            |
| `<input type="range">`    | `"slider"`                       |                                                                            |
| `<input type="search">`   | `"searchbox"`                    |                                                                            |
| `<input type="tel">`      | `"textbox"`                      |                                                                            |
| `<input type="text">`     | `"textbox"`                      |                                                                            |
| `<input type="url">`      | `"textbox"`                      |                                                                            |
| `<input type="submit">`   | `"button"`                       |                                                                            |
| `<input type="reset">`    | `"button"`                       |                                                                            |
| `<li>`                    | `"listitem"`                     | Only if inside `<ul>` or `<ol>`                                            |
| `<main>`                  | `"main"`                         |                                                                            |
| `<mark>`                  | `"none"`                         | Purely presentational                                                      |
| `<menu>`                  | `"list"` / `"menu"`/ `"toolbar"` | Default `"list"`. Overridden by `role="menu"` or `type="toolbar"`          |
| `<menuitem>`              | `"menuitem"`                     |                                                                            |
| `<nav>`                   | `"navigation"`                   |                                                                            |
| `<ol>`                    | `"list"`                         |                                                                            |
| `<option>`                | `"option"`                       | Must be inside `<select>`, `<datalist>`, or `<optgroup>`                   |
| `<output>`                | `"status"`                       |                                                                            |
| `<progress>`              | `"progressbar"`                  |                                                                            |
| `<section>`               | `"none"` / `"region"`            | Becomes `"region"` if labeled                                              |
| `<select>`                | `"combobox"` / `"listbox"`       | Default `combobox`, becomes `listbox` if `size > 1` or `multiple` are used |
| `<summary>`               | `"button"`                       | Used inside `<details>`                                                    |
| `<table>`                 | `"table"`                        |                                                                            |
| `<td>`                    | `"cell"`                         | Unless in `<th>` context                                                   |
| `<th>`                    | `"columnheader"` / `"rowheader"` | Depends on context                                                         |
| `<textarea>`              | `"textbox"`                      |                                                                            |
| `<time>`                  | `"none"`                         | No default role                                                            |
| `<ul>`                    | `"list"`                         |                                                                            |

## By Component

### Atoms

| **Component**    | **ARIA Role**                | **Notes**                                                   | **Keyboard Requirements**                   |
| ---------------- | ---------------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| **Button**       | `button`                     | Use `<button>` or `role="button"`                           | `Enter`, `Space` to activate                |
| **Icon Button**  | `button`                     | Must have accessible label                                  | `Enter`, `Space` to activate                |
| **Checkbox**     | `checkbox`                   | Use `<input type="checkbox">` OR `role="checkbox"`          | `Space` toggles state                       |
| **Radio Button** | `radio`                      | Part of a radio group, must be in a `radiogroup`            | `Arrow keys` to navigate, `Space` to select |
| **Switch**       | `switch`                     | Use `role="switch"` for custom toggles                      | `Space` toggles state                       |
| **Link**         | `link`                       | Use `<a href>` or `role="link"`                             | `Enter` to activate                         |
| **Badge/Pill**   | `status` (if live) / `group` | Use `button` if dismissible                                 | `Enter`, `Space` if removable               |
| **Progress Bar** | `progressbar`                | Must have `aria-valuenow`, `aria-valuemin`, `aria-valuemax` | No keyboard interaction                     |
| **Separator**    | `separator`                  | Divider between sections                                    | No keyboard interaction                     |

### Forms

| **Component**         | **ARIA Role** | **Notes**                                                  | **Keyboard Requirements**                     |
| --------------------- | ------------- | ---------------------------------------------------------- | --------------------------------------------- |
| **Text Input**        | `textbox`     | Use `<input type="text">` or `role="textbox"`              | Typing allowed, `Enter` submits if applicable |
| **Search Input**      | `searchbox`   | Similar to `textbox`, optimized for search                 | Same as `textbox`                             |
| **Textarea**          | `textbox`     | Multi-line text input                                      | `Enter` for newline, `Shift+Enter` may vary   |
| **Password Input**    | `textbox`     | Secure text input                                          | Same as `textbox`                             |
| **Number Input**      | `spinbutton`  | Requires `aria-valuemin`, `aria-valuemax`, `aria-valuenow` | `Arrow Up/Down` changes value                 |
| **Select (Combobox)** | `combobox`    | Requires `aria-expanded` and `aria-controls`               | `Arrow keys` navigate, `Enter` selects        |
| **Select (Listbox)**  | `listbox`     | Use `<select>` OR `role="listbox"`                         | `Arrow keys` navigate, `Enter` selects        |
| **Select (Menu)**     | `menu`        | For dropdown menus                                         | `Arrow keys` navigate, `Enter` selects        |
| **Option**            | `option`      | Must be inside `listbox` or `menu`                         | `Arrow keys` navigate, `Enter` selects        |
| **Form**              | `form`        | Needs a label to be announced as a landmark                | No keyboard behavior required                 |
| **Fieldset**          | `group`       | Groups related form elements                               | No keyboard behavior required                 |
| **Label**             | `none`        | Associated with input elements                             | No keyboard behavior required                 |

### Feedback

| **Component**      | **ARIA Role** | **Notes**                              | **Keyboard Requirements**     |
| ------------------ | ------------- | -------------------------------------- | ----------------------------- |
| **Alert**          | `alert`       | Announces immediately, should be short | No keyboard behavior required |
| **Snackbar/Toast** | `status`      | For non-interruptive notifications     | No keyboard behavior required |
| **Tooltip**        | `tooltip`     | Provides extra information             | Must be shown on hover/focus  |

### Widgets & Containers

| **Component**    | **ARIA Role**      | **Notes**                                      | **Keyboard Requirements**              |
| ---------------- | ------------------ | ---------------------------------------------- | -------------------------------------- |
| **Modal/Dialog** | `dialog`           | Must trap focus inside                         | `Esc` closes, `Tab` cycles focus       |
| **Alert Dialog** | `alertdialog`      | Same as `dialog`, but interrupts user flow     | `Esc` closes, `Tab` cycles focus       |
| **Accordion**    | `region`           | Expandable/collapsible section                 | `Enter`, `Space` toggles state         |
| **Tablist**      | `tablist`          | Groups `tab` elements                          | `Arrow keys` navigate, `Enter` selects |
| **Tab**          | `tab`              | Must be inside `tablist`                       | `Arrow keys` navigate, `Enter` selects |
| **Tab Panel**    | `tabpanel`         | Associated with a `tab`                        | No keyboard behavior required          |
| **Drawer**       | `region`           | Expandable/collapsible section                 | `Esc` closes, `Tab` cycles focus       |
| **Carousel**     | `region` / `group` | Should indicate slide changes via live regions | `Arrow keys` navigate slides           |

### Content & Lists

| **Component**      | **ARIA Role** | **Notes**                         | **Keyboard Requirements**              |
| ------------------ | ------------- | --------------------------------- | -------------------------------------- |
| **List**           | `list`        | Groups `listitem` elements        | No keyboard behavior required          |
| **List Item**      | `listitem`    | Must be inside `list`             | No keyboard behavior required          |
| **Tree List**      | `tree`        | Hierarchical list                 | `Arrow keys` navigate, `Enter` selects |
| **Tree List Item** | `treeitem`    | Must be inside `tree`             | `Arrow keys` navigate, `Enter` selects |
| **Tree List Item** | `group`       | Groups sub-items within a tree    | No keyboard behavior required          |
| **Breadcrumb**     | `navigation`  | Ordered navigation links          | `Arrow keys` navigate, `Enter` selects |
| **Card**           | `group`       | Used to structure related content | No keyboard behavior required          |

### Navigation & Regions

| **Component**    | **ARIA Role** | **Notes**                                 | **Keyboard Requirements**     |
| ---------------- | ------------- | ----------------------------------------- | ----------------------------- |
| **Navigation**   | `navigation`  | Landmark for primary navigation           | No keyboard behavior required |
| **Banner**       | `banner`      | Site-wide announcement, inside `<header>` | No keyboard behavior required |
| **Footer**       | `contentinfo` | Site-wide footer                          | No keyboard behavior required |
| **Main Content** | `main`        | Primary page content                      | No keyboard behavior required |
| **Region**       | `region`      | Used for labeled content sections         | No keyboard behavior required |

## Style/container queries

Not supported in Firefox yet.

```css
    @container WithSidebarLayout (min-width: 600px) {
        .WithSidebarLayoutWrapper {
            --WithSidebarLayout-size: large;
        }
    }

@container WithSidebarLayoutWrapper style(--WithSidebarLayout-size: large) { ... }
```

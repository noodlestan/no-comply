# Investigate: IconButton/Icon — streamline with aspect-ratio

**Summary:** Current IconButton uses attribute-heavy CSS to maintain square dimensions and avoid layout collapse when used as a flex child. Investigate if `aspect-ratio: 1` can replace the explicit width/height/attribute approach. Determine if an `enforce-dimensions` SCSS mixin should be extracted and check for duplicate CSS across icon components.

**Investigation scope:**
- Try `aspect-ratio: 1` on icon/iconbutton root
- Test flex child behavior (does it preserve square in a flex row?)
- Hunt for duplicate dimension CSS in Icon, IconButton, SizedIcon, SizedIconMixin

**Output:** Recommendation — either use `aspect-ratio` and deprecate attribute approach, or extract shared `enforce-dimensions` SCSS mixin.

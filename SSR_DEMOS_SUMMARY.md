# SSR Demos Created

## Summary

Successfully created SSR demos for **34 components** in the Lion library.

## Components with SSR Demos

1. ✓ accordion
2. ✓ button
3. ✓ calendar
4. ✓ checkbox-group
5. ✓ collapsible
6. ✓ combobox
7. ✓ dialog
8. ✓ drawer
9. ✓ fieldset
10. ✓ form
11. ✓ icon
12. ✓ input
13. ✓ input-amount
14. ✓ input-amount-dropdown
15. ✓ input-date
16. ✓ input-datepicker
17. ✓ input-email
18. ✓ input-file
19. ✓ input-iban
20. ✓ input-range
21. ✓ input-stepper
22. ✓ input-tel
23. ✓ input-tel-dropdown
24. ✓ listbox
25. ✓ pagination
26. ✓ progress-indicator
27. ✓ radio-group
28. ✓ select
29. ✓ select-rich
30. ✓ steps
31. ✓ switch
32. ✓ tabs
33. ✓ textarea
34. ✓ tooltip

## File Structure

All SSR demos follow the same pattern:
- Located in: `src/pages/components/[component-name]/ssr.astro`
- Import MainLayout from `../../../layouts/MainLayout.astro`
- Include 1-3 examples per component demonstrating key features
- Import necessary polyfills and component definitions

## Example Structure

Each SSR demo includes:
1. A main heading with component name
2. Multiple sections (h2) showcasing different use cases
3. Required script imports for SSR support:
   - `@webcomponents/scoped-custom-element-registry`
   - `@lit-labs/ssr-client/lit-element-hydrate-support.js`
   - Component-specific imports from `@lion/ui/define/`

## Common Use Cases Demonstrated

- Basic usage
- Disabled states
- With various attributes (labels, help text, etc.)
- Pre-filled/selected states
- Component-specific features (e.g., multiple choice, validation, positioning)

## Access the Demos

You can view the SSR demos by navigating to:
- `/components/[component-name]/ssr` (e.g., `/components/button/ssr`)

All demos are now ready for testing SSR capabilities of the Lion Web Components!


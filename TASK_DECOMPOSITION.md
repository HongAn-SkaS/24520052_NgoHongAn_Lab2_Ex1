# TASK DECOMPOSITION — Exercise 1: Mini-React VNode & Mounting Engine

## 1. Objective

Implement `createElement`, `createTextElement`, and `renderToDOM` from scratch using Vanilla JavaScript.

Requirements:
- Preserve semantic HTML (`main`, `section`, `button`); no div-soup.
- Prevent XSS when rendering untrusted text.
- Verify the DOM matches the VNode tree using DevTools.
- Follow the required Git commit messages.

## 2. Work Breakdown Structure (WBS)

| WBS ID | Task | Activities | Deliverable / Acceptance Criteria |
|---|---|---|---|
| 1.0 | Analyze Requirements | Review VNode structure and rendering behavior. | Requirements and implementation sequence defined. |
| 2.0 | VNode Creation | Implement `createElement` and `createTextElement`. | Correct element, properties, and child representations. |
| 2.1 | Commit 1 | Commit VNode creation implementation. | `feat(core): implement createElement factory` |
| 3.0 | DOM Mounting | Implement `renderToDOM` and mount nested elements and text nodes. | Correct DOM hierarchy and semantic tags without unnecessary wrappers. |
| 3.1 | Commit 2 | Commit DOM mounting implementation. | `feat(core): implement renderToDOM` |
| 4.0 | Functional Testing | Test element creation, text nodes, properties, and nested rendering. | All expected nodes and properties are correct. |
| 5.0 | Security Testing | Render `<script>alert(1)</script>` as a child string. | Text remains inert; no script executes or executable script element is created. |
| 6.0 | DevTools Audit | Inspect the Elements panel and compare DOM with the VNode tree. | No missing, duplicated, unexpected, or orphan nodes. |
| 7.0 | Final Review | Verify requirements, commits, and repository status. | All acceptance criteria pass. |

## 3. Implementation Sequence

1. Analyze the VNode structure.
2. Implement and verify `createElement` and `createTextElement`.
3. Create Commit 1.
4. Implement and verify `renderToDOM`.
5. Create Commit 2.
6. Test semantic HTML and XSS resistance.
7. Inspect the DOM in DevTools.
8. Complete the final review.

## 4. Definition of Done

- [ ] VNode creation works correctly.
- [ ] DOM mounting preserves semantic tags and child order.
- [ ] No unnecessary `div` wrappers are introduced.
- [ ] XSS test passes.
- [ ] DevTools confirms the DOM matches the VNode tree.
- [ ] Both required commits exist with exact messages.
- [ ] All tests and acceptance criteria pass.

## 5. Constraints

- Use Vanilla HTML5, modern CSS, and ES6+ JavaScript only.
- No jQuery, Bootstrap, Tailwind, or external script CDNs.
- Use `const` by default and `let` only when reassignment is needed.
- Never render untrusted input as HTML using `innerHTML`.
- Verify the layout at a 375px viewport before desktop.
- Implement from scratch and keep VNode creation separate from DOM mounting.
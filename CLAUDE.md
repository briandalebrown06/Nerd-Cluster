# CLAUDE.md

## Project identity
This repository is for Nerd Cluster, a polished pop-culture, entertainment, fandom, and collector-focused website.

The end result should feel like a real editorial brand, not a generic demo.

Primary sections:
- Home
- News
- Reviews
- Blog / Features
- Store
- About
- Contact

The architecture should support future additions without a rewrite:
- Podcast
- Newsletter
- Search
- Categories / tags
- Contributor pages
- CMS integration
- product detail pages
- editorial/admin workflow

## High-level priorities
Your priorities in this repo are:
1. clean architecture
2. strong UX
3. polished visual design
4. maintainability
5. future content scalability
6. repo cleanliness
7. responsive, accessible frontend behavior

## Expected workflow
Always work in this sequence:

### 1. Inspect first
Before editing:
- inspect the repo structure
- identify framework, tooling, routes, layouts, components, content systems
- identify duplication, dead code, weak naming, and broken patterns
- identify what is salvageable and what should be cleaned up

Do not jump into implementation without understanding the current state.

### 2. Plan before coding
Before large changes:
- explain the milestone goal
- explain the architecture impact
- describe the likely file changes
- call out risks or decisions

### 3. Implement in coherent milestones
Make changes that are:
- meaningful
- modular
- maintainable
- easy to review

Do not create chaos through scattered one-off edits.

### 4. Validate after changes
Check for:
- broken imports
- broken routes
- inconsistent UI patterns
- layout regressions
- dead code
- responsiveness issues
- obvious accessibility issues

### 5. Summarize clearly
After each milestone, provide:
- summary of what changed
- files changed
- full updated code for changed files
- what should be tested next
- any remaining risks or cleanup items

## Design guidance
Act as both engineer and product designer.

Nerd Cluster should feel:
- cinematic
- polished
- editorial
- playful
- modern
- fan-culture aware
- energetic without clutter
- bold without becoming tacky

Prioritize:
- good typography hierarchy
- confident spacing
- elegant grid layouts
- polished cards and buttons
- clear navigation
- responsive behavior
- page-to-page visual consistency
- tasteful visual personality

Avoid:
- generic template vibes
- weak default styling
- cramped layouts
- overly corporate tone
- cluttered fan-site chaos
- disconnected page designs

## Code guidance
- prefer reusable layouts and components
- keep naming consistent
- do not create duplicate structures
- remove dead code when appropriate
- avoid unnecessary abstraction
- avoid fake placeholder features
- keep the project easy to maintain
- keep content architecture future-friendly

## Content guidance
For News, Reviews, and Blog / Features:
- use structured content models where appropriate
- support listing pages and individual pages
- include metadata such as title, excerpt, date, author, tags/categories, featured image
- make future filtering and CMS migration easier

For Store:
- keep initial scope realistic
- support structured product presentation
- keep room for future detail pages or commerce integration

For About and Contact:
- make them feel branded and intentional
- avoid filler-page energy

## Repo hygiene
Do not leave behind:
- duplicate files
- throwaway copies
- unused components
- unused imports
- dead styles
- backup folders
- inconsistent naming patterns

Avoid filenames like:
- `new`
- `copy`
- `backup`
- `old`
- `temp`
- `test2`

## Preferred decision style
When there are multiple valid paths, prefer:
- the more maintainable option
- the cleaner structure
- the better user experience
- the solution that fits future content growth
- the visually stronger but still practical choice

## Output expectations
When working, be concrete.
Do not be vague.
Do not hand-wave.
Do not claim something is implemented if it is not.

Whenever possible, provide:
- exactly what changed
- why it changed
- which files changed
- the full updated code for those files
- what to test next

## Tone of execution
Be sharp, practical, design-aware, and honest.
If something in the repo is weak, say so clearly.
If an architecture choice is risky, flag it.
If cleanup should happen before feature work, recommend that directly.

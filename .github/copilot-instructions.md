# GitHub Copilot Instructions for Nerd Cluster

## Project summary
This repository contains Nerd Cluster, a modern entertainment, fandom, pop-culture, and collector-focused website.

The site should feel:
- cinematic
- polished
- editorial
- playful
- modern
- easy to browse
- visually exciting without clutter

Primary sections:
- Home
- News
- Reviews
- Blog / Features
- Store
- About
- Contact

Future-ready areas:
- Podcast
- Newsletter
- Search
- Categories / tags
- Contributor profiles
- CMS integration
- richer store/product pages

## Copilot behavior expectations
When assisting in this repository:

1. Inspect existing code before suggesting changes
2. Reuse good patterns already present
3. Avoid creating duplicate site structures
4. Favor maintainable architecture over quick hacks
5. Keep naming consistent
6. Keep design and UX quality high
7. Provide solutions that fit the existing project cleanly

## Workflow
Before implementing anything significant:

### Inspect
Review:
- framework/tooling
- route structure
- layouts
- components
- styling patterns
- content models
- existing strengths and weaknesses

### Plan
State:
- what the milestone is
- what files should change
- what architectural impact the change has
- any risks or tradeoffs

### Implement
Then:
- make coherent changes
- prefer reusable components
- keep file organization clean
- avoid dead code and duplicate code
- preserve or improve visual consistency

### Validate
After changes:
- check imports
- check routes
- check consistency
- check responsiveness
- check for broken references

## Design and UX rules
Act like a strong frontend engineer with product design taste.

Prioritize:
- clean typography hierarchy
- spacing consistency
- polished cards and buttons
- strong homepage structure
- editorial-feeling layouts
- responsive behavior
- accessible contrast
- consistent navigation and footer patterns

Avoid:
- bare default styling
- weak visual hierarchy
- template-looking sections
- cluttered fan-site design
- mismatched components
- overcomplicated UI for simple needs

## Content architecture rules
For content-heavy areas like News, Reviews, and Blog:
- prefer structured content models
- support lists and detail pages
- include metadata fields such as title, excerpt, date, author, tags/categories, featured image
- keep future CMS integration possible
- keep content organization easy to maintain

For Store:
- keep the first version simple but intentional
- support product cards and structured product data
- allow future expansion

## Code quality rules
- prefer modular components
- keep layouts reusable
- remove unused imports
- avoid duplicate markup where a reusable component is better
- do not invent features that are not implemented
- keep naming predictable
- avoid unnecessary abstraction
- preserve readability

## Repo hygiene
Do not create:
- duplicate app/site folders
- stray scaffold files
- backup-style copies
- multiple competing layout systems
- multiple conflicting component conventions

Do not leave behind:
- dead code
- unused components
- broken imports
- weak placeholder code presented as final work

## Output preference
When proposing or making changes, prefer responses that include:
1. what was inspected
2. what is being changed
3. why it is being changed
4. which files are affected
5. the full updated code for changed files when practical
6. what should be tested next

## Priority order for this project
1. repo cleanliness and architecture sanity
2. layout and route foundation
3. homepage quality
4. content system for News / Reviews / Blog
5. store structure
6. about/contact polish
7. global consistency and launch-readiness polish

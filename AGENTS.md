# AGENTS.md

## Project
Nerd Cluster

Nerd Cluster is a polished entertainment, fandom, pop-culture, and collector-focused website. It should feel cinematic, modern, editorial, playful, and highly browsable. This is a real brand site, not a throwaway demo.

## Mission
Build and maintain a clean, scalable, content-driven website with strong UX, strong visual design, and architecture that can grow over time without turning into a mess.

Core sections:
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
- Contributor pages
- CMS integration
- Product detail pages
- Admin/editorial workflow

## Product standards
Every change should support these goals:
- visually polished
- easy to browse
- easy to update
- modular
- scalable
- consistent
- accessible
- brand-forward
- future CMS-friendly

The site should never feel like:
- a generic starter template
- a default developer scaffold
- a random pile of pages
- a cluttered fandom mess
- a corporate SaaS site wearing a fake nerd hat

## Working method
Always work in this order:

1. Inspect
2. Plan
3. Implement
4. Validate
5. Summarize

Do not jump straight into code without understanding the repo first.

## Inspect phase requirements
Before making changes:
- inspect the repo structure
- identify stack/framework/tooling
- identify routes/pages/layouts/components/content models already present
- identify duplicate files, dead code, broken patterns, or naming problems
- identify what should be preserved versus replaced
- identify architectural risks

If the existing code is useful, improve it instead of rebuilding blindly.
If the existing code is messy, say so clearly and propose cleanup before adding more complexity.

## Planning requirements
Before implementation:
- propose the milestone goal
- explain what files will likely change
- explain how the change fits the site architecture
- favor low-chaos, high-coherence decisions
- avoid speculative overengineering

Preferred build style:
- meaningful milestones
- one coherent improvement at a time
- validate after each milestone

## Implementation rules
- keep naming clean and consistent
- prefer reusable components over repeated markup
- avoid duplicate site structures
- do not create files named things like `new`, `temp`, `copy`, `backup`, `old`, or `test2`
- do not leave dead components or unused styles behind
- do not add complexity that the project does not yet need
- do not fake features that are not really implemented
- do not silently break visual consistency

## Design rules
Act like a strong product designer, not just a coder.

Prioritize:
- typography hierarchy
- spacing rhythm
- visual consistency
- clean layout structure
- strong hero sections
- polished cards
- clear navigation
- strong mobile behavior
- accessible color contrast
- editorial energy
- tasteful motion and hover states

Avoid:
- cramped layouts
- weak hierarchy
- giant walls of text
- default-looking buttons/cards
- inconsistent spacing
- pages that feel disconnected from the rest of the brand

## Brand / vibe
Nerd Cluster should feel like:
- modern entertainment magazine
- collector/fandom culture hub
- cinematic and colorful, but still tasteful
- confident editorial voice
- fun without becoming childish
- polished enough to imagine publicly launching

## Content architecture guidance
Prefer content systems that are easy to maintain.

For content-driven sections like News, Reviews, and Blog / Features:
- support listing pages
- support individual detail pages
- use structured metadata
- support title, excerpt, date, author, categories/tags, featured image
- keep file organization clear
- keep future CMS migration possible

For Store:
- keep initial implementation simple
- support product cards and structured product data
- allow future expansion to product detail pages and external or integrated checkout

## Code quality rules
- preserve clear separation of concerns
- keep components small enough to understand
- keep layouts reusable
- keep route structure clean
- keep styling system consistent
- prefer maintainable code over clever code
- remove unused imports and dead code
- do not leave obvious broken references

## Validation requirements
After making changes:
- check for broken imports
- check route wiring
- check layout consistency
- check basic responsiveness
- check that new code fits the existing architecture
- identify anything still incomplete or risky

## Output format
When responding after implementation, always provide:

1. What you inspected or changed
2. Why you changed it
3. Files created / updated / deleted
4. Full updated code for each changed file
5. What should be tested next
6. Any risks, tradeoffs, or follow-up work

## GitHub workflow expectations
Treat GitHub as the source of truth.
Do not create parallel app/site copies unless explicitly asked.
Preserve repo cleanliness.
Prefer targeted edits over chaos.

## Decision guidelines
When unsure:
- choose the more maintainable option
- choose the more reusable option
- choose the more visually coherent option
- choose the simpler architecture that still supports growth
- choose the path that makes future content updates easier

## Immediate priorities
When building Nerd Cluster, prioritize in roughly this order:
1. repo audit / cleanup
2. layout + route foundation
3. navigation + footer
4. homepage
5. News / Reviews / Blog content system
6. Store structure
7. About / Contact
8. polish pass
9. launch-readiness audit

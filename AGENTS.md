# AGENTS.md — gezenbiri Brand System Rules

This file is the operating contract for every AI agent, code assistant, designer, image model, automation, and human contributor working in this repository.

Its purpose is to preserve the gezenbiri brand system. Do not treat this repository as a generic travel website template. It is a living brand system for a contemporary Turkish experience and social-discovery community.

## 1. Scope

These instructions apply to the repository root and every active subdirectory unless a more specific nested `AGENTS.md` explicitly adds stricter rules.

The active system includes:
- `index.html` — ecosystem hub, navigation index, and design showcase
- `brand-guidelines.html` — brand philosophy, identity, usage, voice, and standards
- `brand.css` — canonical design tokens and System Dot implementation
- `system-dot.html` — System Dot meaning, geometry, and usage demonstrations
- `icon-morph-motion.html` — canonical monoline glyphs and motion behavior
- `instagram-suite.html` — social formats, captions, hashtags, and publishing examples
- `merch-guidelines.html` — physical production and merchandise standards
- `gezenbiri_website.html` — website application example
- `trip-cards.html` — route-card application example
- `packing-guide.html` — packing and journey-guide application example
- `whatsapp-ticket.html` — WhatsApp ticket and digital pass experience
- `vector-export.html` — vector & print asset library (SVG / 4K PNG) for signage and production
- `data/events.js` — canonical event and trip data
- `full-audit.js` and `qa-check.js` — automated conformance checks

Files in `archive/` and raw references in `örnekler/` are historical or exploratory. Never copy rules from them into active files unless the user explicitly requests restoration of a historical version.

## 2. Authority and conflict order

When sources disagree, use this priority order:
1. The user’s explicit instruction for the current task
2. This `AGENTS.md`
3. `brand.css` for exact tokens and System Dot implementation
4. `icon-morph-motion.html` for exact glyph geometry and motion
5. `brand-guidelines.html` and `system-dot.html` for identity usage
6. `instagram-suite.html` for social copy, hashtag, Story, and Feed conventions
7. `data/events.js` for event facts and dynamic content
8. `README.md` for architecture and repository overview
9. Existing active implementation patterns

If a requested change conflicts with a non-negotiable brand rule, do not silently improvise. Explain the conflict and ask whether the user wants an intentional exception.

## 3. Brand essence

### Positioning
gezenbiri is a modern lifestyle, experience, and social-discovery community. It brings people together around creative workshops, local tables, cultural gatherings, and carefully curated small escapes.

It must not resemble:
- a conventional travel agency
- a cheap tour operator
- an airline campaign
- a backpacker blog
- a generic booking portal
- a cliché tourism advertisement

### Core language
- **Brand name:** `gezenbiri`
- **Main slogan:** `Bir yere gidelim.`
- **Secondary line:** `Gitmeye değer yerler. Tanışmaya değer insanlar.`
- **Manifesto closing:** `Arada bir gitmek lazım. Biz de sadece gezenbiriyiz.`

### Character
Every output should feel:
- spontaneous
- warm and sincere
- curious
- simple and editorial
- social and inclusive

Prefer an inviting first-person or collective voice. The user should feel they are joining real people, not purchasing a packaged holiday.

## 4. Wordmark and naming rules

### Canonical wordmark
The brand name is always:
**`gezenbiri`**

Rules:
- always lowercase
- always one word
- set in Plus Jakarta Sans 900 / Black
- never alter, decorate, distort, or replace an individual letter
- never place a person, route, arrow, pin, or symbol inside a letter

Forbidden forms include:
- `GEZENBİRİ`
- `Gezenbiri`
- `Gezen Biri`
- `gezen biri`

Uppercase `GEZENBİRİ` may appear only inside documentation that explicitly demonstrates a forbidden example. Do not use it in production-facing UI.

### Canonical implementation
Use an inline wordmark followed by the canonical System Dot:
```html
<span class="gb-wordmark">gezenbiri<span class="system-dot" aria-hidden="true"></span></span>
```

Existing active files may use `.system-dot`, `.gb-system-dot`, or a legacy-compatible class already supported by `brand.css`. Reuse the canonical class already defined in `brand.css`; do not create another local geometry implementation.

### Monogram
The official monogram is lowercase `gb` followed by the canonical System Dot. Use it for avatars, favicons, seals, and compact applications.

## 5. System Dot — non-negotiable geometry

The System Dot is not ordinary punctuation. It represents the person who decides to go, the action spark, the destination coordinate, and the final decision mark.

Canonical geometry:
```css
width: 0.15em;
height: 0.15em;
margin-left: 0.12em;
border-radius: 50%;
background: var(--gb-coral); /* #FF4D3D */
```

Rules:
- geometry is defined only in `brand.css`
- do not redefine its width, height, gap, or transform inside HTML files
- do not use `0.155em`
- do not use a `0–1 px` gap
- do not enlarge it into a decorative circle
- do not substitute a normal text period for it in the logo
- do not animate a logo System Dot
- allow at most one System Dot per independent logo component
- implement it as an inline `<span>`, never a block `<div>`

### Slogan punctuation
The period in `Bir yere gidelim.` is ordinary typographic punctuation. It remains the same color and typeface as the slogan. Never replace it with an orange System Dot and never append a System Dot to the slogan.

### Static versus live dots
- `.system-dot` / `.gb-system-dot`: static identity component; no animation
- `.gb-live-dot` / `.live-badge-dot`: live-status indicator; animation may be used as defined by the system

Do not confuse these roles.

### Favicon geometry
When the standardized favicon ellipse is used, preserve:
`rx=3, ry=3.09, fill=#FF4D3D`

## 6. Logo and System Dot in AI-generated imagery

Image-generation models are not trusted to reproduce the gezenbiri wordmark, System Dot, slogan punctuation, or canonical icons accurately.

Therefore:
- Do not ask a raster image model to invent or typeset the final logo.
- Generate only the background, atmosphere, photography, or texture when generative imagery is needed.
- Add the final wordmark, System Dot, copy, hashtag, and glyphs deterministically using HTML/CSS, SVG, Canvas, or a layout tool.
- Use Plus Jakarta Sans 900 for the wordmark and the exact System Dot geometry from `brand.css`.
- Inspect the final composite at 100% scale before delivery.
- Reject and redo any output with a wrong letterform, oversized dot, non-canonical dot geometry, altered slogan punctuation, or improvised icon.
- Never approve an image merely because it looks visually close. Exact identity geometry takes precedence over aesthetic similarity.

## 7. Color system

Use variables from `brand.css`. Do not hardcode near-match colors when a token exists.

| Token | Name | Value | Primary role |
| :--- | :--- | :--- | :--- |
| `--gb-cream` | Warm Cream | `#F6F3ED` | Canvas/background, approximately 65% |
| `--gb-charcoal` | Dark Charcoal | `#202020` | Type and contrast, approximately 20% |
| `--gb-coral` | Action Coral | `#FF4D3D` | Action, System Dot, emphasis, approximately 10% |
| `--gb-sage` | Sage Green | `#A8B89A` | Nature and calm accents, approximately 5% |
| `--gb-sky` | Sky Blue | `#A9D5E8` | Sea and coastal support |
| `--gb-sand` | Sand Beige | `#D8CCBC` | Earth and warm card surfaces |
| `--gb-stone` | Stone Grey | `#D9D6D1` | Neutral dividers |
| `--gb-white` | Pure White | `#FFFFFF` | Clean card surfaces |

Forbidden drift values include `#F7F5F0` and `#EAE5DC`.

Action Coral is an interface color. The System Dot is a geometric identity component that happens to use Action Coral. Do not treat every coral circle as a System Dot.

## 8. Typography

### Plus Jakarta Sans
- `900`: wordmark and monogram
- `800`: hero and display headings
- `700`: section headings and buttons
- `500/600`: card headings and metadata
- `400`: body copy

### Instrument Serif Italic
Use only for editorial emphasis, manifesto sentences, atmospheric route language, and selected quotations.

Never use Instrument Serif for:
- buttons
- navigation
- forms
- operational labels
- general interface copy

Load fonts without circular CSS variable references. Preserve readable fallback stacks.

## 9. Layout and visual direction

The visual system is minimalist, contemporary, warm, and Swiss-editorial.

**Use:**
- disciplined modular grids
- generous negative space
- clear hierarchy
- tactile but restrained texture
- simple geometric structure
- warm editorial photography when photography is required
- subtle shadows only through canonical tokens

**Avoid:**
- generic travel collages
- excessive gradients
- decorative clutter
- loud glassmorphism
- neon tourism aesthetics
- stock airplane, suitcase, globe, passport, and landmark clichés
- excessive rounded cards without a functional reason
- fake urgency or aggressive sales framing

Use the canonical radius and shadow tokens from `brand.css` rather than inventing new values.

## 10. Canonical icon system

The only official pictogram family is defined in `icon-morph-motion.html`.

The eight canonical monoline glyphs are:
1. Konum & Rota
2. Takvim & Tarih
3. Kahve & Fincan
4. Kadeh & Sofra
5. Çanta & Bavul
6. Objektif & Kamera
7. Pusula & Yön
8. Bilet & Giriş

Rules:
- copy the exact SVG geometry from `icon-morph-motion.html`
- preserve its `viewBox`, paths, ellipses, stroke width, round caps, and round joins
- preserve the defined System Dot nucleus and its color behavior
- do not redraw a glyph from memory
- do not improvise a new route, meeting, location, or community symbol if a canonical glyph already covers the meaning
- do not use native emoji as icons
- do not use third-party icon-library substitutes for a canonical glyph
- use motion only where the Motion Lab defines or permits it

For “Bir yere gidelim.” or route/launch communication, prefer the canonical Konum & Rota glyph. For community gathering, use the canonical social/meeting implementation already present in the Motion Lab rather than an invented connection diagram.

## 11. Voice and copy

### Voice rules
- write naturally in Turkish
- be short, warm, direct, and inviting
- favor real moments and social connection over destination boasting
- use active, human sentences
- use punctuation deliberately
- keep calls to action conversational

### Avoid agency clichés
Do not use phrases such as:
- *unutulmaz tatil*
- *erken rezervasyon fırsatı*
- *rüya gibi tatil*

Also avoid generic superlatives, empty luxury claims, and manipulative scarcity.

### Emoji
Decorative/native emoji are prohibited in production UI and master social templates. Use canonical monoline SVG glyphs or typography instead.

### Claims
Do not invent member counts, testimonials, venue names, instructors, dates, prices, remaining capacity, sold-out status, or real-event claims. Use `data/events.js` only when the repository intentionally treats those entries as the relevant source, and preserve prototype disclosures where required.

## 12. Social media rules

### Formats
- Story: `9:16`
- Feed post: `1:1` unless a task explicitly specifies another supported format

### Caption guidance
- aim for a maximum of approximately 150 characters when using the master caption formula
- start with a hook
- add one concrete detail or emotion
- finish with a conversational invitation
- do not overuse emoji
- use deliberate sentence-ending punctuation

### Hashtags
Use hashtags from the canonical set in `instagram-suite.html`; select only those relevant to the content.

Core tags:
- `#gezenbiri`
- `#biryeregidelim`

Supporting tags include:
`#haftasonukaçamağı`, `#spontanegezi`, `#gezigrubu`, `#bozcaada`, `#kapadokya`, `#alaçatı`, `#urla`, `#kaş`

Dynamic route form:
`#gezenbiri[rota]`

Do not invent a new “official” hashtag set without updating the social guide.

## 13. Technical architecture

The repository uses static HTML5, shared CSS, and lightweight Vanilla JavaScript. Node.js exists for audit and QA scripts, not as a required browser runtime.

Rules:
- preserve static hosting compatibility
- do not introduce React, Vue, Next.js, a bundler, or a runtime dependency unless the user explicitly requests an architectural migration
- link every active HTML entry point to `brand.css`
- do not duplicate canonical tokens or System Dot geometry in page-local `<style>` blocks
- prefer semantic HTML and progressive enhancement
- keep relative asset paths valid for GitHub Pages and static CDNs
- do not rename active pages casually; navigation and audit scripts depend on known filenames

## 14. Data architecture

`data/events.js` is the single source of truth for event and trip records.

When adding or editing event content:
- edit `data/events.js`, not duplicated card markup
- preserve unique IDs
- preserve the expected schema
- preserve ISO date strings
- preserve valid `startMeta` and `endMeta` generation
- keep `price` and `priceRaw` consistent
- keep capacity, available slots, status, and tags logically consistent
- keep referenced asset paths valid
- preserve prototype flags and disclosures when applicable

The website, trip cards, WhatsApp tickets, and Instagram suite must continue hydrating from this source through their existing functions.

## 15. Accessibility

Accessibility is part of the brand, not an optional enhancement.

Preserve:
- semantic landmarks and headings
- meaningful alternative text
- visible keyboard focus through `:focus-visible`
- sufficient contrast
- `prefers-reduced-motion`
- accessible names for icon-only controls
- `role="dialog"` and `aria-modal="true"` for modals
- Escape-to-close behavior
- Tab and Shift+Tab focus trapping
- focus restoration after modal close

Do not use color alone to communicate status.

## 16. Assets and repository hygiene
- use existing assets before creating substitutes
- verify every local `src` and CSS `url(...)` target
- do not reference deprecated numbered filenames
- do not overwrite production assets unless replacement is explicitly requested
- use versioned filenames for alternatives
- keep generated or exploratory files out of active production paths until approved
- do not copy raw `örnekler/` files into active UI without review
- preserve `archive/` as history; do not treat it as a source of current truth
- avoid adding the same binary under multiple extensions unless both formats are genuinely required

## 17. Privacy and release state

This repository is a brand-system repository. Preserve its prototype/privacy posture unless the user explicitly requests a release change.
- do not remove `noindex` / `nofollow` or crawler restrictions casually
- do not present prototype data as verified live events
- do not expose private operational notes, unpublished strategy, or raw working files in a public-facing artifact
- do not change domain, social handle, contact address, copyright, or ownership information without explicit confirmation

Current official references in the repository include:
- `gezenbiri.com`
- `gezenbiri.com.tr`
- `gezenbiri.tr`
- `gezenbiri.co`
- `@gezenbiri`
- `selam@gezenbiri.com.tr`

## 18. Required workflow for every change

### Before editing:
1. Read this file.
2. Identify the canonical source for the requested component.
3. Inspect the relevant active implementation and its dependencies.
4. Check whether the same content is generated from `data/events.js` or shared CSS.
5. State any assumption that materially affects brand output.

### While editing:
1. Make the smallest coherent change.
2. Reuse canonical tokens, SVG paths, components, and data.
3. Preserve unrelated content and user work.
4. Do not “improve” fixed brand geometry by eye.
5. Do not create a parallel source of truth.

### After editing:
1. Run `npm test`.
2. If relevant, also run `node full-audit.js` and `node qa-check.js` separately while diagnosing failures.
3. Inspect the modified page at desktop and mobile widths when layout changed.
4. Verify keyboard behavior when interaction changed.
5. Verify all Turkish characters and exact copy.
6. Verify that all local assets resolve.
7. Report what changed, what was tested, and any remaining limitation.

Do not claim success when an audit fails. Fix the issue or report the exact blocker.

## 19. Pre-delivery brand checklist

Every agent must confirm all applicable items:
- [ ] `gezenbiri` is lowercase and one word
- [ ] wordmark uses Plus Jakarta Sans 900
- [ ] System Dot uses `0.15em` / `0.15em` / `0.12em` (1:1 daire)
- [ ] slogan period is ordinary punctuation, not a System Dot
- [ ] logo System Dot is static
- [ ] colors use canonical tokens and exact values
- [ ] no obsolete cream or sand values were introduced
- [ ] icons come from the canonical Motion Lab geometry
- [ ] no decorative emoji appear in production UI
- [ ] copy avoids travel-agency clichés
- [ ] no factual event or community claim was invented
- [ ] dynamic event content comes from `data/events.js`
- [ ] active HTML links `brand.css`
- [ ] focus and reduced-motion behavior remain intact
- [ ] local asset paths resolve
- [ ] prototype/privacy disclosures remain correct
- [ ] `npm test` passes

## 20. Decision rule

When choosing between a visually attractive approximation and exact brand compliance, choose exact brand compliance.

When uncertain, stop improvising and consult the canonical source.

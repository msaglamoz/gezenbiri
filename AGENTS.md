# AGENTS.md — gezenbiri Brand System Rules

This file is the operating contract for every AI agent, code assistant, designer, image model, automation, and human contributor working in this repository.

Its purpose is to preserve the gezenbiri brand system. Do not treat this repository as a generic travel agency or social-discovery/dating community. It is a living brand system for a contemporary Turkish destination growth and experience company (Destinasyon Geliştirme ve Deneyim Şirketi).

## 1. Scope

These instructions apply to the repository root and every active subdirectory unless a more specific nested `AGENTS.md` explicitly adds stricter rules.

The active system includes:
- `index.html` — ecosystem hub, navigation index, and corporate showcase
- `brand-guidelines.html` — brand philosophy, identity, corporate functions, usage, voice, and standards
- `sunum.html` — corporate pitch and destination development deck (B2B/B2C)
- `brand.css` — canonical design tokens and System Dot implementation
- `system-dot.html` — System Dot meaning, geometry, and usage demonstrations
- `icon-morph-motion.html` — canonical monoline glyphs and motion behavior
- `instagram-suite.html` — social formats, captions, hashtags, and publishing examples
- `merch-guidelines.html` — physical production and merchandise standards
- `gezenbiri_website.html` — destination experience booking portal example
- `trip-cards.html` — destination route-card application example
- `packing-guide.html` — destination journey-guide application example
- `whatsapp-ticket.html` — WhatsApp digital pass and concierge confirmation experience
- `vector-export.html` — vector & print asset library (SVG / 4K PNG) for signage and production
- `data/events.js` — canonical destination programs and experience data
- `full-audit.js` and `qa-check.js` — automated conformance checks

Files in `archive/` and raw references in `örnekler/` are historical or exploratory. Never copy rules from them into active files unless the user explicitly requests restoration of a historical version.

## 2. Authority and conflict order

When sources disagree, use this priority order:
1. The user’s explicit instruction for the current task
2. This `AGENTS.md`
3. `brand.css` for exact tokens and System Dot implementation
4. `icon-morph-motion.html` for exact glyph geometry and motion
5. `brand-guidelines.html` and `system-dot.html` for identity usage
6. `sunum.html` for B2B/B2C business model and problem-solution narrative
7. `instagram-suite.html` for social copy, hashtag, Story, and Feed conventions
8. `data/events.js` for event facts and dynamic content
9. `README.md` for architecture and repository overview
10. Existing active implementation patterns

If a requested change conflicts with a non-negotiable brand rule, do not silently improvise. Explain the conflict and ask whether the user wants an intentional exception.

## 3. Brand essence & business model

### Approved Brand Definition (Onaylı Marka Tanımı)
gezenbiri, faaliyet gösterdiği destinasyonlara ziyaretçi ve talep kazandıran, o bölgeye özgü deneyimleri yerel iş ortaklarıyla geliştirip rezervasyona hazır hâle getiren ve Türkiye’de ve uluslararası pazarlarda satışa sunan bir **destinasyon geliştirme ve deneyim şirketidir**.

- **İngilizce kurumsal unvan:** `Destination Growth & Experience Company`
- **Başlangıç coğrafyası:** `Kayseri–Erciyes–Kapadokya` (model farklı destinasyonlara uygulanabilir; `Alaçatı–Çeşme` genişleme örneği olarak kullanılır).
- **Çıkış sorusu:** *“Bir ziyaretçiye buraya gelmesi için hangi özgün nedeni sunabiliriz?”* Önce bu neden ve deneyim tasarlanır. Ulaşım, rehberlik, ekipman, konaklama ve diğer hizmetler deneyimin gerektirdiği ölçüde bir araya getirilir.

It must not resemble:
- a conventional mass travel agency or tour operator
- an airline campaign
- a backpacker blog
- an amateur social club or dating/friend-making meetup group
- a generic online booking portal
- a cliché tourism advertisement

### Three Complementary Functions (Üç Tamamlayıcı İşlev)
Bunlar üç ayrı şirket değildir; tek bir iş modeli içinde birbirine bağlı kurumsal işlevlerdir:
1. **gezenbiri Destinations:** Destinasyonun ziyaret edilme nedenlerini belirler. İçerik, kampanya ve satış ortaklıklarıyla Türkiye’de ve dış pazarlarda bölgeye talep yaratır.
2. **gezenbiri Experiences:** Yerel kültür, gastronomi, doğa, spor ve atölyelerden satın alınabilir deneyimler ve gezenbiri’ye özgü imza programları geliştirir.
3. **gezenbiri DMC:** Transfer sağlayıcıları, oteller, rehberler, eğitmenler, restoranlar ve atölyelerden oluşan yerel tedarik ağını kurar. Programları ulusal ve uluslararası acenteler ile tur operatörlerinin satabileceği ve sahada gerçekleştirilebilecek hâle getirir.

**Tekleştirici Örnek (Örnek Program):**
Kapadokya’da konaklayan bir ziyaretçiye Erciyes’te bir kar günü önerilir:
- *Destinations*, ziyaretçiye kışın neden Erciyes’e gitmeye değer olduğunu anlatır ve talep oluşturur.
- *Experiences*, dağda geçirilecek günü tasarlar (ekipman, pist rehberliği, dağ lezzetleri).
- *DMC*, Kayseri–Erciyes transferini, yerel kayak hocasını ve dağ operasyonunu koordine eder.
*(Bu program bir konsept örneğidir; canlı satışta olduğu izlenimi verilmez).*

### Problem–Solution Narrative (Somut Destinasyon Fırsatı)
- **Problem (Eski "şehir insanının yalnızlığı" DEĞİLDİR):** Ziyaretçi gittiği bölgede ne yapabileceğini, nereye gideceğini ve o yerin ruhunu nasıl yaşayacağını göremeyebilir. Yerel üreticinin veya ustanın çok iyi bir deneyimi olabilir; ancak bunun ürün tanımı, operasyonel standardı, rezervasyon sistemi ve ulusal/uluslararası satış kanalı eksiktir.
- **Çözüm:** gezenbiri bu iki tarafı deneyim tasarımı, destinasyon pazarlaması ve yerel DMC operasyonuyla bir araya getirir.

### Anti-Patterns: No Social Matching or Friend-Making Promises
Aşağıdaki ifadeler ana vaat, kampanya kancası veya başarı ölçütü olarak KESİNLİKLE kullanılamaz:
- ❌ *"anında arkadaş ol"*
- ❌ *"yalnız gel, arkadaşlarla dön"*
- ❌ *"ilk 10 dakikada gruba ait hisset"*
- ❌ *"şehir insanının yalnızlığına son"*
- ❌ *"sosyal eşleşme / arkadaş bulma kulübü"*

Sıcak ve davetkâr editoryal dil korunur. Bir sofrada buluşmak, yerel bir ustayla çalışmak veya vadiyi yürümek anlatılır; ancak sahneler şu soruya yanıt verir: **Misafir burada ne yaşayacak ve bu deneyim neden bu yere özgü?**

### Core language & slogans
- **Brand name:** `gezenbiri` (always lowercase, single word, with System Dot)
- **Main slogan:** `Bir yere gidelim.` (aynen korunur; sonundaki nokta tipografiktir).
- **Manifesto closing:** `Arada bir gitmek lazım. Biz de sadece gezenbiriyiz.` (aynen korunur).
- **Secondary line status:** Eski `Gitmeye değer yerler. Tanışmaya değer insanlar.` cümlesi artık zorunlu bir marka imzası DEĞİLDİR. Yerine kendiliğinden yeni bir resmî slogan uydurulmaz; logo+slogan kompozisyonlarında ana slogan `Bir yere gidelim.` temel alınır.

### Brand Architecture & Taxonomy
- **Kurumsal İşlevler:** `Destinations`, `Experiences`, `DMC`
- **Deneyim Formatları (Ziyaretçinin seçtiği format):** `atölye`, `sofra`, `doğa yürüyüşü`, `kültür & keşif`, `spor`
- **Zaman Bilgisi:** `hafta sonu`, `günübirlik`, `çok günlük` (alt marka değildir).
- **Hizmet Biçimi:** `özel (private)` veya `paylaşımlı (shared)` (alt marka değildir).

### Product & Booking Principles
- **Mobil Öncelikli & Üyeliksiz:** Ziyaretçi üye olmadan, zahmetsizce rezervasyon adımlarına geçebilir.
- **Hizmet Seçenekleri (Modüler Esneklik):**
  1. *Yalnız Transfer:* Destinasyon içi veya havalimanı–vadi–dağ shuttle.
  2. *Transfer + Deneyim:* Gidiş-dönüş ulaşım ve yerinde rehberli/atölyeli deneyim.
  3. *Özel Araç + Deneyim:* Gruba/aileye tahsis edilmiş özel araç ve kişiselleştirilmiş program.
  4. *Paket Program:* İhtiyaca göre konaklama, transfer ve deneyim kombinasyonu. Konaklama her üründe ZORUNLU DEĞİLDİR; günübirlik ve hafta sonu kaçışları desteklenir.
- **WhatsApp Concierge:** Satış baskısı kurmayan, danışmanlık, bilet iletimi ve buluşma koordinasyonu kanalıdır.
- **Paylaşımlı Seferler (Shared):** Kişi başı fiyatlandırılır. Onaylanmış sefer **tek yolcuyla dahi olsa kesin kalkışlıdır**; düşük doluluk gerekçesiyle iptal edilmez. Başlangıçta Cuma, Cumartesi ve Pazar günleri belirli saatlerde düzenlenir.
- **Özel Hizmetler (Private):** Haftanın 7 günü talep üzerine planlanır; araç veya grup bazında fiyatlandırılır.

### Three Distinct Narrative Angles (3 Farklı Paydaş Anlatımı)
1. **Bireysel Ziyaretçi İçin:** "Bölgeye geldiğinde yüzeysel bir turist gibi hissetme. Erciyes'in saklı pistlerini, Kapadokya'nın en eski çömlek ustasını veya bağ evinin yerel sofrasını tek tıkla, garantili ulaşım ve kusursuz rehberlikle yaşa."
2. **Satış Ortağı & Acente İçin:** "Misafirlerinize bölgede hazır, operasyonu test edilmiş ve yerel güvenceye sahip niş deneyimler sunun. gezenbiri DMC altyapısı sayesinde transferden rehberliğe tüm zincir tek noktadan ve komisyonlu satışa hazır olarak sağlanır."
3. **Yerel Sağlayıcı & Üretici İçin:** "Atölyenizi, bağınızı veya mutfağınızı dünyaya açın. gezenbiri deneyiminizi tasarlar, dijital rezervasyona açar ve nitelikli yerli-yabancı ziyaretçiyi kapınıza getirir."

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

The iconography operates in two distinct, non-conflicting tiers:

### Tier 1: 8 Kanonik System Dot Glifi (Master 32×32 Piktogram Ailesi)
The primary brand pictogram family is defined exclusively in `icon-morph-motion.html`. Each glyph embeds an Action Coral (`#FF4D3D`) System Dot nucleus:
1. **Konum & Rota** (Hedef Koordinat & Çapa)
2. **Takvim & Tarih** (Planlama & Buluşma)
3. **Kamera & An** (Objektif & Görsel Hafıza)
4. **Kahve & Mola** (Fincan & Buhar)
5. **Kadeh & Tadım** (Lokal Sofra & Lezzet Damlası)
6. **Pusula & Yön** (Keşif & Merkez İğne)
7. **Topluluk & İnsan** (Sosyal Bağlantı & Birliktelik)
8. **Bilet & Rezervasyon** (Giriş Kartı & Onay Mührü)

### Tier 2: 16 Minimal Arayüz & Bölgesel Rota İkonu (Yardımcı 24×24 İkon Ailesi)
Monoline (1.8px) interface and destination-specific pictograms without an embedded System Dot nucleus:
- Konum, Takvim, Topluluk, Fotoğraf, Kahve, Rota, Çanta, Tabela, Butik Otel, Sofra, Müzik, Gün Batımı.
- Bölgesel Rota İkonları: Erciyes Dağı, Kapadokya Balon, Peri Bacası, Kayseri Saat Kulesi.

Rules:
- copy the exact SVG geometry from `icon-morph-motion.html` and `vector-export.html`
- preserve `viewBox` (32×32 for Tier 1 Glyphs, 24×24 for Tier 2 Icons), paths, stroke width (1.8), round caps, and round joins
- preserve the defined Action Coral System Dot nucleus in Tier 1 glyphs
- do not redraw a glyph from memory
- do not improvise a new route, meeting, location, or community symbol if a canonical glyph already covers the meaning
- do not use native emoji as icons
- do not use third-party icon-library substitutes for a canonical glyph
- use motion only where the Motion Lab defines or permits it

For “Bir yere gidelim.” or route/launch communication, prefer the canonical Konum & Rota glyph. For community gathering, use the canonical Topluluk & İnsan glyph already present in the Motion Lab rather than an invented connection diagram.

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

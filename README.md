# Debonair Salon — Static Review Prototype

Open `index.html` directly in a modern browser. All four pages use relative links: `index.html`, `services.html`, `about.html`, `contact.html`. Alternatively run `python3 -m http.server 8000` from this folder and open `http://localhost:8000`. No build step or backend.

## Implemented
Four pages, shared responsive header/footer, mobile menu, all 13/18 category titles and 47 numbered deals, contextual WhatsApp links, appointment form with required fields, validation and WhatsApp handoff, branch map reference links, social links, responsive dark/gold CSS and reduced-motion support.

## Pending input / release blockers
- Original logo and approved salon interior image files were not present in the uploads. Visual placeholders are intentional.
- The prior user-supplied source provided 47 numbered **selected** deal inclusion lists, now presented exactly in `js/catalog.js` (313 displayed items). The source itself did **not** establish that each package inclusion list was exhaustive, and no package prices were provided. Client confirmation of full deal terms is pending.
- The three About Us editorial articles now use the expanded copy supplied by the client (16 October 2026); earlier About-page draft labels have been removed.
- Homepage branch names and three distinct Google share links were provided by the client. Street addresses, distinct branch phone numbers, map embed coordinates, and actual short-link destinations remain unverified. Client-confirmed operating times for all three Contact Page branches are 10:30 AM – 11:30 PM; no day-of-week schedule was supplied.
- Final domain/canonical URLs, final content approval, rights-cleared imagery, and approval of uncertain spellings/prices are needed.

## Dependencies
Google Fonts (Cinzel and Poppins) requires network access; system fallbacks work offline. WhatsApp and Google Maps links require internet. No analytics, payment, CMS or server submission.

## Review notes
Source specification requested a Mocca-inspired dark visual language but PRD specifies Cinzel display; PRD typography takes precedence. No ThemeForest proprietary assets were copied. This is a review prototype, not a verified live production site.


## Visual assets in this revision
Four bundled JPG reference concept photographs are included for the salon interior, men’s grooming, women’s hairstyling, and bridal makeup. All image areas on Home, Services, About, and Contact use these references, with clear concept labels. The older SVG illustrations remain as optional assets. These are **not verified Debonair Salon photographs**. Replace with approved logo and interior photography before publishing. No commercial theme images are copied.

## Pricing update (15 October 2026)
Men: 13 categories / 72 priced entries. Women: 18 categories / 88 priced entries and an unpriced Hair Treatment note. Source spellings and values preserved. Deals 01–47 now display the recovered user-supplied selected inclusions (313 lines total) and remain price-enquiry-only; complete package terms still require approval.

## Premium black & cream UI refinement (15 October 2026)
Dark canvas, selectively warm-cream pricing and deal cards, 13px rounded cards and 10px rounded actions. See `design.md` for approved design tokens. Original service catalogue, image references, deal inventory and WhatsApp functionality remain unchanged. Browser QA results and any constraints are in `VERIFICATION.md`.


### Latest visual pass
Homepage hero now emphasizes DEBONAIR, requested text strips and visible AI/concept badges are removed, and section contrast/scroll reveals are refined. The bundled photos remain unverified reference assets and are not real Debonair Salon photography. Men's/Women's pricing data and deals were not edited.

## Homepage hero: full-width luxury photograph (15 October 2026)

The homepage split-screen hero was replaced by a single responsive, full-width photographic hero with a centered DEBONAIR heading, the existing tagline and description, and the original appointment/services CTAs. The existing `assets/salon-interior-concept.jpg` photo remains bundled (it is a concept reference, not verified salon photography). The cinematic component uses a dark readability overlay and brief, reduced-motion-aware entrance reveals. All other homepage sections, 13 Men's price categories, 18 Women's price categories, 47 deals, and shared footer are unchanged. See `design.md` and `VERIFICATION.md` for details.

The bundled reference interior photo is 828 × 462 pixels and may appear soft on large desktop displays. A rights-cleared, client-approved high-resolution salon photograph is recommended before publication. The same reference interior image also appears in the unchanged homepage locations section; resolving that duplication requires a second approved image and is outside this hero-only correction.

## Homepage branch directory (15 October 2026)
The homepage “Find your Debonair” section now presents three individual warm-beige branch cards (Bukhari, Seher commercial, shaheed e millat) with distinct client-provided `share.google` links and View Location actions. The removed generic image was a duplicated interior concept reference. Final map destinations and branch street addresses could not be independently verified. The Contact Page was subsequently corrected in the 16 October 2026 contact-specific update below. The homepage retains its separately approved order.

## Services Deal Collection update (16 October 2026)

All 47 deal cards now use the original user-supplied per-deal inclusion lists, matched by number (313 total included lines), in `js/catalog.js`. The public pricing-update notice and repetitive developer-facing placeholder/disclaimer copy were removed from `services.html` and the deal renderer. All deal cards use the approved warm beige and preserve deal-specific WhatsApp enquiries. **No deal prices have been invented.** Source listings were described as selected/partial, so the completeness of each package remains a client-approval item; this disclosure belongs to project release notes, not the public cards.

For the Deals promotional tab, the original bundled `mens-grooming-concept.jpg` was used temporarily in place of the bridal/makeup reference, showing a male client being groomed. **This photo is used elsewhere on the website.** A distinct client-approved men's grooming photo is still needed to meet the no-duplicates rule. The visible mood-board label accurately states this is not a photograph of Debonair. The original selected service photos, homepage, footer and unrelated pages have not been modified.

## Contact branch details update (16 October 2026)
The Contact Page now lists the three client-confirmed branches in the requested order: Shaheed-e-Millat, Seher Commercial, Bukhari. Every Contact card displays Karachi and 10:30 AM – 11:30 PM, plus the corresponding supplied Google Maps URL and an enquiry button that selects the named branch in the appointment form. The branch dropdown now uses these real names. The homepage's separately approved ordering remains unchanged. Street addresses, direct branch phone numbers and location image authenticity remain unverified; the existing reference-image disclosures are retained. Google short-link redirect destinations still require client/browser confirmation.

## About Us editorial update (16 October 2026)
The existing three articles have the newly supplied three-paragraph copy, while preserving the original headings, mission label, imagery, CTAs and article order. All three now use text-left/photo-right on desktop and text-first/photo-after on mobile; only `about.html` and scoped About-page CSS changed. Client-provided editorial copy supersedes the earlier About draft labels. Original image assets remain untouched. The same male grooming concept photo still appears in Articles 1 and 3: a distinct, suitable client-approved replacement is needed to remove that repetition without changing the prior photography direction. See `VERIFICATION.md` for recorded QA.


### Services banner / About articles update — 16 October 2026
- Services shared promo artwork stage across Men, Women and Packages has smaller section top padding, lifting it approximately 12–15px across inspected screen widths without changing stage internals or tabs.
- About sections retain the same headings and action destinations, but now use two client-approved paragraphs per section and a single article-above-image layout on all screen sizes. Images are kept to a restrained editorial width (max 840px).
- To avoid repeating the same photograph, the third About section now uses an existing bundled women’s hairstyling reference image. These are concept/reference photographs, not verified Debonair premises.
- Browser QA and screenshots are recorded in the verification report; live network-based link handoff is not asserted.


October 2026 image update: About Us “Our Story” (second section) now uses `assets/about-our-story-approved.webp`; homepage hero uses `assets/homepage-hero-approved.webp`; initial Men’s Services banner uses `assets/mens-services-approved.webp`. The About Us three vertical article/photo pairs now use equal-width centered frames.

## Contact card / homepage banner / Welcome image corrections (16 October 2026)
- Contact Page: Removed all three photographic figures and their `Reference image · not actual branch` captions. Branch order, names, operating hours, Google Maps URLs, appointment-form selection and enquiry buttons are unchanged. Text-only branch cards retain the dark/cream design.
- Homepage: Restored the previously used full-width hero background `assets/salon-interior-concept.jpg` (an **unverified concept/reference photograph**, not guaranteed to be an actual Debonair location). DEBONAIR hero text and CTAs remain unchanged.
- The newly supplied unmodified image `assets/debonair-welcome-reception.png` is now used **in both** Homepage → Welcome to Debonair and About Us → Welcome to Debonair Salon (first article). About Us → Our Story (second article) remains unchanged.
- This explicit approved reuse in two Welcome sections supersedes the previous no-duplicate preference **for this single requested image**. No business claims, deals, pricing or branch details were changed.


Latest update: Footer social links now use icon-only Instagram and Facebook actions. Packages promo image updated to supplied men's facial/grooming photo.

### Partial October 17 visual update
Footer social icons now display in a single row, and the About Us masthead uses the previous Home hero photograph. Home hero and three Self-Care card images await actual Reference Images 2, 4, 5 and 6.

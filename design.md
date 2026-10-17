**# design.md — Mocca-Inspired Dark Editorial Website Design System**



**\*\*Document type:\*\*** Visual specification / frontend design contract  

**\*\*Status:\*\*** Implementation-ready design baseline; reference limitations documented  

**\*\*Version:\*\*** 1.0 — 15 October 2026  

**\*\*Primary inspiration:\*\*** [Mocca — Coffee Shop WooCommerce Theme, ThemeForest item 33624746]\(https\://preview\.themeforest.net/item/mocca-woocommerce-wordpress-theme/full_screen_preview/33624746)  

**\*\*Companion visual evidence:\*\*** [Mocca — Coffee Shop PSD Template, ThemeForest item 32842043]\(https\://themeforest.net/item/mocca-coffee-shop-psd-template/32842043)  

**\*\*Scope:\*\*** Visual language, styles, compositions, states, responsive behaviour and CSS design tokens. The PRD exclusively determines business content, real assets, sitemap, features, and functionality.



\> **\*\*Evidence warning:\*\*** No user-uploaded reference screenshots were accessible in this conversation. The supplied live-preview URL returned only its Envato frame, not a renderable site body. Four readable *\*published companion PSD previews\** from the same designer were inspected instead, alongside the official WooCommerce theme listing. These PSD images are the best accessible visual proxies, **\*\*not verified live WordPress screenshots\*\*** and not proof of mobile views, behaviour or exact CSS. If pixel-faithful comparison to a specific live-page version is required, obtain desktop/mobile captures of that page before final sign-off. This document nevertheless supplies concrete **\*\*PROPOSED\*\*** implementation values so frontend work can proceed consistently.



**## Reading key and precedence**



\- **\*\*OBSERVED:\*\*** Directly visible in the accessible companion preview, or explicitly stated in the publisher's official theme listing. Publisher-listed fonts are documented as publisher evidence, not proven CSS-computed values.

\- **\*\*ESTIMATED:\*\*** Proportions or stylistic interpretations inferred from scaled static screenshots; not trustworthy measurements of CSS pixels.

\- **\*\*PROPOSED:\*\*** Selected, executable design decisions, interaction states or responsive adaptations not verifiable from the references.

\- **\*\*Source priority:\*\*** explicit instructions for the website being built → designated primary reference → compatible secondary references → accessibility/responsiveness adjustments → this document's proposed defaults. Never silently blend conflicting style families.

\- **\*\*Integration note:\*\*** This file extracts the **\*\*Mocca\*\*** visual language. If the Debonair PRD or another project instruction explicitly mandates **\*\*Cinzel-only\*\***, that is a higher-priority project requirement and conflicts with the Mocca typography pairing specified below. Resolve that project-specific conflict before implementation; do not secretly render Poppins/Meddon on a Cinzel-only site, and do not claim a Cinzel-only adaptation reproduces Mocca's type exactly. Black/gold and dark image-led layouts can be reused independently of font choice.



**---**



**# STEP 1 — Reference inspection and reconciliation**



**## 1.1 Reference inventory**



\| Reference | Source and visible region | Legibility / coverage | Findings and evidence status | Limitations |

\|---|---|---|---|---|

\| **\*\*Reference 01 — Primary\*\*** | [Companion PSD \`01_home.jpg\`]\(https\://s3.envato.com/files/347200679/01_home.jpg): header, split hero, partner/logo strip, beginning of image category mosaic | Main layout and colour relationship readable at reduced preview scale | **\*\*OBSERVED:\*\*** near-black canvas, compact horizontal header, left hero headline, large right-hand product photograph, floating subject motifs, restrained brass details, logo strip and uneven category collage | Lower homepage is cut off in surfaced preview; smaller captions unreadable; not a live WordPress capture |

\| **\*\*Reference 02\*\*** | [Companion PSD \`04_store.jpg\`]\(https\://s3.envato.com/files/347200679/04_store.jpg): inner header, page title area, filter sidebar and compact product grid | Layout legible; small type and controls largely unreadable | **\*\*OBSERVED:\*\*** dark inner banner, slim left filter rail, three-column main grid, square-ish image canvases, minimal product metadata | Bottom of listing/complete footer not visible; shop interactions unknown; only use where PRD requires catalog-style content |

\| **\*\*Reference 03\*\*** | [Companion PSD \`05_product.jpg\`]\(https\://s3.envato.com/files/347200679/05_product.jpg): centered inner banner, media gallery, details, tab strip and related thumbnails | Major composition legible | **\*\*OBSERVED:\*\*** large centered item image, thumbnails at left, text/action area at right, compact gold details, related item tiles | Some content unreadable; apparent teal is part of product packaging/artwork, **\*\*not\*\*** a global UI colour; functionality unknown |

\| **\*\*Reference 04\*\*** | [Companion PSD \`02_blog.jpg\`]\(https\://s3.envato.com/files/347200679/02_blog.jpg): inner banner, editorial post listing, narrow right sidebar | Image-to-text composition readable | **\*\*OBSERVED:\*\*** broad editorial photography, left main column plus right information rail, small metadata and dark sidebar widgets | Further scroll and article-detail sections not visible; only use if PRD includes editorial content |

\| **\*\*Reference metadata\*\*** | [Official Mocca WooCommerce item]\(https\://themeforest.net/item/mocca-woocommerce-wordpress-theme/33624746) | Publisher text readable; site screenshot unavailable | **\*\*OBSERVED from publisher listing:\*\*** “Clean Black Design”; fonts **\*\*Poppins\*\*** and **\*\*Meddon\*\***; imagery is preview-only, not supplied for reuse | Does not establish exact live CSS, placement, behaviour, or current deployment fidelity |

\| **\*\*Requested live URL\*\*** | [ThemeForest full-screen preview]\(https\://preview\.themeforest.net/item/mocca-woocommerce-wordpress-theme/full_screen_preview/33624746) | Envato wrapper only | **\*\*OBSERVED:\*\*** preview link exists | Embedded website not inspectable here; its exact current design is unverified |



**\*\*Primary-selection rationale:\*\*** Reference 01 is the most complete available home-composition image and establishes the same dark/gold, geometric/scripty language visible in References 02–04. The requested WooCommerce theme remains the intended primary source, while Reference 01 supplies its accessible visual proxy. No separate, newly uploaded screenshots were available to number.



**## 1.2 Conflict-resolution register**



\| Potential conflict | Evidence | Resolution / implementation rule |

\|---|---|---|

\| Publisher theme versus PSD companion | Live page is inaccessible; companion previews are visually readable | Use PSD references for **\*\*visual composition only\*\***; do not claim exact equivalence to WordPress output. |

\| Large photographic composition versus compact shop cards | Ref 01 hero and category collage; Refs 02–03 commerce layouts | Reference 01 governs general website feel. Introduce catalog structures **\*\*only\*\*** if the PRD includes them. |

\| Accent artwork colour versus UI palette | Ref 03 product packaging appears with teal | Do not promote artwork colours into global buttons or surfaces. Keep UI black/charcoal/warm-gold. |

\| Handwritten headlines versus legibility | Script in hero accents/inner headers; uppercase sans headings | Use script for **\*\*short decorative pre-headlines only\*\***, not navigation, functional controls or body copy. |

\| Previous Debonair Cinzel-only instruction versus Mocca font credits | Project-specific older direction versus official Mocca Poppins/Meddon listing | For this **\*\*reference-extraction document\*\***, record Mocca's two-family typography. A Cinzel-only PRD override takes precedence for the eventual Debonair implementation and requires a consciously adapted type scale. |

\| Decorative dark reference details versus accessibility | Fine, subdued rules/text visible in miniatures | Preserve restraint while increasing small-text brightness, focus visibility and touch sizes where necessary. |

\| Apparent compact desktop text versus real reading comfort | References downscaled to approximately 512px wide thumbnails | Treat tiny image text as scaling, not instruction to use 8px CSS. Use the legible type values in Step 3. |



**## 1.3 Reference anchors — must survive implementation**



\| Defining feature | Reference / visible region | Preservation rule | Allowed adaptation |

\|---|---|---|---|

\| **\*\*A1. Near-black immersive canvas\*\*** | 01 full homepage; 02–04 interior surfaces | Full website grounded in seamless coal/charcoal layers. Avoid white page sections and bright decorative gradients. | Slightly lighter raised panels and accessible text contrast. |

\| **\*\*A2. Hero visual dominates one side\*\*** | 01 top fold, machine occupying roughly right half | Hero must have asymmetric copy/photography composition; the image is the protagonist, not a tiny side thumbnail. | Replace coffee subject with licensed/project-provided photography; mobile crop/reorder allowed. |

\| **\*\*A3. Bold geometric sans + minimal calligraphic flourish\*\*** | 01 hero; 02–04 title/banner treatment | Strong upright uppercase/sentence-case sans hierarchy; short loose script gesture above important titles. | Script may be omitted for long titles, accessibility, or an explicit higher-priority brand typography rule. |

\| **\*\*A4. Scarce warm metallic accents\*\*** | 01 small symbols/line details; 02–03 prices, micro-highlights | Gold is a directional emphasis and interface signpost, not a large background wash. | Adjust brightness for contrast; retain warm hue. |

\| **\*\*A5. Fine, nearly square outlined controls\*\*** | 01 header and hero CTA; 02–03 action details | Narrow strokes, minimal radius, compact labels and clean alignment. | Increase target height and focus outline without making them pill buttons. |

\| **\*\*A6. Breathing room around photo-led grids\*\*** | 01 category collage; 04 editorial articles | Deep negative space and dark gutters around controlled high-impact images. | Stack into planned mobile hierarchy; keep image emphasis. |

\| **\*\*A7. Compact centered inner-page masthead\*\*** | 02 store, 03 product, 04 blog | Subdued atmospheric header with a centered short title/breadcrumb-like supporting line. | Use only on pages the PRD requires; allow multi-line titles. |

\| **\*\*A8. Functional density inside commerce/editorial content\*\*** | 02 compact grid/sidebar; 03 detail columns; 04 article/sidebar | Below expressive opening areas, information is organized precisely in thin dark panels and restrained rows. | Remove irrelevant commerce/blog features instead of populating fake content. |



**\*\*Non-negotiable test:\*\*** A generic gradient hero, giant rounded white cards, gradient CTA buttons, oversized navigation, or mixed unrelated typography fails anchors A1–A6 even if the content is correct.



**---**



**# STEP 2 — Visual direction and colour system**



**## 2.1 Final visual language**



**\*\*Design character:\*\*** atmospheric, restrained, modern-dark editorial storefront. It combines an almost cinematic full-width first impression with highly organized information modules beneath it. **\*\*OBSERVED\*\*** in the companion references; the exact values below are **\*\*PROPOSED\*\***.



\- **\*\*Surface mode:\*\*** exclusively dark for general page structure. A pale **\*\*inverse\*\*** surface exists only inside a small contrast-critical control, never as a whole light section. No theme-switcher/dark-mode duplication.

\- **\*\*Density:\*\*** low-to-medium on storytelling sections (large image, short supporting copy, wide gutters); medium and methodical inside grids, tabular rows and sidebars.

\- **\*\*Whitespace:\*\*** conspicuous between sections; tighter within commerce cards or filter widgets. Negative space is part of the brand treatment, not unused room to fill.

\- **\*\*Typography:\*\*** mostly clean sans-serif with assertive uppercase focal text and rare script flourishes. Avoid elegant fashion serifs and excessive font pairing.

\- **\*\*Imagery:\*\*** darkened, realistic product/lifestyle photography with defined highlights and deep shadows; imagery remains more prominent than UI shells.

\- **\*\*Geometry:\*\*** straight sides, near-square corners, fine borders, no oversized pills. Photo grids may have varied shapes; card surfaces remain flat.

\- **\*\*Shadows:\*\*** subtle elevation only for active overlays; separation primarily achieved through tone and lines.

\- **\*\*Decorations:\*\*** faint line-art or subject-specific motifs can sit behind hero areas, but never compete with text. No neon glows, glassmorphism, noise blobs or unreferenced decorative gradients.



**## 2.2 Colour tokens**



All HEX entries are deliberate **\*\*PROPOSED implementation values\*\*** based on **\*\*OBSERVED\*\*** colour relationships, *\*not sampled original theme CSS\**. WCAG accessibility must be verified in implementation.



\| Token | HEX / RGBA | Purpose | Allowed usage | Restrictions | Evidence status |

\|---|---|---|---|---|---|

\| \`--color-primary\` | \`#D0A45D\` | Warm brass/gold primary | Key links, micro-labels, emphasized values, outlines | Never broad page background | ESTIMATED hue; PROPOSED HEX |

\| \`--color-primary-hover\` | \`#E2BB7E\` | Hover gold | Hovered buttons/links, subtle active lift | Do not glow | PROPOSED |

\| \`--color-primary-active\` | \`#B88743\` | Pressed gold | Pressed-state border/background | Avoid for small body text on dark | PROPOSED |

\| \`--color-secondary\` | \`#6E655A\` | Warm neutral secondary | Low-emphasis surfaces, icon accents sparingly | Not default body text | PROPOSED |

\| \`--color-accent\` | \`#D0A45D\` | Shared accent alias | Rules, price/highlight marks | No competing accent palette | PROPOSED |

\| \`--color-bg\` | \`#141414\` | Main page | Global background | Do not switch to cream sections | OBSERVED darkness; PROPOSED HEX |

\| \`--color-bg-alt\` | \`#1A1A1A\` | Alternate section | Break section rhythm by shade only | Avoid striped visual clutter | PROPOSED |

\| \`--color-surface-card\` | \`#202020\` | Card and filter surface | Image tiles' descriptions, dark widgets | No bright elevated card grids | PROPOSED |

\| \`--color-surface-elevated\` | \`#282828\` | Elevated overlays | Menus, dialogs, tooltips | Use with border and restrained shadow | PROPOSED |

\| \`--color-surface-inverse\` | \`#F5F3EF\` | Minimal inverse | Critical occasional white/ivory field or tooltip | Not a full-width section | PROPOSED |

\| \`--color-heading\` | \`#F6F4EE\` | Headings | Headlines and important metadata | Use on dark surfaces | OBSERVED near-white; PROPOSED HEX |

\| \`--color-body\` | \`#D6D3CC\` | General text | Paragraphs and descriptions | Do not lower opacity further | PROPOSED accessible adjustment |

\| \`--color-muted\` | \`#B9B2A7\` | Supporting text | Captions and secondary metadata | Never used below 12px | PROPOSED accessible adjustment |

\| \`--color-text-inverse\` | \`#151515\` | Dark on light/gold | Primary-filled actions, inverse surface text | Never dark on charcoal | PROPOSED |

\| \`--color-border\` | \`#3B3B3B\` | Control/card outlines | Outlined inputs and widgets | Not sole identifier of errors | PROPOSED |

\| \`--color-divider\` | \`#303030\` | Subtle separations | Section separators, item rows | Do not use as text | PROPOSED |

\| \`--color-link\` | \`#D0A45D\` | Links | Visible links on dark surfaces | Underline text links beyond decorative contexts | PROPOSED |

\| \`--color-link-hover\` | \`#E2BB7E\` | Hovered links | Hover/focus text tint | Must retain underline indication | PROPOSED |

\| \`--color-focus\` | \`#FFDB92\` | Keyboard focus | 2px focus-visible ring | Never remove outline without replacement | PROPOSED |

\| \`--color-disabled\` | \`#77736E\` | Disabled text | Disabled controls only | Accompany with opacity/disabled semantics | PROPOSED |

\| \`--color-success\` | \`#8BD7AE\` | Success | Form/transaction feedback, if applicable | Do not use as brand accent | PROPOSED semantic |

\| \`--color-warning\` | \`#F0C477\` | Warning | Non-destructive warning states | Pair with icon/label | PROPOSED semantic |

\| \`--color-error\` | \`#FF9691\` | Error | Validation/error states | Pair with text and icon | PROPOSED semantic |

\| \`--color-info\` | \`#A7C7ED\` | Information | Neutral system/status messaging | Not decorative | PROPOSED semantic |

\| \`--color-overlay-soft\` | \`rgba(0,0,0,.24)\` | Image wash | Behind photo labels only | Not enough alone for arbitrary text contrast | PROPOSED |

\| \`--color-overlay-copy\` | \`rgba(0,0,0,.62)\` | Text safety | Over busy image areas | Confirm local image readability | PROPOSED |

\| \`--color-overlay-modal\` | \`rgba(0,0,0,.78)\` | Dialog backdrop | Modal/lightbox if PRD requires | Not a permanent full-page layer | PROPOSED |



**## 2.3 Pairings and state rules**



**\*\*Approved readable pairs:\*\*** heading/body/muted on \`bg\`, \`bg-alt\`, or \`surface-card\`; gold link on those dark surfaces; \`text-inverse\` on gold primary fills or the inverse surface. Approximate calculated ratios for selected solid pairs: heading on base \~16.7:1, body on base \~12.3:1, muted on card \~7.8:1, gold on base \~8.0:1, inverse text on gold \~8.0:1. These are token-math checks only, **\*\*not rendered/browser accessibility tests\*\***; image overlays and translucent states still need checking.



\| Element | Default | Hover | Active / selected | \`:focus-visible\` | Disabled |

\|---|---|---|---|---|---|

\| Gold text link | Gold, underline on actual inline links | Hover gold + clearer underline | Pressed gold | 2px focus outline + 3px offset | Muted, no action |

\| Outline CTA | Transparent / gold 1px border / heading text | Gold fill / inverse text | Darker gold fill / inverse text | Gold/ivory visible ring independent of hover | Dim border/text and no hover change |

\| Filled CTA, when required | Gold fill / inverse text | Lighter gold fill | Darker gold fill | Focus ring outside fill | Neutral disabled fill / muted text |

\| Icon control | Dark, 1px border, light glyph | Card background + gold glyph | Gold edge/selected marker | Focus ring | Reduced alpha and inert |

\| Form field | Dark surface + border + body text | Slightly brighter border | Filled retains input colour | Gold border + focus ring | Darker fill + disabled text |

\| Tabs / filters | Muted text | Heading text | Gold text and gold underline | Focus ring around actual control | Muted/inert |



**\*\*Gradients:\*\*** Flat charcoal backgrounds take precedence. If a hero image runs *\*behind\** text rather than in a distinct column, one **\*\*PROPOSED\*\*** accessibility scrim is allowed: \`linear-gradient(90deg, rgba(14,14,14,.94) 0%, rgba(14,14,14,.70) 42%, rgba(14,14,14,.08) 78%, rgba(14,14,14,0) 100%)\`; reverse direction only when copy is on the right. No colourful gradient buttons or atmosphere effects.



**---**



**# STEP 3 — Typography, layout, spacing and shared geometry**



**## 3.1 Typography evidence and pairing**



**\*\*OBSERVED:\*\*** high-contrast uppercase sans display text plus occasional flowing handwritten accent; interior body/navigation appear geometric and compact. **\*\*Publisher-listed fonts:\*\*** Poppins and Meddon. Exact visual font assignments and applied weights cannot be verified from thumbnail images alone. **\*\*PROPOSED baseline:\*\*** Poppins for all functional and reading text; Meddon only for very short decorative accent phrases. Two families maximum.



**\*\*Font sources:\*\*** Google Fonts or properly licensed self-hosted WOFF2. Load Poppins \`400,500,600,700,800\` and Meddon \`400\`. System fallbacks: \`"Poppins", Arial, Helvetica, sans-serif\`; \`"Meddon", "Brush Script MT", cursive\`. Avoid using a fallback-script flourish for important words (it may differ markedly). Set \`font-display: swap\`; reserve sufficient space to avoid layout jumps.



**### Typography role matrix**



Sizes are in CSS pixels at representative desktop / tablet / mobile widths; responsive steps or clamps must preserve these approximate values.



\| Role | Family | Weight | Desktop size | Tablet size | Mobile size | Line height | Letter spacing | Colour token |

\|---|---|---:|---:|---:|---:|---:|---|---|

\| Hero display | Poppins | 800 | 64 | 52 | 40 | 1.06 | \`-0.035em\` | heading |

\| Decorative hero script | Meddon | 400 | 30 | 27 | 23 | 1.6 | \`0\` | heading or gold |

\| Inner-page H1 | Poppins | 700 | 48 | 42 | 34 | 1.12 | \`-0.025em\` | heading |

\| Section H2 | Poppins | 700 | 42 | 36 | 30 | 1.16 | \`-0.025em\` | heading |

\| Section H3 | Poppins | 600 | 28 | 25 | 22 | 1.27 | \`-0.015em\` | heading |

\| Card/category H4 | Poppins | 600 | 20 | 19 | 18 | 1.35 | \`-0.01em\` | heading |

\| Eyebrow / short uppercase | Poppins | 600 | 11 | 11 | 11 | 1.5 | \`0.16em\` | primary |

\| Introduction / lead | Poppins | 400 | 18 | 17 | 16 | 1.7 | \`0\` | body |

\| Body / paragraph | Poppins | 400 | 16 | 16 | 16 | 1.7 | \`0\` | body |

\| Caption / meta | Poppins | 400 | 13 | 13 | 12 | 1.55 | \`0.01em\` | muted |

\| Navigation | Poppins | 600 | 12 | 12 | 13 | 1.45 | \`0.08em\` | heading |

\| Buttons | Poppins | 600 | 12 | 12 | 12 | 1.4 | \`0.09em\` | contextual |

\| Form labels | Poppins | 500 | 14 | 14 | 14 | 1.5 | \`0\` | heading |

\| Inputs / textarea | Poppins | 400 | 16 | 16 | 16 | 1.5 | \`0\` | body |

\| Helper / error text | Poppins | 400 | 12 | 12 | 12 | 1.55 | \`0\` | muted / error |



**\*\*Composition details:\*\***



\- Hero display is normally uppercase and may break after 2–4 short semantic units; do not insert hard \`\<br>\` purely to match one mockup when content is dynamic. For controlled brand headlines, content editors may provide deliberate breakpoint-aware line groups.

\- Meddon accent floats **\*\*above\*\*** but never over the legible core heading; maintain at least 8px separation. Script is not a substitute for semantic H1.

\- Primary hero headings left-align where the photo is on the right. Inner-page title banners center-align. Editorial section headings can align to the text column.

\- For long content: \`max-inline-size: 14ch\` on hero text, about \`22ch\` on H2; readable paragraphs \`45–72ch\`; prevent orphaned one-word lines where possible with balanced wrapping, never by clipping.

\- Headings: margin-bottom 16–24px depending on level. Paragraph stacks: 12–20px gap. Eyebrow-to-heading: 8–12px. Heading-to-actions: 24–32px.

\- Use \`overflow-wrap: anywhere\` **\*\*only for unbreakable tokens\*\*** such as URLs; normal prose should use natural wrapping. Never truncate the primary hero headline.

\- For project-specific Cinzel-only rules, font implementation must be changed globally and the typography matrix reapproved; do not introduce Meddon as a hidden exception.



**## 3.2 Layout architecture**



\| Layout token / region | Desktop ≥ 1200px | Tablet 768–1199px | Mobile ≤ 767px | Evidence |

\|---|---|---|---|---|

\| General max container | 1240px | fluid | fluid | ESTIMATED 1160–1280px composition; PROPOSED value |

\| Narrow reading column | 720px | 640px or fluid | fluid | PROPOSED |

\| Page gutter | 44px | 30px | 20px | PROPOSED |

\| Structural grid | 12 columns, 24px gap | 8 columns, 20px gap | 4 columns, 16px gap | ESTIMATED grid; PROPOSED counts |

\| Header height | 80px | 72px | 64px | ESTIMATED; PROPOSED |

\| Hero minimum | 640px, grows with content | 560px, grows | no fixed height | ESTIMATED dominant fold; PROPOSED |

\| Inner page masthead minimum | 240px, grows | 212px | 184px, grows | ESTIMATED; PROPOSED |

\| Major section vertical padding | 112px | 80px | 64px | PROPOSED |

\| Editorial split proportions | approx. 43% copy / 57% media | 45 / 55 where viable | stacked | ESTIMATED from Ref 01 |

\| Blog-style editorial rail | 8 / 4 columns | 5 / 3 columns | full width / rail follows | OBSERVED Ref 04; PROPOSED grid mapping |

\| Product-style detail | image 55% / detail 45% | image 52 / detail 48 | image before detail | OBSERVED Ref 03; PROPOSED values |

\| General column gap | 32–56px by composition | 24–32px | 20–24px | PROPOSED |



**\*\*Alignment anchors:\*\*** Every header, hero text block, category mosaic and subsequent content section shares the container's left/right edges. Full-bleed photography may extend beyond a container, but buttons and heading baselines do not drift arbitrarily. Use \`min-height\` plus content padding, not fixed height plus clipping. Large hero/media canvases may use \`aspect-ratio: 5 / 4\` or a content-safe \`min-height\` rather than fixed pixels.



**## 3.3 Named spacing scale and use map**



\| Token | Value | Primary usage |

\|---|---:|---|

\| \`--space-1\` | 4px | icon–label micro adjustment |

\| \`--space-2\` | 8px | eyebrow/metadata spacing |

\| \`--space-3\` | 12px | tightly grouped control labels |

\| \`--space-4\` | 16px | body paragraph and row spacing |

\| \`--space-5\` | 20px | card padding, mobile gutter |

\| \`--space-6\` | 24px | button grouping, grid gap |

\| \`--space-8\` | 32px | hero copy blocks, media gaps |

\| \`--space-10\` | 40px | section intro → content |

\| \`--space-12\` | 48px | major block separation |

\| \`--space-14\` | 56px | desktop split columns |

\| \`--space-16\` | 64px | mobile section vertical spacing |

\| \`--space-20\` | 80px | tablet section vertical spacing |

\| \`--space-24\` | 96px | large editorial interval |

\| \`--space-28\` | 112px | desktop section vertical spacing |

\| \`--space-32\` | 128px | optional extra-large campaign pause |



**## 3.4 Radius, border, shadow, opacity and layers**



\| Token | Value | Usage |

\|---|---|---|

\| \`--radius-none\` | 0 | photographs and flush image edges |

\| \`--radius-xs\` | 2px | outlined icon boxes and most small controls |

\| \`--radius-sm\` | 4px | CTA and form controls |

\| \`--radius-md\` | 6px | optional restrained modal surface |

\| \`--border-thin\` | 1px | buttons, cards, fields and hairlines |

\| \`--border-focus\` | 2px | focus ring and high-priority emphasis |

\| \`--shadow-subtle\` | \`0 6px 18px rgba(0,0,0,.20)\` | raised menu only |

\| \`--shadow-overlay\` | \`0 20px 60px rgba(0,0,0,.46)\` | dialog/lightbox only |

\| \`--opacity-disabled\` | \`.55\` | disabled state visual accompaniment |

\| \`--opacity-decorative\` | \`.10\` | ornamental line-art visibility |

\| \`--z-base\` / \`--z-decor\` / \`--z-content\` | \`0 / 1 / 2\` | image and text stacking |

\| \`--z-header\` / \`--z-sticky\` / \`--z-menu\` | \`20 / 30 / 40\` | header/nav and proposed overlays |

\| \`--z-backdrop\` / \`--z-dialog\` / \`--z-toast\` | \`70 / 80 / 90\` | conditional dialog stack |



**---**



**# STEP 4 — Shared components and page-composition templates**



**## 4.1 Global header — References 01–04**



**\*\*OBSERVED anatomy:\*\*** small left logo, horizontal uppercase navigation around center/right, a compact highlighted catalogue-like entry and several tiny icon controls at the far edge. **\*\*PROPOSED implementation contract:\*\***



\- Header sits over the same charcoal family as the opening screen. Container max 1240px, height 80px, vertical center alignment.

\- Logo: supplied project brand asset, \`object-fit: contain\`, maximum visual width about 132px, maximum height 44px; clear-space at least 12px; **\*\*never replace with Mocca artwork\*\***.

\- Main navigation: one horizontal row, 12px Poppins 600 uppercase, \`0.08em\` tracking, 24–28px inter-link gap. Items are PRD-defined; sample labels from references are **\*\*not\*\*** a mandatory sitemap.

\- Active link: gold text and a discreet 2px underline/bottom rule; hover may change text gold. No bouncy indicator.

\- Distinct small header action, if required by PRD: thin rectangular outline around the label; target at least 44px high, even if visible border is inset.

\- Icon actions: simple monochrome line glyphs, 18–20px graphic within 44×44px interactive area; each must have an accessible name.

\- On dark hero, header background can be transparent or \`rgba(20,20,20,.92)\` depending on contrast (**\*\*PROPOSED\*\***). Sticky/reveal-on-scroll behaviour is **\*\*unobserved and optional\*\***; if selected, fixed header must not obscure anchors.

\- Dropdowns are **\*\*not proved\*\*** by the screenshots. Implement only if PRD navigation complexity requires them; use dark elevated panel, keyboard focus, no hover-only access.

\- At small widths, replace the nav row with a **\*\*PROPOSED\*\*** 44px menu trigger, brand logo, and only essential actions. Use a full-width dark menu panel below header or accessible drawer; no cramped 7-item nav wrapping.



**## 4.2 Footer — References partially visible / publisher descriptions**



**\*\*Evidence:\*\*** Preview descriptions describe page links, contact/social elements and image thumbnails; exact full footer geometry is not legible in surfaced previews. **\*\*PROPOSED\*\*** visual baseline, conditional on content in PRD:



\- Footer merges into dark background, separated by a 1px divider; no bright top banner.

\- Maximum 4 columns: brand summary (wider), navigation, secondary links, contact/social. An optional narrow photo strip may appear **\*\*only if real approved images exist\*\***.

\- Desktop footer padding: 80px top, 32px bottom; column gap 32px; mobile 56px top, 24px bottom.

\- Logo contain max width 148px / height 48px. Column heading 13px uppercase with tracking; links 13–14px body colour, 8–12px vertical gaps, gold hover/underline focus.

\- Social icons outline, 18px visual, 44px hit target, monochrome default. Use the same outline icon family as header.

\- Final bottom rule, muted small legal/footer metadata; no invented social platforms or contact facts. Mobile stacks columns at 20–28px vertical gaps.



**## 4.3 Universal visual component contracts**



Components described as **\*\*conditional\*\*** must not be instantiated unless required by PRD or genuinely visible on a selected page.



\| Component | Anatomy, dimensions and media | Default treatment | Hover / active / focus / disabled | Mobile / overflow |

\|---|---|---|---|---|

\| **\*\*Primary outline button\*\*** | Label optionally with tiny arrow; min-height 44px; padding 12px 24px | Gold 1px outline; transparent fill; light 12px uppercase semibold text; 4px radius | Hover gold fill + dark text; active darker gold; 2px focus ring 3px offset; disabled opacity .55 and no visual hover | min-height 48px; text may wrap over 2 lines, never clip |

\| **\*\*Filled button (conditional)\*\*** | Same dimensions as outline | Gold fill with near-black label | Lighter hover, darker pressed, focus ring, inert disabled | full width only where layout demands; no arbitrarily full-width desktop CTAs |

\| **\*\*Text CTA / link\*\*** | Short label and optional 14px arrow, 8px internal gap | Gold text; underline for inline links | Hover brighter; active darker; focus outline; disabled only for inapplicable control not ordinary anchors | arrow stays aligned with wrapped label |

\| **\*\*Square icon control\*\*** | 44×44 hit target / 18–20px glyph | Neutral outlined dark box, 2px radius | Gold icon/border hover; selected gold marker; focus ring; disabled .55 | preserve 44×44 size; never rely on hover alone |

\| **\*\*Section heading\*\*** | Optional script/eyebrow above semantic heading; paragraph beneath | H2/H3 hierarchy; ample bottom gap 32–40px | None; links within follow link rules | body and heading wrap naturally; script can disappear if no space |

\| **\*\*Image category tile\*\*** | \`figure\` image + overlay/midpoint label/control | Flat edge-to-edge photo, subtle dark overlay; title max 2 lines; restrained outline | Hover image scale ≤1.035 and brighter border/label; keyboard focus equally visible | single column or 2-up if text remains readable; min target 44px |

\| **\*\*Editorial image/description split\*\*** | Media block and reading block, 43/57 or 50/50 by composition | Unframed imagery, text aligned to same container axes | Interactive text CTA only, not entire arbitrary text panel | copy before media unless scene deliberately requires photo first |

\| **\*\*Compact item/product card (conditional)\*\*** | Square-ish photo canvas, name, compact meta, optional price or badge | Borderless/1px dark edge; text below rather than floating white overlay | Hover card border subtly + focusable action; do not reveal essential data only on hover | 2/1 grid columns by width; full item names wrap, no cropped prices |

\| **\*\*Article preview (conditional)\*\*** | Wide landscape image, heading, metadata, excerpt and text CTA | Dark section, image leads, no massive raised card | Subtle image scale, linked title focus | 1 column, readable 16px excerpt |

\| **\*\*Filter/sidebar panel (conditional)\*\*** | Heading, stacked text controls and dividers | Card surface / thin dividers; 16–20px inset | Gold selected indicator, visible focus, clear disabled state | collapse into accessible filter disclosure **\*\*only if filtering exists\*\*** |

\| **\*\*Tabs (conditional)\*\*** | Horizontal labels with active underline, panels below | Muted text, no raised pill background | Gold underline on active; focus outline; disabled muted | scrollable \`overflow-x:auto\`; active item remains visible; no wrap into two irregular rows |

\| **\*\*Gallery/lightbox (conditional)\*\*** | Thumbnails, main media, next/previous and close actions | Photographs in dark, unrounded canvas; background overlay .78 | Thumb active gold edge, keyboard focus, disabled arrows | full-width media with contain; accessible controls remain 44px |

\| **\*\*Accordion (conditional)\*\*** | Header text, plus/minus icon, reveal panel | Divided dark rows; no giant containers | Hover heading gold; focus ring; expanded indicator is visually distinct | header can wrap; icon anchored at top edge |

\| **\*\*Badges (conditional)\*\*** | Short status/eyebrow, 10–12px text, 6–10px padding | Dark micro-label with fine gold border for editorial emphasis | No interactivity unless badge itself is control; functional statuses use semantic colours | avoid overlay on critical image subject |

\| **\*\*Modal/dialog (conditional)\*\*** | Heading, body, close, actions, backdrop | Raised \`#282828\`, max-width 640px (or 960px for gallery), 6px radius, subtle border | Focus containment and prominent close; backdrop .78 | viewport padding 16px; content scrolls; no overflow beyond screen |



**### 4.3.1 Form presentation — only if the PRD requires forms**



**\*\*Anatomy:\*\*** top-aligned visible label → dark input field 48px minimum height (textarea minimum 128px) → optional helper/error line below. Groups have 20–24px gaps. Input padding 12px 16px, 4px radius, 1px border. Label 14px Poppins 500, entered text 16px. Placeholder is helpful, never label replacement.



\| State | Presentation rule |

\|---|---|

\| Empty | Dark card surface, 1px neutral border, optional muted placeholder, persistent label |

\| Filled | Body text and caret clearly visible, same baseline height; no artificial success tint |

\| Hover | Border subtly lightens; not the same treatment as keyboard focus |

\| Focused | Gold border and external \`2px\` gold/ivory focus ring with \`3px\` offset; no layout shift |

\| Invalid | Error-colour border plus adjacent icon/message; reserve error text space when feasible; do not rely on red alone |

\| Disabled | Darker/flattened background, muted text, pointer/cursor semantics and true disabled state |

\| Submitting | Button shows spinner or short status, stable width; fields retain entered values |

\| Success | Compact semantic success text near form, icon plus explanation; no invented success copy/content |

\| Failure | Visible error summary or inline error, clear retry affordance; values persist |



Form functionality, validation rules, actual field names and submission destination are **\*\*outside\*\*** this specification.



**## 4.4 Page compositions: visual templates, not a sitemap**



**### Template A — Immersive hero and image mosaic (Reference 01, PRIMARY)**



**\*\*Visible order, OBSERVED:\*\*** horizontal dark header → asymmetrical product-led hero → narrow partner/logo band → dark image-category mosaic. Additional lower sections are not fully readable and are **\*\*not prescribed\*\*** here.



**\*\*Desktop composition, PROPOSED:\*\***



1\. Header shares page background, not a separate light strip; aligns to 1240px container.

2\. Hero uses a full-bleed dark stage with at least 640px content-safe minimum height; inner grid is 12 columns with copy in columns 1–5, photography in columns 6–12. Copy vertical alignment approx. center; visual subject may extend slightly outside its grid column toward the right edge.

3\. Copy stack: decorative Meddon micro-headline → bold uppercase H1 at 64px → short supporting text (if content actually exists) → one restrained outline CTA. Keep headline max \~14ch, CTA aligned with copy left edge. Do **\*\*not\*\*** replace with a generic centered gradient-banner hero.

4\. Dominant image should occupy approximately 50–60% of usable width and at least 65% of hero perceived height. Use realistic subject extraction or dark-background photography with defined edge lighting and visible object silhouette.

5\. Optional floating visual motif uses subject-specific line art at 10% opacity, positioned away from reading text. Optional floating photographic objects are allowed only if supplied/licensed and intentionally art-directed.

6\. Partner/logo band, if real relevant marks are supplied by PRD, is a tight horizontal strip on a darker tone, with monochrome/neutral logos and 32px+ breathing room. **\*\*Do not invent partners or trust marks.\*\***

7\. Image mosaic is editorial, not a neat six-card SaaS grid: one large primary tile with two or four smaller supporting tiles, 16–20px gaps, aspect ratios approximately 1:1 for lead and 1.3:1 for supporting. Text overlays are legible and nearly rectangular.



**\*\*Tablet:\*\*** keep split composition near 45/55 while copy and image remain legible; reduce headline to 52px and hero min-height to 560px. If subject blocks text, stack sooner than the breakpoint rule rather than overlap arbitrarily.



**\*\*Mobile — PROPOSED (no mobile reference):\*\*** dark header, script accent, 40px H1, short copy and CTAs **\*\*first\*\***, dominant image immediately below within same hero stage. Product media uses \`aspect-ratio: 4 / 3\` or content-safe auto sizing and \`object-fit: contain\` when the whole object matters. Subject-specific line art fades further; logo strip becomes horizontal scroll only if real logos exist; mosaic stacks primary tile then remaining tiles in a planned order.



**### Template B — Inner masthead + compact catalog grid (Reference 02)**



**\*\*Visible order, OBSERVED:\*\*** header → short dark image/banner title zone → left category/filter column and right item grid; sidebar widgets show headings and rows; at least three compact product columns visible in main content.



**\*\*Visual implementation:\*\*** inner banner minimum 240px with subdued image texture and centered script-or-short heading; tiny breadcrumb-style support only if required by PRD. Main container begins 64px below banner. Sidebar width \~22–25% (or 3 of 12 columns), grid area 75–78% (9 columns), with three equally spaced compact cards and 24px gaps. Item photo containers square with \`object-fit: contain\` for packaged assets and cover for lifestyle photography. Meta and prices align below photos, not over artwork. Filters are thin ruled dark widgets with no loud fill.



**\*\*Mobile — PROPOSED:\*\*** centered inner banner becomes 184px minimum; listing becomes 2 columns from \~480px and 1 column below; conditional filters become an explicit accessible disclosure or drawer, never a permanently squeezed sidebar. Do not create catalog pages if absent from PRD.



**### Template C — Item/media detail composition (Reference 03)**



**\*\*Visible order, OBSERVED:\*\*** header → centered inner masthead → media on left / description-actions on right → simple tabs → related image strip.



**\*\*Visual implementation:\*\*** two-column 55/45 split with 40–56px gap. Within left, 64–80px wide stacked thumbnails beside one square hero image canvas; use \`contain\` for isolated product/package art. Details stack compact heading, metadata, accent values and optional action areas only when functionality exists. Divider and tabs are understated. Related gallery, if required, uses cards on \`bg-alt\` with 24px gaps and restrained arrow controls. **\*\*The bright product label seen in the image is part of the asset\*\***, not a call to action theme.



**\*\*Mobile — PROPOSED:\*\*** main image full width, thumbnail rail horizontal beneath, text/details follow, tabs horizontally scroll; no side-by-side squashing. Hide unavailable product controls rather than leaving disabled placeholders.



**### Template D — Editorial list with secondary rail (Reference 04)**



**\*\*Visible order, OBSERVED:\*\*** header → centered dark banner → wide left articles with horizontal image lead → narrow right dark sidebar widgets.



**\*\*Visual implementation:\*\*** 8/4 column split, 48px gutter, hero article image \`aspect-ratio: 16 / 9\` with cover and meaningful focal positioning; post heading H3 below image, compact muted metadata and excerpt, and a gold text CTA. Right rail uses stacked dark filter/search/category panels with sparse dividers. Articles separate vertically by 56–72px; do not replace with an identical card grid.



**\*\*Mobile — PROPOSED:\*\*** editorial feed first, sidebar (if PRD requires) after primary content or exposed through a labelled disclosure; images become width 100%, proportion around 16:10; no fixed-height text or hidden descriptions.



**### Template E — Simple brand/content split (derived, CONDITIONAL)**



If the PRD requires interior information pages with no matching screenshot, reuse **\*\*Template A's image/text alignment and Template D's reading widths\*\***, not a newly invented visual language. One bold heading, a real image, concise content, one appropriate CTA; alternate left/right imagery sparingly. This is **\*\*PROPOSED\*\***, not an observed page or a required sitemap item.



**---**



**# STEP 5 — Imagery, icons and responsive design**



**## 5.1 Asset direction**



\- **\*\*OBSERVED:\*\*** professionally lit coffee/product and people-in-place images, strong dark environment, defined rim highlights, atmospheric warm rather than colourful lighting. Large subject images carry visual meaning.

\- **\*\*PROPOSED selection criteria:\*\*** photography should feel tactile, realistic, premium and quiet, with clear subject separation. Suitable for another brand only when imagery shows its actual offering and identity.

\- **\*\*Tone:\*\*** slight desaturation, preserved real skin/material colours, controlled contrast; no global sepia, excessive warm overlay, or fake gold tint. A selective \`filter: saturate(.92) contrast(1.03)\` may be used after examining supplied images but is **\*\*not\*\*** universal.

\- **\*\*Image modes:\*\*** \`object-fit: cover\` for lifestyle/editorial photography and atmospheric banners; \`object-fit: contain\` for supplied logos, package artwork, diagrams, complete objects or any asset whose edges must remain visible. Never crop essential text inside artwork.

\- **\*\*Ratios:\*\*** 5:4 or 4:3 for hero product stage depending on source crop; 1:1 for product/category tiles; 16:9 or 16:10 for article imagery; natural source ratio for pre-designed poster/package artwork; 3:2 for generic editorial split images.

\- **\*\*Focal points:\*\*** preserve faces, hands, product labels, architectural details and key lighting highlights. Use explicit per-asset \`object-position\`; default \`50% 50%\` is not always safe. Test desktop, tablet, mobile independently.

\- **\*\*Dark copy overlays:\*\*** begin with \`.62\` dark scrim over readable text region if necessary, adjust using actual image; do not overlay the entire image indiscriminately. A left-to-right gradient is allowed only as defined in Step 2.

\- **\*\*Fallback assets:\*\*** charcoal panel with restrained icon/label and correct intrinsic aspect ratio, not an unrelated stock image. Prevent CLS with \`aspect-ratio\` or reserved dimensions.

\- **\*\*Decorative motifs:\*\*** optional single-line subject silhouettes at 10% opacity; should be \`aria-hidden\` when non-informational and disappear on mobile when they create collision.

\- **\*\*Rights:\*\*** publisher says preview photographs are *\*preview-only\** and not delivered with theme. Do not copy or hotlink them into the finished website. Use provided, owned or independently licensed project assets.



**## 5.2 Icon system**



**\*\*PROPOSED:\*\*** one consistent set of simple outline pictograms (Lucide-equivalent or custom SVG), no filled cartoon symbols or mixed brandless icon fonts. Typical visual sizes 18px navigation, 20px cards, 24px standalone feature indicators; 1.75px stroke, round cap/join, gold on dark when highlighted, heading/muted for ordinary icons. Centre icons optically with adjacent type and supply a minimum 44px touch area for interactive glyphs. Logos/social brands use legitimate brand SVG shapes where appropriate, not incorrect generic stand-ins.



**## 5.3 Responsive breakpoint rules**



Breakpoints are **\*\*PROPOSED CSS architecture\*\***, not reverse-engineered original theme breakpoints:



\- **\*\*Mobile:\*\*** \`max-width: 767px\`.

\- **\*\*Tablet/intermediate:\*\*** \`768px\` to \`1199px\`.

\- **\*\*Desktop:\*\*** \`min-width: 1200px\`.

\- Small-mobile adjustments under \`max-width: 479px\` are allowed for very narrow photo/card compositions.

\- Mandatory design review widths: **\*\*360, 390, 768, 1024 and 1440 CSS pixels\*\***. These are test viewports, **\*\*not\*\*** the set of breakpoints.



\| Element / composition | Desktop ≥1200 | Tablet 768–1199 | Mobile ≤767 |

\|---|---|---|---|

\| Navigation | One row, logo left, inline links/actions right | Compact inline if fits; otherwise mobile pattern | Logo + labelled menu control; drawer/panel conditional |

\| Main hero | 43/57 split, min 640px, photo dominates | 45/55 split, min 560px; wrap proactively | Copy then media; auto height; preserve dominant image |

\| Hero type | 64px display; 30px script | 52px; 27px script | 40px; 23px script |

\| Inner masthead | min 240px centered | min 212px | min 184px, allows wrapping |

\| Image/text split | Two columns with 40–56px gap | Two columns where readable, otherwise stack | One column with explicit content-first order |

\| Mosaic/gallery | Featured asymmetric tile plus smaller tiles | 2 columns, asymmetry retained | Primary lead then one column, or 2-up only where readable |

\| Compact grid (if relevant) | Three within main content area | Two or three depending on sidebar space | Two at ≥480px; one at smaller widths |

\| Catalog sidebar (if relevant) | Persistent left rail | Narrow rail or disclosed filter | Disclosure/drawer; no permanent narrow rail |

\| Editorial layout | 8/4 main/rail | 5/3; adjust before crowding | Main first, rail below or disclosed |

\| Forms (if relevant) | One or two aligned columns as data suits | Typically one or two | Always one column; 48px minimum fields |

\| Buttons | Compact width based on label | May wrap without clipping | 48px min-height; stack if labels consume full row |

\| Footer | Up to four aligned columns | Two columns | One column; sensible grouping and 20–28px gaps |

\| Lightbox/dialog (if relevant) | Centered with safe margins | Up to viewport minus 48px | Near-full viewport width; own scroll; 44px controls |



**\*\*Overflow prevention:\*\*** use \`min-width:0\` on flex/grid children; \`max-width:100%\` on media; no unbreakable CTA rows; allow nav/menu and tabs to scroll only intentionally; use visible labels for mobile controls; do not cut off headings with \`overflow:hidden\`. A contact line, product name, address or translation of unusual length must wrap without breaking grid alignment.



**\*\*Touch equivalence:\*\*** every hover-only affordance must be visible without hover or exposed through an explicit tap control. Essential actions cannot appear solely on hover. Respect safe-area insets for overlay close buttons if applicable.



**---**



**# STEP 6 — Motion, accessibility and implementation tokens**



**## 6.1 Motion specification**



**\*\*All entries PROPOSED.\*\*** Static screenshots give **\*\*no evidence of actual animation\*\***. Motion should gently reinforce the visual rhythm, not become the primary effect.



\| Element | Trigger | Properties | Duration | Easing | Distance | Delay/stagger | Repeat | Reduced motion |

\|---|---|---|---|---|---|---|---|---|

\| Header/CTA | Hover / focus | Colour, border colour, background | 160ms | ease-out | none | 0 | each interaction | Instant state change |

\| Image tile | Hover / focus-within | Image transform / subtle brightness | 260ms | ease-out | scale max 1.035 | 0 | each interaction | No scale |

\| Optional section reveal | Enters view | Opacity and transform | 500ms | cubic-bezier(.22,1,.36,1) | translateY(16px) | 0–80ms between visible siblings | Once | Content visible immediately; no movement |

\| Hero copy entrance | Initial paint | Opacity, translateY | 500ms | cubic-bezier(.22,1,.36,1) | 12px | 0–100ms | Once | No entrance effect |

\| Hero photo entrance | Initial paint | Opacity only | 550ms | ease-out | none | 80ms | Once | Instant image |

\| Tabs / accordion (if relevant) | Activation | Underline/colour; panel visibility | 160–200ms | ease-out | none | 0 | per action | Instant |

\| Menu/dialog (if relevant) | Open/close | Opacity + translation | 220ms | ease-out | 8px | 0 | per action | Instant show/hide |

\| Form messages (if relevant) | Validation/submission | Opacity only | 160ms | ease-out | none | 0 | per event | Instant, readable |



**\*\*Motion rules:\*\*** no auto-playing carousels, continuous floating beans, marquee content, scroll hijacking or excessive parallax unless explicitly required and separately approved. Page content must be visible when JavaScript is absent or a reveal observer fails; animations may enhance visibility but must never gate it. Keyboard focus must not trigger surprising movement.



**## 6.2 Accessibility target and visual remediation**



**\*\*Target:\*\*** WCAG 2.2 AA. **\*\*This document does not assert a passing audit.\*\*** At implementation time, validate contrast on actual assets/states, keyboard operation, zoom/reflow and assistive-technology use.



\- **\*\*Text contrast:\*\*** target ≥4.5:1 for ordinary text, ≥3:1 for large text; non-text UI boundaries and focus indicators should meet relevant ≥3:1 contrast requirements. Gold/black and selected text pairs were checked mathematically for opaque colours only; image overlay combinations remain unverified.

\- **\*\*Focus:\*\*** visible \`2px\` high-contrast ring with at least \`3px\` offset on links, controls, tabs, cards that are actually interactive, and dialog controls; do not rely on subtle gold-colour change alone.

\- **\*\*Touch:\*\*** target at least 44×44px for primary interactive elements; ensure at minimum WCAG 2.2 target-size provisions where exceptions apply.

\- **\*\*Structure:\*\*** correct page landmarks, logical H1/H2/H3 hierarchy, one real H1 per page, decorative script outside semantic heading if it duplicates meaning. Do not make visible text inaccessible by embedding it in images.

\- **\*\*Forms:\*\*** persistent visible labels; inline understandable errors, status text and adequate spacing; avoid placeholder-only fields and colour-only statuses.

\- **\*\*Menus and overlays:\*\*** accessible names/roles, logical keyboard order, Escape close, focus management/restoration, no focus traps outside active dialog, scroll lock only when modal open.

\- **\*\*Motion:\*\*** honour \`prefers-reduced-motion: reduce\`, including disabling parallax and entry translations.

\- **\*\*Images:\*\*** meaningful alternative text for informative images; empty alt for decorative motifs; \`aria-hidden\` for unnecessary line art.

\- **\*\*Zoom/reflow:\*\*** test 200% text zoom and 400% reflow on narrow screens; allow lines to wrap and controls to grow in height.

\- **\*\*Reference adjustments:\*\*** the reference's tiny secondary text must be raised to 12–16px CSS; gold hairline-only selected states gain clearer focus/underline; dark-on-dark fields use distinct borders; image overlays gain sufficient contrast. These are intentional accessibility adaptations rather than theme drift.



**## 6.3 CSS design tokens — canonical implementation source**



The tokens below are valid CSS; all colours, sizes and breakpoints match the tables above. Do not use \`var()\` inside ordinary media-query breakpoint expressions.



\`\`\`css

:root {

  /\* Colour \*/

  --color-primary: #D0A45D;

  --color-primary-hover: #E2BB7E;

  --color-primary-active: #B88743;

  --color-secondary: #6E655A;

  --color-accent: #D0A45D;

  --color-bg: #141414;

  --color-bg-alt: #1A1A1A;

  --color-surface-card: #202020;

  --color-surface-elevated: #282828;

  --color-surface-inverse: #F5F3EF;

  --color-heading: #F6F4EE;

  --color-body: #D6D3CC;

  --color-muted: #B9B2A7;

  --color-text-inverse: #151515;

  --color-border: #3B3B3B;

  --color-divider: #303030;

  --color-link: #D0A45D;

  --color-link-hover: #E2BB7E;

  --color-focus: #FFDB92;

  --color-disabled: #77736E;

  --color-success: #8BD7AE;

  --color-warning: #F0C477;

  --color-error: #FF9691;

  --color-info: #A7C7ED;

  --color-overlay-soft: rgba(0, 0, 0, .24);

  --color-overlay-copy: rgba(0, 0, 0, .62);

  --color-overlay-modal: rgba(0, 0, 0, .78);



  /\* Typography \*/

  --font-main: "Poppins", Arial, Helvetica, sans-serif;

  --font-accent: "Meddon", "Brush Script MT", cursive;

  --weight-regular: 400;

  --weight-medium: 500;

  --weight-semibold: 600;

  --weight-bold: 700;

  --weight-extrabold: 800;

  --text-hero: 64px;

  --text-script: 30px;

  --text-h1: 48px;

  --text-h2: 42px;

  --text-h3: 28px;

  --text-h4: 20px;

  --text-eyebrow: 11px;

  --text-intro: 18px;

  --text-body: 16px;

  --text-caption: 13px;

  --text-nav: 12px;

  --text-button: 12px;

  --text-label: 14px;

  --text-input: 16px;

  --text-helper: 12px;



  /\* Spacing \*/

  --space-1: 4px;

  --space-2: 8px;

  --space-3: 12px;

  --space-4: 16px;

  --space-5: 20px;

  --space-6: 24px;

  --space-8: 32px;

  --space-10: 40px;

  --space-12: 48px;

  --space-14: 56px;

  --space-16: 64px;

  --space-20: 80px;

  --space-24: 96px;

  --space-28: 112px;

  --space-32: 128px;



  /\* Layout \*/

  --container-max: 1240px;

  --container-reading: 720px;

  --page-gutter: 44px;

  --grid-columns: 12;

  --grid-gap: 24px;

  --header-height: 80px;

  --hero-min-height: 640px;

  --inner-banner-min-height: 240px;

  --section-space: 112px;



  /\* Geometry \*/

  --radius-none: 0px;

  --radius-xs: 2px;

  --radius-sm: 4px;

  --radius-md: 6px;

  --border-thin: 1px;

  --border-focus: 2px;

  --shadow-subtle: 0 6px 18px rgba(0, 0, 0, .20);

  --shadow-overlay: 0 20px 60px rgba(0, 0, 0, .46);

  --opacity-disabled: .55;

  --opacity-decorative: .10;



  /\* Motion \*/

  --motion-fast: 160ms;

  --motion-medium: 260ms;

  --motion-enter: 500ms;

  --motion-image-enter: 550ms;

  --ease-standard: ease-out;

  --ease-enter: cubic-bezier(.22, 1, .36, 1);



  /\* Layering \*/

  --z-base: 0;

  --z-decor: 1;

  --z-content: 2;

  --z-header: 20;

  --z-sticky: 30;

  --z-menu: 40;

  --z-backdrop: 70;

  --z-dialog: 80;

  --z-toast: 90;

}



@media (min-width: 768px) and (max-width: 1199px) {

  :root {

    --page-gutter: 30px;

    --container-reading: 640px;

    --grid-columns: 8;

    --grid-gap: 20px;

    --header-height: 72px;

    --hero-min-height: 560px;

    --inner-banner-min-height: 212px;

    --section-space: 80px;

    --text-hero: 52px;

    --text-script: 27px;

    --text-h1: 42px;

    --text-h2: 36px;

    --text-h3: 25px;

    --text-h4: 19px;

    --text-intro: 17px;

  }

}



@media (max-width: 767px) {

  :root {

    --page-gutter: 20px;

    --container-reading: 100%;

    --grid-columns: 4;

    --grid-gap: 16px;

    --header-height: 64px;

    --hero-min-height: 0px; /\* mobile hero height must be content-driven \*/

    --inner-banner-min-height: 184px;

    --section-space: 64px;

    --text-hero: 40px;

    --text-script: 23px;

    --text-h1: 34px;

    --text-h2: 30px;

    --text-h3: 22px;

    --text-h4: 18px;

    --text-intro: 16px;

    --text-caption: 12px;

    --text-nav: 13px;

  }

}



@media (prefers-reduced-motion: reduce) {

  :root {

    --motion-fast: 0ms;

    --motion-medium: 0ms;

    --motion-enter: 0ms;

    --motion-image-enter: 0ms;

  }

}

\`\`\`



**\*\*Permitted usage examples (not a full stylesheet):\*\*** outer container \`width: min(calc(100% - 2 \* var(--page-gutter)), var(--container-max))\`; section padding \`var(--section-space) 0\`; photo tile media \`aspect-ratio: 1 / 1\` with proper fit; button focus with \`outline: var(--border-focus) solid var(--color-focus)\` and \`outline-offset: 3px\`. CSS tokens are the sole literal source of truth; avoid magic numbers drifting between components.



**---**



**# STEP 7 — Validation, implementation guardrails and open decisions**



**## 7.1 Implementation guardrails**



1\. **\*\*Protect anchors A1–A8.\*\*** The dark editorial identity, image-led hero, warm micro-accent, bold sans/script relationship, compact controls, mosaic rhythm and inner masthead cannot be substituted with generic template conventions.

2\. **\*\*Build only PRD-authorized pages and features.\*\*** Templates B–E and all catalog/form/dialog-specific components are conditional examples from the references; they are not website requirements or a mandatory sitemap.

3\. **\*\*Use design tokens, not scattered literals.\*\*** Global colours, type, space, control geometry, focus styles and breakpoints derive from this file.

4\. **\*\*Use source-authentic assets.\*\*** Never use Mocca/ThemeForest images, product details, logo, partner marks, reviews or copy as actual project content without verified rights and PRD approval.

5\. **\*\*Do not introduce a second theme.\*\*** No cream page sections, emerald CTA accent, bright gradient banners, rounded SaaS cards, glossy shadows or mixed unrelated icon collections.

6\. **\*\*Respect type precedence.\*\*** Poppins + Meddon are the faithful extracted reference pairing. Any stricter PRD font rule (including Cinzel-only) overrides it and requires explicit visual adjustment, not inconsistent selective use.

7\. **\*\*Create responsive compositions intentionally.\*\*** Mobile is a redesigned hierarchy with large enough targets; do not scale down the 1440px mockup wholesale.

8\. **\*\*Preserve reading order and resilience.\*\*** No essential text inside images, no fixed heights that clip headlines, no JS-dependent initial visibility, and no inaccessible overlays.

9\. **\*\*Keep motion quiet.\*\*** Animation is a proposal, not proven screenshot behaviour.

10\. **\*\*Review on actual content.\*\*** Replace draft media and copy with authorized project content, then inspect natural wrapping, image focus, link states and all five review widths.



**## 7.2 Observable visual acceptance checklist**



\- [ ] **\*\*Evidence recorded:\*\*** Reference 01–04 are correctly identified as companion PSD previews, and the live wrapper limitation is not represented as full live inspection.

\- [ ] **\*\*Theme:\*\*** first viewport reads immediately as near-black/charcoal with restrained warm-gold accents, not light, neon or gradient-heavy.

\- [ ] **\*\*Hero:\*\*** desktop composition has text on the left and a dominant subject/photo on the right; image visually owns roughly half of the stage and no arbitrary decorative card grid replaces it.

\- [ ] **\*\*Typography:\*\*** primary sans is consistently Poppins and short script accents consistently Meddon **\*\*unless an explicit PRD override requires different typography\*\***, in which case the entire site follows that override without hidden mixed fonts.

\- [ ] **\*\*Geometry:\*\*** action controls use thin rules, small radii and consistent icon strokes; no oversized pill CTA or heavy drop-shadow card pattern.

\- [ ] **\*\*Grid rhythm:\*\*** featured photo mosaic is visibly asymmetric; compact information modules are tight and aligned; layout is not an endless sequence of identical cards.

\- [ ] **\*\*Anchors:\*\*** each of A1–A8 can be mapped to at least one finished visible design choice without requiring invented content.

\- [ ] **\*\*Colour states:\*\*** all links, buttons, tabs, cards and relevant form controls have visibly distinct hover, focus and selected presentation where appropriate.

\- [ ] **\*\*Content fit:\*\*** heading wraps naturally; long words, labels and descriptions do not overlap photos or controls; no essential images or artwork are cropped.

\- [ ] **\*\*Responsive:\*\*** review at 360 / 390 / 768 / 1024 / 1440px shows deliberate composition, no accidental horizontal scrolling, no stuck desktop sidebar and no tiny hit targets.

\- [ ] **\*\*Images:\*\*** uses supplied/licensed assets with proper cover/contain treatment, useful focal positioning, reserved sizing and appropriate alt semantics.

\- [ ] **\*\*Contrast/accessibility:\*\*** opaque text pairs, overlay imagery, keyboard focus, dialogs/menus and zoom/reflow have been actually tested before any WCAG 2.2 AA claim.

\- [ ] **\*\*Motion:\*\*** no autoplay/scroll hijacking; reduced-motion setting removes nonessential movement; content remains visible if JS animation fails.

\- [ ] **\*\*Scope discipline:\*\*** no invented site pages, shop features, services, prices, testimonials, partners, client claims or content are shipped from this visual spec.



**## 7.3 Assumptions and unresolved visual details**



\| Detail | Current decision | What would resolve it |

\|---|---|---|

\| Actual WooCommerce live demo vs companion PSD | Use companion PSD as visual proxy, with explicit limitation | Full-sized current live-site screenshots (desktop/mobile) |

\| Actual font rendering/assignment | Publisher lists Poppins and Meddon; use them as extracted pairing | Inspect computed type styles in a working live browser |

\| Exact colour HEX, CSS measurements, grid breakpoints | All are documented proposed values; screenshots cannot prove them | Live DOM/CSS inspection, source Figma/PSD measurements or approved pixel-matched captures |

\| Header sticky state, dropdowns and mobile menu | Optional/proposed and only if PRD needs | Screenshots/video at scroll, focus and mobile states |

\| Footer details, lower home sections | Only partial/description evidence | Complete full-page desktop capture |

\| Forms, dialogs and animations | Conditional/proposed visual treatments | Real interaction capture and PRD feature approval |

\| Debonair Cinzel-only requirement versus Mocca typography | Explicit higher-priority brand/PRD rule wins at implementation; do not mix silently | Confirm current project typography source of truth |

\| Brand photography/licensing | Use project-owned or approved assets; no theme artwork reuse | Final asset folder and usage rights |



**\*\*Inspection/testing disclosure:\*\*** Four companion PSD previews and the official listing were examined. The embedded live-site body was not inspected; no browser layout test, interaction test, responsive screenshot test or rendered WCAG audit was performed. Token pair ratios stated above are calculations for selected opaque colour pairs only.



**---**



**## Final design statement**



**\*\*A dark, immersive, photograph-first editorial interface with a dramatic asymmetric hero, compact geometric sans typography punctuated by rare handwritten accents, extremely restrained warm-gold navigation cues, fine rectangular controls, a deliberate image-mosaic rhythm and structured charcoal information panels.\*\*** Every responsive and component decision should strengthen that language rather than dilute it with generic website patterns.


---

## Approved design amendment — Premium Rounded Cards and Black/Warm Cream (15 October 2026)

This approved amendment supersedes earlier purely rectangular-card/control guidance where it conflicts. It is a **targeted UI refinement**, not a new layout or visual-identity redesign.

- **Primary page background:** `#141414` dark luxury charcoal. Hero, header, navigation and current photographic treatments remain dark and unchanged.
- **Warm cream content surface:** `#D9BB9B` for a deliberate subset of long Men/Women service price cards and some Deal Collection cards. Do **not** recolour all cards. Existing gold `#D0A45D` remains the action and brand accent on dark surfaces.
- **Cream text:** `#1C1815` for headings, rows and standard content; deeper brown `#392410` for prices; muted brown `#4E4034` for auxiliary copy and notes. Quiet row separators on light surfaces. On dark surfaces retain original light text and gold-priced rows.
- **Shared corner tokens:** `--radius-card: 13px`, `--radius-button: 10px`, `--radius-field: 9px`. Applicable pricing cards, deal cards, branches, image feature panels, notices and promotional blocks use the shared card token. Buttons, audience tabs, mobile navigation toggles and floating WhatsApp use the button token. Inputs use the field token. No pill buttons or thick shadows.
- **Action treatment:** Keep existing gold outlined/filled buttons on dark surfaces. On cream cards use a deep-charcoal button with pale text, including hover/focus contrast. Preserve all labels, destinations and native keyboard focus styling.
- **Layout:** Keep the existing three-column desktop/two-column tablet/one-column mobile service grids and editorial page sections. Let each service card size to its content; no fixed card heights. Keep service name left/price right, with wrapping service names and aligned price values.
- **Content invariants:** Do not alter any client-supplied service label, price, qualifier, the count/order of Men's and Women's categories, the 47 deal identifiers or WhatsApp enquiry messages. Do not invent package prices/inclusions.
- **Assets:** Preserve all four bundled review reference images as-is; no image replacements as part of this theme amendment.


## Approved editorial refinements — 15 October 2026
- Preserve predominantly near-black (#141414) and warm cream (#D9BB9B) surfaces with existing gold accents. Alternate section surfaces deliberately, not every card.
- **All 13 men's and 18 women's price cards stay uniformly #D9BB9B**, with charcoal text and dark WhatsApp buttons. Deal cards retain their existing treatments.
- Shared radius: cards 13px, buttons 10px, form fields 9px.
- Home hero: large DEBONAIR headline with subordinate tagline; text/image balance is inspired by editorial luxury-salon design, not copied from another site.
- Remove on-image concept/AI labels from the visible website; image filenames and internal documentation still identify reference assets. These are **not** genuine Debonair photos and must be replaced or approved before publication.
- Male clients should appear in general grooming visuals; women-specific service imagery remains relevant to its section.
- Entrance reveal: 20px right-origin translation and .65s fade; IntersectionObserver only, no-JS fallback visible, reduced-motion bypass.
- Do not invent prices, deal inclusions, or business claims.


## Homepage balance and footer refinement — 15 October 2026
- Homepage hero desktop: content-centred two-column layout, reduced vertical padding, responsive image height (410–560px), restrained headline size, both CTAs within a typical 1366×768 viewport where font rendering permits. Mobile stacks without fixed hero height.
- Beige experience panel: eyebrow uses dark brown #51381f for readable contrast; headline uses responsive size and compact line-height.
- Homepage editorial copy may be expanded only with non-factual, service-relevant language. No unsupported staff, product, award or business-history claims.
- Shared footer: dark #10100f background, cream headings, three columns desktop / stacked mobile, refined links, retained prototype booking disclaimer and social/WhatsApp destinations. Bottom bar reserves space for floating WhatsApp on desktop and mobile.
- Homepage reference photography remains provisional. Distinct approved images are needed for repeated men's grooming and salon interior placements; do not silently replace these images.
- Men's/Women's price cards remain uniformly #D9BB9B; this batch does not change pricing or deals.


## Homepage: full-width cinematic hero (15 October 2026)

- Replace homepage split hero with a single **full-bleed background photograph** immediately below the existing sticky header; keep existing site navigation separate from the image area. The hero retains the existing bundled `assets/salon-interior-concept.jpg` reference asset (not verified Debonair photography).
- Keep the centered stack: **A REFINED SALON EXPERIENCE · KARACHI → DEBONAIR → THE STYLE YOU DESIRE → existing paragraph → Book an Appointment / Discover Services**. Preserve original CTA destinations.
- The hero backdrop uses `object-fit:cover` and responsive crop positioning; a restrained dark overlay allows warm-cream typography to remain readable. The brand heading uses the existing Cinzel serif.
- Target one useful viewport below the navigation on desktop with `min-height:calc(100svh - 81px)`. On mobile use content-friendly min-height and natural growth; CTA actions stack at ≤540px. Do not use absolute-positioned copy or fixed hero height.
- Hero entrance reveals use brief staged opacity/10px translation under `prefers-reduced-motion:no-preference`. Background never animates, and all content is visible instantly for reduced-motion users.
- Preserve all other page sections, image sources, black/cream theme, rounded corners, beige Men's and Women's price cards and shared footer.
- Hero image remains a concept reference pending client-approved production imagery. The existing `visit-art` section also displays the same photo; this duplicate is unresolved because this batch explicitly restricts edits to the hero and no second approved interior image was provided.


## Shared header wordmark refinement — 15 October 2026

- The **header** brand is a single-line **DEBONAIR SALON** text link to `index.html`; do not render the **THE STYLE YOU DESIRE** tagline beneath it. This applies to Home, Services, About Us and Contact.
- Reuse the *actual homepage hero's* `Cinzel, Georgia, serif` family at `font-weight: 600` with modestly tighter letter-spacing (`-0.035em`) and a responsive 16–20px wordmark size. Preserve warm off-white (`--light`) and the existing header height and navigation architecture.
- The homepage hero's **THE STYLE YOU DESIRE** and the shared footer's approved brand/tagline stay unchanged. This adjustment is scoped only to `.header .brand` and the header markup in `js/main.js`.
- Preserve all working navigation links, menu toggle, booking CTA and hover/focus states.


## Homepage location directory — approved 15 October 2026

- Replace the previous generic, duplicate salon-interior location image with **three dedicated branch cards** in the homepage “Find your Debonair” section. Do not replicate the retired “03 LOCATIONS IN KARACHI” image treatment.
- Branch order and labels are Bukhari (01), Seher commercial (02), and shaheed e millat (03), using the precise client-provided display names and corresponding `share.google` URLs in `index.html`. These external short links remain supplied but **their final Google Maps destinations have not been independently verified**. Do not infer addresses, ratings, phone numbers, or opening hours.
- Layout: introduction heading and explanatory text above the cards, using the existing two-column `.visit-layout` on desktop; three cards in a row for wide desktop, two on tablet, one on mobile.
- Card colour is consistently `var(--cream)` (`#D9BB9B`), text is `var(--cream-ink)` (`#1C1815`), border and divider treatment is subtle, and the existing 13px card radius applies. Each card contains its number, branch name, Karachi label with minimalist outline map-pin icon and an explicit external **VIEW LOCATION** action.
- Map actions have a dark `#1C1815` background, cream text, the existing 10px button radius, visible focus indication, `target="_blank"` and `rel="noopener noreferrer"`. They must retain the exact supplied href values.
- The homepage hero, other homepage sections, header, footer, Contact page, 13 men's pricing cards, 18 women's pricing cards and 47 deal cards remain outside this targeted batch.

## Services Deal Collection design correction — 16 October 2026

- All 47 Debonair Deal cards now share the **same** warm cream background `#D9BB9B` and dark ink `#1C1815`, consistent with (but structurally separate from) the men's/women's price cards. This supersedes the previous optional dark/cream alternating deal-card presentation.
- Retain shared 13px card radius, 10px WhatsApp button radius, dark button/cream copy, understated item dividers, Cinzel-serif uppercase package titles, legible inclusion lists, no fixed heights, and bottom-aligned action links.
- Deal card hierarchy: THE DEBONAIR COLLECTION → DEBONAIR DEAL NN → PACKAGE INCLUDES → listed services → CALL ON WHATSAPP. Do not show unsupported deal selling prices.
- Services page's prototype pricing-update notification has been removed at its source. The section top gap and promo-card bottom margin were tightened, without negative positioning.
- The Deals tab's promotional feature retains heading **FOR EVERY SPECIAL MOMENT** and exact existing description. The current male-client grooming image is a *temporary existing reference asset* reused from the Men's tab; replacement with one distinct, approved photo is still outstanding before publication. The visible mood-board label remains factual.
- Only the Services & Deals page and its directly shared catalogue/rendering styles are in scope. Men's/Women's prices and all other layouts/links are unchanged.


## Approved Services/About layout amendment — 16 October 2026

- Services and Deals use the **same shared promotional stage** for Men, Women and Packages. Reduce only the top padding of the Services main section to `clamp(38px, 4.9vw, 68px)` (from `clamp(52px, 6vw, 86px)`), lifting the stage subtly without negative margins or changing its aspect ratio or contents.
- About Us articles 1–3 must remain in original order with **article content first, then its related image below it** at every breakpoint; no side-by-side or alternating layouts. The About editorial content and image share a centred reading column of at most 840px; image aspect ratios are 16:9 on desktop and 16:10 on narrow mobile.
- Use the client-provided two-paragraph article text verbatim, retain existing headers/CTA links, and maintain the Black & Cream palette and 13px image radius. Use distinct existing approved reference assets for all three About images (men's grooming, salon interior, women's hair) rather than duplicating one reference. None is a verified actual Debonair branch photograph.


## Approved About Us image balance (October 2026)
Three About Us sections remain article-first, image-below at every viewport. Their shared centered container is capped at 800px, with matching 760px maximum article/image widths, 16:8 desktop image framing, and 16:10 mobile framing. The Our Story (second) section uses the client-supplied salon interior image. Homepage hero and Men’s Services initial banner use the two other supplied photographs. Preserve source photography without presenting illustrative imagery as verified branch photography.


## Footer ordering and About banner source (17 October 2026)

- Shared footer Instagram and Facebook links remain icon-only, with accessible names, in a single horizontal row, Facebook immediately right of Instagram. Keep original destinations and keyboard-visible focus.
- The About Us hero uses the *previous active Home Page hero image* `assets/salon-interior-concept.jpg` and matches its full-viewport photographic hero height, overlaid contrast veil, and responsive cover framing. Preserve About Us heading and article content.
- The requested new Home Page hero image and three Self-Care card images (Reference Images 2, 4, 5, 6) were not attached/available in this work session, therefore **the existing Home hero and card assets are unchanged pending receipt**. Do not select substitutes.

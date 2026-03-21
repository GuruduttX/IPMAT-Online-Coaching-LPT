
# LPT — IPMAT Coaching Landing Page

A premium, single-page landing website for LPT coaching institute targeting Class 10–12 students and parents interested in IIM admissions via IPMAT.

## Design System
- **Colors**: Primary Red (#C0392B), Deep Purple (#4A1A8C), Dark Navy (#1B1B3A), Lavender (#F4F3FF)
- **Fonts**: Poppins (headings, bold/black weight), Inter (body text)
- **Style**: Premium, achievement-oriented, generous whitespace, fade-in scroll animations

## Sections to Build (13 total)

1. **Sticky Navbar** — Bold "LPT" logo text, white bg, bottom shadow
2. **Hero Section** — Two-column: left banner card (cream bg, bold purple text, student placeholder, black bottom strip with locations) + right registration form card (name, email, phone, class dropdown, Register Now button with toast on submit)
3. **IPMAT Success Programs** — 4 program cards (Accelerator, Target, Finisher, Foundation) with purple gradient headers, gold accent text, and "Book Free Demo Class" CTAs
4. **Why IPMAT is Smarter** — 2×2 feature cards on lavender bg with decorative purple quarter-circle accents
5. **CTA Banner #1** — Red-to-purple gradient, "Have Questions?" heading, callback + phone buttons
6. **Why Join LPT** — 3×2 grid of feature blocks (results, experience, faculty, mentorship, AI LMS, performance tracking)
7. **Results Showcase** — Hero result card (top 3 AIRs) + grid of student tiles organized by IIM
8. **Motivational CTA + Discount** — Quote section + gold gift card/voucher with ₹5,000 OFF, tilted with CSS
9. **Target Audience** — Student placeholder + checklist with red checkmarks + gradient banner CTA
10. **Testimonials** — 4 dark gradient cards with gold quotes, student names, "Watch Video" pill buttons
11. **Our Centers** — 3-tab pill switcher (Mansarovar, Bapu Nagar, Vaishali Nagar) with address, directions, and contact buttons
12. **FAQs** — 9-item accordion on light gray bg, single-open behavior, red active state
13. **Footer CTA** — Dark navy section, "Still Thinking? Let's Talk." with outlined white buttons

## Interactions
- Registration form shows success toast on submit
- All CTA buttons smooth-scroll to hero registration form
- Tab switcher for centers section
- Accordion FAQ (one open at a time)
- Viewport fade-in animations via IntersectionObserver
- Fully responsive: mobile single-column, tablet 2-col, desktop full layout

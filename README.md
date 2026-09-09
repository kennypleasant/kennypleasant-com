# kennypleasant.com

Personal entity hub. Three pages, no build step, no dependencies. Upload the folder and it works.

```
index.html            Home (long scroll: hero, story, work, quote, timeline, book, video, CTA, paths)
story/index.html      Biography. The page Google and journalists cite.
book/index.html       No Money No Problem
assets/styles.css     All styling. Every colour is a token at the top.
assets/site.js        Scroll animation init, sticky header, mobile menu
assets/img/           Portrait cutout, book cover, logo set, favicons, OG card
robots.txt
sitemap.xml
```

Verified before handoff: every local link resolves, every tag balances, no horizontal overflow at 390px, schema parses with Person + RealEstateAgent + Organization + Book + WebSite and 10 `sameAs` entries.

---

## 1. Deploy: Cloudflare Pages via GitHub

This combination is free forever, fast worldwide, gives you a paste-and-publish editor, keeps a version history so a bad edit is one click to undo, and includes privacy-friendly analytics with no cookie banner.

**Once, about 20 minutes.**

1. Create a free account at **github.com**.
2. Click **New repository**. Name it `kennypleasant-com`. Set it to **Public**. Create.
3. On the empty repo page click **uploading an existing file**. Drag in the *contents* of this folder, not the folder itself. You want `index.html` at the top level, with `assets`, `story` and `book` as folders beside it. Commit.
4. Create a free account at **cloudflare.com**.
5. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**. Authorise GitHub, pick `kennypleasant-com`.
6. Build settings: leave the framework preset as **None**, leave build command **empty**, set output directory to **`/`**. Save and Deploy.
7. About a minute later you have a live URL like `kennypleasant-com.pages.dev`. **Check everything on that URL before touching DNS.**

## 2. Point the domain

**Order matters. Do not skip step 1.**

1. **Move the Simvoly funnel to meetkennypleasant.com first.** In your Simvoly dashboard, change the funnel's domain. Confirm it loads there. Any live ads pointing at kennypleasant.com will break the moment you repoint, so this comes first.
2. In Cloudflare Pages → your project → **Custom domains** → add `kennypleasant.com` and `www.kennypleasant.com`.
3. Cloudflare tells you which DNS records to set. Add them at your registrar.
4. HTTPS is automatic and free. Allow up to an hour, usually far less.

## 3. Updating it later

This is the workflow you asked for.

1. Tell me the change in our chat. I give you the new file contents.
2. Go to your GitHub repo, click the file, click the **pencil icon**.
3. Select all, paste the new code, click **Commit changes**.
4. Cloudflare rebuilds automatically. Live in about 30 seconds.

If a paste ever breaks the page, GitHub keeps every version. Open the file's **History**, pick the last good version, restore it. You cannot permanently break the site this way, which is the main reason this route beats a drag-and-drop host.

**Images are different.** They are uploaded once and stay put. To change one, use **Add file → Upload files** in the same folder and keep the filename identical.

## 4. Turn on analytics

Cloudflare → your Pages project → **Analytics** → enable **Web Analytics**. No code, no cookie banner, no GDPR consent requirement, free.

Do this before launch, not after. You are about to publish four different conversion routes and you want to know which one people actually use.

## 5. After it is live

1. **Google Search Console.** Add the property, verify by DNS, submit `sitemap.xml`.
2. **Rich Results Test** at search.google.com/test/rich-results. Expect Person, Organization and Book with zero errors. Warnings on optional fields are fine.
3. **Schema Markup Validator** at validator.schema.org. Catches what Google's tool ignores.
4. **Request indexing** on all three URLs.
5. **Update every profile** to link here and to use the same headshot: LinkedIn, YouTube, Instagram, Facebook, TikTok, Zillow, Amazon Author Central, Goodreads, the brokerage site. The `sameAs` array claims those profiles are yours. Them linking back, with matching photo and bio, is what proves it.

Step 5 is the one people skip and it is half the value.

## 6. Known open items

- **Agent card in the path chooser** points at `meetkennypleasant.com` as an interim. Swap it for the BoldTrail agent page when that exists.
- **No blog yet.** This is the next real thing. Publishing under your own name on your own domain is what keeps an entity alive between press hits. Add `/writing/` on the same pattern with `Article` schema per post.
- **Your brokerage bio** describes NextHome Prolific as the only Black-owned brokerage on the Eastside. It is a real differentiator and a legitimate local press angle. It is not on this site. That is your call to make, not mine.

## 7. Editing colours

Every colour on the site is a variable in the first 20 lines of `assets/styles.css`. Change one value, the whole site follows.

```
--void    #060F18   deepest ground
--navy    #0C1B2A   section ground
--orange  #FF6C2C   the single accent
--white   #F4F8FB   headline text
--grey    #93A7B8   body text
```

The portrait runs in full colour. For a black-and-white treatment, find `.hero-fig img` and change the filter to `grayscale(1) contrast(1.05) brightness(1.04)`.

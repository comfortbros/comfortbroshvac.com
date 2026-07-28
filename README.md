# Comfort Bros HVAC — Static Website Starter

This is a simple, responsive static website template for an HVAC business. It is intentionally small and easy to customize.

Included files:
- index.html — main page
- styles.css — styling
- script.js — small interactions (nav + form handling)

Quick setup:
1. Replace placeholder text (company name, contact info, address) in index.html.
2. Replace the hero image and map placeholder with your own photos or embed a real Google Maps iframe.
3. Configure the contact form:
   - Option A (Formspree): create a form at https://formspree.io, then replace the `action` attribute in the form with your Formspree endpoint (e.g. https://formspree.io/f/abcd).
   - Option B (Netlify Forms): rename/remove action and add `data-netlify="true"` to the form. Deploy to Netlify.
   - Option C: integrate your own backend endpoint.
4. Optional: change brand colors in `:root` variables in styles.css.

Deploy:
- GitHub Pages: push repo and enable Pages from the repo settings (branch: main or gh-pages).
- Netlify / Vercel: drag & drop or connect the repo for continuous deployment.

Assets:
- Use optimized JPEG/WebP images. Example images in the template are Unsplash links and are for placeholder use only.

Need help customizing:
Tell me:
- preferred colors or logo,
- what pages you want (separate pages vs single-page),
- whether you want a booking calendar (Google Calendar/Calendly),
- whether to set up contact form handling or deploy the site for you (provide repo).
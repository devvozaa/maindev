# Website content and launch setup

This is a static HTML5 preview, not a customer-data service or hosted business account. The public page has no login ID/password or CMS. The owner may edit the site copy in `index.html` and `app.js`'s five language dictionaries; update verified phone and WhatsApp values only in `SITE_DETAILS` near the top of `app.js`. Replace images by uploading approved files to Manus project storage and updating the relevant `/manus-storage/...` paths. These source edits are not a web-based self-service dashboard; do not place passwords or private credentials in browser JavaScript.

## Demo pickup flow

The intake form lets a visitor add multiple clothing/old-item lines with category, quantity, condition and a note, then enter name/phone, area, full pickup address, an optional Google Maps URL, preferred date/time and an optional note. A request is placed only in the current tab's `sessionStorage`. `/admin.html` is an openly accessible, non-secure prototype view of those same-tab demo entries, their item lines and pickup details. Status changes and deletion affect only that tab. No request is sent to Banshree, no record survives a closed tab, and another device cannot see it. The prominent notice asks preview visitors to use fictional details only. Never use this prototype for actual customer PII.

## Owner details to verify before launch

| Field | Required owner input |
| --- | --- |
| Call and WhatsApp | Working numbers including country code. Configure and verify direct links in `SITE_DETAILS`. |
| Google Maps | Exact shop/business address or verified map pin. The current map shows Mumbai generally, not Banshree's exact location. |
| Google Business Profile | Direct, owner-verified listing URL. The help link is not the business listing. |
| Service area and pickup | Areas served, home-pickup availability/timing, minimum quantity and conditions. |
| Purchase terms | Accepted item conditions and the owner's current price/rate approach. Do not promise a fixed rate before confirmation. |
| Business photography | Owner-approved images of the actual shop/team/collections; current stock scenes are representative, not Banshree's own premises. |
| Languages | Review Hindi, Marathi, Gujarati, Bengali and English copy with the owner/fluent speakers. |

The hero saree photograph is a representative stock image by **Kizhakke Vdu**, served under the [Pexels License](https://www.pexels.com/license/); [source photo](https://www.pexels.com/photo/elegant-silk-saree-with-gold-jewelry-on-wood-surface-39070874/). Other textile photos also remain representative and should be replaced with owner-approved business images where suitable.

## Real orders and private admin access

To persist requests across devices and let the owner see customer pickup locations securely, this static prototype must become a server-backed application with managed database persistence and authentication. The server and database are currently off. Enabling managed server/database is one-way; the project's development and published app share the database. This change requires the owner's explicit approval. Before collecting real details, configure Manus OAuth or an agreed identity provider, server-side authorization restricted to the verified owner/admin, privacy/retention notice, and a tested export/backup/security process. Never expose customer addresses in public HTML, JavaScript, a public API or an unprotected admin route. The owner's admin identity/email must be provided through a protected setup step, not hard-coded in frontend source.

## Website-build commercial checklist

The owner requested a written final total price, a breakdown of whether domain, hosting, SSL, design and SEO are included/separate, domain/hosting duration, SSL status, login ID/password, ability to edit photos/details, backup/security responsibility, delivery duration, renewal/hidden charges and post-launch support. Every answer remains **pending confirmation** in the demo; no amount, guarantee or service commitment is invented. The full quote and terms should be understood and accepted before payment. Sending a WhatsApp quote also requires a verified recipient number.

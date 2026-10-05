# Banshree Old Clothes Buyer Mumbai

A bright, responsive HTML5 one-page website demo for a Mumbai used-clothing and old-item buyer. It includes Hindi, Marathi, Gujarati, Bengali and English copy, GSAP-enhanced reveals with a reduced-motion/no-GSAP fallback, an actual folded silk-saree stock photo, representative textile photos, home-pickup information, a general Mumbai map, Google Business Profile help, basic SEO, an item builder and pickup request form.

## Preview

The project runs as static files on the Webdev Preview runtime at port 3000:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

`manus-routes.json` lists `/` and `/admin.html`. Submit fictional details only. The form stores demo requests in the current tab's `sessionStorage`; it sends no data to a server, and the Admin demo can only view that same tab. It is not a secure login, persistent order system or production-ready customer-data intake.

## Before using with customers

Add the owner's verified contact number, exact map pin/address, Google Business Profile URL, buying/pickup details and owner-supplied business photos. Review all five language versions. The current contact buttons, exact business location and profile remain pending confirmation. The Pexels saree photo is credited to Kizhakke Vdu and is representative only; it is not a Banshree shop photo. Pexels source: https://www.pexels.com/photo/elegant-silk-saree-with-gold-jewelry-on-wood-surface-39070874/ .

For cross-device orders and private admin access, this static demo needs a server, managed database, authentication and server-side authorization. Server/database are not enabled. Managed enablement is one-way and development/published data share the database; do not enable or collect real customer data without owner approval and an agreed access, privacy, retention and backup plan. See [CONTENT-SETUP.md](CONTENT-SETUP.md).

This project does not itself establish a domain, hosting term, SSL service contract, CMS/login credentials, backup/security responsibility, renewal price, support commitment or final website quote. The owner checklist intentionally leaves these answers pending.


## Pickup request service update
- Users can add multiple items (type, quantity, condition, note) and submit pickup/contact details.
- Requests are stored in browser `localStorage` under `banshreeDemoPickupsV1`.
- The admin page (`admin.html`) reads the same store and refreshes automatically when requests/statuses change in another tab/window.
- This is still a static/demo implementation: it does not transmit data to a server and is not an authenticated admin system.
- For production, connect the same request schema to a secure backend/database and protect the admin route with authentication/roles.

# Banshree Old Clothes Buyer Mumbai — PHP + SQLite One-Pager

## Stack
- **Single PHP file:** `index.php`
- **Database:** built-in SQLite through `PDO_SQLITE`
- **Animation:** GSAP + ScrollTrigger CDN
- **Images:** real photographic references from Unsplash
- **Frontend:** responsive HTML/CSS/vanilla JS
- **Admin:** same page at `?admin=1`

## User flow
1. Customer opens `index.php`.
2. Customer adds one or multiple items.
3. Customer enters name, phone, area, address and preferred pickup date/time.
4. Form submits directly to SQLite.
5. A request ID is returned.

## Admin flow
1. Open `index.php?admin=1`.
2. Login with the configured admin password.
3. View every pickup request and item list.
4. Change status: `new`, `contacted`, `scheduled`, `picked_up`, `cancelled`.
5. Delete requests when required.

## SQLite
The file `banshree.sqlite` is automatically created beside `index.php` on first request. No MySQL setup is required.

The hosting account must have PHP with **PDO SQLite enabled** and write permission for the directory so PHP can create/update `banshree.sqlite`.

## Admin password
Default password:

`banshree2026`

For production, set the server environment variable:

`BANSHREE_ADMIN_PASSWORD`

Do not keep the default password on a public production site.

## Deploy
Upload only `index.php` to a PHP hosting account with SQLite enabled. Open:

`https://your-domain.com/index.php`

Admin:

`https://your-domain.com/index.php?admin=1`

## Note
The included photographic URLs are real image references and should be replaced with Banshree's own business/product/pickup photographs when available. The SQLite database contains customer information, so the production site should use HTTPS, strong admin credentials, backups and restricted database-file access.

# Deployment

This app is deployed as a PHP container with SQLite on Render.

SQLite is intentionally used without a managed database. The website remains publicly hosted, but `banshree.sqlite` is stored on the container filesystem and can be reset when Render replaces or redeploys the instance. Do not use this deployment for sensitive or business-critical customer records without adding durable storage and backups.

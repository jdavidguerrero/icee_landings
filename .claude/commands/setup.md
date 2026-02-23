Set up the icee-landings monorepo. Do these steps in order:

1. **Read CLAUDE.md** to understand the full project context.

2. **Explore both templates** using the @explore-template agent:
   - Explore apps/corporate/ (Tidy template)
   - Explore apps/product/ (Fintech template)

3. **Create shared packages** if they don't exist:
   - `packages/tsconfig/` with package.json, base.json, nextjs.json
   - `packages/ui/` with package.json, tsconfig.json, src/tokens.ts, src/index.ts
   - `packages/assets/` with package.json

4. **Create and run the asset extraction script** `extract-assets.sh`:
   ```bash
   #!/bin/bash
   ASSETS="packages/assets"
   BASE="https://static.wixstatic.com/media"
   mkdir -p "$ASSETS/logos" "$ASSETS/partners" "$ASSETS/images" "$ASSETS/product" "$ASSETS/videos"
   # Logos
   curl -sL -o "$ASSETS/logos/icee-white.png" "$BASE/5447f0_6fb3740c301e4db7bc1009b573a36032~mv2.png"
   curl -sL -o "$ASSETS/logos/icee-ecuador.png" "$BASE/5447f0_4d53bbe07f8c4e9ca0d5303683f7aac1~mv2.png"
   curl -sL -o "$ASSETS/logos/icee-colombia.png" "$BASE/5447f0_84eff2870a814d0a8bbe04ad984c930b~mv2.png"
   curl -sL -o "$ASSETS/logos/icee-usa.png" "$BASE/5447f0_a8beae3adbbb40eea6d30c3bf3f62e89~mv2.png"
   # Partners
   curl -sL -o "$ASSETS/partners/newland.png" "$BASE/5447f0_f9dc78b58e94496688809065a34c0b96~mv2.png"
   curl -sL -o "$ASSETS/partners/sinova.png" "$BASE/5447f0_da8215dcc2eb4a9da243c2bc7d532f65~mv2.png"
   curl -sL -o "$ASSETS/partners/keenon.png" "$BASE/5447f0_70b5d79663124fd0995572921ca5825e~mv2.png"
   curl -sL -o "$ASSETS/partners/spectra.png" "$BASE/5447f0_70fc397da21947359e197ec24d78b298~mv2.png"
   curl -sL -o "$ASSETS/partners/urovo.png" "$BASE/5447f0_9a7e863416c9422ea98ebcea6ce0448d~mv2.png"
   curl -sL -o "$ASSETS/partners/topwise.png" "$BASE/5447f0_4d767c36671040fb8ae81afe74344f2b~mv2.png"
   curl -sL -o "$ASSETS/partners/ciontek.png" "$BASE/5447f0_9dd7cb178f41489f90045dd50923dac1~mv2.png"
   curl -sL -o "$ASSETS/partners/sunmi.png" "$BASE/5447f0_687abeb6c8294c0daa6d1fd02dc8a679~mv2.png"
   curl -sL -o "$ASSETS/partners/nexgo.png" "$BASE/5447f0_e1dfbb353ce3406289640217eaab0b2a~mv2.png"
   curl -sL -o "$ASSETS/partners/verifone.png" "$BASE/5447f0_2039d630f1194a8fb3c0885ec58bfd1c~mv2.png"
   # Images
   curl -sL -o "$ASSETS/images/hero-bg.jpg" "$BASE/5447f0_af213ee884274f6d82698ffb1c7b5624~mv2.jpg"
   curl -sL -o "$ASSETS/images/lineas-negocio.png" "$BASE/5447f0_472e8997b10c4eab8de0343b516f9d92~mv2.png"
   curl -sL -o "$ASSETS/images/terminales.png" "$BASE/5447f0_a4451feadb9340308262bee7c1acb069~mv2.png"
   echo "✅ Assets downloaded to $ASSETS/"
   ```
   Run it: `chmod +x extract-assets.sh && ./extract-assets.sh`

5. **Configure root package.json** if not already set:
   ```json
   {
     "name": "icee-landings",
     "private": true,
     "workspaces": ["apps/*", "packages/*"],
     "scripts": {
       "dev": "turbo run dev",
       "dev:corporate": "turbo run dev --filter=@icee/corporate",
       "dev:product": "turbo run dev --filter=@icee/product",
       "build": "turbo run build",
       "lint": "turbo run lint",
       "clean": "turbo run clean && rm -rf node_modules"
     },
     "devDependencies": { "turbo": "^2" }
   }
   ```

6. **Configure turbo.json** if not already set.

7. **Adapt each template's package.json**:
   - `apps/corporate/package.json`: name `@icee/corporate`, port 3000, add `@icee/ui` and `@icee/assets` as deps
   - `apps/product/package.json`: name `@icee/product`, port 3001, add `@icee/ui` and `@icee/assets` as deps
   - **Keep all existing template dependencies** — only add the workspace refs

8. **Run `npm install`** from root and verify no errors.

9. **Test both apps**: `npm run dev:corporate` then `npm run dev:product` — both should load the default template.

10. **Copy assets to each app's public folder** so Next.js can serve them:
    ```bash
    cp -r packages/assets/logos apps/corporate/public/images/logos/
    cp -r packages/assets/partners apps/corporate/public/images/partners/
    cp -r packages/assets/images apps/corporate/public/images/
    cp -r packages/assets/logos apps/product/public/images/logos/
    cp -r packages/assets/partners apps/product/public/images/partners/
    cp -r packages/assets/images apps/product/public/images/
    ```

11. **Commit**: `git add . && git commit -m "chore: monorepo setup, shared packages, assets downloaded"`

Report the template exploration results and any issues found.

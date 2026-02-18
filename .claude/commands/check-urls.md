# check-urls - Validate Stored URLs

Check all stored shortened URLs to verify the original (long) URLs are still accessible.

---

## Instructions

1. Read the storage file at `backend/data/urls.json` to get all stored URLs.

2. If the file doesn't exist or is empty, display:
   ```
   ℹ️ No URLs found in storage. Nothing to check.
   ```

3. For each URL entry, use a Bash `curl` command to check if the long URL is reachable:
   ```bash
   curl -o /dev/null -s -w "%{http_code}" -L --max-time 10 "<longUrl>"
   ```

4. Classify each URL as:
   - **Accessible** — HTTP status 200-399
   - **Unreachable** — HTTP status 400+ or connection timeout/error

5. Display results in this format:
   ```
   ========================================
   URL HEALTH CHECK RESULTS
   ========================================

   Total URLs: X
   Accessible:  X ✅
   Unreachable: X ❌

   DETAILS:
   --------
   ✅ [shortCode] → [longUrl] (HTTP [status])
   ❌ [shortCode] → [longUrl] (HTTP [status] or "timeout/error")

   ========================================
   ```

6. If any URLs are unreachable, add a recommendation:
   ```
   RECOMMENDATION:
   → Consider removing or updating unreachable URLs
   ```

---

## Important Notes

- Always read from `backend/data/urls.json` — this is the project's storage file
- Use `--max-time 10` to avoid hanging on unresponsive URLs
- Use `-L` to follow redirects
- Run curl checks in parallel where possible for speed
- Do not modify any URLs — this is a read-only check

---

End of check-urls command.

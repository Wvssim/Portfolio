// Optional self-hosted Umami analytics. Unset by default — set UMAMI_DOMAIN
// (and UMAMI_SITE_ID in layout.tsx's usage) to enable.
export const UMAMI_SRC = process.env.UMAMI_DOMAIN || "";

// never throw on a malformed UMAMI_DOMAIN — this module is imported by the root layout
export const UMAMI_ORIGIN = URL.canParse(UMAMI_SRC)
  ? new URL(UMAMI_SRC).origin
  : "";

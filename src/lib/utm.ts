"use client";

/**
 * Captures UTM parameters from the URL and stores them in localStorage.
 * Should be called in the root layout or a high-level component.
 */
export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const captured: Record<string, string> = {};

  let hasUtm = false;
  utmKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      captured[key] = value;
      hasUtm = true;
    }
  });

  if (hasUtm) {
    localStorage.setItem("utm_params", JSON.stringify(captured));
  }
}

/**
 * Retrieves captured UTM parameters from localStorage.
 */
export function getStoredUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem("utm_params");
  return stored ? JSON.parse(stored) : {};
}

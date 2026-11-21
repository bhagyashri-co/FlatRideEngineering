import { useEffect, useRef, useState } from "react";
import "./CookieConsent.css";

export const OPEN_COOKIE_PREFERENCES_EVENT = "flat-ride:open-cookie-preferences";

const STORAGE_KEY = "flatRideCookieConsent";
const DEFAULT_PREFERENCES = {
  essential: true,
  analytics: false,
  marketing: false,
};

function isValidPreferences(value) {
  return value
    && value.version === 1
    && typeof value.analytics === "boolean"
    && typeof value.marketing === "boolean";
}

function loadPreferences() {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return null;

    const parsedValue = JSON.parse(storedValue);
    return isValidPreferences(parsedValue)
      ? {
          essential: true,
          analytics: parsedValue.analytics,
          marketing: parsedValue.marketing,
        }
      : null;
  } catch (error) {
    console.error("Could not read cookie preferences:", error);
    return null;
  }
}

export default function CookieConsent() {
  const dialogRef = useRef(null);
  const returnFocusRef = useRef(null);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [hasSavedChoice, setHasSavedChoice] = useState(false);
  const [isConsentVisible, setIsConsentVisible] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    const savedPreferences = loadPreferences();
    if (savedPreferences) {
      setPreferences(savedPreferences);
      setHasSavedChoice(true);
    }
    setHasInitialized(true);
  }, []);

  useEffect(() => {
    function openPreferences() {
      returnFocusRef.current = document.activeElement;
      setPreferences(loadPreferences() || DEFAULT_PREFERENCES);
      setIsConsentVisible(true);
      setIsSettingsOpen(true);
      setSaveError("");
    }

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    const isDialogOpen = hasInitialized && isConsentVisible;
    if (!isDialogOpen) {
      returnFocusRef.current?.focus?.();
      return undefined;
    }

    const dialog = dialogRef.current;
    const focusableElements = dialog?.querySelectorAll(
      'button:not(:disabled), input:not(:disabled)'
    );
    focusableElements?.[0]?.focus();

    function handleDialogKeyDown(event) {
      if (event.key === "Escape" && hasSavedChoice) {
        setIsConsentVisible(false);
        setIsSettingsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusableElements?.length) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleDialogKeyDown);
    return () => document.removeEventListener("keydown", handleDialogKeyDown);
  }, [hasInitialized, hasSavedChoice, isConsentVisible]);

  useEffect(() => {
    if (!hasInitialized || !isConsentVisible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasInitialized, isConsentVisible]);

  function savePreferences(nextPreferences) {
    const savedPreferences = {
      version: 1,
      essential: true,
      analytics: nextPreferences.analytics,
      marketing: nextPreferences.marketing,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedPreferences));
    } catch (error) {
      console.error("Could not save cookie preferences:", error);
      setSaveError("Your preferences could not be saved. Check your browser storage settings and try again.");
      return;
    }

    const normalizedPreferences = {
      essential: true,
      analytics: savedPreferences.analytics,
      marketing: savedPreferences.marketing,
    };
    setPreferences(normalizedPreferences);
    setHasSavedChoice(true);
    setIsConsentVisible(false);
    setIsSettingsOpen(false);
    setSaveError("");
    window.dispatchEvent(
      new CustomEvent("flat-ride:consent-change", { detail: normalizedPreferences })
    );
  }

  if (!hasInitialized || !isConsentVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <section
        ref={dialogRef}
        className="cookie-consent-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="cookie-consent-accent" aria-hidden="true" />
        <div className="cookie-consent-content">
          <span className="cookie-consent-eyebrow">FLAT RIDE ENGINEERING / PRIVACY</span>
          <h2 id="cookie-consent-title">We care about your privacy</h2>
          <p id="cookie-consent-description">
            Essential cookies keep this site working. With your permission, analytics
            cookies help us understand site use, and marketing cookies support relevant
            communications. You can change your choice at any time.
          </p>

          {isSettingsOpen ? (
            <div className="cookie-settings-list">
              <div className="cookie-setting-row">
                <div>
                  <h3>Essential cookies</h3>
                  <p>Required for core website functions and always enabled.</p>
                </div>
                <input type="checkbox" checked disabled aria-label="Essential cookies always enabled" />
              </div>
              <label className="cookie-setting-row">
                <span>
                  <h3>Analytics cookies</h3>
                  <p>Help us measure and improve how visitors use the site.</p>
                </span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, analytics: event.target.checked }))
                  }
                />
              </label>
              <label className="cookie-setting-row">
                <span>
                  <h3>Marketing cookies</h3>
                  <p>Allow measurement and personalization for marketing activity.</p>
                </span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, marketing: event.target.checked }))
                  }
                />
              </label>
            </div>
          ) : (
            <p className="cookie-consent-note">
              No analytics or marketing tracking is enabled unless you choose to allow it.
            </p>
          )}

          {saveError && <p className="cookie-consent-error" role="alert">{saveError}</p>}

          <div className="cookie-consent-actions">
            {isSettingsOpen ? (
              <>
                <button
                  className="cookie-button cookie-button-primary"
                  type="button"
                  onClick={() => savePreferences(preferences)}
                >
                  Save Preferences
                </button>
                <button
                  className="cookie-button cookie-button-secondary"
                  type="button"
                  onClick={() => savePreferences({ analytics: true, marketing: true })}
                >
                  Accept All
                </button>
                <button
                  className="cookie-button cookie-button-text"
                  type="button"
                  onClick={() => savePreferences(DEFAULT_PREFERENCES)}
                >
                  Reject All
                </button>
                {hasSavedChoice && (
                  <button
                    className="cookie-button cookie-button-text"
                    type="button"
                    onClick={() => {
                      setPreferences(loadPreferences() || DEFAULT_PREFERENCES);
                      setIsSettingsOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  className="cookie-button cookie-button-primary"
                  type="button"
                  onClick={() => savePreferences({ analytics: true, marketing: true })}
                >
                  Accept All
                </button>
                <button
                  className="cookie-button cookie-button-secondary"
                  type="button"
                  onClick={() => savePreferences(DEFAULT_PREFERENCES)}
                >
                  Reject All
                </button>
                <button
                  className="cookie-button cookie-button-text"
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                >
                  Cookie Settings
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

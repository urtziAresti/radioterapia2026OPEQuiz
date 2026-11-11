
import { Injectable } from "@angular/core";
import { DeviceInfo } from "../interfaces/data";

@Injectable({
  providedIn: "root",
})
export class DataService {

  async getDeviceInfo(): Promise<DeviceInfo> {
    const nav = navigator as any;

    const connection =
      nav.connection ||
      nav.mozConnection ||
      nav.webkitConnection;

    // =====================================
    // USER AGENT DATA
    // =====================================

    let uaData: any = null;
debugger;
    try {
      if (nav.userAgentData) {
        uaData = {
          ...nav.userAgentData,
          ...await nav.userAgentData.getHighEntropyValues([
            "model",
            "architecture",
            "platformVersion",
          ]),
        };
      }
    } catch {}

    // =====================================
    // STORAGE
    // =====================================

    const storageAvailable = (
      type: "localStorage" | "sessionStorage"
    ): boolean => {
      try {
        const storage = window[type];
        const key = "__device_test__";

        storage.setItem(key, "1");
        storage.removeItem(key);

        return true;
      } catch {
        return false;
      }
    };

    let storageEstimate: any = null;

    try {
      storageEstimate = await navigator.storage?.estimate();
    } catch {}

    // =====================================
    // PWA
    // =====================================

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      nav.standalone === true;

    const displayMode = [
      "standalone",
      "fullscreen",
      "minimal-ui",
      "browser",
    ].find((mode) =>
      window.matchMedia(`(display-mode: ${mode})`).matches
    ) || "unknown";

    // =====================================
    // WEBGL
    // =====================================

    const canvas = document.createElement("canvas");

    let webGL = false;

    try {
      webGL = !!(
        canvas.getContext("webgl") ||
        canvas.getContext("webgl2")
      );
    } catch {}

    // =====================================
    // DEVICE INFO
    // =====================================

    return {
      collectedAt: new Date().toISOString(),

      device: {
        userAgent: navigator.userAgent,
        platform: uaData?.platform || navigator.platform,
        vendor: navigator.vendor,

        mobile: uaData?.mobile ??
          /Android|iPhone|iPad|iPod|Mobile/i.test(
            navigator.userAgent
          ),

        model: uaData?.model || null,
        architecture: uaData?.architecture || null,

        language: navigator.language,
        languages: [...navigator.languages],

        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,

        cores: navigator.hardwareConcurrency || null,
        memory: nav.deviceMemory || null,

        touchPoints: navigator.maxTouchPoints,
      },

      browser: {
        url: location.href,
        hostname: location.hostname,
        origin: location.origin,
        referrer: document.referrer,
        title: document.title,

        timezone: Intl.DateTimeFormat()
          .resolvedOptions().timeZone,

        timezoneOffset: new Date().getTimezoneOffset(),

        visibility: document.visibilityState,
        focused: document.hasFocus(),
      },

      screen: {
        width: screen.width,
        height: screen.height,

        availableWidth: screen.availWidth,
        availableHeight: screen.availHeight,

        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,

        pixelRatio: window.devicePixelRatio,
        colorDepth: screen.colorDepth,

        orientation: screen.orientation?.type || null,
      },

      network: {
        online: navigator.onLine,

        type: connection?.type || null,
        effectiveType: connection?.effectiveType || null,

        downlink: connection?.downlink ?? null,
        rtt: connection?.rtt ?? null,
        saveData: connection?.saveData ?? null,
      },

      system: {
        timezone: Intl.DateTimeFormat()
          .resolvedOptions().timeZone,

        date: new Date().toISOString(),
        localDate: new Date().toString(),

        offset: new Date().getTimezoneOffset(),
      },

      pwa: {
        standalone,
        displayMode,

        serviceWorkerSupported:
          "serviceWorker" in navigator,

        serviceWorkerActive:
          !!navigator.serviceWorker?.controller,
      },

      storage: {
        localStorage: storageAvailable("localStorage"),
        sessionStorage: storageAvailable("sessionStorage"),

        indexedDB: "indexedDB" in window,

        quota: storageEstimate?.quota ?? null,
        usage: storageEstimate?.usage ?? null,
      },

      capabilities: {
        bluetooth: "bluetooth" in navigator,
        usb: "usb" in navigator,
        nfc: "NDEFReader" in window,

        geolocation: "geolocation" in navigator,

        camera: !!navigator.mediaDevices?.getUserMedia,
        microphone: !!navigator.mediaDevices?.getUserMedia,

        vibration: "vibrate" in navigator,
        share: "share" in navigator,

        clipboard: !!navigator.clipboard,
        wakeLock: "wakeLock" in navigator,

        webGL,

        serviceWorker: "serviceWorker" in navigator,
      },
    };
  }
}

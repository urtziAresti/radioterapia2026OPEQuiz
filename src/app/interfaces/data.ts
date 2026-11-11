
export interface DeviceInfo {
    collectedAt: string;
  
    device: {
      userAgent: string;
      platform: string;
      vendor: string;
      mobile: boolean;
      model: string | null;
      architecture: string | null;
      language: string;
      languages: string[];
      cookiesEnabled: boolean;
      online: boolean;
      cores: number | null;
      memory: number | null;
      touchPoints: number;
    };
  
    browser: {
      url: string;
      hostname: string;
      origin: string;
      referrer: string;
      title: string;
      timezone: string;
      timezoneOffset: number;
      visibility: string;
      focused: boolean;
    };
  
    screen: {
      width: number;
      height: number;
      availableWidth: number;
      availableHeight: number;
      viewportWidth: number;
      viewportHeight: number;
      pixelRatio: number;
      colorDepth: number;
      orientation: string | null;
    };
  
    network: {
      online: boolean;
      type: string | null;
      effectiveType: string | null;
      downlink: number | null;
      rtt: number | null;
      saveData: boolean | null;
    };
  
    system: {
      timezone: string;
      date: string;
      localDate: string;
      offset: number;
    };
  
    pwa: {
      standalone: boolean;
      displayMode: string;
      serviceWorkerSupported: boolean;
      serviceWorkerActive: boolean;
    };
  
    storage: {
      localStorage: boolean;
      sessionStorage: boolean;
      indexedDB: boolean;
      quota: number | null;
      usage: number | null;
    };
  
    capabilities: {
      bluetooth: boolean;
      usb: boolean;
      nfc: boolean;
      geolocation: boolean;
      camera: boolean;
      microphone: boolean;
      vibration: boolean;
      share: boolean;
      clipboard: boolean;
      wakeLock: boolean;
      webGL: boolean;
      serviceWorker: boolean;
    };
  }
  
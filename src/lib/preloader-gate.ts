/**
 * Entrance animations must not play behind the preloader. The preloader
 * announces when it begins fading out; anything that animates on mount waits
 * for that signal (and runs immediately if the preloader never shows).
 */
export const PRELOADER_EVENT = "consensus:preloaded";

declare global {
  interface Window {
    __consensusPreloaded?: boolean;
  }
}

export function markPreloaderDone() {
  if (typeof window === "undefined") return;
  window.__consensusPreloaded = true;
  document.documentElement.classList.add("preloaded");
  window.dispatchEvent(new Event(PRELOADER_EVENT));
}

/** Runs `cb` once the preloader is out of the way. Returns a cleanup fn. */
export function onPreloaderDone(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  if (window.__consensusPreloaded) {
    const id = window.setTimeout(cb, 0);
    return () => window.clearTimeout(id);
  }
  const handler = () => cb();
  window.addEventListener(PRELOADER_EVENT, handler, { once: true });
  // Safety net: never strand the page if the preloader fails to mount.
  const fallback = window.setTimeout(() => {
    window.removeEventListener(PRELOADER_EVENT, handler);
    cb();
  }, 4000);
  return () => {
    window.removeEventListener(PRELOADER_EVENT, handler);
    window.clearTimeout(fallback);
  };
}

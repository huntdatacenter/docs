import { vi } from "vitest"

Object.defineProperty(window, "visualViewport", {
  value: {
    width: 1024,
    height: 768,
    scale: 1,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: 0,
    pageTop: 0,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  },
  writable: true,
})

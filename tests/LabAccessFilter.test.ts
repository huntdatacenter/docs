import { vuetify } from "../docs/.vitepress/theme/plugins/vuetify"
import { mount } from "@vue/test-utils"
import { describe, it, expect, beforeEach } from "vitest"
import LinuxJourney from "../docs/.vitepress/theme/components/lab-access/LinuxJourney.vue"
import MacJourney from "../docs/.vitepress/theme/components/lab-access/MacJourney.vue"
import WindowsJourney from "../docs/.vitepress/theme/components/lab-access/WindowsJourney.vue"

const CACHE_KEY = "labAccessGuideFilter"

const components = [
  ["LinuxJourney", LinuxJourney],
  ["MacJourney", MacJourney],
  ["WindowsJourney", WindowsJourney],
] as const

const setQuery = (search: string) => {
  window.history.replaceState({}, "", search ? `/?${search}` : "/")
}

const mountJourney = (component: any) =>
  mount(component, {
    global: { plugins: [vuetify] },
    props: { ipAddress: "10.0.0.1", labName: "testlab", username: "tester" },
  })

const selected = (wrapper: any) => wrapper.vm.filterGuidesByType

describe.each(components)("%s filter precedence and cache hygiene", (_name, component) => {
  beforeEach(() => {
    localStorage.clear()
    setQuery("")
  })

  it("applies the URI filter when nothing is cached", () => {
    setQuery("filter=ssh_reset")
    expect(selected(mountJourney(component))).toBe("ssh_reset")
  })

  it("applies the cached filter when the URI has none", () => {
    localStorage.setItem(CACHE_KEY, "vpn_reset")
    expect(selected(mountJourney(component))).toBe("vpn_reset")
  })

  it("lets the URI override a cached filter", () => {
    localStorage.setItem(CACHE_KEY, "vpn_reset")
    setQuery("filter=lab_migration")
    const wrapper = mountJourney(component)
    expect(selected(wrapper)).toBe("lab_migration")
    expect(localStorage.getItem(CACHE_KEY)).toBe("lab_migration")
  })

  it("never writes the literal string 'null' into the cache", () => {
    setQuery("filter=not_a_real_filter")
    mountJourney(component)
    expect(localStorage.getItem(CACHE_KEY)).not.toBe("null")
  })

  it("keeps a valid cached filter when the URI filter is unrecognised", () => {
    localStorage.setItem(CACHE_KEY, "vpn_reset")
    setQuery("filter=not_a_real_filter")
    const wrapper = mountJourney(component)
    expect(selected(wrapper)).toBe("vpn_reset")
    expect(localStorage.getItem(CACHE_KEY)).toBe("vpn_reset")
  })

  it("heals a cache already poisoned with 'null'", () => {
    localStorage.setItem(CACHE_KEY, "null")
    mountJourney(component)
    expect(localStorage.getItem(CACHE_KEY)).not.toBe("null")
  })

  it("clears the cache when the user clears the select", async () => {
    localStorage.setItem(CACHE_KEY, "vpn_reset")
    const wrapper = mountJourney(component)
    await wrapper.vm.updateFilter(null)
    expect(localStorage.getItem(CACHE_KEY)).toBeNull()
  })
})

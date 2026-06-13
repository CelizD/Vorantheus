'use client'

/**
 * Pure-CSS product mockups used as "screenshots" across the site.
 * No real images — every visual is built from divs so it stays crisp
 * and on-brand at any size.
 */

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
  )
}

/** Browser window — used for "Páginas web". */
export function BrowserMockup() {
  return (
    <div className="w-full max-w-md rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0b0f17] shadow-2xl">
      <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <TrafficLights />
        <div className="flex-1 mx-2 h-5 rounded-md bg-white/[0.05] flex items-center px-2">
          <span className="text-[10px] text-white/30 tracking-wide">vorantheus.com</span>
        </div>
      </div>
      <div className="p-5">
        <div className="h-3 w-24 rounded bg-[#0B84F3]/60 mb-4" />
        <div className="h-6 w-3/4 rounded bg-white/[0.12] mb-2" />
        <div className="h-6 w-1/2 rounded bg-white/[0.08] mb-5" />
        <div className="flex gap-2 mb-6">
          <div className="h-7 w-24 rounded-lg bg-[#0B84F3]" />
          <div className="h-7 w-20 rounded-lg border border-white/15" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.05]" />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Admin dashboard — used for "Sistemas administrativos" and the hero. */
export function DashboardMockup() {
  return (
    <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0b0f17] shadow-2xl">
      <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <TrafficLights />
        <div className="ml-auto flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-12 rounded bg-white/10" />
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-16 sm:w-20 shrink-0 border-r border-white/[0.06] p-3 flex flex-col gap-3">
          <div className="h-4 w-4 rounded bg-[#0B84F3]" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-2.5 rounded ${i === 0 ? 'bg-white/25 w-full' : 'bg-white/10 w-3/4'}`} />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="h-3 w-20 rounded bg-white/15" />
            <div className="h-6 w-16 rounded-lg bg-[#0B84F3]/80" />
          </div>
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              { v: 'w-3/4', c: 'from-[#0B84F3]/30' },
              { v: 'w-1/2', c: 'from-[#7C3AED]/30' },
              { v: 'w-2/3', c: 'from-[#0B84F3]/20' },
            ].map((s, i) => (
              <div key={i} className={`rounded-xl p-2.5 bg-gradient-to-br ${s.c} to-transparent border border-white/[0.05]`}>
                <div className="h-1.5 w-8 rounded bg-white/20 mb-2" />
                <div className={`h-3 ${s.v} rounded bg-white/30`} />
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 h-24 flex items-end gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70, 100, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[#0B84F3]/40 to-[#0B84F3]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** E-commerce storefront — used for "Tiendas en línea". */
export function StoreMockup() {
  return (
    <div className="w-full max-w-md rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0b0f17] shadow-2xl">
      <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <TrafficLights />
        <div className="ml-auto h-6 w-6 rounded-full bg-white/[0.06] flex items-center justify-center">
          <div className="h-3 w-3 rounded-sm border border-white/25" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="h-3 w-20 rounded bg-white/15" />
          <div className="flex gap-1.5">
            <div className="h-2 w-10 rounded bg-white/10" />
            <div className="h-2 w-8 rounded bg-white/10" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-white/[0.05] overflow-hidden">
              <div className={`aspect-[4/3] bg-gradient-to-br ${i % 2 ? 'from-[#7C3AED]/30 to-[#0B84F3]/10' : 'from-[#0B84F3]/30 to-[#7C3AED]/10'}`} />
              <div className="p-2">
                <div className="h-2 w-2/3 rounded bg-white/15 mb-1.5" />
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-10 rounded bg-[#0B84F3]/70" />
                  <div className="h-4 w-4 rounded-md bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Phone frame — used for "Apps móviles". */
export function PhoneMockup() {
  return (
    <div className="w-[210px] rounded-[2.2rem] border border-white/[0.12] bg-[#0b0f17] p-2.5 shadow-2xl">
      <div className="rounded-[1.7rem] overflow-hidden border border-white/[0.06] bg-[#070a11]">
        {/* Notch + status */}
        <div className="relative h-9 flex items-center justify-center">
          <div className="w-16 h-4 rounded-full bg-black/60 border border-white/[0.06]" />
        </div>
        <div className="px-4 pb-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="h-2 w-10 rounded bg-white/10 mb-1.5" />
              <div className="h-3 w-20 rounded bg-white/20" />
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#0B84F3] to-[#7C3AED]" />
          </div>
          <div className="rounded-2xl p-3 bg-gradient-to-br from-[#0B84F3]/30 to-[#7C3AED]/15 border border-white/[0.06] mb-3">
            <div className="h-2 w-12 rounded bg-white/25 mb-2" />
            <div className="h-5 w-24 rounded bg-white/35" />
          </div>
          <div className="flex flex-col gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.05] p-2.5">
                <div className={`h-8 w-8 rounded-lg shrink-0 bg-gradient-to-br ${i % 2 ? 'from-[#7C3AED]/50 to-[#0B84F3]/30' : 'from-[#0B84F3]/50 to-[#7C3AED]/30'}`} />
                <div className="flex-1">
                  <div className="h-2 w-3/4 rounded bg-white/15 mb-1.5" />
                  <div className="h-2 w-1/2 rounded bg-white/[0.08]" />
                </div>
              </div>
            ))}
          </div>
          {/* Tab bar */}
          <div className="mt-4 flex items-center justify-around pt-3 border-t border-white/[0.06]">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-4 w-4 rounded-md ${i === 0 ? 'bg-[#0B84F3]' : 'bg-white/[0.12]'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const mockupMap: Record<string, () => React.ReactNode> = {
  browser: BrowserMockup,
  dashboard: DashboardMockup,
  store: StoreMockup,
  phone: PhoneMockup,
}

export function Mockup({ type }: { type: 'browser' | 'dashboard' | 'store' | 'phone' }) {
  const Comp = mockupMap[type] || BrowserMockup
  return <Comp />
}

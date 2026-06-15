// Pure pricing logic for the budget estimator — no UI, reusable from any context.

export type ProjectType = {
  id: string
  label: string
  icon: React.ElementType
  base: [number, number]
}

export type Feature = {
  id: string
  label: string
  add: [number, number]
}

export type Urgency = {
  id: string
  label: string
  desc: string
  multiplier: number
}

export function formatMXN(n: number): string {
  return n.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  })
}

export function roundTo500(n: number): number {
  return Math.round(n / 500) * 500
}

/**
 * Computes the orientative price range for a project.
 * Returns { min: 0, max: 0 } when type or urgency are missing.
 */
export function calcEstimate(args: {
  projectType?: ProjectType
  features: Feature[]
  selectedFeatures: Set<string>
  urgency?: Urgency
}): { min: number; max: number } {
  const { projectType, features, selectedFeatures, urgency } = args
  if (!projectType || !urgency) return { min: 0, max: 0 }

  const selected = features.filter((f) => selectedFeatures.has(f.id))
  const addMin = selected.reduce((sum, f) => sum + f.add[0], 0)
  const addMax = selected.reduce((sum, f) => sum + f.add[1], 0)

  return {
    min: roundTo500((projectType.base[0] + addMin) * urgency.multiplier),
    max: roundTo500((projectType.base[1] + addMax) * urgency.multiplier),
  }
}

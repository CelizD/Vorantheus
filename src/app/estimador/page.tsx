'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, RotateCcw, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { formatMXN, calcEstimate } from '@/lib/estimator'
import { projectTypes, featuresByType, urgencies } from '@/data/estimator-data'

// ─── Step indicator ──────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: 1 | 2 | 3 | 'result' }) {
  const active = current === 'result' ? 4 : (current as number)
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      {[1, 2, 3].map((s) => {
        const done = active > s
        const isCurrent = active === s
        return (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                done
                  ? 'bg-[#0071E3] text-white'
                  : isCurrent
                  ? 'bg-[#0071E3] text-white ring-4 ring-[#0071E3]/20'
                  : 'bg-black/[0.06] text-muted'
              }`}
            >
              {done ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`h-px w-10 transition-all duration-300 ${
                  done ? 'bg-[#0071E3]' : 'bg-black/[0.10]'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Slide variants ──────────────────────────────────────────────────────────

const slideVariants = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { x: -40, opacity: 0, transition: { duration: 0.2, ease: [0.55, 0, 1, 0.45] } },
}

// ─── Main component ──────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 'result'

export default function EstimadorPage() {
  const [step, setStep] = useState<Step>(1)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set())
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null)

  // ── derived ──────────────────────────────────────────────────────────────

  const projectType = projectTypes.find((p) => p.id === selectedType)
  const features = selectedType ? featuresByType[selectedType] ?? [] : []
  const urgency = urgencies.find((u) => u.id === selectedUrgency)

  // ── handlers ─────────────────────────────────────────────────────────────

  function toggleFeature(id: string) {
    setSelectedFeatures((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function goToStep2() {
    setSelectedFeatures(new Set())
    setStep(2)
  }

  function resetAll() {
    setStep(1)
    setSelectedType(null)
    setSelectedFeatures(new Set())
    setSelectedUrgency(null)
  }

  // ── render ────────────────────────────────────────────────────────────────

  const estimate = calcEstimate({ projectType, features, selectedFeatures, urgency })

  const urgencyBadge: Record<string, string> = {
    urgente: '+35%',
    normal: '+12%',
    calma: '',
  }
  const urgencyBadgeColor: Record<string, string> = {
    urgente: 'text-orange-500',
    normal: 'text-[#0071E3]',
    calma: '',
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="section-dark pt-36 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="tag">Calculadora de presupuesto</span>
          <h1
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]"
            style={{ letterSpacing: '-0.02em' }}
          >
            Estima el costo de<br className="hidden sm:block" /> tu proyecto.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/55 leading-relaxed max-w-xl mx-auto">
            Responde 3 preguntas y obtén un rango orientativo basado en proyectos
            profesionales actuales, no en precios de plantilla.
          </p>
        </div>
      </section>

      {/* ── Estimator ───────────────────────────────────────────────────── */}
      <section className="section-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          {step !== 'result' && <StepIndicator current={step} />}

          <AnimatePresence mode="wait">

            {/* ── Step 1 ───────────────────────────────────────────────── */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-black/[0.04]">
                  <h2 className="text-2xl font-bold text-ink mb-7">
                    ¿Qué tipo de proyecto necesitas?
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {projectTypes.map((pt) => {
                      const Icon = pt.icon
                      const isSelected = selectedType === pt.id
                      return (
                        <button
                          key={pt.id}
                          type="button"
                          onClick={() => setSelectedType(pt.id)}
                          className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col items-start gap-3 text-left w-full ${
                            isSelected
                              ? 'border-[#0071E3] bg-[#0071E3]/[0.08]'
                              : 'border-black/[0.07] bg-smoke hover:border-[#0071E3]/40 hover:bg-[#0071E3]/5'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#0071E3]" />
                          </div>
                          <span className="text-sm font-semibold text-ink mt-1">{pt.label}</span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="button"
                      disabled={!selectedType}
                      onClick={goToStep2}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Siguiente
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-muted leading-relaxed max-w-xs">
                      Rangos de referencia 2026 para México. No incluyen IVA, licencias,
                      tiendas de apps ni mantenimiento mensual.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 2 ───────────────────────────────────────────────── */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-black/[0.04]">
                  <h2 className="text-2xl font-bold text-ink mb-1">
                    ¿Qué funciones necesitas?
                  </h2>
                  <p className="text-sm text-muted mb-7">Puedes seleccionar varias opciones.</p>

                  <div className="flex flex-col gap-3">
                    {features.map((feat) => {
                      const isChecked = selectedFeatures.has(feat.id)
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => toggleFeature(feat.id)}
                          className={`cursor-pointer flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200 text-left w-full ${
                            isChecked
                              ? 'border-[#0071E3]/40 bg-[#0071E3]/[0.06]'
                              : 'border-black/[0.06] hover:border-[#0071E3]/30 hover:bg-[#0071E3]/[0.04]'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150 ${
                              isChecked
                                ? 'border-[#0071E3] bg-[#0071E3]'
                                : 'border-black/20 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-ink">{feat.label}</p>
                            <p className="text-xs text-muted mt-0.5">
                              +{' '}
                              {feat.add[0].toLocaleString('es-MX')} –{' '}
                              {feat.add[1].toLocaleString('es-MX')} MXN
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
                    >
                      Siguiente
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFeatures(new Set())
                        setStep(3)
                      }}
                      className="text-sm text-muted underline underline-offset-2 hover:text-ink transition-colors duration-200"
                    >
                      Sin funciones adicionales
                    </button>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm text-muted hover:text-ink transition-colors duration-200"
                    >
                      ← Atrás
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 3 ───────────────────────────────────────────────── */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-black/[0.04]">
                  <h2 className="text-2xl font-bold text-ink mb-7">
                    ¿Cuándo lo necesitas?
                  </h2>

                  <div className="flex flex-col gap-3">
                    {urgencies.map((u) => {
                      const isSelected = selectedUrgency === u.id
                      const badge = urgencyBadge[u.id]
                      const badgeColor = urgencyBadgeColor[u.id]
                      return (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setSelectedUrgency(u.id)}
                          className={`cursor-pointer p-5 rounded-2xl border-2 flex items-start justify-between gap-4 transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-[#0071E3] bg-[#0071E3]/[0.08]'
                              : 'border-black/[0.07] bg-smoke hover:border-[#0071E3]/40'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`mt-1 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-150 ${
                                isSelected ? 'border-[#0071E3]' : 'border-black/25'
                              }`}
                            >
                              {isSelected && (
                                <div className="w-2 h-2 rounded-full bg-[#0071E3]" />
                              )}
                            </div>
                            <div>
                              <p className="font-semibold text-ink text-sm">{u.label}</p>
                              <p className="text-sm text-muted mt-0.5">{u.desc}</p>
                            </div>
                          </div>
                          {badge && (
                            <span className={`text-sm font-semibold shrink-0 ${badgeColor}`}>
                              {badge}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      disabled={!selectedUrgency}
                      onClick={() => setStep('result')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Ver estimado
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-sm text-muted hover:text-ink transition-colors duration-200"
                    >
                      ← Atrás
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Result ───────────────────────────────────────────────── */}
            {step === 'result' && (
              <motion.div
                key="result"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-black/[0.04] text-center">
                  {/* Price */}
                  <p className="text-sm text-muted mb-3">
                    Tu proyecto podría costar aproximadamente:
                  </p>
                  <motion.p
                    className="text-4xl sm:text-5xl font-black text-ink leading-tight"
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 0.1, duration: 0.35 } }}
                  >
                    {formatMXN(estimate.min)} – {formatMXN(estimate.max)}
                    <span className="text-2xl sm:text-3xl ml-1 font-bold">MXN</span>
                  </motion.p>
                  <p className="text-xs text-muted mt-2">
                    rango de mercado 2026 sin IVA &bull; sujeto a alcance técnico
                  </p>

                  {/* Summary tags */}
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {projectType && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0071E3]/[0.08] text-[#0071E3] text-xs font-semibold">
                        <Check className="w-3 h-3" />
                        {projectType.label}
                      </span>
                    )}
                    {features
                      .filter((f) => selectedFeatures.has(f.id))
                      .map((f) => (
                        <span
                          key={f.id}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] text-ink text-xs font-medium"
                        >
                          <Check className="w-3 h-3 text-[#0071E3]" />
                          {f.label}
                        </span>
                      ))}
                    {urgency && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] text-ink text-xs font-medium">
                        <ChevronRight className="w-3 h-3 text-muted" />
                        {urgency.label}
                      </span>
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href={`/cotizar?tipo=${encodeURIComponent(projectType?.label ?? '')}`}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
                    >
                      Solicitar cotización exacta
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={resetAll}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-black/[0.10] text-ink text-sm font-medium hover:border-black/20 hover:bg-black/[0.03] transition-all duration-200"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Recalcular estimado
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <p className="mt-8 text-xs text-muted leading-relaxed max-w-sm mx-auto">
                    Este estimado contempla una primera versión profesional con descubrimiento,
                    UI/UX, desarrollo, pruebas y despliegue. El costo real depende del alcance,
                    integraciones, plataforma, seguridad y operación esperada.
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}

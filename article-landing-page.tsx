"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Upload,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  FileText,
  Search,
  TrendingUp,
  Star,
  Quote,
  Shield,
  Clock,
  Building2,
  Users,
  Award,
  BarChart3,
  Zap,
  Target,
} from "lucide-react"

export default function ArticleLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    volume: "",
    file: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 md:hidden shadow-2xl">
        <Button
          className="w-full bg-gradient-to-r from-[#FF853C] to-[#FF6B35] hover:from-[#e6743a] hover:to-[#e55a2b] text-white rounded-xl font-semibold py-3 shadow-lg"
          onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Free Statement Review
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-slate-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-200">
              <Zap className="h-4 w-4" />
              Hidden Profit Leak Alert
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              The 3 Overcharges
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mt-1">
                Silently Draining
              </span>
              <span className="block mt-1">Your Profit Margin</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              You work hard for every dollar of revenue. But every month, hidden fees are quietly stealing your profits.
              Here's how to stop the bleeding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-gradient-to-r from-[#FF853C] to-[#FF6B35] hover:from-[#e6743a] hover:to-[#e55a2b] text-white px-8 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hidden md:inline-flex"
                onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Statement Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>2-minute analysis • No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Introduction */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg leading-relaxed">
                You work hard for every dollar of revenue. But every month, a silent partner takes a cut of your profit
                before you ever see it: your credit card processor. It often feels like a black box expense that just
                keeps going up.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-800">The Good News</span>
                  </div>
                  <p className="text-green-700">You're not imagining it.</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-2xl border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-red-800">The Bad News</span>
                  </div>
                  <p className="text-red-700">It's probably worse than you think.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-400 shadow-sm">
                <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                  Your processing bill is likely filled with hidden overcharges designed to be confusing. Here are the
                  three most common culprits that are silently draining your profit margin right now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Overcharges */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">The 3 Profit Killers</h2>
            <p className="text-gray-600">Each one is costing you thousands every year</p>
          </div>

          <div className="space-y-10">
            {/* Overcharge 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="lg:grid lg:grid-cols-3">
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                          <AlertTriangle className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-red-600">1</span>
                        </div>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                          <Target className="h-3 w-3" />
                          Penalty Fees
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">The Penalty Fee</h3>
                        <p className="text-sm text-red-600 font-semibold">Also known as "Downgrades"</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-bold text-gray-900 mb-2">What it is:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Your processor penalizes you with a much higher rate when a transaction doesn't meet their
                          strict, complex rules.
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-bold text-gray-900 mb-2">Why it happens:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          It could be anything from how the card was entered (keyed-in vs. swiped) to a delay in
                          settling the day's batch. You are being penalized for not following a rule you probably didn't
                          even know existed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 bg-gradient-to-br from-red-50 via-red-50 to-orange-50 p-6 lg:p-8 flex items-center border-l border-red-100">
                    <div className="w-full text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <BarChart3 className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-red-800 mb-2">💸 Profit Impact</h4>
                      </div>
                      <p className="text-sm text-red-700 font-medium leading-relaxed">
                        This is a direct hit to your margin on that sale. A transaction you thought was profitable can
                        instantly become a low-margin one, simply because of a small technicality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overcharge 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="lg:grid lg:grid-cols-3">
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                          <DollarSign className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-yellow-600">2</span>
                        </div>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                          <Target className="h-3 w-3" />
                          Hidden Markup
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">The Hidden Markup</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-bold text-gray-900 mb-2">What it is:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Your processor takes the real, wholesale cost of a transaction (the "interchange fee" from
                          Visa/MC) and adds their own markup on top of it before passing the bill to you.
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-bold text-gray-900 mb-2">Why it happens:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          They disguise this markup within confusing pricing tiers (like "Qualified" or "Non-Qualified")
                          to hide their true profit. It's like a contractor giving you a single bill for "materials"
                          without showing you what they paid versus their markup.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 bg-gradient-to-br from-yellow-50 via-yellow-50 to-orange-50 p-6 lg:p-8 flex items-center border-l border-yellow-100">
                    <div className="w-full text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <BarChart3 className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-yellow-800 mb-2">💸 Profit Impact</h4>
                      </div>
                      <p className="text-sm text-yellow-700 font-medium leading-relaxed">
                        You're paying a fee on top of a fee. This is pure, direct profit for your processor, taken
                        straight from your bottom line.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overcharge 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="lg:grid lg:grid-cols-3">
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">3</span>
                        </div>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                          <Target className="h-3 w-3" />
                          Junk Fees
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">The "Junk Drawer" Fees</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-bold text-gray-900 mb-2">What it is:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          A collection of small, confusingly named fees that seem insignificant on their own, but add up
                          to a major cost.
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-bold text-gray-900 mb-2">Why it happens:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          These are often monthly or annual charges with official-sounding names like "PCI Compliance
                          Fee," "Regulatory Fee," or "Statement Fee." While some are legitimate, many are inflated or
                          entirely fabricated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 bg-gradient-to-br from-purple-50 via-purple-50 to-indigo-50 p-6 lg:p-8 flex items-center border-l border-purple-100">
                    <div className="w-full text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <BarChart3 className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-purple-800 mb-2">💸 Profit Impact</h4>
                      </div>
                      <p className="text-sm text-purple-700 font-medium leading-relaxed">
                        This is death by a thousand cuts. Each small fee is a tiny, individual leak in your profit
                        margin. Together, they create a flood that can cost you thousands per year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Your Profit Is Leaking. It's Time to Fix It.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="leading-relaxed">
                These fees are designed to be confusing. It is not your fault that they are hard to find. But now that
                you know where the biggest leaks are, you can take the first step toward plugging them.
              </p>
              <p className="font-semibold text-gray-900 bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-2xl border border-orange-200">
                Every dollar you recover from these overcharges is a dollar of pure profit that goes back into your
                business—where it belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quote Block */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <Quote className="h-12 w-12 text-orange-400 mb-6 opacity-80" />
              <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
                "Every dollar you recover is pure profit — no changes, no disruption."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Guaranteed Results</p>
                  <p className="text-sm">Or you pay nothing</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-orange-400 mb-1">$2.3M+</div>
                    <div className="text-white font-semibold text-sm">Total Recovered</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">2,000+</div>
                      <div className="text-gray-300 text-xs">Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">15-30%</div>
                      <div className="text-gray-300 text-xs">Avg Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our proven 3-step process has helped over 2,000 businesses recover millions in hidden fees
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Upload,
                step: "Step 1",
                title: "Upload Your Statement",
                description:
                  "Send us your latest processing statement for analysis. Our secure system protects your data with bank-level encryption.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200",
                badge: "2 minutes",
                badgeIcon: Clock,
              },
              {
                icon: Search,
                step: "Step 2",
                title: "We Audit Your Setup",
                description:
                  "Our experts identify hidden overcharges, excessive markup, and junk fees using proprietary analysis tools.",
                color: "from-purple-500 to-indigo-500",
                bgColor: "from-purple-50 to-indigo-50",
                borderColor: "border-purple-200",
                badge: "Confidential",
                badgeIcon: Shield,
              },
              {
                icon: TrendingUp,
                step: "Step 3",
                title: "You Recover 10–30%",
                description:
                  "Recover thousands in overcharges without switching processors. We handle all negotiations with your current provider.",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
                borderColor: "border-green-200",
                badge: "No disruption",
                badgeIcon: CheckCircle,
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-6 border ${step.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-white rounded-full px-2 py-1 shadow-md">
                      <span className="text-xs font-bold text-gray-600">{index + 1}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{step.step}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-white/50">
                    <step.badgeIcon className="h-3 w-3" />
                    {step.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Real results from real businesses across industries</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-3xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  $74,000 Recovered
                </div>
              </div>
              <blockquote className="text-lg text-gray-800 font-medium mb-4 leading-relaxed">
                "Verisave found $74K we didn't even know we were overpaying. No disruption to our business at all."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <cite className="text-gray-900 font-bold not-italic">Sarah Chen</cite>
                  <p className="text-gray-600 text-sm">CFO, Multi-Location Retailer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  $28,000 Recovered
                </div>
              </div>
              <blockquote className="text-lg text-gray-800 font-medium mb-4 leading-relaxed">
                "We recovered $28K in the first year alone. Pure profit that went straight to our bottom line."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <cite className="text-gray-900 font-bold not-italic">Marcus Rodriguez</cite>
                  <p className="text-gray-600 text-sm">Owner, Restaurant Chain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section
        id="final-cta"
        className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-16 mb-20 md:mb-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Want to See What You're Owed?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Upload your latest statement. We'll find the savings — no processor switch required.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Shield, label: "Bank-Level Security", color: "text-green-400" },
                  { icon: Clock, label: "5-Minute Review", color: "text-blue-400" },
                  { icon: CheckCircle, label: "No Commitment", color: "text-orange-400" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className={`h-6 w-6 ${item.color} mx-auto mb-1`} />
                    <div className="text-xs text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold text-xs uppercase tracking-wide">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 rounded-xl border-gray-300 focus:border-[#FF853C] focus:ring-[#FF853C] py-2"
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-semibold text-xs uppercase tracking-wide">
                        Business Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 rounded-xl border-gray-300 focus:border-[#FF853C] focus:ring-[#FF853C] py-2"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="volume" className="text-gray-700 font-semibold text-xs uppercase tracking-wide">
                      Monthly Processing Volume
                    </Label>
                    <Input
                      id="volume"
                      name="volume"
                      type="text"
                      placeholder="e.g., $50,000"
                      value={formData.volume}
                      onChange={handleInputChange}
                      className="mt-1 rounded-xl border-gray-300 focus:border-[#FF853C] focus:ring-[#FF853C] py-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="file" className="text-gray-700 font-semibold text-xs uppercase tracking-wide">
                      Upload Processing Statement
                    </Label>
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="mt-1 rounded-xl border-gray-300 focus:border-[#FF853C] focus:ring-[#FF853C] py-2 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-gradient-to-r file:from-[#FF853C] file:to-[#FF6B35] file:text-white hover:file:from-[#e6743a] hover:file:to-[#e55a2b] file:transition-all file:duration-200"
                    />
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      PDF, JPG, or PNG • Max 10MB • Secure upload
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF853C] to-[#FF6B35] hover:from-[#e6743a] hover:to-[#e55a2b] text-white py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get My Free Statement Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    🔒 Your information is secure and confidential. We never share your data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

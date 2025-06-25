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
  Shield,
  Clock,
  Building2,
  Users,
  Award,
  Zap,
  Target,
  Eye,
  BarChart3,
  Calculator,
  CreditCard,
  PieChart,
  TrendingDown,
  AlertCircle,
  Lock,
  Sparkles,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  volume: string
  file: File | null
}

const ArticleLandingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    volume: "",
    file: null,
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Verisave</span>
              <span className="ml-2 text-sm text-gray-500 hidden sm:inline">Financial Recovery</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>2,000+ businesses served</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })}
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Free Analysis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <Zap className="h-4 w-4" />
              <span>PROFIT LEAK ALERT</span>
              <AlertCircle className="h-4 w-4" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The 3 Hidden Fees{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Silently Draining
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-orange-200 rounded-full opacity-30"></div>
              </span>{" "}
              Your Profit Margin
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every month, credit card processing overcharges are quietly stealing{" "}
              <span className="font-semibold text-gray-900">thousands from your bottom line</span>. Here's how to
              identify and recover them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Eye className="mr-2 h-5 w-5" />
                Get Free Statement Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>2-minute analysis • No commitment required</span>
              </div>
            </div>

            {/* Enhanced Social Proof */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { value: "$2.3M+", label: "Total Recovered", icon: DollarSign, color: "from-green-500 to-emerald-600" },
                { value: "2,000+", label: "Businesses Helped", icon: Building2, color: "from-blue-500 to-cyan-600" },
                { value: "15-30%", label: "Average Savings", icon: TrendingUp, color: "from-purple-500 to-indigo-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-500" />
              <span>BBB A+ Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-purple-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No Upfront Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hidden Truth About Processing Costs</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  You work hard for every dollar of revenue. But every month, a silent partner takes a cut of your
                  profit before you ever see it:{" "}
                  <span className="font-semibold text-gray-900">your credit card processor</span>.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-green-800">The Good News</span>
                    </div>
                    <p className="text-gray-700">You're not imagining it. These fees are real and recoverable.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <span className="font-semibold text-red-800">The Bad News</span>
                    </div>
                    <p className="text-gray-700">It's probably worse than you think.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-2xl p-8 my-12 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">The Reality Check</h3>
                <p className="text-lg text-amber-800 leading-relaxed">
                  Your processing bill is likely filled with <span className="font-semibold">hidden overcharges</span>{" "}
                  designed to be confusing. Here are the three most common culprits silently draining your profit margin
                  right now.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Overcharges */}
        <div className="space-y-12 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The 3 <span className="text-red-600">Profit Killers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each one is costing you thousands every year — and they're designed to be invisible
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Overcharge 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-white border-2 border-red-100 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-red-200">
                    <span className="text-sm font-bold text-red-600">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Penalty Fees
                    </span>
                    <Target className="h-4 w-4 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The Penalty Fee</h3>
                  <p className="text-lg text-red-600 font-semibold">Also known as "Downgrades"</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Eye className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900">What it is</h4>
                  </div>
                  <p className="text-blue-800 leading-relaxed">
                    Your processor penalizes you with a much higher rate when a transaction doesn't meet their strict,
                    complex rules.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Search className="h-4 w-4 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-purple-900">Why it happens</h4>
                  </div>
                  <p className="text-purple-800 leading-relaxed">
                    Could be anything from how the card was entered to a delay in settling. You're penalized for rules
                    you didn't know existed.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    </div>
                    <h4 className="font-bold text-red-900">Profit Impact</h4>
                  </div>
                  <p className="text-red-800 leading-relaxed">
                    Direct hit to your margin. A profitable transaction can instantly become low-margin due to a small
                    technicality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overcharge 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-white border-2 border-yellow-100 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-yellow-200">
                    <span className="text-sm font-bold text-yellow-600">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Hidden Markup
                    </span>
                    <PieChart className="h-4 w-4 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The Hidden Markup</h3>
                  <p className="text-lg text-yellow-600 font-semibold">Disguised as "Qualified Rates"</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calculator className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900">What it is</h4>
                  </div>
                  <p className="text-blue-800 leading-relaxed">
                    Your processor takes the real wholesale cost (interchange fee) and adds their own markup before
                    billing you.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-purple-900">Why it happens</h4>
                  </div>
                  <p className="text-purple-800 leading-relaxed">
                    They disguise markup in confusing tiers like "Qualified" vs "Non-Qualified" to hide their true
                    profit.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-yellow-900">Profit Impact</h4>
                  </div>
                  <p className="text-yellow-800 leading-relaxed">
                    You're paying a fee on top of a fee. Pure profit for your processor, taken straight from your bottom
                    line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overcharge 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-white border-2 border-purple-100 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-purple-200">
                    <span className="text-sm font-bold text-purple-600">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Junk Fees
                    </span>
                    <Sparkles className="h-4 w-4 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The "Junk Drawer" Fees</h3>
                  <p className="text-lg text-purple-600 font-semibold">Death by a thousand cuts</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900">What it is</h4>
                  </div>
                  <p className="text-blue-800 leading-relaxed">
                    Small, confusingly named fees that seem insignificant alone, but add up to major costs.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-purple-900">Why it happens</h4>
                  </div>
                  <p className="text-purple-800 leading-relaxed">
                    Official-sounding names like "PCI Fee" or "Regulatory Fee." Many are inflated or entirely
                    fabricated.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-purple-900">Profit Impact</h4>
                  </div>
                  <p className="text-purple-800 leading-relaxed">
                    Each small fee is a tiny leak. Together, they create a flood costing thousands per year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 mb-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Your Profit Is Leaking. It's Time to Fix It.</h2>
                <p className="text-blue-100">Every recovered dollar is pure profit</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg leading-relaxed mb-6 text-blue-100">
                  These fees are designed to be confusing. It's not your fault they're hard to find. But now that you
                  know where the biggest leaks are, you can take action.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-lg font-semibold">
                    Every dollar you recover goes straight to your bottom line—where it belongs.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Average Recovery", value: "15-30%", icon: TrendingUp },
                  { label: "Time to Results", value: "24 hours", icon: Clock },
                  { label: "Success Rate", value: "94%", icon: Target },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 3-step process has helped over 2,000 businesses recover millions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Upload,
                step: "01",
                title: "Upload Your Statement",
                description:
                  "Send us your latest processing statement for analysis. Our secure system protects your data with bank-level encryption.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: Search,
                step: "02",
                title: "We Audit Your Setup",
                description:
                  "Our experts identify hidden overcharges, excessive markup, and junk fees using proprietary analysis tools.",
                color: "from-purple-500 to-indigo-500",
                bgColor: "from-purple-50 to-indigo-50",
              },
              {
                icon: TrendingUp,
                step: "03",
                title: "You Recover 10–30%",
                description:
                  "Recover thousands in overcharges without switching processors. We handle all negotiations with your current provider.",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
            ].map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div
                    className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-300`}
                  >
                    <step.icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-100">
                    <span className="text-lg font-bold text-gray-700">{step.step}</span>
                  </div>
                </div>

                <div
                  className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-8 h-full border border-white/50 shadow-lg`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{step.description}</p>

                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
                    <Shield className="h-4 w-4 text-green-500" />
                    Secure & Confidential
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from <span className="text-green-600">Real Businesses</span>
            </h2>
            <p className="text-xl text-gray-600">
              See what other business owners discovered about their processing costs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-green-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    $74,000 RECOVERED
                  </div>
                </div>

                <blockquote className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                  "Verisave found $74K we didn't even know we were overpaying. No disruption to our business at all."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <cite className="text-gray-900 font-bold text-lg not-italic">Sarah Chen</cite>
                    <p className="text-gray-600 font-medium">CFO, Multi-Location Retailer</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">Verified Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-blue-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    $28,000 RECOVERED
                  </div>
                </div>

                <blockquote className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                  "We recovered $28K in the first year alone. Pure profit that went straight to our bottom line."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <cite className="text-gray-900 font-bold text-lg not-italic">Marcus Rodriguez</cite>
                    <p className="text-gray-600 font-medium">Owner, Restaurant Chain</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-blue-600 font-medium">Verified Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-form"
        className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to See What{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  You're Owed?
                </span>
              </h2>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Upload your latest statement. We'll find the savings — no processor switch required.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, label: "Bank-Level Security", color: "text-green-400" },
                  { icon: Clock, label: "24-Hour Analysis", color: "text-blue-400" },
                  { icon: CheckCircle, label: "No Commitment", color: "text-orange-400" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="text-sm text-blue-200 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">100% Risk-Free Guarantee</p>
                    <p className="text-blue-200">If we don't find savings, you pay nothing</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-4 border-white">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Analysis</h3>
                    <p className="text-gray-600">Join 2,000+ businesses that recovered their profits</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-semibold text-sm">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 text-lg"
                          placeholder="John Smith"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-semibold text-sm">
                          Business Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 text-lg"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="volume" className="text-gray-700 font-semibold text-sm">
                        Monthly Processing Volume
                      </Label>
                      <Input
                        id="volume"
                        name="volume"
                        type="text"
                        placeholder="e.g., $50,000"
                        value={formData.volume}
                        onChange={handleInputChange}
                        className="mt-2 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 text-lg"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="file" className="text-gray-700 font-semibold text-sm">
                        Upload Processing Statement
                      </Label>
                      <Input
                        id="file"
                        name="file"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="mt-2 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 text-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        PDF, JPG, or PNG • Max 10MB • Bank-level encryption
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <Eye className="mr-3 h-6 w-6" />
                      Get My Free Statement Review
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>

                    <p className="text-center text-xs text-gray-500">
                      🔒 Your information is secure and confidential. We never share your data.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-blue-200 p-4 md:hidden shadow-2xl">
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold py-4 text-lg shadow-xl"
          onClick={() => document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Eye className="mr-2 h-5 w-5" />
          Get Free Review
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default ArticleLandingPage

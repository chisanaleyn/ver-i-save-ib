import type React from "react"
// Global type definitions for the application

export interface OverchargeData {
  icon: React.ReactNode
  title: string
  description: string
  whyItHappens: string
  profitImpact: string
  number: number
}

export interface TestimonialData {
  quote: string
  author: string
  company: string
  savings: string
  rating: number
}

export interface StepData {
  icon: React.ReactNode
  title: string
  description: string
  step: number
}

export interface FormSubmissionData {
  name: string
  email: string
  volume: string
  file: File | null
}

export interface TrustIndicator {
  icon: React.ReactNode
  text: string
  color: string
}

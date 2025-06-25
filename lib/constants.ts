// Application constants and configuration

export const COMPANY_INFO = {
  name: "Verisave",
  tagline: "Not a processor. Not a consultant. Just pure recovered margin.",
  phone: "1-800-VERISAVE",
  email: "hello@verisave.com",
} as const

export const STATS = {
  totalRecovered: "$2.3M+",
  businessesHelped: "2,000+",
  averageRecovery: "23%",
  analysisTime: "24hrs",
} as const

export const FORM_CONFIG = {
  acceptedFileTypes: ".pdf,.jpg,.jpeg,.png",
  maxFileSize: 10 * 1024 * 1024, // 10MB
  requiredFields: ["name", "email", "volume"] as const,
} as const

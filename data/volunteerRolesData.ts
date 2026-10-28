export interface VolunteerScope {
  category: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  activities: string[];
}

export const volunteerScopesData: VolunteerScope[] = [
  {
    category: "Undergraduate Activities",
    subtitle: "Entry-level community engagement and clinic support",
    badge: "Undergraduate",
    description:
      "Nota bene: all undergraduates, regardless of level of training, are limited in scope to these activities.",
    activities: [
      "Building rapport with clients",
      "Hand out hygiene items and supplies",
    ],
  },
  {
    category: "Interdisciplinary Graduate Students",
    subtitle: "Core clinical and support scope across all health disciplines",
    badge: "All Graduate Disciplines",
    activities: [
      "Building rapport",
      "Hand out hygiene items and supplies",
      "Hand out over-the-counter medications",
      "Motivational interviewing",
      "Provide service referrals and resource navigation",
      "General health education",
      "Specific health information or advice about known diagnosis",
      "Vital signs",
      "Immunizations (if site appropriate)",
    ],
  },
  {
    category: "Medicine",
    subtitle: "MD / DO / MEDEX clinical scope",
    badge: "Medicine",
    activities: [
      "Diagnosing of health conditions",
      "Prescribing medications",
      "Physical exam: palpation of abdomen, auscultation of heart and lung sounds, oral exam, eye exam (including basic vision testing), ear exam, nose exam, cranial nerve testing and gross sensation and reflex testing",
    ],
  },
  {
    category: "Nursing",
    subtitle: "BSN / DNP targeted nursing interventions",
    badge: "Nursing",
    activities: [
      "TED hose education and application",
      "Foot assessment including lesions, vascular status, sensorimotor status",
      "Foot care including nail trimming, paring of corns and calluses, ingrown toenail management",
      "Wound care",
      "Spot blood glucose or HA1C testing",
    ],
  },
  {
    category: "Rehabilitation Medicine",
    subtitle: "Physical Therapy (PT), Occupational Therapy (OT), and P&O",
    badge: "PT / OT / P&O",
    activities: [
      "Fit and train to safely use assistive devices such as crutches",
      "Sports taping, limb wrapping, modalities (ice, heat, e-stim, US application)",
      "Fit for braces, orthotics and prosthetics and train on use",
      "Fix and adjust equipment that client owns",
      "Positioning and bolstering to prevent skin breakdown",
      "Skin/wound care",
      "Joint manipulations and soft tissue massage",
      "Evaluating gait/walk, posture, joint range of motion, muslce strength, performance, and neurological exams",
      "Exercise and stretching prescription",
    ],
  },
  {
    category: "Pharmacy",
    subtitle: "PharmD clinical screenings and consultations",
    badge: "Pharmacy",
    activities: [
      "Lipid panel testing",
      "Medication reviews and educational sessions",
    ],
  },
  {
    category: "Social Work",
    subtitle: "MSW resource navigation and systemic support",
    badge: "Social Work",
    activities: [
      "Resource referral and navigation",
      "Resource education",
    ],
  },
];
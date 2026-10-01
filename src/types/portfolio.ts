/**
 * Central type definitions for portfolio content.
 * Every field here is sourced from the CV (or, where noted, from
 * certificates/photos supplied directly) — see src/data/portfolio.ts
 * for the actual content and provenance notes.
 */

export interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface EducationEntry {
  id: string;
  school: string;
  credential: string;
  dateRange: string;
  gpa?: string;
  coursework?: string[];
  emphasis?: boolean;
}

export interface OrganizationRole {
  id: string;
  title: string;
  org: string;
  dateRange: string;
  achievements: string[];
  photos?: MediaItem[];
  certificate?: MediaItem;
}

export interface AdditionalInvolvement {
  id: string;
  event: string;
  role: string;
  recognition?: { label: string; image: MediaItem };
  photos: MediaItem[];
}

export type Severity = "high" | "medium" | "low";

export interface CaseStudySection {
  overview: string;
  role: string;
  methodology: string[];
  tools: string[];
  findings: string[];
  impact: string;
  mitigation: string;
  takeaway: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  codename?: string;
  summary: string;
  tools: string[];
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  severityBreakdown?: { severity: Severity; count: number }[];
  quote?: string;
  gallery?: MediaItem[];
  documentImage?: MediaItem;
  link?: { label: string; url: string };
  conservative?: boolean;
  caseStudy: CaseStudySection;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certificateImage?: MediaItem;
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  linkedinHandle: string;
  location: string;
}

export interface Profile {
  fullName: string;
  displayName: string;
  positioning: string;
  summary: string;
  university: string;
  program: string;
  gpa: string;
  contact: ContactInfo;
}

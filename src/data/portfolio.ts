import certCisco from "@/assets/images/cert-cisco-cybersecurity.webp";
import certHiletMentor from "@/assets/images/cert-hilet-mentor.webp";
import certLdkcpChairman from "@/assets/images/cert-ldkcp-chairman.webp";
import certTechnoCoordinator from "@/assets/images/cert-techno-coordinator.webp";
import photoCodeavourExperienceZone from "@/assets/images/photo-codeavour-experience-zone.webp";
import photoCodeavourJakartaCommittee from "@/assets/images/photo-codeavour-jakarta-committee.webp";
import photoHiletCommittee from "@/assets/images/photo-hilet-committee.webp";
import photoIcpcCommittee from "@/assets/images/photo-icpc-committee.webp";
import photoLdkcpEvent from "@/assets/images/photo-ldkcp-event.webp";
import photoSesventCommittee from "@/assets/images/photo-sesvent-committee.webp";
import photoTechnoCommittee from "@/assets/images/photo-techno-committee.webp";
import profilePortrait from "@/assets/images/profile-portrait.webp";
import projectDigitwoDashboard from "@/assets/images/project-digitwo-dashboard.webp";
import projectDigitwoLanding from "@/assets/images/project-digitwo-landing.webp";
import projectDigitwoLearning from "@/assets/images/project-digitwo-learning.webp";
import projectDigitwoPractice from "@/assets/images/project-digitwo-practice.webp";
import projectThreatblueprintCover from "@/assets/images/project-threatblueprint-cover.webp";
import recognitionSesvent from "@/assets/images/recognition-sesvent-bestnoble.webp";
import type {
  AdditionalInvolvement,
  Certification,
  EducationEntry,
  LanguageEntry,
  OrganizationRole,
  Profile,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const profile: Profile = {
  fullName: "Margareta Nadya Roselani Bramanjaya",
  displayName: "Margareta Nadya",
  positioning: "Cyber Security Student · Penetration Testing · Threat Modeling · Security Engineering",
  summary:
    "Hands-on practice with offensive security techniques — network, web, and mobile penetration testing, including static and dynamic analysis with tools like JADX — built through coursework and CTF challenges. Complemented by exposure to Blue Team fundamentals such as log analysis, digital forensics, and incident investigation, and grounded in cross-team coordination experience from leading university organizations. Eager to contribute as a SOC Analyst.",
  university: "BINUS University",
  program: "Cyber Security",
  gpa: "3.51 / 4.0",
  contact: {
    email: "margareta.nadya@gmail.com",
    phone: "+62 812-9699-3400",
    linkedin: "https://linkedin.com/in/margareta-nadya",
    linkedinHandle: "margareta-nadya",
    location: "Bekasi, Jawa Barat",
  },
};

export const profilePhoto = profilePortrait;

export const education: EducationEntry[] = [
  {
    id: "binus",
    school: "BINUS University",
    credential: "Bachelor, Cyber Security",
    dateRange: "August 2024 – Present",
    gpa: "Cumulative GPA: 3.51 / 4.0",
    coursework: [
      "Computer Security Fundamental",
      "Network Penetration Testing",
      "Software Security",
      "Server and Network Administration",
      "Computer Forensic",
      "Secure Programming",
    ],
    emphasis: true,
  },
  {
    id: "santa-ursula",
    school: "SMA Santa Ursula",
    credential: "High School, Natural Sciences",
    dateRange: "July 2021 – June 2024",
  },
];

export const organizationRoles: OrganizationRole[] = [
  {
    id: "ldkcp-chairperson",
    title: "Chairperson of LDK-CP HIMTI 2026",
    org: "HIMTI BINUS University",
    dateRange: "April 2026 – June 2026",
    achievements: [
      "Led end-to-end planning of LDK-CP HIMTI 2026, delivering the main event and a follow-up session for 150+ participants.",
      "Coordinated 40 committee members across 8 BINUS regions, overseeing logistics, budgeting, and administration.",
    ],
    certificate: {
      src: certLdkcpChairman,
      alt: "Certificate of Appreciation naming Margareta Nadya Roselani Bramanjaya as Chairman of LDK-CP HIMTI 2026",
      caption: "Certificate of Appreciation — Chairman, LDK-CP 2026",
    },
    photos: [
      {
        src: photoLdkcpEvent,
        alt: "Margareta with two teammates on stage holding recognition plaques at an LDK-CP HIMTI event",
        caption: "LDK-CP HIMTI 2026",
      },
    ],
  },
  {
    id: "pubmar-manager",
    title: "Manager of the Publication and Marketing Division | Commission 2",
    org: "HIMTI BINUS University",
    dateRange: "February 2026 – November 2026",
    achievements: [
      "Managed 50+ team members across 4 Greater Jakarta regions, overseeing campaign execution and brand consistency.",
      "Secured 5+ media partners and oversaw legally binding MoAs, maintaining stakeholder trust and organizational growth.",
      "Directed and produced 20+ content pieces using Figma and Canva, driving 500,000+ social media reach.",
    ],
  },
  {
    id: "hilet-mentor",
    title: "Mentor of HIMTI Leadership Training (HILET) 2026",
    org: "HIMTI BINUS University",
    dateRange: "November 2025 – December 2025",
    achievements: [
      "Onboarded newly recruited publication and marketing members via a simulated event, guiding branding, marketing, and content workflows.",
    ],
    certificate: {
      src: certHiletMentor,
      alt: "E-Certificate naming Nadya Roselani Bramanjaya as Staff of Mentor Division in HILET 2026: Interstellar Leadership Mission",
      caption: "E-Certificate — Staff of Mentor Division, HILET 2026",
    },
    photos: [
      {
        src: photoHiletCommittee,
        alt: "Large group photo of the HILET26 Interstellar Leadership Mission committee posing indoors with the event banner",
        caption: "HILET 2026 committee",
      },
    ],
  },
  {
    id: "techno-coordinator",
    title: "Coordinator of Publication and Marketing Division TECHNO 2025",
    org: "HIMTI BINUS University",
    dateRange: "March 2025 – September 2025",
    achievements: [
      "Led publication and marketing across 8 SOCS regions, attracting 500+ participants.",
      "Generated 100,000+ engagements across multiple social media platforms.",
      "Led recruitment initiatives that attracted 1,300+ new students to HIMTI Activist 2026/2027.",
      "Developed promotional materials, branding assets, and social media content, ensuring a consistent brand experience across campaigns.",
    ],
    certificate: {
      src: certTechnoCoordinator,
      alt: "Certificate of Appreciation naming Margareta Nadya Roselani Bramanjaya as Coordinator of Buram (Publication and Marketing) Division in TECHNO 2025",
      caption: "Certificate of Appreciation — TECHNO 2025",
    },
    photos: [
      {
        src: photoTechnoCommittee,
        alt: "Very large group photo of the TECHNO 2025 organizing committee in an auditorium",
        caption: "TECHNO 2025 committee",
      },
    ],
  },
];

/**
 * Community and event involvement beyond the CV's named organizational roles.
 * Deliberately minimal: photographic evidence only, no invented titles,
 * responsibilities, or dates, per direct instruction.
 */
export const additionalInvolvement: AdditionalInvolvement[] = [
  {
    id: "sesvent-2025",
    event: "SESVENT 2025",
    role: "Organizing Committee",
    recognition: {
      label: "2nd Place — Best Noble, House Highspire",
      image: {
        src: recognitionSesvent,
        alt: "Recognition slide reading Best Noble 2nd, Second Place, Nadya Margareta R. B., House Highspire",
        caption: "Best Noble — 2nd Place, House Highspire (SESVENT 2025)",
      },
    },
    photos: [
      {
        src: photoSesventCommittee,
        alt: "Large group photo of the SESVENT 2025 organizing committee posing outdoors",
        caption: "SESVENT 2025 organizing committee",
      },
    ],
  },
  {
    id: "icpc-asia-jakarta",
    event: "ICPC Asia Jakarta 2025",
    role: "Organizing Committee",
    photos: [
      {
        src: photoIcpcCommittee,
        alt: "Group photo of the ICPC Asia Jakarta 2025 organizing committee in a university lobby",
        caption: "ICPC Asia Jakarta 2025 organizing committee",
      },
    ],
  },
  {
    id: "codeavour-7",
    event: "Codeavour 7.0",
    role: "Experience Zone Team & Jakarta Committee",
    photos: [
      {
        src: photoCodeavourExperienceZone,
        alt: "Small group photo of the Codeavour 7.0 Experience Zone team",
        caption: "Experience Zone team",
      },
      {
        src: photoCodeavourJakartaCommittee,
        alt: "Large group photo of the Codeavour 7.0 International Jakarta committee on stage",
        caption: "Jakarta committee, final stage",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "mobile-pentest",
    category: "Mobile Application Security",
    title: "Mobile Application Penetration Tester",
    summary:
      "Static and dynamic security analysis of a Flutter-based hospital mobile application, covering registration, login, OTP-based password reset, and patient family data management.",
    tools: ["JADX", "apktool", "ADB", "HTTP Toolkit", "Python", "CVSS v4.0", "JWT"],
    featured: true,
    metrics: [
      { label: "Confirmed vulnerabilities", value: "6" },
      { label: "Scoring standard", value: "CVSS v4.0" },
    ],
    severityBreakdown: [
      { severity: "high", count: 1 },
      { severity: "medium", count: 2 },
      { severity: "low", count: 3 },
    ],
    quote: "It's never the lock. It's the parameter.",
    caseStudy: {
      overview:
        "A Flutter-based hospital mobile application was assessed end-to-end for authentication, storage, and API security flaws — covering account registration, login, OTP-based password reset, and patient family data management — combining static decompilation with dynamic runtime and traffic analysis.",
      role: "Group project — lead on dynamic analysis, plus vulnerability scoring and report documentation.",
      methodology: [
        "Static analysis via JADX and apktool for decompilation and source review",
        "Dynamic analysis via ADB and HTTP Toolkit to observe runtime behavior and intercept traffic",
        "Vulnerability scoring using CVSS v4.0",
        "JWT claim analysis via Python scripting",
      ],
      tools: ["JADX", "apktool", "ADB", "HTTP Toolkit", "Python", "CVSS v4.0", "JWT"],
      findings: [
        "6 confirmed vulnerabilities — 1 High, 2 Medium, 3 Low",
        "Sensitive authentication data (password, OTP, Firebase token) exposed via URL query parameters",
        "Bearer tokens stored in plaintext in local storage",
      ],
      impact:
        "The exposed credentials and insecure token storage were rated across the High–Low range using CVSS v4.0, reflecting their relative risk to user accounts and sensitive medical data.",
      mitigation:
        "Root cause, impact, and remediation guidance for each finding were documented in a formal penetration testing report.",
      takeaway:
        "Structured vulnerability scoring (CVSS v4.0) alongside hands-on static and dynamic analysis turned technical findings into a report suitable for stakeholder review.",
    },
  },
  {
    id: "threat-modeling",
    category: "Threat Modeling & Risk Analysis",
    title: "Threat Modeling & Risk Analysis",
    codename: "ThreatBlueprint",
    summary:
      "A comprehensive threat model of Discord's system architecture — mapping trust boundaries and critical assets across authentication, payment, and bot authorization flows.",
    tools: ["STRIDE", "MITRE ATT&CK", "OWASP Top 10"],
    metrics: [
      { label: "Trust boundaries mapped", value: "4" },
      { label: "Threats referenced to MITRE / OWASP", value: "6+" },
    ],
    quote: "Not every leak needs a hacker.",
    documentImage: {
      src: projectThreatblueprintCover,
      alt: "Cover page of the Comprehensive Threat Modeling & Risk Analysis report for Discord, titled ThreatBlueprint",
      caption: "ThreatBlueprint — report cover",
    },
    caseStudy: {
      overview:
        "A structured threat model of Discord's system architecture, identifying trust boundaries and critical assets across authentication, payment, and bot authorization flows.",
      role: "Group project — threat modeling analyst; trust-boundary analysis, STRIDE threat identification, and mitigation proposals.",
      methodology: [
        "Mapped the full system architecture and identified 4 trust boundaries between users, servers, and third-party integrations",
        "Applied the STRIDE framework across all five threat categories: Spoofing, Tampering, Information Disclosure, Denial of Service, and Elevation of Privilege",
        "Mapped identified threats to MITRE ATT&CK techniques (e.g. T1566: Phishing) and OWASP Top 10 / CWE references (e.g. CWE-307: Improper Restriction of Excessive Authentication Attempts)",
      ],
      tools: ["STRIDE", "MITRE ATT&CK", "OWASP Top 10"],
      findings: ["Insufficient rate limiting on key flows", "Username enumeration risk"],
      impact:
        "Left unaddressed, both findings could ease credential-stuffing or account-enumeration attacks at scale.",
      mitigation:
        "Proposed mitigations included role-based access control (RBAC), rate limiting, and step-up authentication for sensitive actions.",
      takeaway:
        "Applying STRIDE alongside MITRE ATT&CK and OWASP Top 10 surfaced concrete, addressable risks in a system far larger than a typical classroom exercise.",
    },
  },
  {
    id: "edtech-platform",
    category: "Full-Stack Development",
    title: "EdTech Platform Development",
    codename: "Digi+wo",
    summary:
      "A full-stack, game-like math learning platform for Indonesian elementary students (grades 1–6), built with a security-conscious backend architecture.",
    tools: ["Node.js", "Express.js", "MySQL", "Nodemailer"],
    metrics: [
      { label: "Database schema", value: "9 tables" },
      { label: "Refactored", value: "2,770 → 10 modules" },
      { label: "Topics covered", value: "30+" },
    ],
    quote: "Simple isn't the same as easy.",
    link: { label: "GitHub", url: "https://github.com/Mayhem127/DIGITWO" },
    gallery: [
      { src: projectDigitwoLanding, alt: "Digi+wo landing page: 'Learn Math the Fun Way!'", caption: "Landing page" },
      { src: projectDigitwoLearning, alt: "Digi+wo learning materials screen for Kelas 5 SD math topics", caption: "Learning materials" },
      { src: projectDigitwoPractice, alt: "Digi+wo practice game mode selection screen", caption: "Practice game" },
      { src: projectDigitwoDashboard, alt: "Digi+wo admin dashboard showing student leaderboard and performance", caption: "Admin dashboard" },
    ],
    caseStudy: {
      overview:
        "Digi+wo turns math practice for grades 1–6 into an interactive, game-like experience, engineered as the platform's full-stack developer with a security-conscious backend.",
      role: "Group project — full-stack developer; owned the core learning engine and backend security architecture.",
      methodology: [
        "Built a Fisher-Yates-based question randomizer across 30+ math topics and five interactive modes (Quiz, Drag & Drop, Fill-In, Card Match, and a Dino Jump mini-game), all server-validated to prevent answer tampering",
        "Hardened the backend with bcrypt password hashing, a 3-attempt account lockout policy, and XSS-safe sanitization across a 9-table database",
        "Refactored a 2,770-line monolithic script into 10 modular components",
        "Built an automated Nodemailer reporting pipeline sending real-time progress updates to parents",
      ],
      tools: ["Node.js", "Express.js", "MySQL", "Nodemailer"],
      findings: [
        "Black-box API testing and unit testing conducted across core flows",
        "Usability evaluated via System Usability Scale (SUS) methodology, targeting a score of ≥ 68",
      ],
      impact:
        "Server-side validation and output sanitization closed off client-side tampering and XSS vectors that the earlier monolithic script left unguarded.",
      mitigation:
        "Password hashing (bcrypt), a 3-attempt lockout policy, and token-based authentication hardened the platform against brute-force and credential-stuffing attempts.",
      takeaway:
        "Rebuilding a large monolithic script into modular, testable components made the security work — validation, sanitization, hashing — verifiable rather than incidental.",
    },
  },
  {
    id: "wastewise",
    category: "Applied Machine Learning",
    title: "WasteWise",
    summary:
      "An on-device waste classification model that identifies a waste item's category from a single photo — no manual sorting knowledge required.",
    tools: ["Python", "TensorFlow / Keras", "MobileNetV2", "TensorFlow Lite", "Kaggle API", "NumPy"],
    conservative: true,
    quote: "The model doesn't need to be perfect. It needs to know when it isn't.",
    caseStudy: {
      overview:
        "WasteWise addresses the first bottleneck in recycling — sorting — by classifying a waste item's category from a single photo, entirely on-device.",
      role: "Group project — AI/ML engineer; built the full training pipeline.",
      methodology: [
        "Pulled the Garbage Classification Dataset from Kaggle (5,000+ images) and simplified 8 raw classes into 6 usable categories",
        "Split data 80/20 train-validation and normalized all images to 224×224 RGB",
        "Applied transfer learning on a MobileNetV2 backbone pretrained on ImageNet, frozen during training",
        "Trained a lightweight classification head outputting a 6-class probability vector, then converted the final model to TensorFlow Lite for on-device, offline inference",
      ],
      tools: ["Python", "TensorFlow / Keras", "MobileNetV2", "TensorFlow Lite", "Kaggle API", "NumPy"],
      findings: [],
      impact:
        "A frozen, pretrained backbone with a lightweight custom head kept training tractable while reusing ImageNet's learned visual features.",
      mitigation: "",
      takeaway:
        "Confidence scores matter as much as raw accuracy — a model that flags its own uncertainty is more trustworthy than one that guesses wrong with confidence.",
    },
  },
];


export const skillGroups: SkillGroup[] = [
  {
    label: "Soft Skills",
    items: [
      "Leadership",
      "Project Management",
      "Strategic Planning",
      "Effective Communication",
      "Problem-Solving",
      "Collaboration",
      "Critical Thinking",
      "Execution Skills",
    ],
  },
  {
    label: "Hard Skills",
    items: ["MySQL", "C", "Network Security", "Penetration Testing", "Threat Intelligence", "HTML"],
  },
  {
    label: "Software & Tools",
    items: [
      "Burp Suite Community Edition",
      "ADB",
      "OWASP Threat Dragon",
      "Nmap",
      "Android Studio AVD",
      "Wireshark",
      "Figma",
      "Microsoft Office",
      "Visual Studio Code",
      "GitHub",
      "VMware",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    date: "01 July 2026",
    certificateImage: {
      src: certCisco,
      alt: "CISCO Networking Academy Certificate of Course Completion for Introduction to Cybersecurity",
      caption: "CISCO Networking Academy — Certificate of Course Completion",
    },
  },
  {
    id: "cambridge-fce",
    title: "Cambridge English: B2 First (FCE)",
    issuer: "Cambridge University Press & Assessment",
    date: "01 May 2023",
  },
];

export const languages: LanguageEntry[] = [
  { language: "English", level: "Proficient" },
  { language: "Indonesian", level: "Native" },
];

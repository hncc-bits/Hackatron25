export const trackConfig = {
  SponsorTrack: [
    {
      id: "1",
      teamName: "Team RISC",
      logo: "/images/images/second_icon.png",
      data: ["₹10,000 Prize Money & Schwags"],
      link: "https://devfolio.co/projects/trust-drive-16cc",
    },
    {
      id: "2",
      teamName: "Team Prometheus",
      logo: "/images/images/first_icon.png",
      data: ["₹20,000 Prize Money & Schwags"],

      link: "https://devfolio.co/projects/qplay-f4f5",
    },
    {
      id: "3",
      teamName: "Team Comders",
      logo: "/images/images/third_icon.png",
      data: ["₹5000 Prize Money & Schwags"],

      link: "https://devfolio.co/submissions/tubechat-0b51",
    },

    // {
    //   id: "1",
    //   logo: "/images/sponsor/Polygon_Logo-White@2x.png",
    //   data: [
    //     "₹10,000 for the best hack built on Ethereum, or",
    //     "₹15,000 for the best hack built on Ethereum + Polygon",
    //     "Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!",
    //   ],
    //   link: "https://replit.com/@devfolio/Polygon-Smart-Contract-Template?v=1#README.md",
    // },
    // {
    //   id: "2",
    //   logo: "/images/sponsor/Replit-Dark-Background.png",
    //   data: [
    //     "$50 to winning project of the hackathon (must be deployed on Replit)",
    //     "Replit schwags to 5 eligible submissions deployed on Replit.",
    //     "Eligibility for internship / full time role interviews at Replit",
    //   ],
    //   link: "https://replit.com/@devfolio/Replit-Devfolio-Hackathons?v=1#README.md",
    // },
    // {
    //   id: "3",
    //   logo: "/images/sponsor/Solana Dark.png",
    //   data: [
    //     "young gun - $USDC 100 for the best project beginners",
    //     "rising teknoking - $USDC 250 for the best project",
    //     "master glasseater - $USDC 500 for the best advanced project",
    //   ],
    //   link: "https://replit.com/@devfolio/Solana-Starter?v=1#README.md",
    // },
    // {
    //   id: "4",
    //   logo: "./images/sponsor/Filecoin Coloured White Text-1.png",
    //   data: [
    //     "₹20,000 for best use of IPFS and/or Filecoin built at Devfolio-powered community Hackathons",
    //     "Microgrants up to 5000 USD, open grants up to 50,000 USD",
    //   ],
    //   link: "https://replit.com/@devfolio/IPFSFilecoin-Template?v=1#README.md",
    // },
    // {
    //   id: "5",
    //   logo: "./images/sponsor/Postman-logo.png",
    //   data: [
    //     "Swag Kit for best use of public APIs",
    //     "Swag Kit for best postman public workspace",
    //     "Swag kit will contain 5 items",
    //   ],
    //   link: "https://hackthespace-1.devfolio.co/prizes?partner=Postman",
    // },
    // {
    //   id: "6",
    //   logo: "./images/sponsor/verbWire.svg",
    //   data: [
    //     "$5,000 in Premium API Credits, across up to 20 teams.",
    //     "The prizes will be worth up to $5,000 in value.",
    //   ],
    //   link: "https://hackthespace-1.devfolio.co/prizes?partner=Verbwire",
    // },
  ],
//   Track: [
//     {
//       id: "1",
//       logo: "/images/astroaiml.png",
//       title: "AI/ML",
//       problem: "SecurePDF - Automated PII Redaction in PDFs",
//       techStack: "Using Python-based architecture",
//       description: "With the increasing exchange of digital documents, especially PDFs, ensuring the privacy of Personally Identifiable Information (PII) has become a crucial challenge. Organizations handling sensitive documents—such as financial reports, legal contracts, and medical records—must comply with data protection regulations like GDPR, HIPAA, and CCPA. However, manually redacting PII is time-consuming and prone to human error. To address this, propose an automated solution that detects PII in PDFs, replaces it with masked values or placeholders, and generates a new sanitized document while preserving formatting.",
//       challenges: [
//         "Accurate PII Detection: Identify various PII entities such as names, phone numbers, addresses, emails, credit card numbers, and government IDs.",
//         "Text and Layout Preservation: Redact PII while maintaining the document’s original structure and formatting.",
//         "Handling Different PDF Formats: Work with scanned PDFs (OCR required) and digitally generated PDFs.",
//         "Performance and Scalability: Process large PDFs efficiently with minimal latency.",
//         "Custom Redaction Rules: Allow configurable redaction rules based on different compliance requirements.",
//         "Security and Compliance: Ensure that redacted PDFs do not leave traces of the original PII.",
//       ],
//     },
//     {
//       id: "2",
//       logo: "/images/astroweb3.png",
//       title: "Blockchain & Cyber Security",
//       problem: "Fair & Transparent Ticket Booking Platform Using Blockchain",
//       techStack: " Using Ethereum-based architecture.",
//       description: "Traditional ticket booking systems suffer from fake tickets, scalping, and lack of transparency. Fraudulent sellers often duplicate tickets and automated bots buy them in bulk, leading to unfair reselling practices and overpriced tickets. A decentralized, tamper-proof solution is needed to eliminate intermediaries and enhance ticket security.",
//       challengeDescription: "Build a blockchain-based ticketing platform that ensures fair pricing, authenticity, and secure ownership using NFTs. Your system should:",
//       challenges: [
//         "Issue Tickets as NFTs – Each ticket should be a unique, non-fungible token (NFT) on the blockchain.",
//         "Organizer-Controlled Resale Policy – Event organizers should be able to Enable/Disable the resale of tickets and can set a fixed resale price or limit price-hikes to prevent scalping.",
//         "On-Chain Validation & Transfer – Ensure event organizers & buyers can verify ticket ownership in real-time via blockchain.",
//         "Dynamic Pricing & Resale Rules – Allow secondary sales only through smart contracts to prevent price gouging.",
//       ],
//     },
//     {
//       id: "3",
//       logo: "/images/astrotech_nobg.png",
//       title: "Technology",
//       problem: "Geolocation-Based Attendance Tracking for College Students",
//       description: "Traditional attendance tracking in colleges relies on manual roll calls or ID-based scanning, leading to inefficiencies, proxy attendance, and time wastage. An automated geolocation-based attendance system can streamline this process, ensuring accurate and tamper-proof student attendance records while reducing administrative efforts.",
//       challengeDescription:"Develop an application that allows students to check in and out automatically when they enter or leave their classroom premises. The system should also support manual check-in, ensuring real-time validation. The solution must:",
//       challenges: [
//         "Prevent Proxy Attendance: Ensure students cannot spoof their location using VPNs, mock GPS apps, or other methods.",
//         "Class-Specific Attendance: Track attendance based on individual course schedules rather than just campus presence.",
//         "Real-Time Synchronization: Enable real-time updates for professors and administrators to monitor attendance status.",
//         "Data Integrity & Security: Prevent unauthorized modifications, ensuring attendance records remain tamper-proof.",
//       ],
//     },
//     {
//       id: "4",
//       logo: "/images/astrogiri_transparent.png",
//       title: "Education",
//       problem: "Alumni-Student Networking & Mentorship Platform",
//       description: "Many students from our college aspire to pursue higher education in North America. However, they often struggle with selecting the right universities, understanding course structures, and adapting to cultural differences. Without proper guidance, students rely on scattered online resources, leading to confusion and uninformed decisions. Meanwhile, alumni who have already navigated this journey possess valuable insights that could help incoming students, but there is no structured platform to connect them effectively.",
//       challengeDescription:"Develop a centralized alumni-student networking platform where students can connect with alumni for mentorship, career guidance, and university insights. The platform should allow:",
//       challenges: [
//         "User Authentication & Roles: Secure login with distinct roles for Students, Alumni, and Admin.",
//         "Profile Management: Users can create and update profiles with academic and professional details.",
//         "Mentorship & Networking: Students can find and connect with alumni for guidance with one-on-one messaging.",
//         "Find Nearby Alumni: Location-based search to identify alumni in specific regions.",
//         "University Insights: Database of universities with alumni reviews and recommendations.",
//         "Forum/Q&A Section: Open discussions on study-related queries, scholarships, applications, etc.",
//         "Events & Webinars: Notifications for career fairs, university sessions, and expert talks.",
//         "Study Roadmap: A step-by-step guide for applications, visa processes, and scholarships.",
//         "Document Templates: Sample SOPs, LORs, resumes, and visa forms for easy reference.",
//         "Articles & Blogs: Alumni share experiences, application tips, and cultural insights.",
//       ],
//     },
//     {
//       id: "5",
//       logo: "/images/astroopen.png",
//       title: "Open Innovation",
//       problem: "Open Innovation Challenge",
//       description: "Innovation in emerging technologies such as AI/ML, Blockchain, and Cybersecurity is shaping the future of digital transformation. However, real-world challenges across industries demand creative, scalable, and impactful solutions that push beyond conventional approaches.The Open Innovation track invites participants to identify a real-world problem, apply innovative technological solutions, and develop a functional prototype to demonstrate the impact of their idea.",
//     },
//     // {
//     //   id: "6",
//     //   logo: "/images/astrohealth.png",
//     //   title: "Healthcare",
//     // },
//   ],
 Track: [
  {
    statement: "SecurePDF - Automated PII Redaction in PDFs",
    description: "With the increasing exchange of digital documents, especially PDFs, ensuring the privacy of Personally Identifiable Information (PII) has become a crucial challenge. Organizations handling sensitive documents—such as financial reports, legal contracts, and medical records—must comply with data protection regulations like GDPR, HIPAA, and CCPA. However, manually redacting PII is time-consuming and prone to human error. To address this, propose an automated solution that detects PII in PDFs, replaces it with masked values or placeholders, and generates a new sanitized document while preserving formatting.",

  },
  {
    statement: "Fair & Transparent Ticket Booking Platform Using Blockchain",
    description: "Traditional ticket booking systems suffer from fake tickets, scalping, and lack of transparency. Fraudulent sellers often duplicate tickets and automated bots buy them in bulk, leading to unfair reselling practices and overpriced tickets. A decentralized, tamper-proof solution is needed to eliminate intermediaries and enhance ticket security.",

  },
  {
    statement: "Geolocation-Based Attendance Tracking for College Students",
    description: "Traditional attendance tracking in colleges relies on manual roll calls or ID-based scanning, leading to inefficiencies, proxy attendance, and time wastage. An automated geolocation-based attendance system can streamline this process, ensuring accurate and tamper-proof student attendance records while reducing administrative efforts.",

  },
  {
    statement: "Alumni-Student Networking & Mentorship Platform",
    description:"Many students from our college aspire to pursue higher education in North America. However, they often struggle with selecting the right universities, understanding course structures, and adapting to cultural differences. Without proper guidance, students rely on scattered online resources, leading to confusion and uninformed decisions. Meanwhile, alumni who have already navigated this journey possess valuable insights that could help incoming students, but there is no structured platform to connect them effectively.",
  },

  {
    statement: "Open Innovation Challenge",
    description: "Innovation in emerging technologies such as AI/ML, Blockchain, and Cybersecurity is shaping the future of digital transformation. However, real-world challenges across industries demand creative, scalable, and impactful solutions that push beyond conventional approaches.",
  },
],  
};

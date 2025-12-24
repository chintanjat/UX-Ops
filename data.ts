import { FunctionGroup } from './types';

export const auditData: FunctionGroup[] = [
  {
    id: 'req-gathering',
    sno: 1,
    title: 'Requirement Gathering',
    northStar: {
      description: "Start with stakeholder interviews, not feature requests. Define success metrics upfront.",
      examples: [
        "Google: Designers write mini design briefs with goals, constraints, KPIs.",
        "Atlassian: Problem framing workshops with PM + Eng + Support.",
        "Meta: Requirements always include what failure looks like."
      ]
    },
    subFunctions: [
      {
        id: '1-1',
        name: 'Audit Existing Design',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Review previous design file or production live flows',
        actionItems: ['Define success metrics upfront']
      },
      {
        id: '1-2',
        name: 'Stakeholder Interviews',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Setup call with stakeholders, prepare questionnaire',
        metric: 'Number of interviews conducted'
      },
      {
        id: '1-3',
        name: 'Define KPIs & Success Metrics',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Define success metrics before research starts']
      }
    ]
  },
  {
    id: 'research',
    sno: 2,
    title: 'Research',
    northStar: {
      description: "Combine qualitative + quantitative (never just vibes). Visit users in their real environment.",
      examples: [
        "Airbnb: Designers visit homes / host spaces.",
        "Google: Continuous discovery, not one-time research.",
        "Apple: Research is deep but distilled into intuition."
      ]
    },
    subFunctions: [
      {
        id: '2-1',
        name: 'Field visit to understand user pain',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Visit users in their real environment', 'Design edge users early']
      },
      {
        id: '2-2',
        name: 'Heuristic Evaluation of Current Flow',
        impact: 'High', // Inferred High based on gap context, OCR says Unknown but implies importance
        status: 'Not Done',
        currentProcess: 'Not yet started'
      },
      {
        id: '2-3',
        name: 'Data & Analytics Deep Dive',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Drop off Rate'
      },
      {
        id: '2-4',
        name: 'Review Support Tickets',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Connect with Prod Support team',
        metric: 'Number of recurring issues'
      }
    ]
  },
  {
    id: 'research-doc',
    sno: 3,
    title: 'Research Documentation',
    northStar: {
      description: "Short, sharp, searchable. Focus on decisions, not transcripts.",
      examples: [
        "Meta: 1-page insight memos.",
        "Google: Central research repository.",
        "Airbnb: Research -> principles ('Trust before delight')."
      ]
    },
    subFunctions: [
      {
        id: '3-1',
        name: 'Persona Mapping',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Explicitly document what not to build']
      },
      {
        id: '3-2',
        name: 'Documenting interview Q&A',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Writing down interview questions and corresponding answers'
      },
      {
        id: '3-3',
        name: 'User Journey Mapping',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      },
      {
        id: '3-4',
        name: 'Research Insights & usage in solutioning',
        impact: 'High',
        status: 'Partial', // OCR says "Analysis of Extensive Research... boiling it down" but icon is Orange
        currentProcess: 'Analysis of Extensive Research & boiling it down to bullet points',
        metric: 'Insight adoption rate in designs'
      }
    ]
  },
  {
    id: 'design-solutions',
    sno: 4,
    title: 'Designing Solutions',
    northStar: {
      description: "Design flows before screens. Edge cases first, happy path later.",
      examples: [
        "Apple: Ruthless simplification, features cut if UX suffers.",
        "Meta: Failure flows reviewed before happy paths.",
        "Google: Flow maps include loading, retry, empty states."
      ]
    },
    subFunctions: [
      {
        id: '4-1',
        name: 'User Flow',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Sketching Flow in Figma/Figjam',
        actionItems: ['Design flows before screens', 'Think system, not page by page']
      },
      {
        id: '4-2',
        name: 'Designing Edge Cases & Error States',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Identifying scenarios in the flow that might lead to error',
        metric: 'FTR of edge cases covered'
      },
      {
        id: '4-3',
        name: 'Conceptual Review (Low-fi)',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Creating sketches, user flows'
      },
      {
        id: '4-4',
        name: 'Visual Design (High Fi)',
        impact: 'High',
        status: 'Done',
        currentProcess: 'UI design in Figma using AI tools'
      },
      {
        id: '4-5',
        name: 'Motion Design & Micro animations',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Motion is part of UX logic, not decoration']
      },
      {
        id: '4-6',
        name: 'Interactive Prototyping',
        impact: 'High',
        status: 'Not Done', // Orange icon in OCR
        currentProcess: 'Wiring screens in Figma'
      },
      {
        id: '4-7',
        name: 'Alternative Interactions (Sound/Haptics)',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      }
    ]
  },
  {
    id: 'testing',
    sno: 5,
    title: 'Testing with end users',
    northStar: {
      description: "Test concepts, not just prototypes. Designers run tests themselves.",
      examples: [
        "Atlassian: Lightweight usability tests every sprint.",
        "Google: Concept testing + A/B validation.",
        "Airbnb: Story based usability testing."
      ]
    },
    subFunctions: [
      {
        id: '5-1',
        name: 'Assisted User Testing',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Test concepts, not just prototypes']
      },
      {
        id: '5-2',
        name: 'Unassisted User Testing',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      },
      {
        id: '5-3',
        name: 'Documenting Insights',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      }
    ]
  },
  {
    id: 'lead-review',
    sno: 6,
    title: 'Review of Leads',
    northStar: {
      description: "Check problem alignment. Validate UX logic. Kill weak ideas early.",
      examples: []
    },
    subFunctions: [
      {
        id: '6-1',
        name: 'Design System Consistency',
        impact: 'High',
        status: 'Partial', // Orange
        currentProcess: 'Using Mudra Design system checker',
        actionItems: ['Structured critique', 'Evidence over opinions']
      },
      {
        id: '6-2',
        name: 'UX Logic & Flow Check',
        impact: 'High',
        status: 'Partial', // Orange
        currentProcess: 'Checking if flow breaks'
      },
      {
        id: '6-3',
        name: 'Structural Feedback Session',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      }
    ]
  },
  {
    id: 'head-review',
    sno: 7,
    title: 'Review of Design Head',
    northStar: {
      description: "Protect quality bar. Push for clarity & simplicity. Challenge edge cases.",
      examples: []
    },
    subFunctions: [
      {
        id: '7-1',
        name: 'Strategic Alignment Check',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Protect quality bar', 'Challenge edge cases hard']
      },
      {
        id: '7-2',
        name: 'Structural Quality Bar Review',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      },
      {
        id: '7-3',
        name: 'Structural Feedback Session',
        impact: 'High',
        status: 'Partial', // Orange
        currentProcess: 'Working session & review calls'
      }
    ]
  },
  {
    id: 'saurabh-review',
    sno: 8,
    title: 'Review with Executive (Saurabh)',
    northStar: {
      description: "Feasibility & scalability. Tech/UX trade offs. Risk & failure handling.",
      examples: [
        "Apple: Weekly exec design reviews.",
        "Google: Design + engineering alignment gates."
      ]
    },
    subFunctions: [
      {
        id: '8-1',
        name: 'ROI & Business Impact',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Working session with Saurabh',
      },
      {
        id: '8-2',
        name: 'Risk Mitigation Plan',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Working session with Saurabh'
      },
      {
        id: '8-3',
        name: 'Structural Feedback Session',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Review session with Saurabh'
      }
    ]
  },
  {
    id: 'stakeholder-walkthrough',
    sno: 9,
    title: 'Walkthrough with Business/Users',
    northStar: {
      description: "Walk through scenarios, not screens. Tell the user story end to end.",
      examples: [
        "Airbnb: Experience narratives.",
        "Meta: Scenario based walkthroughs."
      ]
    },
    subFunctions: [
      {
        id: '9-1',
        name: 'Stakeholder Demo & Approval',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Showcasing Figma files to stakeholders',
        actionItems: ['Walk through scenarios, not screens', 'Validate mental models']
      }
    ]
  },
  {
    id: 'handoff',
    sno: 10,
    title: 'Handover to Devs',
    northStar: {
      description: "Designers stay involved post-handoff. Walkthrough > specs dump.",
      examples: [
        "Airbnb: Design system + code parity.",
        "Atlassian: Recorded handoff walkthroughs."
      ]
    },
    subFunctions: [
      {
        id: '10-1',
        name: 'File Cleanup',
        impact: 'High',
        status: 'Partial', // Orange
        currentProcess: 'Arrange screens logical sequence, annotations',
        actionItems: ['Design system first, custom UI last']
      },
      {
        id: '10-2',
        name: 'Spec Annotations',
        impact: 'Medium',
        status: 'Done',
        currentProcess: 'Inbuilt Figma feature'
      },
      {
        id: '10-3',
        name: 'Handoff Walkthrough',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Walk devs through entire flow on call/in-person'
      },
      {
        id: '10-4',
        name: 'QA Support',
        impact: 'Low',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      }
    ]
  },
  {
    id: 'post-dev',
    sno: 11,
    title: 'Post Development Tracking',
    northStar: {
      description: "Track usage, errors, drop-offs. Monitor support tickets. Iterate.",
      examples: [
        "Google: Metric driven post launch reviews.",
        "Meta: Design debt logged from support issues."
      ]
    },
    subFunctions: [
      {
        id: '11-1',
        name: 'User Feedback once feature goes live',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Track usage, errors, drop-offs', 'Monitor support tickets']
      },
      {
        id: '11-2',
        name: 'Tracking support tickets',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started'
      }
    ]
  },
  {
    id: 'doc',
    sno: 12,
    title: 'Project Documentation',
    northStar: {
      description: "Problem -> Process -> Decisions -> Impact. Reusable learnings.",
      examples: [
        "Google: Internal case studies.",
        "Airbnb: Visual iteration archives."
      ]
    },
    subFunctions: [
      {
        id: '12-1',
        name: 'Documenting Problems, Research, Impact',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        actionItems: ['Problem -> Process -> Decisions -> Impact', 'Reusable learnings']
      }
    ]
  }
];

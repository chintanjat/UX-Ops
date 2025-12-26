
import { FunctionGroup } from './types';

export const auditData: FunctionGroup[] = [
  {
    id: 'req-gathering',
    sno: 1,
    title: 'Requirement Gathering',
    champion: 'Prakhar Vinyas',
    progressUpdate: 'We have started Capturing constraints early as well as doing stakeholder interviews',
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
        metric: 'Completion rate of audits; number of documents reviewed per project',
        actionItems: ['Documentation in Figma']
      },
      {
        id: '1-2',
        name: 'Stakeholder Interviews',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Setup call with stakeholders, prepare questionnaire, Face to face discussion',
        metric: 'Number of interviews conducted; stakeholder satisfaction scores'
      },
      {
        id: '1-3',
        name: 'Define KPIs & Success Metrics',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'N/A (not measured yet)',
        actionItems: ['Define success metrics upfront (before research even starts)']
      }
    ]
  },
  {
    id: 'research',
    sno: 2,
    title: 'Research',
    champion: 'Souporno Mukherjee',
    progressUpdate: 'We have started shadowing users in some projects and then understand their pain points.',
    northStar: {
      description: "Combine qual + quant. Visit users in their real environment. Design edge users early.",
      examples: [
        "Airbnb: Designers visit homes / host spaces.",
        "Google: Continuous discovery, not one-time research.",
        "Apple: Research is deep but distilled into intuition."
      ]
    },
    subFunctions: [
      {
        id: '2-1',
        name: 'Field visit to understand user pain, expectations and actions',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Number of field visits; user feedback quality (rated 1-5)',
        actionItems: ['Shadowing users daily actions', 'Video Documentation', 'User Interview']
      },
      {
        id: '2-2',
        name: 'Heuristic Evaluation of Current Flow',
        impact: 'Unknown',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'N/A (not measured yet)'
      },
      {
        id: '2-3',
        name: 'Data & Analytics Deep Dive',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Drop off Rate',
        actionItems: ['CTR', 'Heatmapping', 'Time on Task', 'Success Rate', 'Problem Prioritisation']
      },
      {
        id: '2-4',
        name: 'Review Support Tickets',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Connect with Prod Support team, Review Ihelp tickets',
        metric: 'Number of recurring issues; Root cause Analysis of Recurring issues'
      }
    ]
  },
  {
    id: 'research-doc',
    sno: 3,
    title: 'Research Documentation',
    champion: 'Souporno Mukherjee',
    progressUpdate: 'We have created the research repository and added few projects to them but is not being updated everytime.',
    northStar: {
      description: "Update research repository. Short, sharp, searchable.",
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
        metric: 'Not measured yet'
      },
      {
        id: '3-2',
        name: 'Documenting interview questions and answers',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Writing down interview questions and corresponding answers',
        metric: 'No. of objective insights that we get after each interview'
      },
      {
        id: '3-3',
        name: 'User Journey Mapping',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not measured yet'
      },
      {
        id: '3-4',
        name: 'Research Insights & usage in solutioning',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Analysis of Extensive Research & boiling it down to bullet points',
        metric: 'Insight adoption rate in designs',
        actionItems: ['How might we Framework for high level solutions']
      }
    ]
  },
  {
    id: 'design-solutions',
    sno: 4,
    title: 'Designing Solutions',
    champion: 'Siddhant Saran',
    progressUpdate: 'We have implemented a habit that we need to have current "as is" and ideal flows before we jump to actual solutioning or UI.',
    northStar: {
      description: "Design flows before screens. Edge cases first. Think system, not page by page UI.",
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
        metric: 'Flow completion time; error rates in prototypes'
      },
      {
        id: '4-2',
        name: 'Designing Edge Cases & Error States',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Identifying scenarios in the flow that might lead to error',
        metric: 'FTR of the edge cases covered after all the feedbacks'
      },
      {
        id: '4-3',
        name: 'Conceptual Review (Low-Fidelity Wire framing)',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Creating sketches, user flows, diagrams',
        metric: 'NA'
      },
      {
        id: '4-4',
        name: 'Visual Design (Conversion to High Fi)',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'UI design in Figma using AI tools for iterations',
        metric: 'N/A'
      },
      {
        id: '4-5',
        name: 'Motion Design & Micro animations',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not measured yet',
        actionItems: ['Motion is part of UX logic, not decoration', 'Motion guidelines will be systemized']
      },
      {
        id: '4-6',
        name: 'Interactive Prototyping',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Wiring screens in Figma + Using AI tools like Figma Make',
        metric: 'Time spent to make the user understand the entire flow',
        actionItems: ['User acceptance percentage']
      },
      {
        id: '4-7',
        name: 'Alternative Interactions - Sound and Haptics',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'NA'
      }
    ]
  },
  {
    id: 'testing',
    sno: 5,
    title: 'Testing with end users during Design',
    champion: 'Prakhar Vinyas',
    progressUpdate: 'We have not yet started this.',
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
        metric: 'Not measured yet',
        actionItems: ['Script the test', 'Recruit users', 'Perform enough tests to invalidate biases']
      },
      {
        id: '5-2',
        name: 'Unassisted User Testing',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not measured yet'
      },
      {
        id: '5-3',
        name: 'Documenting Insights',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not measured yet'
      }
    ]
  },
  {
    id: 'lead-review',
    sno: 6,
    title: 'Review of Leads',
    champion: 'Chintan Jat',
    progressUpdate: 'As a Lead, we have started to take alignment on the actual problem and not deviate from it while designing the solution as well as monitor the usage of mudra design systems.',
    northStar: {
      description: "Check problem alignment. Monitor usage of Mudra design systems. Validate UX logic.",
      examples: [
        "Structured critique",
        "Feedback framed as questions",
        "Evidence over opinions"
      ]
    },
    subFunctions: [
      {
        id: '6-1',
        name: 'Design System Consistency',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Using Mudra Design system checker plugin in Figma',
        metric: 'Percentage usage of design system components'
      },
      {
        id: '6-2',
        name: 'UX Logic & Flow Check',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Checking to see whether the flow is not breaking anywhere',
        metric: 'FTR and no. of support tickets of users getting stuck in the journey'
      },
      {
        id: '6-3',
        name: 'Structural Feedback Session',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not measured yet'
      }
    ]
  },
  {
    id: 'head-review',
    sno: 7,
    title: 'Review of Manthan (Design Head)',
    champion: 'Chintan Jat',
    progressUpdate: 'As a POD we have started pushing for clarity and simplicity, and we have started to address edge cases.',
    northStar: {
      description: "Protect quality bar. Push for clarity & simplicity. Challenge edge cases hard.",
      examples: [
        "Weekly exec design reviews",
        "Design + engineering alignment gates"
      ]
    },
    subFunctions: [
      {
        id: '7-1',
        name: 'Strategic Alignment Check',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not yet measured',
        actionItems: ['Protect quality bar', 'Challenge edge cases hard']
      },
      {
        id: '7-2',
        name: 'Structural Quality Bar Review',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not yet measured'
      },
      {
        id: '7-3',
        name: 'Structural Feedback Session',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Working session & review calls',
        metric: 'Not yet measured',
        actionItems: ['Explicitly tracking feedbacks given vs incorporated']
      }
    ]
  },
  {
    id: 'saurabh-review',
    sno: 8,
    title: 'Review with Saurabh (High Impact)',
    champion: 'Chintan Jat',
    progressUpdate: 'We have discussed Feasibility & scalability in session with Saurabh.',
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
        metric: 'Not yet measured',
        actionItems: ['Train LLM to behave like Saurabh for pre-reviews']
      },
      {
        id: '8-2',
        name: 'Risk Mitigation Plan',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Working session with Saurabh',
        metric: 'Not yet measured'
      },
      {
        id: '8-3',
        name: 'Structural Feedback Session',
        impact: 'High',
        status: 'Partial',
        currentProcess: 'Review session with Saurabh',
        metric: 'Not yet measured'
      }
    ]
  },
  {
    id: 'stakeholder-walkthrough',
    sno: 9,
    title: 'Walkthrough with Business/Users',
    champion: 'Siddhant Saran',
    progressUpdate: 'We always have a walkthrough with them creating stories and scenarios and not just blindly surf through the screens.',
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
        currentProcess: 'Showcasing figma files to stakeholders',
        metric: 'No. of iterations after showcase with business before final approval',
        actionItems: ['Create interactive prototype to get more out of the user\'s mind']
      }
    ]
  },
  {
    id: 'handoff',
    sno: 10,
    title: 'Handover to Devs',
    champion: 'Prakhar Vinyas',
    progressUpdate: 'We have started doing File Cleanups and giving a proper Handoff Walkthrough. Adopted MDS first and custom UI last.',
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
        status: 'Partial',
        currentProcess: 'Arrange the screen in a logical sequence; Version Control',
        metric: 'Not yet measured'
      },
      {
        id: '10-2',
        name: 'Spec Annotations',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Inbuilt Figma feature - we can easily use',
        metric: 'Not yet measured'
      },
      {
        id: '10-3',
        name: 'Handoff Walkthrough',
        impact: 'High',
        status: 'Done',
        currentProcess: 'Walk the devs through the entire flow on call or in person meeting',
        metric: 'Number of clarification questions raised by developers after the walkthrough'
      },
      {
        id: '10-4',
        name: 'QA Support',
        impact: 'Low',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not yet measured'
      }
    ]
  },
  {
    id: 'post-dev',
    sno: 11,
    title: 'Post Development Tracking',
    champion: 'Prakhar Vinyas',
    progressUpdate: 'We are doing this reactively rather than proactively.',
    northStar: {
      description: "Track usage, errors, drop-offs. Monitor support tickets. Iterate post launch.",
      examples: [
        "Google: Metric driven post launch reviews.",
        "Meta: Design debt logged from support issues."
      ]
    },
    subFunctions: [
      {
        id: '11-1',
        name: 'User Feedback once the feature goes live',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not yet measured',
        actionItems: ['Track usage, errors, drop offs', 'Monitor support tickets']
      },
      {
        id: '11-2',
        name: 'Tracking support tickets',
        impact: 'Medium',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not yet measured'
      }
    ]
  },
  {
    id: 'doc',
    sno: 12,
    title: 'Project Documentation',
    champion: 'Souporno Mukherjee',
    progressUpdate: 'Have not started it yet. This can be a huge help in doing a retro on how this project actually went.',
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
        name: 'Documenting Problems, Research, Process, Outcome and Impact',
        impact: 'High',
        status: 'Not Done',
        currentProcess: 'Not yet started',
        metric: 'Not yet measured'
      }
    ]
  }
];

/**
 * Single source of truth for all résumé content.
 * Edit this file to update the site — components render it generically.
 * Note: personal contact details (address / phone / email) are intentionally
 * omitted from this public page. Contact is via GitHub only.
 */

export interface ExperienceEntry {
  company: string
  location: string
  role: string
  period: string
  summary?: string
  highlights?: string[]
  technologies?: string[]
}

export interface SideProject {
  name: string
  tagline: string
  description: string
  url?: string
  technologies?: string[]
}

export interface Talk {
  event: string
  title: string
  date: string
  url?: string
}

export interface Resume {
  name: string
  title: string
  summary: string
  github: string
  skills: string[]
  experience: ExperienceEntry[]
  sideProjects: SideProject[]
  talks: Talk[]
}

export const resume: Resume = {
  name: 'Jeremy Kirkham',
  title: 'Tech Lead',
  summary:
    'Tech Lead with 15+ years of web development experience, including a decade building proptech at scale at Equiem. I own system architecture and technical vision for my domain, build high-performing teams, and love tackling hard problems at scale — from federated GraphQL APIs serving 50,000+ MAUs across three regions to establishing responsible AI engineering practices.',
  github: 'https://github.com/JeremyKirkham',

  skills: [
    'Node / TypeScript',
    'React / React Native',
    'GraphQL',
    'AWS',
    'CI/CD',
    'Docker',
    'System Architecture',
    'Team Leadership & Coaching',
    'AI-Assisted Engineering',
  ],

  experience: [
    {
      company: 'Equiem',
      location: 'Melbourne',
      role: 'Tech Lead',
      period: 'Jul 2021 – Present',
      summary:
        'Own and evolve system architecture, security posture and technical vision across the domain, while leading delivery for a cross-functional engineering team.',
      highlights: [
        'Architect applications serving upwards of 50,000 MAUs across 3 separate geographic regions, including a federated GraphQL API consumed by multiple product teams',
        'Create and socialise a technical vision that guides long-term architectural decisions; communicate complex changes to non-technical stakeholders across the organisation',
        'Partner with Security, Platform and Legal to identify and close compliance and security gaps; accountable for operational reliability, on-call health and KTLO planning (tech debt, platform health, operational standards)',
        'Work with Product and Design to refine problem statements and prioritise technical work against business goals, driving product direction with a technical lens',
        'Established responsible AI engineering practices for the team — evaluating and introducing coding assistants and agents, setting review standards for AI-generated code, and defining what data can be shared with external tools',
        'Coach engineers at all levels and influence org-wide engineering direction, including technology selection, vendor management and cross-team architectural improvements',
      ],
      technologies: [
        'Node / TypeScript',
        'React',
        'Docker',
        'GraphQL',
        'AWS (DynamoDB, SQS, Lambda, ECS, EC2)',
        'Heroku',
      ],
    },
    {
      company: 'Equiem',
      location: 'Melbourne',
      role: 'Lead Software Engineer',
      period: 'Dec 2015 – Jun 2021',
      summary:
        "Managed the daily workflow of Equiem's team of software engineers while remaining hands-on across the stack.",
      highlights: [
        'Led the re-architecture of the Equiem platform from a Drupal monolith to a service-oriented Rails and Node/TypeScript stack',
        'Designed and delivered a federated GraphQL API and the CI/CD pipelines supporting multiple applications',
        'Ran delivery rituals (planning, standups, retros) and mentored engineers across the team',
      ],
      technologies: [
        'Ruby on Rails',
        'Node / TypeScript',
        'Angular',
        'Docker',
        'GraphQL',
        'AWS (DynamoDB, SQS, Lambda, ECS, EC2)',
        'Heroku',
      ],
    },
    {
      company: 'Techcourses.com.au',
      location: 'Melbourne',
      role: 'Instructor',
      period: 'Feb 2017 – Mar 2017',
      highlights: [
        'Instructor for introduction to Ruby on Rails course',
        'Course materials for Ruby GraphQL course',
      ],
    },
    {
      company: 'Equiem',
      location: 'Melbourne',
      role: 'Software Engineer',
      period: 'Dec 2014 – Dec 2015',
      summary:
        'Designed and developed back-end systems for the Equiem Portal, a Drupal powered web application.',
    },
    {
      company: 'Tavultesoft',
      location: 'Hobart',
      role: 'Sales and Support Engineer',
      period: 'Feb 2013 – Nov 2014',
      summary:
        'Sales and support engineer for a Windows native keyboard application supporting over 1500 languages.',
      highlights: [
        'Website design and development',
        'Keyboard development and support',
      ],
    },
    {
      company: 'M E Systems Pty. Ltd.',
      location: 'Melbourne',
      role: 'Founder & Managing Director',
      period: 'Feb 2011 – Dec 2015',
      summary:
        'Founded M E Systems and led product development for PocketDocket, an eco-friendly mobile advertising platform using redeemable coupons to drive customers to local businesses.',
      highlights: [
        'Led product development end-to-end for the PocketDocket iPhone application, including its API',
        'Website design and development',
      ],
    },
  ],

  sideProjects: [
    {
      name: 'Streame ECC',
      tagline: 'Engineering change control platform',
      description:
        'An approval-driven, audit-ready engineering change control platform that automates release-readiness scoring and compliance monitoring with AI agents, giving leadership real-time visibility into project release health against ISO 9001 and IATF 16949 standards.',
      url: 'https://ecc.streame.com.au/',
    },
    {
      name: 'Cooky',
      tagline: 'React Native application for sharing recipes',
      description:
        'A mobile app for creating, sharing and discovering recipes, backed by a TypeScript GraphQL server.',
      technologies: [
        'React Native',
        'TypeScript GraphQL server',
        'Firebase for authentication and file storage',
      ],
    },
    {
      name: 'Cloud Blox',
      tagline: 'PaaS hosting solution',
      description: 'A platform for hosting docker based web applications.',
      technologies: ['AWS CDK', 'NodeJS / TypeScript', 'React', 'GraphQL'],
    },
  ],

  talks: [
    {
      event: 'RORO Melbourne',
      title: '“GraphQL and Rails” lightning talk',
      date: 'April 2018',
    },
    {
      event: 'JDPx',
      title: '“You’re a senior engineer, now what?”',
      date: 'October 20th 2016',
      url: 'http://www.justdigitalpeople.com.au/jdpx-australias-most-popular-event-not-fact-checked/',
    },
    {
      event: 'Acquia Engage Asia Pacific',
      title: '“Go big or go home: delivering digital projects at scale”',
      date: 'August 22nd 2017',
      url: 'https://apjengage.acquia.com/go-big-or-go-home-delivering-digital-projects-scale',
    },
  ],
}
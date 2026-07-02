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
    'Over 15 years of web development experience; currently a Tech Lead at Equiem. A self-motivated learner and team player. I love tackling hard problems at scale.',
  github: 'https://github.com/JeremyKirkham',

  skills: [
    'Node / TypeScript',
    'React / React Native',
    'GraphQL',
    'AWS',
    'CI/CD',
    'Docker',
  ],

  experience: [
    {
      company: 'Equiem',
      location: 'Melbourne',
      role: 'Tech Lead',
      period: 'Jul 2021 – Present',
      summary:
        "Responsible for managing the daily workflow of Equiem's team of software engineers.",
      highlights: [
        'Architecting new and existing applications serving upwards of 50,000 MAUs across 3 separate geographic regions',
        'Development and maintenance of a federated GraphQL API',
        'Build and maintain CI/CD pipelines for multiple applications',
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
        "Responsible for managing the daily workflow of Equiem's team of software engineers.",
      highlights: [
        'Architecting new and existing applications serving upwards of 50,000 MAUs across 3 separate geographic regions',
        'Development and maintenance of a federated GraphQL API',
        'Build and maintain CI/CD pipelines for multiple applications',
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
        'Responsible for designing and developing back-end systems for the Equiem Portal, a Drupal powered web application.',
    },
    {
      company: 'Tavultesoft',
      location: 'Hobart',
      role: 'Sales and Support Engineer',
      period: 'Feb 2013 – Dec 2014',
      summary:
        'Sales and support engineer for a Windows native keyboard application supporting over 1500 languages.',
      highlights: [
        'Website design and development',
        'Keyboard development and support',
      ],
    },
    {
      company: 'ME Systems Pty. Ltd.',
      location: 'Melbourne',
      role: 'Lead API Engineer',
      period: '2009 – 2013',
      summary:
        'Lead API engineer for the PocketDocket iPhone application under ME Systems Pty. Ltd.',
      highlights: [
        'API development for the PocketDocket App',
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
        'Deeplake was a data collection and analysis tool for webhook based events from 3rd party services such as GitHub and PivotalTracker.',
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

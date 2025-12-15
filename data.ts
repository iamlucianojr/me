import { BlogPost, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'GitHub', url: '#', icon: 'github' },
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:hello@example.com', icon: 'mail' },
];

export const RESUME_MARKDOWN = `
# Alex Dev

**Senior Frontend Engineer**  
San Francisco, CA • alex@example.com

---

## Profile
Passionate React engineer with a focus on UI/UX and performance. I build scalable web applications with a minimalist aesthetic.

## Experience

### Senior Frontend Engineer @ TechCorp
*2021 - Present*
- Led the migration of a legacy monolithic app to a micro-frontend architecture using React and TypeScript.
- Improved site performance by 40% through code splitting and lazy loading strategies.
- Mentored junior developers and established coding standards.

### Frontend Developer @ StartupInc
*2018 - 2021*
- Built the initial MVP for a fintech product used by 10k+ users.
- Implemented a design system using Tailwind CSS to ensure consistency across the platform.

## Skills
- **Languages:** TypeScript, JavaScript (ES6+), HTML5, CSS3
- **Frameworks:** React, Next.js, Astro
- **Tools:** Git, Webpack, Vite, Docker
- **Design:** Figma, Adobe XD

## Education
**BS Computer Science**  
University of Technology, 2018
`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'minimalism-in-code',
    title: 'Minimalism in Code',
    date: 'October 12, 2023',
    description: 'Why writing less code is often better than writing more.',
    tags: ['Coding', 'Philosophy'],
    content: `
# Minimalism in Code

Software engineering often feels like a race to add features. We build, we ship, we iterate. But in the process, we accumulate debt. Not just technical debt, but *cognitive* debt.

## The Cost of Complexity

Every line of code you write is a liability. It must be read, understood, tested, and maintained. The more code you have, the harder it is to change.

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

## Strategies for Reduction

1. **YAGNI (You Aren't Gonna Need It):** Don't build features for a hypothetical future.
2. **DRY (Don't Repeat Yourself):** Abstraction is good, but premature abstraction is the root of all evil.
3. **Delete Code:** Celebrate deleting code as much as writing it.

## Conclusion

Strive for elegance. Simple code is robust code.
    `
  },
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks',
    date: 'September 28, 2023',
    description: 'A deep dive into useEffect and useCallback nuances.',
    tags: ['React', 'Tutorial'],
    content: `
# Mastering React Hooks

React Hooks changed the way we write components. However, they introduced new pitfalls, specifically around dependency arrays and closures.

## The \`useEffect\` Trap

One of the most common mistakes is ignoring the linter.

\`\`\`tsx
// Bad
useEffect(() => {
  fetchData(id);
}, []); // eslint-disable-line
\`\`\`

If \`id\` changes, this effect won't run. This leads to stale data bugs that are hard to debug.

## Stable References with \`useCallback\`

When passing functions to child components, referential integrity matters.

\`\`\`tsx
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);
\`\`\`

By using \`useCallback\`, we ensure \`handleClick\` stays the same function instance across renders, preventing unnecessary re-renders of pure child components.
    `
  },
  {
    slug: 'design-systems-101',
    title: 'Design Systems 101',
    date: 'August 15, 2023',
    description: 'Building a consistent visual language for your products.',
    tags: ['Design', 'System'],
    content: `
# Design Systems 101

A design system is more than just a style guide. It's a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

## Key Components

- **Design Tokens:** The atomic values (colors, spacing, typography).
- **Component Library:** The building blocks (Buttons, Inputs, Modals).
- **Patterns:** Reusable combinations of components (Forms, Cards).

## Why You Need One

Consistency breeds trust. When your application looks and behaves consistently, users feel more comfortable and confident using it.
    `
  }
];

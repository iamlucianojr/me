import { BlogPost, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/iamlucianojr', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/lucianogoncalvesjunior/', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:luciano@lucianojr.com.br', icon: 'mail' },
];

export const RESUME_MARKDOWN = `
# Luciano Junior

**Senior Software Engineer**  
Porto, Portugal • luciano@lucianojr.com.br

---

## Profile
Passionate software engineer with a focus on backendm, performance and observability. I build scalable applications.

## Experience

### Senior Backend Engineer @ Worten
*2024 - Present*
- As a Senior Backend Engineer on Worten’s Service Lifecycle Manager (SLM) team, I designed and implemented scalable backend services in Go (Golang) to support the company’s post-sales ecosystem. My work focused on automating and optimizing processes around warranty extensions, damage protection, alarm systems, acquisition of energy and telecom services, and tech & home Worten plans.
- Developed and maintained microservices in Golang, ensuring reliability, high performance, and clean architecture principles.
- Designed RESTful APIs and integrated them with internal and third-party systems, handling customer contracts and service plans.
- Participated in architectural discussions, code reviews, and Go best practices adoption within the backend engineering guild.

### Senior Backend Engineer @ Barkyn
*2021 - 2023*
- I have been leading the development and maintenance of our backend platform and infrastructure.
- Designing and Implementing Domain-Centric APIs and Lambda Functions: Crafting specialized APIs and serverless computing functions to streamline processes and enhance system efficiency.
- E-Commerce Platform Management: Utilizing Prestashop and Shopify as the core engines for our e-commerce operations, ensuring a seamless online shopping experience for our customers.
- Integration of Third-Party Services: Successfully integrating various third-party providers to optimize our payment systems, shipping logistics, and financial automation processes. This integration has been pivotal in creating a robust and efficient operational framework.

### Senior Backend Engineer @ Exads
*2020 - 2021*
- Spearheaded the development and deployment of new backend functionalities, focusing on creating robust and scalable solutions.
- Ad-Serving Project Enhancement: A key aspect of my role is to bolster our ad-serving project. I handle the processing and analysis of a massive data stream, managing over 11 billion daily impressions. My contribution is crucial in optimizing data processing workflows and ensuring high efficiency.
- Transactional Software Platform Support: I provide critical support and continuous improvements to our transactional software platform. My responsibilities include ensuring system reliability, performance tuning, and implementing updates as needed.
- Technical Proficiency: Utilized advanced technologies like Kafka (for large-scale data streaming), Go (for backend development), and the Symfony framework with PHP to build and maintain dynamic backend systems.


## Skills
- **Languages & Frameworks:** Go (Golang), PHP (Laravel, Lumen), TypeScript, Bash scripting.
- **Databases & Caching:** PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch — with experience in designing optimized, scalable data models and performance tuning.
- **Infrastructure & DevOps:** Nginx, Docker, Kubernetes, Terraform, Grafana, Kibana, Prometheus — proficient in building and managing containerized and cloud-native environments on AWS and Google Cloud Platform (GCP). Experienced in implementing automated CI/CD pipelines that streamline delivery and ensure reliability.
- **Messaging & Integration:** Kafka, RabbitMQ, gRPC, and REST APIs — skilled in building distributed systems and event-driven architectures with a focus on scalability, fault tolerance, and performance.
- **Architecture & Design Principles:** CQRS, Event Sourcing, Domain-Driven Design (DDD), and SOLID principles. Strong advocate of clean code, object-oriented design, and proven design patterns to ensure maintainable and extensible systems.
- **Observability:** Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana) — experienced in setting up and maintaining monitoring and logging systems to track system performance and identify potential issues.
- **Security & Authentication:** Hands-on experience with JWT and OAuth modern authentication mechanisms to secure APIs and distributed services.
- **Miscellaneous:** Migrations, SAGA pattern, Circuit Breaker, Monitoring, Concurrency, Projections and system reliability.


## Education
- **Analysis and Software Development**
Federal Institute of Technology Catarinense, 2012
- **Technical Certificate in Informatics and Software Development**
Federal Institute of Technology Santa Catarina, 2012
`;


import fm from 'front-matter';

// Load markdown files
const markdownFiles = import.meta.glob('./src/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

interface PostAttributes {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = Object.keys(markdownFiles).map((path) => {
  const content = markdownFiles[path] as string;
  const parsed = fm<PostAttributes>(content);

  return {
    slug: parsed.attributes.slug,
    title: parsed.attributes.title,
    date: parsed.attributes.date,
    description: parsed.attributes.description,
    tags: parsed.attributes.tags,
    content: parsed.body
  };
});

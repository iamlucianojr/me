import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';

const Home: React.FC = () => {
  const recentPosts = BLOG_POSTS.slice(0, 2);

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Simplicity is the ultimate sophistication.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I'm Luciano, a software engineer passionate about building clean, accessible, and high-performance applications.
          Currently building after-sales solutions at Worten.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            to="/resume"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
          >
            View Resume
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
          >
            Read Blog
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Recent Writing</h2>
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            All posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block space-y-2">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-xl font-semibold group-hover:underline decoration-muted-foreground/50 underline-offset-4">
                  {post.title}
                </h3>
                <span className="text-sm text-muted-foreground shrink-0">{post.date}</span>
              </div>
              <p className="text-muted-foreground line-clamp-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 p-8 rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-3">Looking for a project?</h3>
        <p className="text-muted-foreground mb-6">
          I am currently open to freelance opportunities and consulting. If you have a project in mind, let's talk.
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-primary font-medium hover:underline underline-offset-4"
        >
          Get in touch &rarr;
        </a>
      </section>
    </div>
  );
};

export default Home;
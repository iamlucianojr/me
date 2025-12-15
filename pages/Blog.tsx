import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

const Blog: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Writing</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts on software development, design, and the philosophy of building products.
        </p>
      </div>

      <div className="space-y-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="flex flex-col space-y-3">
            <div className="space-y-1">
               <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="bg-secondary px-2 py-0.5 rounded text-xs font-medium text-secondary-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
              <Link to={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary/80 transition-colors">
                  {post.title}
                </h2>
              </Link>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {post.description}
            </p>
            <div>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
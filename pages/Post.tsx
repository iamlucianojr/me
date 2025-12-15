import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="animate-fade-in">
      <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to blog
      </Link>
      
      <header className="mb-10">
        <div className="flex gap-2 mb-4">
             {post.tags.map(tag => (
                <span key={tag} className="bg-secondary px-2.5 py-0.5 rounded-full text-xs font-medium text-secondary-foreground">
                    {tag}
                </span>
            ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
          {post.title}
        </h1>
        <time className="text-muted-foreground">{post.date}</time>
      </header>
      
      <div className="border-t border-border pt-8">
        <MarkdownRenderer content={post.content} />
      </div>

      <div className="mt-16 pt-8 border-t border-border flex justify-between">
         <Link to="/blog" className="text-sm font-semibold hover:underline underline-offset-4">
            &larr; More Posts
         </Link>
      </div>
    </article>
  );
};

export default Post;
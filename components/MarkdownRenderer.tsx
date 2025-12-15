import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        components={{
            // Customizing specific elements if needed to match shadcn/tailwind styles perfectly
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-primary" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4 text-primary" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3 text-primary" {...props} />,
            p: ({node, ...props}) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />,
            ul: ({node, ...props}) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground" {...props} />,
            ol: ({node, ...props}) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground" {...props} />,
            li: ({node, ...props}) => <li className="" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground" {...props} />,
            code: ({node, ...props}) => {
                // Determine if it's inline code or a block
                // @ts-ignore - node.inline is not always strictly typed in some react-markdown versions but exists in AST
                const isInline = props.inline || !String(props.children).includes('\n');
                return isInline 
                    ? <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props} />
                    : <pre className="overflow-x-auto rounded-lg bg-muted p-4 my-6"><code className="relative rounded bg-transparent font-mono text-sm text-foreground" {...props} /></pre>;
            },
            hr: ({node, ...props}) => <hr className="my-8 border-border" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
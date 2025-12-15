import React from 'react';
import { Download } from 'lucide-react';
import { RESUME_MARKDOWN } from '../data';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Resume: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <button 
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Print / PDF</span>
        </button>
      </div>

      <div className="bg-card text-card-foreground p-8 md:p-12 rounded-lg border border-border shadow-sm print:shadow-none print:border-none print:p-0">
        <MarkdownRenderer content={RESUME_MARKDOWN} className="prose-headings:text-primary prose-a:text-primary" />
      </div>
    </div>
  );
};

export default Resume;
import React, { useEffect, useRef, useState } from 'react';

// --- Callout Component ---
interface CalloutProps {
  type?: 'note' | 'warning' | 'tip';
  children: React.ReactNode;
}

const calloutLabels: Record<string, string> = {
  note: '📌 Note',
  warning: '⚠️ Warning',
  tip: '💡 Tip',
};

export const Callout: React.FC<CalloutProps> = ({ type = 'note', children }) => {
  return (
    <div className={`callout callout--${type}`}>
      <div className="callout__label">{calloutLabels[type]}</div>
      <div>{children}</div>
    </div>
  );
};

// --- Caption Component ---
interface CaptionProps {
  children: React.ReactNode;
}

export const Caption: React.FC<CaptionProps> = ({ children }) => {
  return <figcaption className="caption">{children}</figcaption>;
};

// --- Mermaid Component ---
interface MermaidProps {
  chart: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const renderChart = async () => {
      if (!containerRef.current || rendered) return;

      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
          fontFamily: 'Inter, sans-serif',
          fontSize: 13,
          securityLevel: 'loose',
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart.trim());

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setRendered(true);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (!cancelled && containerRef.current) {
          containerRef.current.textContent = 'Diagram failed to render.';
        }
      }
    };

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, rendered]);

  // Re-render on theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setRendered(false);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return <div className="mermaid-container" ref={containerRef} />;
};

// --- MDX Component Overrides ---
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote {...props} />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => <table {...props} />,
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <thead {...props} />,
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />,
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => <th {...props} />,
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => <td {...props} />,
  hr: () => <hr />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img loading="lazy" {...props} />
  ),
  // Custom components available in MDX
  Callout,
  Caption,
  Mermaid,
};

export default mdxComponents;

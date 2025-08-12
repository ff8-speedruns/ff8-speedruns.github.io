// Simple React component for markdown parsing
import React from 'react';

export function MarkdownText({ children, boldClass = 'satb', italicClass = 'important', ...props }) {
  if (!children || typeof children !== 'string') return <span {...props}>{children}</span>;

  // Split by markdown patterns and convert to React elements
  const parts = children.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  const elements = parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <b key={index} className={boldClass}>{part.slice(2, -2)}</b>;
    } else if (part.startsWith('*') && part.endsWith('*')) {
      return <b key={index} className={italicClass}>{part.slice(1, -1)}</b>;
    } else {
      return part;
    }
  });

  return <span {...props}>{elements}</span>;
}

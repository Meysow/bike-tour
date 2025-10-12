import Link from "next/link";
import { Fragment } from "react";

interface SafeHtmlRendererProps {
  content: string;
  className?: string;
}

/**
 * Safely renders text content with links by parsing <a> tags and converting them to Next.js Link components.
 * This avoids using dangerouslySetInnerHTML and prevents XSS attacks.
 */
export function SafeHtmlRenderer({
  content,
  className,
}: SafeHtmlRendererProps) {
  // Regular expression to match <a> tags with href and optional target/rel attributes
  const linkRegex =
    /<a\s+href="([^"]+)"(?:\s+target="([^"]+)")?(?:\s+rel="([^"]+)")?>([^<]+)<\/a>/g;

  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  // Find all <a> tags and split content into text and link parts
  while ((match = linkRegex.exec(content)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }

    const href = match[1];
    const target = match[2];
    const rel = match[3];
    const linkText = match[4];
    const isExternal = target === "_blank";

    // Create appropriate link element
    if (isExternal) {
      parts.push(
        <a
          key={key++}
          href={href}
          target={target}
          rel={rel}
          className="font-semibold text-orange-500 underline-offset-4 transition-all hover:underline"
        >
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={key++}
          href={href}
          className="font-semibold text-orange-500 underline-offset-4 transition-all hover:underline"
        >
          {linkText}
        </Link>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }

  return (
    <div className={className}>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </div>
  );
}

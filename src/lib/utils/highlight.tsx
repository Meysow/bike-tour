import Balancer from "react-wrap-balancer";

interface HighlightProps {
  children: string;
  className?: string;
  gradient?: boolean;
}

/**
 * Parses text with <highlight> tags and renders them with styling
 * Example: "Discover <highlight>Paris</highlight> Like a True Parisian!"
 * Automatically includes Balancer for text wrapping optimization
 */
export function HighlightText({
  children,
  className = "",
  gradient = true,
}: HighlightProps) {
  const parts = children.split(/(<highlight>.*?<\/highlight>)/g);

  return (
    <Balancer>
      {parts.map((part, index) => {
        if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
          const content = part.replace(/<\/?highlight>/g, "");
          const highlightClass = gradient
            ? "bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent font-extrabold"
            : "font-semibold";

          return (
            <span key={index} className={`${highlightClass} ${className}`}>
              {content}
            </span>
          );
        }
        return part;
      })}
    </Balancer>
  );
}

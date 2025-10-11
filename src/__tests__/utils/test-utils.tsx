import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

// Mock providers wrapper for testing
interface ProvidersWrapperProps {
  children: ReactNode;
}

function ProvidersWrapper({ children }: ProvidersWrapperProps): ReactElement {
  return <>{children}</>;
}

// Custom render function that includes providers
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: ProvidersWrapper, ...options });
}

// Re-export everything from React Testing Library
export * from "@testing-library/react";

// Override render method
export { customRender as render };

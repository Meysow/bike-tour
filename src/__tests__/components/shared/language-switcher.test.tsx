import { render, screen, waitFor } from "@/__tests__/utils/test-utils";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import userEvent from "@testing-library/user-event";

// Mock hooks
const mockPush = jest.fn();
const mockRefresh = jest.fn();
const mockGetLanguageSwitchUrl = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    refresh: mockRefresh,
  }),
  usePathname: () => "/guided-bike-tour-paris",
}));

jest.mock("@/hooks/use-localized-routes", () => ({
  useLocalizedRoutes: () => ({
    locale: "en",
    getLanguageSwitchUrl: mockGetLanguageSwitchUrl,
  }),
}));

// Mock Icons component
jest.mock("@/components/shared/icons", () => ({
  Icons: {
    check: ({ className }: { className?: string }) => (
      <span className={className} data-testid="check-icon">
        ✓
      </span>
    ),
  },
}));

describe("LanguageSwitcher Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetLanguageSwitchUrl.mockReturnValue("/visite-guidee-de-paris-a-velo");
  });

  it("should render language switcher button", () => {
    render(<LanguageSwitcher />);
    expect(
      screen.getByRole("button", { name: /changer de langue/i })
    ).toBeInTheDocument();
  });

  it("should display current language flag", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText("🇺🇸")).toBeInTheDocument();
  });

  it("should display current language name on larger screens", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("should open dropdown menu when clicked", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const button = screen.getByRole("button", { name: /changer de langue/i });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText("Français")).toBeInTheDocument();
      expect(screen.getByText("Deutsch")).toBeInTheDocument();
      expect(screen.getByText("Nederlands")).toBeInTheDocument();
      expect(screen.getByText("Español")).toBeInTheDocument();
    });
  });

  it("should display all language options", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const button = screen.getByRole("button", { name: /changer de langue/i });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText("Français")).toBeInTheDocument();
      expect(screen.getByText("English")).toBeInTheDocument();
      expect(screen.getByText("Deutsch")).toBeInTheDocument();
      expect(screen.getByText("Nederlands")).toBeInTheDocument();
      expect(screen.getByText("Español")).toBeInTheDocument();
    });
  });

  it("should show check icon for current language", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const button = screen.getByRole("button", { name: /changer de langue/i });
    await user.click(button);

    await waitFor(() => {
      const checkIcons = screen.getAllByTestId("check-icon");
      expect(checkIcons.length).toBeGreaterThan(0);
    });
  });

  it("should call router.push when switching language", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const button = screen.getByRole("button", { name: /changer de langue/i });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText("Français")).toBeInTheDocument();
    });

    const frenchOption = screen.getByText("Français");
    await user.click(frenchOption);

    await waitFor(() => {
      expect(mockGetLanguageSwitchUrl).toHaveBeenCalledWith("fr");
      expect(mockPush).toHaveBeenCalled();
    });
  });

  it("should display all language flags", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const button = screen.getByRole("button", { name: /changer de langue/i });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getAllByText("🇫🇷")).toBeTruthy();
      expect(screen.getAllByText("🇺🇸")).toBeTruthy();
      expect(screen.getByText("🇩🇪")).toBeInTheDocument();
      expect(screen.getByText("🇳🇱")).toBeInTheDocument();
      expect(screen.getByText("🇪🇸")).toBeInTheDocument();
    });
  });

  it("should have outline variant button", () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole("button", { name: /changer de langue/i });
    expect(button).toHaveClass("border");
  });

  it("should have appropriate button size", () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole("button", { name: /changer de langue/i });
    expect(button).toHaveClass("h-9");
  });
});

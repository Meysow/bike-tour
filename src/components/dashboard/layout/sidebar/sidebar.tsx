import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>
      <SidebarNav />
    </div>
  );
}

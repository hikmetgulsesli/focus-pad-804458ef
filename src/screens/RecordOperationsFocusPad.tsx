// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Focus Pad
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bell, CircleAlert, CircleHelp, Database, ListFilter, Pencil, Plus, RefreshCw, Search, Settings, UserPlus, X } from "lucide-react";


export type RecordOperationsFocusPadActionId = "search-1" | "notifications-2" | "settings-3" | "create-record-4" | "filters-5" | "create-record-6" | "retry-load-7" | "close-preview-8" | "edit-9" | "approve-10" | "record-operations-1" | "record-editor-2" | "insights-3" | "settings-4" | "support-5";

export interface RecordOperationsFocusPadProps {
  actions?: Partial<Record<RecordOperationsFocusPadActionId, () => void>>;

}

export function RecordOperationsFocusPad({ actions }: RecordOperationsFocusPadProps) {
  return (
    <>
      {/* TopNavBar for Mobile */}
      <nav className="md:hidden flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 bg-surface-container-lowest text-primary border-b border-outline-variant shadow-none">
      <div className="flex items-center gap-sm">
      <span className="font-headline-md text-headline-md font-bold text-primary">Focus Pad</span>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Search" className="p-sm text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full" type="button" data-action-id="search-1" onClick={actions?.["search-1"]}>
      <Search aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="notifications" className="p-sm text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full" type="button" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="settings" className="p-sm text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <img alt="User profile" className="w-8 h-8 rounded-full ml-sm object-cover border border-outline-variant" data-alt="A small circular user profile picture showing a professional headshot in a bright office environment. Modern clean lighting, realistic details. Indigo subtle background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmRhGHsjXoeSdgu8kJaxK5NBM1eBrTxktuGixdb3gm6VgieMVvnclgA-61T-HAXTIDg0-atksJVKARpE4IXEi3EelTMMXdn8IPL8Auc6WhXbBoZbSR3vgNEbDx5Bepws-uIbElMQd6HL1OLYG5UBEom3LQKWP8U4uzQuJEEFyOVhY9RieQnyu236A6-QxIm6c8k_0LVYrKpMbDVcR3fqTTojjZiAZzwGWgqPUsZ8sEUnJ2hNkZ-bpHUljFbwawpSjOe86ILvJrifA" />
      </div>
      </nav>
      {/* SideNavBar for Desktop */}
      <aside className="hidden md:flex flex-col p-md z-40 bg-surface-container-low text-primary docked left-0 h-full w-64 border-r border-outline-variant shadow-none">
      <div className="flex items-center gap-sm mb-lg px-sm">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
      <Database style={{fontSize: "18px"}} className="icon-fill" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary">Focus Pad</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Utility Management</p>
      </div>
      </div>
      <button aria-label="Create Record" className="mb-lg w-full bg-primary text-on-primary font-body-md text-body-md py-sm px-md rounded-DEFAULT hover:bg-surface-tint transition-colors flex items-center justify-center gap-xs shadow-sm" type="button" data-action-id="create-record-4" onClick={actions?.["create-record-4"]}>
      <Plus style={{fontSize: "20px"}} aria-hidden={true} focusable="false" />
                  Create Record
              </button>
      <nav className="flex-1 flex flex-col gap-xs">
      <a aria-label="Record Operations" className="flex items-center gap-sm px-md py-sm bg-secondary-container text-on-secondary-container font-semibold rounded-lg scale-95 transition-transform duration-150" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps tracking-wider">Record Operations</span>
      </a>
      <a aria-label="Record Editor" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-DEFAULT" href="#" data-action-id="record-editor-2" onClick={(event) => { event.preventDefault(); actions?.["record-editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Record Editor</span>
      </a>
      <a aria-label="Insights" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-DEFAULT" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Insights</span>
      </a>
      </nav>
      <div className="mt-auto pt-md border-t border-outline-variant flex flex-col gap-xs">
      <a aria-label="Settings" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-DEFAULT" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      <a aria-label="Support" className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-DEFAULT" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background">
      {/* Header area */}
      <header className="px-margin-mobile md:px-margin-desktop py-lg border-b border-outline-variant bg-surface-container-lowest flex flex-col gap-md">
      <div className="flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Record Operations</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Summary metrics, primary list/board/table, filters, search, selected item preview.</p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm font-semibold py-sm px-md rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="filters-5" onClick={actions?.["filters-5"]}>
      <ListFilter style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                              Filters
                          </button>
      <button className="bg-primary text-on-primary font-body-sm text-body-sm font-semibold py-sm px-md rounded-DEFAULT hover:bg-surface-tint transition-colors flex items-center gap-xs" type="button" data-action-id="create-record-6" onClick={actions?.["create-record-6"]}>
      <Plus style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                              Create Record
                          </button>
      </div>
      </div>
      {/* Search and Metrics Row */}
      <div className="flex flex-col md:flex-row gap-lg justify-between items-center">
      {/* Search Input */}
      <div className="relative w-full md:w-96">
      <Search style={{fontSize: "20px"}} className="absolute left-sm top-1/2 -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input aria-label="Search records" className="w-full pl-[36px] pr-sm py-[8px] bg-surface-container-lowest border border-outline-variant rounded-DEFAULT focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors font-body-sm text-body-sm text-on-surface placeholder-outline" placeholder="Search records..." type="text" />
      </div>
      {/* Summary Metrics Bento */}
      <div className="flex gap-sm w-full md:w-auto pb-xs md:pb-0 overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm min-w-[120px] flex-shrink-0">
      <p className="font-label-caps text-label-caps text-on-surface-variant">Total Records</p>
      <p className="font-headline-md text-headline-md text-on-surface mt-xs">1,248</p>
      <p className="font-mono-data text-mono-data text-[11px] text-primary mt-xs">↑ 12%</p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm min-w-[120px] flex-shrink-0">
      <p className="font-label-caps text-label-caps text-on-surface-variant">Pending</p>
      <p className="font-headline-md text-headline-md text-on-surface mt-xs">342</p>
      <p className="font-mono-data text-mono-data text-[11px] text-tertiary-container mt-xs">Action Req</p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm min-w-[120px] flex-shrink-0">
      <p className="font-label-caps text-label-caps text-on-surface-variant">Completed</p>
      <p className="font-headline-md text-headline-md text-on-surface mt-xs">890</p>
      <p className="font-mono-data text-mono-data text-[11px] text-on-surface-variant mt-xs">This Week</p>
      </div>
      </div>
      </div>
      </header>
      {/* Content Area: Table and Side Panel */}
      <div className="flex-1 flex overflow-hidden">
      {/* Primary Data Table */}
      <div className="flex-1 overflow-auto p-margin-mobile md:p-margin-desktop">
      {/* Table Container */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant">
      <tr>
      <th className="p-sm font-semibold">ID</th>
      <th className="p-sm font-semibold">Title</th>
      <th className="p-sm font-semibold">Status</th>
      <th className="p-sm font-semibold">Assigned</th>
      <th className="p-sm font-semibold">Updated</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface">
      <tr aria-label="Select record REC-1024" className="border-b border-surface-container-highest hover:bg-surface-container-low cursor-pointer transition-colors bg-surface-container-low">
      <td className="p-sm font-mono-data text-mono-data">REC-1024</td>
      <td className="p-sm font-semibold">Q3 Data Ingestion Pipeline</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-DEFAULT font-label-caps text-[10px]">
      <span className="w-[6px] h-[6px] rounded-full bg-tertiary"></span> Pending
                                          </span>
      </td>
      <td className="p-sm">A. Turing</td>
      <td className="p-sm text-on-surface-variant">2 hours ago</td>
      </tr>
      <tr className="border-b border-surface-container-highest hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="p-sm font-mono-data text-mono-data">REC-1023</td>
      <td className="p-sm font-semibold">User Authentication Audit</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] bg-secondary-container text-on-secondary-container rounded-DEFAULT font-label-caps text-[10px]">
      <span className="w-[6px] h-[6px] rounded-full bg-primary"></span> Completed
                                          </span>
      </td>
      <td className="p-sm">G. Hopper</td>
      <td className="p-sm text-on-surface-variant">1 day ago</td>
      </tr>
      <tr className="border-b border-surface-container-highest hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="p-sm font-mono-data text-mono-data">REC-1022</td>
      <td className="p-sm font-semibold">Server Migration Prep</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] bg-error-container text-on-error-container rounded-DEFAULT font-label-caps text-[10px]">
      <span className="w-[6px] h-[6px] rounded-full bg-error"></span> Blocked
                                          </span>
      </td>
      <td className="p-sm">C. Babbage</td>
      <td className="p-sm text-on-surface-variant">3 days ago</td>
      </tr>
      <tr className="border-b border-surface-container-highest hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="p-sm font-mono-data text-mono-data">REC-1021</td>
      <td className="p-sm font-semibold">Database Optimization</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] bg-secondary-container text-on-secondary-container rounded-DEFAULT font-label-caps text-[10px]">
      <span className="w-[6px] h-[6px] rounded-full bg-primary"></span> Completed
                                          </span>
      </td>
      <td className="p-sm">M. Hamilton</td>
      <td className="p-sm text-on-surface-variant">1 week ago</td>
      </tr>
      {/* More rows to simulate dense data */}
      <tr className="border-b border-surface-container-highest hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="p-sm font-mono-data text-mono-data">REC-1020</td>
      <td className="p-sm font-semibold">Legacy API Deprecation</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-DEFAULT font-label-caps text-[10px]">
      <span className="w-[6px] h-[6px] rounded-full bg-tertiary"></span> Pending
                                          </span>
      </td>
      <td className="p-sm">A. Lovelace</td>
      <td className="p-sm text-on-surface-variant">1 week ago</td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Example Loading State (Hidden by default, shown for demonstration if needed) */}
      {/* <div className="flex flex-col items-center justify-center p-xl h-64 text-on-surface-variant">
                          <RefreshCw  style={{fontSize: "32px"}} className="animate-spin mb-sm" aria-hidden={true} focusable="false" />
                          <p className="font-body-md text-body-md">Loading records...</p>
                      </div> */}
      {/* Example Error State (Hidden by default, shown for demonstration if needed) */}
      {/* <div className="flex flex-col items-center justify-center p-xl h-64 text-on-surface-variant bg-surface-container-lowest border border-outline-variant rounded-xl mt-lg">
                          <CircleAlert  style={{fontSize: "32px"}} className="text-error mb-sm" aria-hidden={true} focusable="false" />
                          <p className="font-headline-md text-headline-md text-on-surface mb-xs">Failed to load records</p>
                          <p className="font-body-sm text-body-sm text-center mb-md">There was a problem connecting to the database. Please try again.</p>
                          <button className="bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm font-semibold py-sm px-md rounded-DEFAULT hover:bg-surface-container-low transition-colors" type="button" data-action-id="retry-load-7" onClick={actions?.["retry-load-7"]}>
                              Retry Load
                          </button>
                      </div> */}
      </div>
      {/* Side Panel (Selected Item Preview) */}
      <div className="hidden lg:flex w-80 bg-surface-container-lowest border-l border-outline-variant flex-col overflow-y-auto z-10 shadow-[-4px_0_12px_rgba(15,23,42,0.02)]">
      <div className="p-md border-b border-outline-variant flex justify-between items-start sticky top-0 bg-surface-container-lowest z-20">
      <div>
      <p className="font-mono-data text-mono-data text-on-surface-variant">REC-1024</p>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-xs">Q3 Data Ingestion Pipeline</h3>
      </div>
      <button aria-label="Close preview" className="text-on-surface-variant hover:text-on-surface transition-colors p-xs" type="button" data-action-id="close-preview-8" onClick={actions?.["close-preview-8"]}>
      <X style={{fontSize: "20px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-md flex-1 flex flex-col gap-md">
      {/* Status Chip */}
      <div>
      <span className="inline-flex items-center gap-xs px-sm py-[4px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-DEFAULT font-label-caps text-label-caps border border-tertiary-fixed-dim">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span> Pending Review
                              </span>
      </div>
      {/* Details Bento */}
      <div className="bg-surface-container-low rounded-lg p-sm border border-outline-variant flex flex-col gap-sm">
      <div className="flex justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Assignee</span>
      <span className="font-body-sm text-body-sm font-semibold">Alan Turing</span>
      </div>
      <div className="flex justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Due Date</span>
      <span className="font-body-sm text-body-sm">Oct 15, 2024</span>
      </div>
      <div className="flex justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Priority</span>
      <span className="font-body-sm text-body-sm text-primary font-semibold">High</span>
      </div>
      </div>
      {/* Description */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-xs">Description</h4>
      <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                                  Update the main data ingestion pipeline to support the new JSON schema requirements from the Q3 API v2 rollout. Requires schema validation updates and backfilling old entries.
                              </p>
      </div>
      {/* Activity Log */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-sm">Recent Activity</h4>
      <div className="flex flex-col gap-sm relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center shrink-0">
      <Pencil className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm"><span className="font-semibold">A. Turing</span> updated description</p>
      <p className="font-label-caps text-label-caps text-on-surface-variant">2 hours ago</p>
      </div>
      </div>
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center shrink-0">
      <UserPlus className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm"><span className="font-semibold">System</span> assigned to A. Turing</p>
      <p className="font-label-caps text-label-caps text-on-surface-variant">1 day ago</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant bg-surface-container-lowest sticky bottom-0 z-20 flex gap-sm">
      <button className="flex-1 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm font-semibold py-sm px-md rounded-DEFAULT hover:bg-surface-container-low transition-colors" type="button" data-action-id="edit-9" onClick={actions?.["edit-9"]}>
                              Edit
                          </button>
      <button className="flex-1 bg-primary text-on-primary font-body-sm text-body-sm font-semibold py-sm px-md rounded-DEFAULT hover:bg-surface-tint transition-colors" type="button" data-action-id="approve-10" onClick={actions?.["approve-10"]}>
                              Approve
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

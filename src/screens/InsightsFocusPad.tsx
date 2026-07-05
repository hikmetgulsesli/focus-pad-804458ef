// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Focus Pad
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, BarChart3, Bell, CircleAlert, CircleHelp, CirclePlus, Database, Download, Gauge, Lightbulb, ListFilter, Pencil, RefreshCw, Settings, TrendingUp, TriangleAlert } from "lucide-react";


export type InsightsFocusPadActionId = "notifications-1" | "settings-2" | "create-record-3" | "filter-4" | "export-summary-5" | "view-all-6" | "review-rules-7" | "adjust-schedule-8" | "record-operations-1" | "record-editor-2" | "insights-3" | "settings-4" | "support-5" | "records-6" | "editor-7" | "insights-8";

export interface InsightsFocusPadProps {
  actions?: Partial<Record<InsightsFocusPadActionId, () => void>>;

}

export function InsightsFocusPad({ actions }: InsightsFocusPadProps) {
  return (
    <>
      {/* Mobile Top Navigation (Hidden on md and up) */}
      <nav className="md:hidden bg-surface-container-lowest flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex items-center gap-2">
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-headline-md font-bold text-primary">Focus Pad</span>
      </div>
      <div className="flex gap-4">
      <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Side Navigation (Visible on md and up) */}
      <nav className="hidden md:flex flex-col p-md z-40 fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant">
      <div className="mb-lg flex items-center gap-3 px-sm">
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-3xl" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary">Focus Pad</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Utility Management</p>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-body-sm text-body-sm py-2 px-4 rounded-lg mb-xl hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
                  Create Record
              </button>
      <ul className="flex flex-col gap-2 flex-grow">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <Database aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Record Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="record-editor-2" onClick={(event) => { event.preventDefault(); actions?.["record-editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Record Editor</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold transition-transform duration-150 transform scale-95" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-auto pt-lg border-t border-outline-variant">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Support</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 ml-0 md:ml-64 p-margin-mobile md:p-margin-desktop overflow-y-auto">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-4">
      <div>
      <h2 className="font-headline-lg text-headline-lg font-bold text-on-background">System Insights</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Overview of record processing and efficiency metrics.</p>
      </div>
      <div className="flex gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT hover:bg-surface-container-low transition-colors text-on-surface font-body-sm text-body-sm font-semibold" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                          Filter
                      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT hover:bg-surface-container-low transition-colors text-on-surface font-body-sm text-body-sm font-semibold" type="button" data-action-id="export-summary-5" onClick={actions?.["export-summary-5"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
                          Export Summary
                      </button>
      </div>
      </header>
      {/* Metrics Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
      {/* Metric 1 */}
      <div className="glass-card rounded-xl p-md flex flex-col justify-between h-32 hover:bg-surface-container-low transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Processing Growth</span>
      <TrendingUp className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg font-bold text-on-background">14.2%</div>
      <div className="font-mono-data text-mono-data text-tertiary-container flex items-center gap-1 mt-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
                              +2.4% vs last week
                          </div>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="glass-card rounded-xl p-md flex flex-col justify-between h-32 hover:bg-surface-container-low transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Avg Efficiency</span>
      <Gauge className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg font-bold text-on-background">98.5%</div>
      <div className="font-mono-data text-mono-data text-tertiary-container flex items-center gap-1 mt-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
                              +0.1% vs last week
                          </div>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="glass-card rounded-xl p-md flex flex-col justify-between h-32 hover:bg-surface-container-low transition-colors">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Error Rate</span>
      <CircleAlert className="text-error" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg font-bold text-on-background">0.4%</div>
      <div className="font-mono-data text-mono-data text-error flex items-center gap-1 mt-1">
      <ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" />
                              -0.2% vs last week
                          </div>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
      {/* Left Column: Activity & Distribution */}
      <div className="lg:col-span-2 flex flex-col gap-lg">
      {/* State Distribution */}
      <section className="glass-card rounded-xl p-lg">
      <h3 className="font-headline-md text-headline-md font-bold mb-md">Record Status Distribution</h3>
      <div className="flex h-8 w-full rounded-DEFAULT overflow-hidden mb-sm">
      <div className="bg-primary h-full" style={{width: "65%"}}></div>
      <div className="bg-primary-container h-full" style={{width: "25%"}}></div>
      <div className="bg-error-container h-full" style={{width: "10%"}}></div>
      </div>
      <div className="flex gap-4 font-body-sm text-body-sm text-on-surface-variant mt-sm">
      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-primary"></div> Processed (65%)</div>
      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-primary-container"></div> Pending (25%)</div>
      <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-error-container"></div> Failed (10%)</div>
      </div>
      </section>
      {/* Recent Activity */}
      <section className="glass-card rounded-xl p-lg flex-1">
      <div className="flex justify-between items-center mb-md">
      <h3 className="font-headline-md text-headline-md font-bold">Recent Activity</h3>
      <button className="text-primary font-body-sm text-body-sm hover:underline" type="button" data-action-id="view-all-6" onClick={actions?.["view-all-6"]}>View All</button>
      </div>
      <ul className="flex flex-col gap-sm">
      <li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-DEFAULT transition-colors border-b border-outline-variant border-opacity-30 last:border-0">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm font-semibold">Batch sync completed</p>
      <p className="font-label-caps text-label-caps text-on-surface-variant">450 records processed</p>
      </div>
      </div>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">10m ago</span>
      </li>
      <li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-DEFAULT transition-colors border-b border-outline-variant border-opacity-30 last:border-0">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-error">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm font-semibold">Validation error detected</p>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Record ID #8921</p>
      </div>
      </div>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">1h ago</span>
      </li>
      <li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-DEFAULT transition-colors border-b border-outline-variant border-opacity-30 last:border-0">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
      <CirclePlus className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm font-semibold">New schema deployed</p>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Version 2.4.1</p>
      </div>
      </div>
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">3h ago</span>
      </li>
      </ul>
      </section>
      </div>
      {/* Right Column: Actionable Hints */}
      <div className="lg:col-span-1">
      <section className="glass-card rounded-xl p-lg h-full bg-surface-container-lowest">
      <div className="flex items-center gap-2 mb-md">
      <Lightbulb className="text-tertiary-container" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md font-bold text-tertiary-container">Actionable Insights</h3>
      </div>
      <div className="flex flex-col gap-md">
      {/* Hint 1 */}
      <div className="p-md bg-surface-container-low rounded-lg border border-outline-variant border-opacity-50">
      <h4 className="font-body-sm text-body-sm font-semibold text-on-background mb-1">Review Failed Records</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">10% of recent records failed validation. Consider reviewing the parsing rules for external feeds.</p>
      <button className="text-primary font-label-caps text-label-caps uppercase font-bold hover:underline" type="button" data-action-id="review-rules-7" onClick={actions?.["review-rules-7"]}>Review Rules</button>
      </div>
      {/* Hint 2 */}
      <div className="p-md bg-surface-container-low rounded-lg border border-outline-variant border-opacity-50">
      <h4 className="font-body-sm text-body-sm font-semibold text-on-background mb-1">Optimize Sync Schedule</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Peak processing times are causing minor delays. Shifting sync schedules to off-peak hours could improve efficiency.</p>
      <button className="text-primary font-label-caps text-label-caps uppercase font-bold hover:underline" type="button" data-action-id="adjust-schedule-8" onClick={actions?.["adjust-schedule-8"]}>Adjust Schedule</button>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      {/* Mobile Bottom Navigation (Visible on mobile, hidden md up) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-outline-variant flex justify-around py-3 px-2 z-50 shadow-[0_-4px_12px_rgba(15,23,42,0.05)]">
      <a className="flex flex-col items-center gap-1 text-on-surface-variant w-16" href="#" data-action-id="records-6" onClick={(event) => { event.preventDefault(); actions?.["records-6"]?.(); }}>
      <Database className="text-2xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[10px] truncate w-full text-center">Records</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant w-16" href="#" data-action-id="editor-7" onClick={(event) => { event.preventDefault(); actions?.["editor-7"]?.(); }}>
      <Pencil className="text-2xl" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[10px] truncate w-full text-center">Editor</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-primary w-16" href="#" data-action-id="insights-8" onClick={(event) => { event.preventDefault(); actions?.["insights-8"]?.(); }}>
      <div className="bg-secondary-container px-4 py-1 rounded-full">
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-caps text-[10px] truncate w-full text-center font-bold">Insights</span>
      </a>
      </nav>
    </>
  );
}

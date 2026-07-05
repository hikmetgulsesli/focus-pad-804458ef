// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Focus Pad
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bell, CircleAlert, CircleHelp, Pencil, Save, Search, Settings } from "lucide-react";


export type RecordEditorFocusPadActionId = "create-record-1" | "cancel-2" | "save-record-3" | "record-operations-1" | "record-editor-2" | "insights-3" | "settings-4" | "support-5";

export interface RecordEditorFocusPadProps {
  actions?: Partial<Record<RecordEditorFocusPadActionId, () => void>>;

}

export function RecordEditorFocusPad({ actions }: RecordEditorFocusPadProps) {
  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="bg-surface-container-low border-r border-outline-variant docked left-0 h-full w-64 fixed left-0 top-0 h-full flex flex-col p-md z-40 hidden md:flex">
      <div className="mb-lg">
      <h1 className="font-headline-md text-headline-md font-bold text-primary">Focus Pad</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Utility Management</p>
      </div>
      <button className="bg-primary text-on-primary font-body-sm text-body-sm font-semibold rounded-lg py-sm px-md mb-lg hover:bg-primary-container transition-colors" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>Create Record</button>
      <ul className="space-y-sm flex-1">
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Record Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm bg-secondary-container text-on-secondary-container font-semibold rounded-lg scale-95 transition-transform duration-150" href="#" data-action-id="record-editor-2" onClick={(event) => { event.preventDefault(); actions?.["record-editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Record Editor</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Insights</span>
      </a>
      </li>
      </ul>
      <ul className="space-y-sm mt-auto pt-lg border-t border-outline-variant">
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Support</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
      {/* Mobile Top Nav */}
      <header className="bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 md:hidden">
      <h1 className="font-headline-lg text-headline-lg font-bold text-primary">Focus Pad</h1>
      <div className="flex items-center gap-md">
      <Search className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <Bell className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <Settings className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Editor Canvas */}
      <div className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
      <div className="max-w-3xl mx-auto">
      {/* Header & Unsaved Changes */}
      <div className="flex justify-between items-end mb-lg pb-md border-b border-outline-variant">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Edit Record</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Update the details for this entry below.</p>
      </div>
      <div className="flex items-center gap-xs text-error">
      <CircleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm font-semibold">Unsaved changes</span>
      </div>
      </div>
      {/* Form Layout */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
      <form className="space-y-lg">
      {/* Title Field (Error State Example) */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface mb-xs" htmlFor="record-title">Title <span className="text-error">*</span></label>
      <input aria-invalid="true" className="w-full bg-surface-container-lowest border border-error rounded-DEFAULT p-sm font-body-md text-body-md text-on-background input-focus-ring" id="record-title" name="record-title" placeholder="Enter record title" type="text" />
      <p className="font-body-sm text-body-sm text-error mt-xs">Title is required.</p>
      </div>
      {/* Description Field */}
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface mb-xs" htmlFor="record-description">Description</label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm font-body-md text-body-md text-on-background input-focus-ring resize-y" id="record-description" name="record-description" placeholder="Detailed description of the record..." rows={4}></textarea>
      </div>
      {/* Status & Tags Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface mb-xs" htmlFor="record-status">Status <span className="text-error">*</span></label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm font-body-md text-body-md text-on-background input-focus-ring appearance-none" id="record-status" name="record-status">
      <option value="draft">Draft</option>
      <option selected={true} value="active">Active</option>
      <option value="archived">Archived</option>
      </select>
      </div>
      <div>
      <label className="block font-label-caps text-label-caps text-on-surface mb-xs" htmlFor="record-tags">Tags (comma separated)</label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm font-body-md text-body-md text-on-background input-focus-ring" id="record-tags" name="record-tags" type="text" defaultValue="Q3, Analytics, High Priority" />
      <div className="flex gap-xs mt-sm flex-wrap">
      <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded-sm border border-outline-variant">Q3</span>
      <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded-sm border border-outline-variant">Analytics</span>
      <span className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-2 py-1 rounded-sm border border-primary-fixed-dim">High Priority</span>
      </div>
      </div>
      </div>
      </form>
      </div>
      {/* Action Bar */}
      <div className="flex justify-end gap-md mt-lg">
      <button className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm font-semibold rounded-lg py-sm px-lg border border-outline-variant hover:bg-surface-container-low transition-colors" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>Cancel</button>
      <button className="bg-primary text-on-primary font-body-sm text-body-sm font-semibold rounded-lg py-sm px-lg hover:bg-primary-container transition-colors flex items-center gap-xs" type="button" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Record
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

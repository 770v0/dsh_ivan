/**
 * Alias-token pairs for the two base palettes.
 *
 * The theme service folds these over the active `light`/`dark` snapshot, so a
 * user who switches appearance (or follows the OS) keeps the same skin.
 */
const pair = (light, dark) => ({ light, dark });

export const tokens = {
  // canvas
  "--dsw-alias-bg-base": pair("#f4f0e8", "#07090f"),
  "--dsw-alias-bg-layer-1": pair("#fbf8f2", "#0d111a"),
  "--dsw-alias-bg-layer-2": pair("#f0ebe2", "#121723"),
  "--dsw-alias-bg-layer-3": pair("#e8e2d8", "#171d2a"),
  "--dsw-alias-bg-overlay": pair("#fffdf8", "#151a25"),
  "--dsw-alias-bg-module-platform": pair("#efe9df", "#10141e"),
  "--dsw-alias-bg-document-preview": pair("#f8f4ed", "#0b0f17"),
  "--dsw-alias-label-document-preview": pair("#5b5e69", "#b9c1d0"),

  // typography
  "--dsw-alias-label-primary": pair("#1a1b21", "#edf1f8"),
  "--dsw-alias-label-primary-bluish": pair("#1a1b21", "#edf1f8"),
  "--dsw-alias-label-secondary": pair("#5b5e69", "#b9c1d0"),
  "--dsw-alias-label-tertiary": pair("#7c7f8a", "#8b95a8"),
  "--dsw-alias-label-caption": pair("#9497a0", "#6f7889"),
  "--dsw-alias-label-dimmed": pair("#c9c3b8", "#2a3140"),
  "--dsw-alias-label-shimmer": pair("rgba(26,27,33,.28)", "rgba(237,241,248,.42)"),

  // lines
  "--dsw-alias-border-l1": pair("rgba(26,27,33,.07)", "rgba(232,236,242,.07)"),
  "--dsw-alias-border-l2": pair("rgba(26,27,33,.12)", "rgba(232,236,242,.12)"),
  "--dsw-alias-border-l3": pair("rgba(26,27,33,.16)", "rgba(232,236,242,.16)"),
  "--dsw-alias-border-l4": pair("rgba(26,27,33,.22)", "rgba(232,236,242,.22)"),

  // accent
  "--dsw-alias-button-primary-fill": pair("#b81c31", "#c92238"),
  "--dsw-alias-button-primary-hover": pair("#9f1628", "#da3a4e"),
  "--dsw-alias-button-primary-dimmed": pair("#f0d9dc", "#33121a"),
  "--dsw-alias-button-info-fill": pair("#b81c31", "#c92238"),
  "--dsw-alias-button-info-hover": pair("#9f1628", "#da3a4e"),
  "--dsw-alias-button-elevated-fill": pair("rgba(255,253,248,.8)", "rgba(20,25,36,.82)"),
  "--dsw-alias-button-floating-fill": pair("rgba(255,253,248,.9)", "rgba(20,25,36,.9)"),
  "--dsw-alias-button-floating-hover": pair("rgba(26,27,33,.06)", "rgba(255,255,255,.08)"),

  // interaction
  "--dsw-alias-interactive-bg-hover": pair("rgba(26,27,33,.055)", "rgba(255,255,255,.055)"),
  "--dsw-alias-interactive-bg-hover-solid": pair("#eae4da", "#161b26"),
  "--dsw-alias-interactive-bg-active": pair("rgba(26,27,33,.1)", "rgba(255,255,255,.1)"),
  "--dsw-alias-state-business-primary": pair("#2e8b7a", "#8fe3d2"),
  "--dsw-alias-state-business-tertiary": pair("rgba(46,139,122,.12)", "rgba(143,227,210,.12)"),
  "--dsw-alias-link": pair("#2e8b7a", "#8fe3d2"),

  // messages and markdown
  "--dsw-specific-bubble": pair("rgba(184,28,49,.06)", "rgba(201,34,56,.09)"),
  "--dsw-specific-bubble-highlight": pair("rgba(184,28,49,.1)", "rgba(201,34,56,.13)"),
  "--dsw-alias-markdown-code-block": pair("#f8f4ed", "#06080d"),
  "--dsw-alias-markdown-code-block-banner": pair("#efe9de", "#0b0f17"),
  "--dsw-alias-markdown-inline-code": pair("rgba(46,139,122,.1)", "rgba(143,227,210,.1)"),
  "--dsw-alias-markdown-citation": pair("#f1ece3", "#141b28"),
  "--dsw-alias-markdown-tag": pair("#efe9de", "#151c29"),
  "--dsw-alias-markdown-placeholder": pair("#eee8de", "#121722"),

  // chrome
  "--dsw-specific-input-major": pair("rgba(255,253,248,.82)", "rgba(13,18,28,.9)"),
  "--dsw-specific-selector": pair("#e8e2d8", "#151b27"),
  "--dsw-specific-sidebar-fill": pair("#ede7dd", "#090c13"),
  "--dsw-specific-sidebar-nav-item-active": pair("rgba(184,28,49,.08)", "rgba(201,34,56,.1)"),
  "--dsw-specific-sidebar-nav-item-active-accent": pair("rgba(184,28,49,.38)", "rgba(201,34,56,.42)"),
  "--dsw-specific-sidebar-nav-item-hover": pair("rgba(26,27,33,.05)", "rgba(255,255,255,.05)"),

  // menus and overlays
  "--dsw-menu-surface-fill": pair("rgba(255,253,248,.88)", "rgba(10,13,20,.88)"),
  "--dsw-alias-menu-group-header-fill": pair("rgba(255,253,248,.95)", "rgba(10,13,20,.95)"),
  "--dsw-specific-menu": pair("rgba(255,253,248,.94)", "rgba(10,13,20,.94)"),
  "--dsw-alias-toast-bg": pair("#2a2b31", "#141924"),
  "--dsw-alias-toast-label": pair("#fffdf8", "#edf1f8"),
  "--dsw-alias-tooltip-bg": pair("#2a2b31", "#141924"),
  "--dsw-alias-switch-thumb": pair("#ffffff", "#edf1f8"),
  "--dsw-alias-scrollbar-bg-l1": pair("rgba(184,28,49,.22)", "rgba(201,34,56,.26)"),
  "--dsw-alias-scrollbar-bg-l2": pair("rgba(184,28,49,.22)", "rgba(201,34,56,.26)"),
  "--dsw-alias-scrollbar-hover-l1": pair("rgba(184,28,49,.36)", "rgba(201,34,56,.40)"),
  "--dsw-alias-scrollbar-hover-l2": pair("rgba(184,28,49,.36)", "rgba(201,34,56,.40)"),
  "--dsw-alias-turn-trigger-bg": pair("rgba(184,28,49,.04)", "rgba(201,34,56,.06)"),
  "--dsw-alias-turn-trigger-bg-hover": pair("rgba(184,28,49,.07)", "rgba(201,34,56,.09)"),

  // semantic status
  "--dsw-alias-state-success-primary": pair("#2e8b7a", "#5fd39a"),
  "--dsw-alias-state-success-secondary": pair("#4aa896", "#8fe3d2"),
  "--dsw-alias-state-success-tertiary": pair("rgba(46,139,122,.12)", "rgba(95,211,154,.12)"),
  "--dsw-alias-state-warn-primary": pair("#b4761e", "#e8b45a"),
  "--dsw-alias-state-warn-secondary": pair("#c98a2c", "#f0c878"),
  "--dsw-alias-state-warn-tertiary": pair("rgba(180,118,30,.12)", "rgba(232,180,90,.12)"),
  "--dsw-alias-state-error-primary": pair("#c41e35", "#f0566a"),
  "--dsw-alias-state-error-secondary": pair("#d94055", "#ff7d8c"),
  "--dsw-alias-state-idle-primary": pair("#c9c3b8", "#3a4252"),
};

# @no-comply/solid-accessibility — Modules

_Generated: 2026-06-25 | by: sub-agent_

Module tree excluding barrel index files and empty stub directories.

```
src/
├── attributes/
│   └── types.ts                        — ARIA attribute value type aliases
├── role/
│   └── types.ts                        — ARIA role name union types
├── tag/
│   └── types.ts                        — HTML tag name union types per role
├── controllers/
│   ├── alert/
│   │   ├── types.ts                    — AriaAlertProps, AriaAlertAPI
│   │   ├── constants.ts                — ARIA_ALERT_PROPS
│   │   └── createAriaAlert.ts          — createAriaAlert factory
│   ├── busy/
│   │   ├── types.ts                    — AriaBusyProps, AriaBusyAPI
│   │   ├── constants.ts                — ARIA_BUSY_PROPS
│   │   └── createAriaBusy.ts           — createAriaBusy factory
│   ├── dialog/
│   │   ├── types.ts                    — AriaDialogProps, AriaDialogAPI
│   │   ├── constants.ts                — ARIA_DIALOG_PROPS
│   │   └── createAriaDialog.ts         — createAriaDialog factory
│   ├── feedback/
│   │   ├── types.ts                    — AriaFeedbackProps, AriaFeedbackAPI
│   │   ├── constants.ts                — ARIA_FEEDBACK_PROPS
│   │   └── createAriaFeedback.ts       — createAriaFeedback factory
│   ├── form/
│   │   ├── types.ts                    — AriaFormProps, AriaFormAPI
│   │   ├── constants.ts                — ARIA_FORM_PROPS
│   │   └── createAriaForm.ts           — createAriaForm factory
│   ├── group/
│   │   ├── types.ts                    — AriaGroupProps, AriaGroupAPI
│   │   ├── constants.ts                — ARIA_GROUP_PROPS
│   │   └── createAriaGroup.ts          — createAriaGroup factory
│   ├── label/
│   │   ├── types.ts                    — AriaLabelledProps, AriaLabelledAPI
│   │   ├── constants.ts                — ARIA_LABELLED_PROPS
│   │   └── createAriaLabelled.ts       — createAriaLabelled factory
│   ├── list/
│   │   ├── types.ts                    — AriaListProps, AriaListAPI
│   │   ├── constants.ts                — ARIA_LIST_PROPS
│   │   └── createAriaList.ts           — createAriaList factory
│   ├── listitem/
│   │   ├── types.ts                    — AriaListItemProps, AriaListItemAPI
│   │   ├── constants.ts                — ARIA_LISTITEM_PROPS
│   │   └── createAriaListItem.ts       — createAriaListItem factory
│   ├── live/
│   │   ├── types.ts                    — AriaLiveProps, AriaLiveAPI
│   │   ├── constants.ts                — ARIA_LIVE_PROPS
│   │   └── createAriaLive.ts           — createAriaLive factory
│   ├── loading/                        — (empty stub, not implemented)
│   ├── log/
│   │   ├── types.ts                    — AriaLogProps, AriaLogAPI
│   │   ├── constants.ts                — ARIA_LOG_PROPS
│   │   └── createAriaLog.ts            — createAriaLog factory
│   ├── menu/
│   │   ├── types.ts                    — AriaMenuProps, AriaMenuAPI
│   │   ├── constants.ts                — ARIA_MENU_PROPS
│   │   └── createAriaMenu.ts           — createAriaMenu factory
│   ├── menuitem/
│   │   ├── types.ts                    — AriaMenuItemProps, AriaMenuItemAPI
│   │   ├── constants.ts                — ARIA_MENUITEM_PROPS
│   │   └── createAriaMenuItem.ts       — createAriaMenuItem factory
│   ├── pressable/
│   │   ├── types.ts                    — AriaPressableProps, AriaPressableAPI
│   │   ├── constants.ts                — ARIA_PRESSABLE_PROPS
│   │   └── createAriaPressable.ts      — createAriaPressable factory
│   ├── radiogroup/
│   │   ├── types.ts                    — AriaRadioGroupProps, AriaRadioGroupAPI
│   │   ├── constants.ts                — ARIA_RADIOGROUP_PROPS
│   │   └── createAriaRadioGroup.ts     — createAriaRadioGroup factory
│   ├── region/
│   │   ├── types.ts                    — AriaRegionProps, AriaRegionAPI<T>
│   │   ├── constants.ts                — ARIA_REGION_PROPS
│   │   └── createAriaRegion.ts         — createAriaRegion factory
│   ├── separator/
│   │   ├── types.ts                    — AriaSeparatorProps, AriaSeparatorAPI
│   │   ├── constants.ts                — ARIA_SEPRATOR_PROPS (has typo)
│   │   └── createAriaSeparator.ts      — createAriaSeparator factory
│   ├── status/
│   │   ├── types.ts                    — AriaStatusProps, AriaStatusAPI
│   │   ├── constants.ts                — ARIA_STATUS_PROPS
│   │   └── createAriaStatus.ts         — createAriaStatus factory
│   ├── switch/
│   │   ├── types.ts                    — AriaSwitchProps, AriaSwitchAPI
│   │   ├── constants.ts                — ARIA_SWITCH_PROPS
│   │   └── createAriaSwitch.ts         — createAriaSwitch factory
│   ├── tree/
│   │   ├── types.ts                    — AriaTreeProps, AriaTreeAPI
│   │   ├── constants.ts                — ARIA_TREE_PROPS
│   │   └── createAriaTree.ts           — createAriaTree factory
│   └── treeitem/
│       ├── types.ts                    — AriaTreeItemProps, AriaTreeItemAPI
│       ├── constants.ts                — ARIA_TREEITEM_PROPS
│       └── createAriaTreeItem.ts       — createAriaTreeItem factory
├── scss/
│   └── mixins/
│       └── visibility.scss             — visually-hidden CSS mixin for screen-reader-only content
└── index.ts                            — (barrel — excluded from this tree)
```

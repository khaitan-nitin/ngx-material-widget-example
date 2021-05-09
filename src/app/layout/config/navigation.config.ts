import { Navigation, NavigationPannel, SubTextType } from 'ngx-material-widget/lib/navigation/model';

export const navigation: Array<Navigation> = [
  {
    name: "Button Example",
    icon: "smart_button",
    route: "",
    children: [
      {
        name: "Button Types",
        icon: "layers",
        route: "/example/component/button/button-type",
      },
      {
        name: "Button Sizes",
        icon: "layers",
        route: "/example/component/button/button-size",
      },
      {
        name: "Button Colors",
        icon: "layers",
        route: "/example/component/button/button-color",
      },
      {
        name: "Button with Badge",
        icon: "layers",
        route: "/example/component/button/button-with-badge",
      },
      {
        name: "Button with Width",
        icon: "layers",
        route: "/example/component/button/button-with-width",
      },
    ]
  },
  {
    name: "Field Example",
    icon: "power_input",
    route: "",
    children: [
      {
        name: "Autocomplete",
        icon: "money",
        route: "/example/component/field/autocomplete",
      },
      {
        name: "Calendar",
        icon: "money",
        route: "/example/component/field/calendar",
      },
      {
        name: "Checkbox",
        icon: "money",
        route: "/example/component/field/checkbox",
      },
      {
        name: "Chip",
        icon: "money",
        route: "/example/component/field/chip",
      },
      {
        name: "Dropdown",
        icon: "money",
        route: "/example/component/field/dropdown",
      },
      {
        name: "Html Editor",
        icon: "money",
        route: "/example/component/field/html-editor",
      },
      {
        name: "Multi Image",
        icon: "money",
        route: "/example/component/field/multi-image",
      },
      {
        name: "Paragraph",
        icon: "money",
        route: "/example/component/field/paragraph",
      },
      {
        name: "Radio Button",
        icon: "money",
        route: "/example/component/field/radio-button",
      },
      {
        name: "Textarea",
        icon: "money",
        route: "/example/component/field/textarea",
      },
      {
        name: "Text Box",
        icon: "money",
        route: "/example/component/field/textbox",
      }
    ]
  },
  {
    name: "Form Example",
    icon: "dynamic_form",
    route: "",
    children: [
      {
        name: "Basic Form",
        icon: "view_module",
        route: "/example/component/form/basic-form",
      },
      {
        name: "With Section",
        icon: "horizontal_split",
        route: "/example/component/form/form-with-section",
      },
      {
        name: "Section Expandable",
        icon: "vertical_split",
        route: "/example/component/form/form-section-expandable",
      },
      {
        name: "Header Variations",
        icon: "view_agenda",
        route: "/example/component/form/form-header-variation",
      },
      {
        name: "Display in Columns",
        icon: "view_column",
        route: "/example/component/form/form-display-in-column",
      },
      {
        name: "Add More in Field",
        icon: "library_add",
        route: "/example/component/form/form-add-more-in-field",
      },
      {
        name: "Action Custom Layout",
        icon: "line_style",
        route: "/example/component/form/form-action-custom-layout",
      },
      {
        name: "With Help",
        icon: "question_answer",
        route: "/example/component/form/form-with-help",
      },
      {
        name: "As Card",
        icon: " view_module",
        route: "/example/component/form/form-as-card",
      },
      {
        name: "In Modal",
        icon: " book_online",
        route: "/example/component/form/form-in-modal",
      },
    ]
  },
  {
    name: "Static List Example",
    icon: "list_alt",
    route: "",
    children: [
      {
        name: "List with filter",
        icon: "find_in_page",
        route: "/example/component/list/static-list-with-filter",
      },
      {
        name: "List without filter",
        icon: "list_alt",
        route: "/example/component/list/static-list-without-filter",
      },
      {
        name: "List page wise",
        icon: "flip_to_back",
        route: "/example/component/list/static-list-page-wise",
      },
    ]
  },
  {
    name: "List Example",
    icon: "list",
    route: "",
    children: [
      //   {
      //     name: "Generic",
      //     icon: "zoom_out",
      //     route: "",
      //     children: [
      {
        name: "Dynamic List",
        icon: "line_weight",
        route: "/example/component/list/dynamic-list",
      },
      {
        name: "Editable List",
        icon: "edit_note",
        route: "/example/component/list/editable-list",
      },
      {
        name: "Mobile Layout",
        icon: "view_quilt",
        route: "/example/component/list/list-mobile-layout",
      },
      {
        name: "Custom Layout",
        icon: "lens_blur",
        route: "/example/component/list/list-custom-layout",
      },
      //   ]
      // },
      //   {
      //     name: "Look & Feel",
      //     icon: "zoom_out",
      //     route: "",
      //     children: [
      {
        name: "Header variation",
        icon: "segment",
        route: "/example/component/list/list-header-variation",
      },
      {
        name: "Shicky Header",
        icon: "align_vertical_top",
        route: "/example/component/list/list-sticky-header",
      },
      {
        name: "List - 100% scaling",
        icon: "zoom_out_map",
        route: "/example/component/list/list-without-card",
      },
      {
        name: "List without column heading",
        icon: "drag_handle",
        route: "/example/component/list/list-without-column-heading",
      },
      {
        name: "List without footer",
        icon: "short_text",
        route: "/example/component/list/list-without-footer",
      },
      {
        name: "List without header",
        icon: "legend_toggle",
        route: "/example/component/list/list-without-header",
      },
      {
        name: "Column custom width",
        icon: "waterfall_chart",
        route: "/example/component/list/list-column-width",
      },
      {
        name: "Alternate row highlight",
        icon: "format_align_center",
        route: "/example/component/list/list-alternate-row-shade",
      },
      {
        name: "Hover row highlight",
        icon: "menu_open",
        route: "/example/component/list/list-hover-row-shade",
      },
      //   ]
      // },
      // {
      //   name: "Nested Table",
      //   icon: "zoom_out",
      //   route: "",
      //   children: [
      {
        name: "List with nested form",
        icon: "blur_circular",
        route: "/example/component/list/list-with-nested-form",
      },
      {
        name: "List with nested list",
        icon: "blur_linear",
        route: "/example/component/list/list-with-nested-list",
      },
      //   ]
      // },
      // {
      //   name: "Row Level",
      //   icon: "zoom_out",
      //   route: "",
      //   children: [
      {
        name: "Row selector",
        icon: "format_indent_increase",
        route: "/example/component/list/list-row-selectable",
      },
      {
        name: "Row background color",
        icon: "linear_scale",
        route: "/example/component/list/list-custom-row-bg-color",
      },
      {
        name: "Row text color",
        icon: "margin",
        route: "/example/component/list/list-custom-row-text-color",
      },
      {
        name: "Tooltip on hover",
        icon: "insert_comment",
        route: "/example/component/list/list-row-hover",
      },
      {
        name: "Action in dropdown",
        icon: "more_vert",
        route: "/example/component/list/list-action-button-in-dropdown",
      },
      {
        name: "Disable row",
        icon: "play_disabled",
        route: "/example/component/list/list-diabled-row",
      },
      //   ]
      // },
      // {
      //   name: "Column Level",
      //   icon: "zoom_out",
      //   route: "",
      //   children: [
      {
        name: "Customize columns",
        icon: "stacked_bar_chart",
        route: "/example/component/list/list-with-column-selector",
      },
      {
        name: "Customize sorting",
        icon: "sort_by_alpha",
        route: "/example/component/list/list-with-column-sort",
      },
      {
        name: "Column background color",
        icon: "linear_scale",
        route: "/example/component/list/list-custom-column-bg-color",
      },
      {
        name: "Column text color",
        icon: "margin",
        route: "/example/component/list/list-custom-column-text-color",
      },
      {
        name: "Column - custom layout",
        icon: "app_registration",
        route: "/example/component/list/list-column-custom-layout",
      },
      //   ]
      // },
      // {
      //   name: "Pagination",
      //   icon: "zoom_out",
      //   route: "",
      //   children: [
      {
        name: "Pagination - all rows",
        icon: "pages",
        route: "/example/component/list/list-pagination-all-rows",
      },
      {
        name: "Pagination - infinite scroll",
        icon: "fit_screen",
        route: "/example/component/list/list-pagination-infinite-scroll",
      },
      {
        name: "Pagination - page wise",
        icon: "last_page",
        route: "/example/component/list/list-pagination-page-wise",
      },
      //   ]
      // },
    ],
  },
  {
    name: "CRUD Example",
    icon: "list",
    route: "",
    children: [
      {
        name: "Basic Crud",
        icon: "line_weight",
        route: "/example/component/crud/basic-crud",
      },
      // {
      //   name: "Search - Bottom Sheet",
      //   icon: "line_weight",
      //   route: "/example/component/crud/crud-search-bottom-sheet",
      // },
      // {
      //   name: "Search - Right Modal",
      //   icon: "line_weight",
      //   route: "/example/component/crud/crud-search-right-modal",
      // },
      // {
      //   name: "Search - Left Modal",
      //   icon: "line_weight",
      //   route: "/example/component/crud/crud-search-left-modal",
      // },
      {
        name: "Edit Form In Accordion",
        icon: "line_weight",
        route: "/example/component/crud/crud-form-accordion",
      },
      {
        name: "Form In Accordion - Header Variation",
        icon: "line_weight",
        route: "/example/component/crud/crud-form-accordion-header-variation",
      },
      {
        name: "Custom Component Above Form",
        icon: "line_weight",
        route: "/example/component/crud/crud-form-custom-component-above",
      },
      {
        name: "Custom Component Below Form",
        icon: "line_weight",
        route: "/example/component/crud/crud-form-custom-component-below",
      },
      {
        name: "Form In Tab",
        icon: "line_weight",
        route: "/example/component/crud/crud-form-tab",
      },
      {
        name: "Form In Tab (Header Variation)",
        icon: "line_weight",
        route: "/example/component/crud/crud-form-tab-header-variation",
      },
      {
        name: "Custom Component Above List",
        icon: "line_weight",
        route: "/example/component/crud/crud-list-custom-component-above",
      },
      {
        name: "Custom Component Below List",
        icon: "line_weight",
        route: "/example/component/crud/crud-list-custom-component-below",
      },
    ]
  }
];

export const navigationPannel: NavigationPannel = {
  templateKey: '',
  canCollapse: true,
  defaultCollapse: false,
  navigations: navigation,
  footer: {
    logout: false,
  },
};
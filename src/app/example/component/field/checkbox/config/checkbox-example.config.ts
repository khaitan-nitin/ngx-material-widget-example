import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode, DisplayType } from 'ngx-material-widget';

export const checkboxExample: Form = {
    identifier: "checkboxExampleForm",
    header: {
        title: "Checkbox Attributes",
        actions: [
            {
                identifier: "CLASSIC",
                type: ButtonType.FLAT,
                label: "Classic Display",
                color: ButtonColor.ASCENT,
                size: ButtonSize.SMALL,
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
            },
            {
                identifier: "LIST",
                type: ButtonType.FLAT,
                label: "Modern Display",
                color: ButtonColor.ASCENT,
                size: ButtonSize.SMALL,
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
            }
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicCheckbox",
                label: "Basic",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
            }
        },
        {
            field: {
                key: "checkboxWithoutLabel",
                label: "",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
            }
        },
        {
            field: {
                key: "checkbox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "checkboxReadOnly",
                label: "Readonly",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                isReadOnly: true
            }
        },
        {
            field: {
                key: "checkboxWithImage",
                label: "With Image in Option",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India",
                        "description": "India is above Indian Ocean",
                        image: "/assets/images/avatar.png"
                    },
                    {
                        "key": "australia",
                        "value": "Australia",
                        "description": "Australia is in southern hemisphere",
                        image: "/assets/images/avatar.png"
                    },
                ],
                value: ["india"]
            }
        },
        {
            field: {
                key: "checkboxWithDisabledOption",
                label: "With Disabled Option",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India",
                        "description": "India is above Indian Ocean",
                        image: "/assets/images/avatar.png",
                        disabled: true
                    },
                    {
                        "key": "australia",
                        "value": "Australia",
                        "description": "Australia is in southern hemisphere",
                        image: "/assets/images/avatar.png"
                    },
                ],
                value: ["india"]
            }
        },
        {
            field: {
                key: "checkboxWithSelectedOption",
                label: "With Selected Option",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India",
                        "description": "India is above Indian Ocean",
                        image: "/assets/images/avatar.png",
                        selected: true
                    },
                    {
                        "key": "australia",
                        "value": "Australia",
                        "description": "Australia is in southern hemisphere",
                        image: "/assets/images/avatar.png"
                    },
                ],
                value: ["india"]
            }
        },
        {
            field: {
                key: "checkboxWithShowAll",
                label: "With Show All Option",
                type: FieldType.CHECKBOX,
                showLess: 2,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                    {
                        "key": "new",
                        "value": "New Zealand"
                    },
                    {
                        "key": "canada",
                        "value": "Canada",
                    },
                    {
                        "key": "austria",
                        "value": "Austria",
                    }
                ],
            }
        },
        {
            field: {
                key: "checkboxWithShowAllWithCustomLabel",
                label: "With Show All Option (With Custom Label)",
                type: FieldType.CHECKBOX,
                showLess: 2,
                showAllLabel: "Display All",
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                    {
                        "key": "new",
                        "value": "New Zealand"
                    },
                    {
                        "key": "canada",
                        "value": "Canada",
                    },
                    {
                        "key": "austria",
                        "value": "Austria",
                    }
                ],
            }
        },
        {
            field: {
                key: "checkboxWithInlineDisplay",
                label: "With Inline Display",
                type: FieldType.CHECKBOX,
                displayType: DisplayType.INLINE,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                    {
                        "key": "new",
                        "value": "New Zealand"
                    },
                    {
                        "key": "canada",
                        "value": "Canada",
                    },
                    {
                        "key": "austria",
                        "value": "Austria",
                    }
                ],
            }
        },
        {
            field: {
                key: "checkboxWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                help: {
                    displayType: HelpDiaplyType.TOOLTIP,
                    title: "Help Title",
                    message: "Help Message to display for the field as tooltip",
                    orientation: HelpTextOrientation.TOP
                }
            },
            separator: {
                beforeField: false,
                label: "Type of Help Display"
            }
        },
        {
            field: {
                key: "checkboxWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "checkboxWithHelpTextWithLabel",
                label: "With Help Text (with Label)",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message beside label",
                    withLabel: true
                }
            }
        },
        {
            field: {
                key: "checkboxWithHelpRightModal",
                label: "With Help in Right Modal",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                help: {
                    displayType: HelpDiaplyType.RIGHT_MODAL,
                    title: "Help Title",
                    message: "Help Message in right modal",
                    withLabel: true
                }
            }
        },
        {
            field: {
                key: "checkboxDisabled",
                label: "Disabled Textbox",
                type: FieldType.CHECKBOX,
                displayMode: DisplayMode.DISABLED,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "checkboxAsLabel",
                label: "As Label",
                type: FieldType.CHECKBOX,
                displayMode: DisplayMode.LABEL,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                value: ["india"]
            }
        },
        {
            field: {
                key: "checkboxMainField",
                label: "Main Field",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "checkboxChildField",
                label: "Child Field",
                type: FieldType.CHECKBOX,
                options: [
                    {
                        "key": "india",
                        "value": "India"
                    },
                    {
                        "key": "australia",
                        "value": "Australia"
                    },
                ],
                dependentOnFields: [
                    {
                        key: "checkboxMainField",
                        condition: "india",
                        displayMode: DisplayMode.DISABLED
                    }
                ]
            }
        }
    ],
    action: {
        align: "right",
        buttons: [
            {
                identifier: "save",
                type: ButtonType.RAISED,
                label: "Save",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "save",
                onlyIcon: false,
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
            },

        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
}
import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode, ChipOrientation } from 'ngx-material-widget';
import { OrientationType } from 'ngx-material-widget/lib/wizard/model';

export const chipsExample: Form = {
    identifier: "chipsExampleForm",
    header: {
        title: "Chips Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: { 
                key: "basicChips",
                label: "Basic",
                type: FieldType.CHIPS,
                placeholder: "i.e. - basic chips"
            }
        },
        {
            field: {
                key: "chipsWithoutLabel",
                label: "",
                type: FieldType.CHIPS,
                placeholder: "i.e. - Chips (without Label)"
            }
        },
        {
            field: {
                key: "chipsWithIcon",
                label: "With Icon",
                type: FieldType.CHIPS,
                placeholder: "i.e. - Chips (with Icon)",
                icon: "person"
            }
        },
        {
            field: {
                key: "chipsReadOnly",
                label: "Readonly Chips",
                type: FieldType.CHIPS,
                placeholder: "i.e. - Non Editable",
                isReadOnly: true
            }
        },
        {
            field: {
                key: "textBox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.CHIPS,
                placeholder: "i.e. - in 2 Column Span",
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "chipsWithDefaultValue",
                label: "With Default Value",
                type: FieldType.CHIPS,
                placeholder: "i.e. - with default value",
                value: ["india"]
            }
        },
        {
            field: {
                key: "chipsWithoutPlaceholder",
                label: "Without Placeholder",
                type: FieldType.CHIPS
            }
        },
        {
            field: {
                key: "chipsStaticOptions",
                label: "Static Options",
                type: FieldType.CHIPS,
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
                    message: "Static options displays on chips selection and dynamic values are fetched after typing"
                }
            }
        },
        {
            field: {
                key: "chipsTriggerOn",
                label: "Trigger After (2 characters)",
                type: FieldType.CHIPS,
                minLengthForTrigger: 2
            }
        },
        {
            field: {
                key: "chipsNoRecordFound",
                label: "No Record Found",
                type: FieldType.CHIPS,
                noRecordFound: "No Record Found"
            }
        },
        {
            field: {
                key: "chipsWithClear",
                label: "With Clear",
                type: FieldType.CHIPS,
                placeholder: "i.e. - with Clear",
                hasClear: true,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Clear icon is displayed when the field control has some value in it"
                },
            }
        },
        {
            field: {
                key: "chipsWithNavigation",
                label: "With Navigation",
                type: FieldType.CHIPS,
                placeholder: "i.e. - with Navigation",
                navigate: {
                    routeTo: ["/application", "example", "button"],
                    icon: "north_east",
                    text: "Go to Button Examples"
                }
            }
        },
        {
            field: {
                key: "chipsVerticalDisplay",
                label: "Vertical Display",
                type: FieldType.CHIPS,
                placeholder: "i.e. - VerticalDisplay",
                orientation: ChipOrientation.VERTICAL
            }
        },
        {
            field: {
                key: "chipsWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.CHIPS,
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
                key: "chipsWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.CHIPS,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "chipsWithHelpTextWithLabel",
                label: "With Help Text (With Label)",
                type: FieldType.CHIPS,
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
                key: "chipsWithHelpRightModal",
                label: "With Help Text (in Right Modal)",
                type: FieldType.CHIPS,
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
                key: "chipsDisabled",
                label: "Disabled Chips",
                type: FieldType.CHIPS,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "chipsAsLabel",
                label: "Chips (value as Label)",
                type: FieldType.CHIPS,
                displayMode: DisplayMode.LABEL,
                value: "Default Value as label"
            }
        },
        // {
        //     field: {
        //         key: "chipsRequired",
        //         label: "Mandatory Field",
        //         type: FieldType.CHIPS,
        //         validations: [
        //             {
        //                 type: Validators.required,
        //                 message: {
        //                     key: "required",
        //                     message: "Field can't be empty"
        //                 }
        //             }
        //         ],
        //     },
        //     separator: {
        //         beforeField: false,
        //         label: "Validation"
        //     }
        // },
        // {
        //     field: {
        //         key: "chipsMinLength",
        //         label: "Minimum Length",
        //         type: FieldType.CHIPS,
        //         validations: [
        //             {
        //                 type: Validators.minLength(5),
        //                 message: {
        //                     key: "minlength",
        //                     message: "Length should be more than 5 chars"
        //                 }
        //             }
        //         ],
        //     }
        // },
        {
            field: {
                key: "chipsMainField",
                label: "Main Field",
                type: FieldType.CHIPS
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "chipsChildField",
                label: "Child Field",
                type: FieldType.CHIPS,
                dependentOnFields: [
                    {
                        key: "chipsMainField",
                        condition: "India",
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
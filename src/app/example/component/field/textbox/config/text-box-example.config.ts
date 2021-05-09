import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const textBoxExample: Form = {
    identifier: "textBoxExampleForm",
    header: {
        title: "Text Box Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicTextBox",
                label: "Basic",
                type: FieldType.TEXT,
                placeholder: "i.e. - basic textbox"
            }
        },
        {
            field: {
                key: "textBoxWithoutLabel",
                label: "",
                type: FieldType.TEXT,
                placeholder: "i.e. - Textbox (without Label)"
            }
        },
        {
            field: {
                key: "textBoxWithIcon",
                label: "With Icon",
                type: FieldType.TEXT,
                placeholder: "i.e. - Textbox (with Icon)",
                icon: "person"
            }
        },
        {
            field: {
                key: "textBoxReadOnly",
                label: "Readonly",
                type: FieldType.TEXT,
                placeholder: "i.e. - Non Editable",
                isReadOnly: true
            }
        },
        {
            field: {
                key: "textBox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.TEXT,
                placeholder: "i.e. - in 2 Column Span",
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "textBoxWithDefaultValue",
                label: "With Default Value",
                type: FieldType.TEXT,
                placeholder: "i.e. - with default value",
                value: "Default Value"
            }
        },
        {
            field: {
                key: "textBoxWithoutPlaceholder",
                label: "Without Placeholder",
                type: FieldType.TEXT
            }
        },
        {
            field: {
                key: "textBoxWithNavigation",
                label: "With Navigation",
                type: FieldType.TEXT,
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
                key: "textBoxWithClear",
                label: "With Clear",
                type: FieldType.TEXT,
                placeholder: "i.e. - with Clear",
                value: "Dafault Value is XYZ",
                hasClear: true,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Clear icon is displayed when the field control has some value in it"
                },
            }
        },
        {
            field: {
                key: "textBoxWithAddMore",
                label: "With Add More",
                type: FieldType.TEXT,
                placeholder: "i.e. - with Add More"
            },
            addMore: true
        },
        {
            field: {
                key: "textBoxWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.TEXT,
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
                key: "textBoxWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.TEXT,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "textBoxWithHelpTextWithLabel",
                label: "With Help Text (with Label)",
                type: FieldType.TEXT,
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
                key: "textBoxWithHelpRightModal",
                label: "With Help in Right Modal",
                type: FieldType.TEXT,
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
                key: "textBoxDisabled",
                label: "Disabled Textbox",
                type: FieldType.TEXT,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "textBoxAsLabel",
                label: "As Label",
                type: FieldType.TEXT,
                displayMode: DisplayMode.LABEL,
                value: "Default Value as label"
            }
        },
        {
            field: {
                key: "textBoxRequired",
                label: "Mandatory Field",
                type: FieldType.TEXT,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
            },
            separator: {
                beforeField: false,
                label: "Validation"
            }
        },
        {
            field: {
                key: "textBoxMinLength",
                label: "Minimum Length",
                type: FieldType.TEXT,
                validations: [
                    {
                        type: Validators.minLength(5),
                        message: {
                            key: "minlength",
                            message: "Length should be more than 5 chars"
                        }
                    }
                ],
            }
        },
        {
            field: {
                key: "textBoxMainField",
                label: "Main Field",
                type: FieldType.TEXT
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "textBoxChildField",
                label: "Child Field",
                type: FieldType.TEXT,
                dependentOnFields: [
                    {
                        key: "textBoxMainField",
                        condition: "main",
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
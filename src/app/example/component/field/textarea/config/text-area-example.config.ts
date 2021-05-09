import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const textareaExample: Form = {
    identifier: "textareaExampleForm",
    header: {
        title: "Textarea Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicTextarea",
                label: "Basic",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - basic textarea"
            }
        },
        {
            field: {
                key: "textareaWithoutLabel",
                label: "",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - Textarea (without Label)"
            }
        },
        {
            field: {
                key: "textareaWithIcon",
                label: "With Icon",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - Textarea (with Icon)",
                icon: "person"
            }
        },
        {
            field: {
                key: "textareaReadOnly",
                label: "Readonly Textarea",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - Non Editable",
                isReadOnly: true
            }
        },
        {
            field: {
                key: "textBox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - in 2 Column Span",
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "textareaWithDefaultValue",
                label: "With Default Value",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - with default value",
                value: "Default Value"
            }
        },
        {
            field: {
                key: "textareaWithoutPlaceholder",
                label: "Without Placeholder",
                type: FieldType.TEXTAREA
            }
        },
        {
            field: {
                key: "textareaWithRows",
                label: "With Height",
                type: FieldType.TEXTAREA,
                rows: 4,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Height is displayed after inserting some value"
                }
            }
        },
        {
            field: {
                key: "textareaWithClear",
                label: "With Clear",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - with Clear",
                value: "2222",
                hasClear: true,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Clear icon is displayed when the field control has some value in it"
                },
            }
        },
        {
            field: {
                key: "textareaWithMaxLength",
                label: "With Max Length Allowed",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - with MaxLength",
                maxLength: 100
            }
        },
        {
            field: {
                key: "textareaWithNavigation",
                label: "With Navigation",
                type: FieldType.TEXTAREA,
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
                key: "textareaWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.TEXTAREA,
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
                key: "textareaWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.TEXTAREA,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "textareaWithHelpTextWithLabel",
                label: "With Help Text (With Label)",
                type: FieldType.TEXTAREA,
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
                key: "textareaWithHelpRightModal",
                label: "With Help Text (in Right Modal)",
                type: FieldType.TEXTAREA,
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
                key: "textareaDisabled",
                label: "Disabled Textarea",
                type: FieldType.TEXTAREA,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "textareaAsLabel",
                label: "Textarea (value as Label)",
                type: FieldType.TEXTAREA,
                displayMode: DisplayMode.LABEL,
                value: "Default Value as label"
            }
        },
        {
            field: {
                key: "textareaWithEllipsis",
                label: "With Ellipsis",
                type: FieldType.TEXTAREA,
                ellipsis: 60,
                value: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
                displayMode: DisplayMode.LABEL,
                help: {
                    displayType: HelpDiaplyType.TOOLTIP,
                    message: "for more than 60 characters"
                }
            }
        },
        {
            field: {
                key: "textareaRequired",
                label: "Mandatory Field",
                type: FieldType.TEXTAREA,
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
                key: "textareaMinLength",
                label: "Minimum Length",
                type: FieldType.TEXTAREA,
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
                key: "textareaMainField",
                label: "Main Field",
                type: FieldType.TEXTAREA
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "textareaChildField",
                label: "Child Field",
                type: FieldType.TEXTAREA,
                dependentOnFields: [
                    {
                        key: "textareaMainField",
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
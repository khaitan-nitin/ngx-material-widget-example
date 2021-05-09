import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const htmlEditorExample: Form = {
    identifier: "htmlEditorExampleForm",
    header: {
        title: "Html Editor Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicHtmlEditor",
                label: "Basic",
                type: FieldType.HTML_EDITOR,
                placeholder: "i.e. - basic htmlEditor"
            }
        },
        {
            field: {
                key: "htmlEditorWithoutLabel",
                label: "",
                type: FieldType.HTML_EDITOR,
                placeholder: "i.e. - Html Editor (without Label)"
            }
        },
        {
            field: {
                key: "htmlEditorReadOnly",
                label: "Readonly Html Editor",
                type: FieldType.HTML_EDITOR,
                placeholder: "i.e. - Non Editable",
                isReadOnly: true
            }
        },
        {
            field: {
                key: "htmlEditorWithDefaultValue",
                label: "With Default Value",
                type: FieldType.HTML_EDITOR,
                placeholder: "i.e. - with default value",
                value: "Default Value"
            }
        },
        {
            field: {
                key: "textBox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.HTML_EDITOR,
                placeholder: "i.e. - in 2 Column Span",
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "htmlEditorWithoutPlaceholder",
                label: "Without Placeholder",
                type: FieldType.HTML_EDITOR
            }
        },
        {
            field: {
                key: "htmlEditorWithRows",
                label: "With Height",
                type: FieldType.HTML_EDITOR,
                height: 200,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Height is displayed after inserting some value"
                }
            }
        },
        {
            field: {
                key: "htmlEditorWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.HTML_EDITOR,
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
                key: "htmlEditorWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.HTML_EDITOR,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "htmlEditorWithHelpTextBesideLabel",
                label: "With Help Text (Beside Label)",
                type: FieldType.HTML_EDITOR,
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
                key: "htmlEditorWithHelpRightModal",
                label: "With Help Text (in Right Modal)",
                type: FieldType.HTML_EDITOR,
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
                key: "htmlEditorDisabled",
                label: "Disabled Html Editor",
                type: FieldType.HTML_EDITOR,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "htmlEditorAsLabel",
                label: "Value as Label",
                type: FieldType.HTML_EDITOR,
                displayMode: DisplayMode.LABEL,
                value: "Default Value as label"
            }
        },
        {
            field: {
                key: "htmlEditorRequired",
                label: "Mandatory Field",
                type: FieldType.HTML_EDITOR,
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
                key: "htmlEditorMinLength",
                label: "Minimum Length",
                type: FieldType.HTML_EDITOR,
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
                key: "htmlEditorMainField",
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
                key: "htmlEditorChildField",
                label: "Child Field",
                type: FieldType.HTML_EDITOR,
                dependentOnFields: [
                    {
                        key: "htmlEditorMainField",
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
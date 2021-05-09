import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const autocompleteExample: Form = {
    identifier: "autocompleteExampleForm",
    header: {
        title: "Autocomplete Attributes",
        actions: [
            {
                identifier: "goToGithub",
                type: ButtonType.RAISED,
                label: "Code in Github",
                icon: "call_made",
                onlyIcon: false,
                color: ButtonColor.DEFAULT,
                size: ButtonSize.DEFAULT,
                displayInFormModes: [
                  FormDiaplyMode.ADD
                ],
                alwaysEnable: true
              }
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicAutocomplete",
                label: "Basic",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - basic autocomplete"
            }
        },
        {
            field: {
                key: "autocompleteWithoutLabel",
                label: "",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - Autocomplete (without Label)"
            }
        },
        {
            field: {
                key: "autocompleteWithIcon",
                label: "With Icon",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - Autocomplete (with Icon)",
                icon: "person"
            }
        },
        {
            field: {
                key: "autocompleteReadOnly",
                label: "Readonly Autocomplete",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - Non Editable",
                isReadOnly: true
            }
        },
        {
            field: {
                key: "textBox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - in 2 Column Span",
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "autocompleteWithDefaultValue",
                label: "With Default Value",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - with default value",
                value: "India"
            }
        },
        {
            field: {
                key: "autocompleteWithoutPlaceholder",
                label: "Without Placeholder",
                type: FieldType.AUTOCOMPLETE
            }
        },
        {
            field: {
                key: "autocompleteStaticOptions", 
                label: "Static Options",
                type: FieldType.AUTOCOMPLETE,
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
                    message: "Static options displays on autocomplete selection and dynamic values are fetched after typing"
                }
            }
        },
        {
            field: {
                key: "autocompleteTriggerOn",
                label: "Trigger After (2 characters)",
                type: FieldType.AUTOCOMPLETE,
                minLengthForTrigger: 2
            }
        },
        {
            field: {
                key: "autocompleteNoRecordFound",
                label: "No Record Found",
                type: FieldType.AUTOCOMPLETE,
                noRecordFound: "No Record Found"
            }
        },
        {
            field: {
                key: "autocompleteWithClear",
                label: "With Clear",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteWithNavigation",
                label: "With Navigation",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteWithAddMore",
                label: "With Add More",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - with Navigation",
            },
            addMore: true
        },
        {
            field: {
                key: "autocompleteWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.AUTOCOMPLETE,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "autocompleteWithHelpTextWithLabel",
                label: "With Help Text (With Label)",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteWithHelpRightModal",
                label: "With Help Text (in Right Modal)",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteDisabled",
                label: "Disabled Autocomplete",
                type: FieldType.AUTOCOMPLETE,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "autocompleteAsLabel",
                label: "Autocomplete (value as Label)",
                type: FieldType.AUTOCOMPLETE,
                displayMode: DisplayMode.LABEL
            }
        },
        {
            field: {
                key: "autocompleteRequired",
                label: "Mandatory Field",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteMinLength",
                label: "Minimum Length",
                type: FieldType.AUTOCOMPLETE,
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
                key: "autocompleteMainField",
                label: "Main Field",
                type: FieldType.AUTOCOMPLETE
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "autocompleteChildField",
                label: "Child Field",
                type: FieldType.AUTOCOMPLETE,
                dependentOnFields: [
                    {
                        key: "autocompleteMainField",
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
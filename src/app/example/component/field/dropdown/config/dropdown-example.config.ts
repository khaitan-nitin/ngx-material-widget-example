import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const dropdownExample: Form = {
    identifier: "dropdownExampleForm",
    header: {
        title: "Dropdown Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: { 
                key: "basicDropdown",
                label: "Basic",
                type: FieldType.DROPDOWN,
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
                key: "dropdownWithoutLabel",
                label: "",
                type: FieldType.DROPDOWN,
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
                    message: "Dropdown (Without Label)"
                },
            }
        },
        {
            field: {
                key: "dropdownWithIcon",
                label: "With Icon",
                type: FieldType.DROPDOWN,
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
                icon: "person"
            }
        },
        {
            field: {
                key: "dropdownReadOnly",
                label: "Readonly Dropdown",
                type: FieldType.DROPDOWN,
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
                key: "dropdown2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.DROPDOWN,
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
                key: "dropdownWithDefaultValue",
                label: "With Default Value",
                type: FieldType.DROPDOWN,
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
                value: "australia"
            }
        },
        {
            field: {
                key: "dropdownDefaultOption",
                label: "With Default Option",
                type: FieldType.DROPDOWN,
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
                defaultOption: "-- Countries --"
            }
        },
        {
            field: {
                key: "dropdownMultiSelect",
                label: "Multi Select",
                type: FieldType.DROPDOWN,
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
                multiselect: true
            }
        },
        {
            field: {
                key: "dropdownWithClear",
                label: "With Clear",
                type: FieldType.DROPDOWN,
                placeholder: "i.e. - with Clear",
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
                hasClear: true,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Clear icon is displayed when the field control has some value in it"
                },
            }
        },
        {
            field: {
                key: "dropdownWithNavigation",
                label: "With Navigation",
                type: FieldType.DROPDOWN,
                placeholder: "i.e. - with Navigation",
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
                navigate: {
                    routeTo: ["/application", "example", "button"],
                    icon: "north_east",
                    text: "Go to Button Examples"
                }
            }
        },
        {
            field: {
                key: "dropdownWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.DROPDOWN,
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
                key: "dropdownWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.DROPDOWN,
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
                key: "dropdownWithHelpTextWithLabel",
                label: "With Help Text (With Label)",
                type: FieldType.DROPDOWN,
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
                key: "dropdownWithHelpRightModal",
                label: "With Help Text (in Right Modal)",
                type: FieldType.DROPDOWN,
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
                key: "dropdownDisabled",
                label: "Disabled Dropdown",
                type: FieldType.DROPDOWN,
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
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "dropdownAsLabel",
                label: "Dropdown (value as Label)",
                type: FieldType.DROPDOWN,
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
                displayMode: DisplayMode.LABEL,
                value: "Default Value as label"
            }
        },
        {
            field: {
                key: "dropdownRequired",
                label: "Mandatory Field",
                type: FieldType.DROPDOWN,
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
                key: "dropdownMinLength",
                label: "Minimum Length",
                type: FieldType.DROPDOWN,
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
                key: "dropdownMainField",
                label: "Main Field",
                type: FieldType.DROPDOWN,
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
                key: "dropdownChildField",
                label: "Child Field",
                type: FieldType.DROPDOWN,
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
                        key: "dropdownMainField",
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
import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode, DisplayType, RadioDisplayType } from 'ngx-material-widget';

export const radioButtonExample: Form = {
    identifier: "radioButtonExampleForm",
    header: {
        title: "Radio Button Attributes",
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
            },
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicRadioButton",
                label: "Basic",
                type: FieldType.RADIO,
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
                key: "radioButtonWithoutLabel",
                label: "",
                type: FieldType.RADIO,
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
                key: "radioButton2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.RADIO,
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
                key: "radioButtonReadOnly",
                label: "Readonly",
                type: FieldType.RADIO,
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
                key: "radioButtonWithDefaultValue",
                label: "With Default Value",
                type: FieldType.RADIO,
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
                value: "india"
            }
        },
        {
            field: {
                key: "radioButtonWithDescription",
                label: "With Description in Option",
                type: FieldType.RADIO,
                options: [
                    {
                        "key": "india",
                        "value": "India",
                        "description": "India is above Indian Ocean"
                    },
                    {
                        "key": "australia",
                        "value": "Australia",
                        "description": "Australia is in southern hemisphere"
                    },
                ],
                value: ["india"]
            }
        },
        {
            field: {
                key: "radioButtonWithImage",
                label: "With Image in Option",
                type: FieldType.RADIO,
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
                key: "radioButtonWithDisabledOption",
                label: "With Disabled Option",
                type: FieldType.RADIO,
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
                key: "radioButtonWithShowAll",
                label: "With Show All Option",
                type: FieldType.RADIO,
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
                key: "radioButtonWithShowAllCustomLabel",
                label: "With Show All Option (With custom label)",
                type: FieldType.RADIO,
                showLess: 2,
                showAllLabel: "Display More",
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
                key: "radioButtonInlineDisplay",
                label: "With Inline Display",
                type: FieldType.RADIO,
                displayType: RadioDisplayType.INLINE,
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
                key: "radioButtonWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.RADIO,
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
                key: "radioButtonWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.RADIO,
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
                key: "radioButtonWithHelpTextWithLabel",
                label: "With Help Text (with Label)",
                type: FieldType.RADIO,
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
                key: "radioButtonWithHelpRightModal",
                label: "With Help in Right Modal",
                type: FieldType.RADIO,
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
                key: "radioButtonDisabled",
                label: "Disabled Textbox",
                type: FieldType.RADIO,
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
                key: "radioButtonAsLabel",
                label: "As Label",
                type: FieldType.RADIO,
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
                value: "india"
            }
        },
        {
            field: {
                key: "radioButtonMainField",
                label: "Main Field",
                type: FieldType.RADIO,
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
                key: "radioButtonChildField",
                label: "Child Field",
                type: FieldType.RADIO,
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
                        key: "radioButtonMainField",
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
                identifier: "classic",
                type: ButtonType.GROUP,
                label: "Classic",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "save",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
            },
            {
                identifier: "modern",
                type: ButtonType.GROUP,
                label: "Modern",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "save",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
            }
        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
}
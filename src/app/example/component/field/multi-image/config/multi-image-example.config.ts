import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const multiImageExample: Form = {
    identifier: "multiImageExampleForm",
    header: {
        title: "Multi Image Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicMultiImage",
                label: "Basic",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
            }
        },
        {
            field: {
                key: "multiImageWithoutLabel",
                label: "",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
            }
        },
        {
            field: {
                key: "multiImageReadOnly",
                label: "Readonly",
                type: FieldType.MULTI_IMAGE,
                isReadOnly: true,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
            }
        },
        {
            field: {
                key: "multiImage2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "multiImageWithRadius",
                label: "With Custom Radius",
                type: FieldType.MULTI_IMAGE,
                radius: 7,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                value: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                ]
            }
        },
        {
            field: {
                key: "multiImageShowOnly",
                label: "With Show Only 2",
                type: FieldType.MULTI_IMAGE,
                count: 2,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                value: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                ]
            }
        },
        {
            field: {
                key: "multiImageShowFew",
                label: "With Show Few with Count",
                type: FieldType.MULTI_IMAGE,
                count: 2,
                showCount: true,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                value: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                ]
            }
        },
        {
            field: {
                key: "multiImageShowFewClickable",
                label: "With Show Few with Count (CLICKABLE)",
                type: FieldType.MULTI_IMAGE,
                count: 2,
                showCount: true,
                showAll: true,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                value: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                ]
            }
        }, 
        {
            field: {
                key: "multiImageWithName",
                label: "Images with Name",
                type: FieldType.MULTI_IMAGE,
                count: 2,
                showCount: true,
                showAll: true,
                images: [
                    {
                        url: "/assets/images/avatar.png",
                        name: "User 1"
                    },
                    {
                        url: "/assets/images/avatar.png",
                        name: "User 2"
                    },
                    {
                        url: "/assets/images/avatar.png",
                        name: "User 3"
                    },
                    {
                        url: "/assets/images/avatar.png",
                        name: "User 4"
                    }
                ],
                value: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                ]
            }
        }, 
        {
            field: {
                key: "multiImageWithDefaultValue",
                label: "With Default Value",
                type: FieldType.MULTI_IMAGE,
                value: [
                    "/assets/images/avatar.png",
                ]
            }
        }, 
        {
            field: {
                key: "multiImageWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
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
                key: "multiImageWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
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
                key: "multiImageWithHelpTextWithLabel",
                label: "With Help Text (with Label)",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
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
                key: "multiImageWithHelpRightModal",
                label: "With Help in Right Modal",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
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
                key: "multiImageDisabled",
                label: "Disabled MultiImage",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
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
                key: "multiImageAsLabel",
                label: "As Label",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                displayMode: DisplayMode.LABEL,
                value: "/assets/images/avatar.png"
            }
        },
        {
            field: {
                key: "multiImageMainField",
                label: "Main Field",
                type: FieldType.TEXT,
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "multiImageChildField",
                label: "Child Field",
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                dependentOnFields: [
                    {
                        key: "multiImageMainField",
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
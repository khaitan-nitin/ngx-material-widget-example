import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const paragraphExample: Form = {
    identifier: "paragraphExampleForm",
    header: {
        title: "Paragraph Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicParagraph",
                label: "Basic",
                type: FieldType.PARAGRAPH,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                },
            }
        },
        {
            field: {
                key: "paragraphReadOnly",
                label: "Readonly",
                type: FieldType.PARAGRAPH,
                placeholder: "i.e. - Non Editable",
                isReadOnly: true,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                }
            }
        },
        {
            field: {
                key: "paragraph2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.PARAGRAPH,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                }
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "paragraphWithDefaultValue",
                label: "With Default Value",
                type: FieldType.PARAGRAPH,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                },
                // value: {
                //     titleP: "mr",
                //     nameP: "Nitin",
                //     typeP: "good"
                // }
            }
        },
        {
            field: {
                key: "paragraphDisabled",
                label: "Disabled Paragraph",
                type: FieldType.PARAGRAPH,
                displayMode: DisplayMode.DISABLED,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                },
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "paragraphAsLabel",
                label: "As Label",
                type: FieldType.PARAGRAPH,
                displayMode: DisplayMode.LABEL,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                }, 
            }
        },
        {
            field: {
                key: "paragraphMainField", 
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
                key: "paragraphChildField",
                label: "Child Field",
                type: FieldType.PARAGRAPH,
                template: "Good Morning {title} {name}, Have a {type} evening. Click {here} to view Buttons Types",
                fieldContexts: {
                    "title": {
                        key: "titleP",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs."
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
                    "name": {
                        key: "nameP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "Alex",
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
                    "type": {
                        key: "typeP",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "good",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "hereP",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        routerLink: ["/application", "example", "button"]
                    }
                },
                dependentOnFields: [
                    {
                        key: "paragraphMainField",
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
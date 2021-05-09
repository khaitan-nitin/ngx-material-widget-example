import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';
import * as moment from 'moment';

export const calendarExample: Form = {
    identifier: "calendarExampleForm",
    header: {
        title: "Calendar Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicCalendar",
                label: "Basic",
                type: FieldType.CALENDAR,
            }
        },
        {
            field: {
                key: "calendarWithoutLabel",
                label: "",
                type: FieldType.CALENDAR,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "without Label"
                }
            }
        },
        {
            field: {
                key: "calendarWithIcon",
                label: "With Icon",
                type: FieldType.CALENDAR,
                icon: "person"
            }
        },
        {
            field: {
                key: "calendarReadOnly",
                label: "Readonly Calendar",
                type: FieldType.CALENDAR,
                isReadOnly: true
            }
        },
        {
            field: {
                key: "textBox2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.CALENDAR,
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "calendarWithDefaultValue",
                label: "With Default Value",
                type: FieldType.CALENDAR,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "with default value"
                },
                value: "2020-12-12"
            }
        },
        {
            field: {
                key: "calendarWithClear",
                label: "With Clear",
                type: FieldType.CALENDAR,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Clear icon is displayed when the field control has some value in it"
                },
                hasClear: true
            }
        },
        {
            field: {
                key: "calendarWithMaxLength",
                label: "With Max Date Allowed",
                type: FieldType.CALENDAR,
                maxDate: new Date()
            }
        },
        {
            field: {
                key: "calendarWithMaxLength",
                label: "With Min Date Allowed",
                type: FieldType.CALENDAR,
                minDate: new Date()
            }
        },
        {
            field: {
                key: "calendarInRange",
                label: "Range Selection",
                type: FieldType.CALENDAR,
                dateRange: true
            }
        },
        {
            field: {
                key: "calendarWithNavigation",
                label: "With Navigation",
                type: FieldType.CALENDAR,
                navigate: {
                    routeTo: ["/application", "example", "button"],
                    icon: "north_east",
                    text: "Go to Button Examples"
                }
            }
        },
        {
            field: {
                key: "calendarWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.CALENDAR,
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
                key: "calendarWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.CALENDAR,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "calendarWithHelpTextBesideLabel",
                label: "With Help Text (Beside Label)",
                type: FieldType.CALENDAR,
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
                key: "calendarWithHelpRightModal",
                label: "With Help Text (in Right Modal)",
                type: FieldType.CALENDAR,
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
                key: "calendarDisabled",
                label: "Disabled Calendar",
                type: FieldType.CALENDAR,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "calendarAsLabel",
                label: "Calendar (value as Label)",
                type: FieldType.CALENDAR,
                displayMode: DisplayMode.LABEL,
                value: ""
            }
        },
        {
            field: {
                key: "calendarRequired",
                label: "Mandatory Field",
                type: FieldType.CALENDAR,
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
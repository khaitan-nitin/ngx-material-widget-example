import { Form, FormDiaplyMode, FormTitleIconPosition, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, FieldAppearance, RadioDisplayType } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';

export const formActionCustomLayout: Form = {
    identifier: "formActionCustomLayout",
    header: {
        title: "Action Custom Layout",
        subtitle: "An example custom layout for the button",
        icon: {
            font: "line_style",
            position: FormTitleIconPosition.BEFORE_TITLE
        },
        actions: [
            {
                identifier: "goToGithub",
                type: ButtonType.STROKED,
                label: "Code in Github",
                icon: "call_made",
                onlyIcon: false,
                color: ButtonColor.DEFAULT,
                size: ButtonSize.DEFAULT,
                displayInFormModes: [
                    FormDiaplyMode.EDIT,
                    FormDiaplyMode.ADD,
                    FormDiaplyMode.VIEW
                ],
            }
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "firstName",
                label: "First Name",
                type: FieldType.TEXT,
            },
        },
        {
            field: {
                key: "middleName",
                label: "Middle Name",
                type: FieldType.TEXT,
            },
        },
        {
            field: {
                key: "lastName",
                label: "Last Name",
                type: FieldType.TEXT,
            },
        },
        {
            field: {
                key: "email",
                label: "Email",
                type: FieldType.EMAIL,
            },
        },
        {
            field: {
                key: "dob",
                label: "Date of Birth",
                type: FieldType.CALENDAR,
            },
        },
        {
            field: {
                key: "gender",
                label: "Gender",
                type: FieldType.RADIO,
                displayType: RadioDisplayType.INLINE,
                options: [
                    {
                        key: "m",
                        value: "Male"
                    },
                    {
                        key: "f",
                        value: "Female"
                    },
                ]
            },
        },
    ],
    action: {
        rowHeight: 50,
        cells: [
            {
                rows: 1,
                cols: 4,
                buttons: {
                    align: "left",
                    buttons: [
                        {
                            identifier: "reset",
                            type: ButtonType.RAISED,
                            label: "Reset",
                            color: ButtonColor.DEFAULT,
                            size: ButtonSize.SMALL,
                            icon: "clear_all",
                            onlyIcon: false,
                            // displayInFormModes: [
                            //     FormDiaplyMode.ADD
                            // ]
                        }
                    ]
                }
            },
            {
                rows: 1,
                cols: 8,
                buttons: {
                    align: "right",
                    buttons: [
                        {
                            identifier: "cancel",
                            type: ButtonType.RAISED,
                            label: "Cancel",
                            color: ButtonColor.DEFAULT,
                            size: ButtonSize.SMALL,
                            icon: "keyboard_backspace",
                            onlyIcon: false,
                            displayInFormModes: [
                                FormDiaplyMode.EDIT
                            ]
                        },
                        {
                            identifier: "save",
                            type: ButtonType.RAISED,
                            label: "Save",
                            color: ButtonColor.PRIMARY,
                            size: ButtonSize.SMALL,
                            icon: "save",
                            onlyIcon: false,
                            displayInFormModes: [
                                FormDiaplyMode.ADD
                            ]
                        },
                        {
                            identifier: "update",
                            type: ButtonType.RAISED,
                            label: "Update",
                            color: ButtonColor.PRIMARY,
                            size: ButtonSize.SMALL,
                            icon: "mode_edit",
                            onlyIcon: false,
                            displayInFormModes: [
                                FormDiaplyMode.EDIT
                            ]
                        },
                    ]
                }
            },
            {
                rows: 1,
                cols: 12,
                buttons: {
                    align: "center",
                    buttons: [
                        {
                            identifier: "delete",
                            type: ButtonType.GROUP,
                            groupIdentifier: "fullWidthGroup",
                            label: "Delete",
                            color: ButtonColor.WARN,
                            size: ButtonSize.SMALL,
                            icon: "clear",
                            onlyIcon: false,
                            displayInFormModes: [
                                FormDiaplyMode.EDIT
                            ],
                        }
                    ]
                }
            }
        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
}
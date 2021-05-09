import { Form, FormDiaplyMode, FormHelpPosition, FormTitleIconPosition, FormCellControlType } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, FieldAppearance, RadioDisplayType } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';

export const formInModal: Form = {
    identifier: "formInModal",
    header: {
        title: "Form in Modal",
        subtitle: "Form in Custom Card look",
        icon: {
            font: "book_online", 
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
    help: {
        icon: "live_help",
        message: "We can configure any kind of help text as required to be displayed to the user for this form over here",
        position: FormHelpPosition.above
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "firstName",
                label: "First Name",
                type: FieldType.LABEL,
            },
        },
        {
            field: {
                key: "middleName",
                label: "",
                type: FieldType.LABEL,
            },
        },
        {
            field: {
                key: "lastName",
                label: "",
                type: FieldType.LABEL,
            },
        },
        {
            field: {
                key: "email",
                label: "Email",
                type: FieldType.EMAIL,
                placeholder: "My personal email id"
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
        }
    ],
    action: {
        align: "right",
        buttons: [
            {
                identifier: "reset",
                type: ButtonType.RAISED,
                label: "Reset",
                color: ButtonColor.DEFAULT,
                size: ButtonSize.SMALL,
                icon: "clear_all",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.ADD
                ]
            },
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
            {
                identifier: "delete",
                type: ButtonType.RAISED,
                label: "Delete",
                color: ButtonColor.WARN,
                size: ButtonSize.SMALL,
                icon: "clear",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.EDIT
                ]
            }
        ]
    },
    showCustomLayout: true,
    layout: {
        cellCount: 12,
        rowHeight: 75,
        cells: [
            {
                rows: 1, 
                cols: 12,

                key: "name",
                label: "Name",
                controls: [
                    {
                        key: "firstName",
                        // fullWidth: true,
                        type: FormCellControlType.FIELD
                    },
                    {
                        key: "middleName",
                        // fullWidth: true,
                        type: FormCellControlType.FIELD
                    },
                    {
                        key: "lastName",
                        // fullWidth: true,
                        type: FormCellControlType.FIELD
                    }
                ],
                show: true,
                displayInline: { 
                    separator: " "
                }
            },
            {
                rows: 1, 
                cols: 4,

                key: "email",
                label: "Email",
                controls: [
                    {
                        key: "email",
                        // fullWidth: true,
                        type: FormCellControlType.FIELD
                    }
                ],
                show: true
            },
            {
                rows: 1, 
                cols: 4,

                key: "dob",
                label: "Date of Birth",
                controls: [
                    {
                        key: "dob",
                        // fullWidth: true,
                        type: FormCellControlType.FIELD
                    }
                ],
                show: true
            },
            {
                rows: 1, 
                cols: 4,

                key: "gender",
                label: "Gender",
                controls: [
                    {
                        key: "gender",
                        // fullWidth: true,
                        type: FormCellControlType.FIELD
                    }
                ],
                show: true
            }
        ]
    }, 
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
}
import { FieldType, FieldDiaplyType, FieldAppearance, RadioDisplayType } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, ListShadeType } from 'ngx-material-widget/lib/list/model';
import { Crud, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType, SearchDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';

export const basicCrud: Crud = {
    identifier: "basicCrud",
    header: {
        title: "Basic CRUD",
        searchModeTitle: "Search User",
        viewModeTitle: "View User",
        addModeTitle: "Add User",
        editModeTitle: "Edit User"
    },
    actions: [
        {
            identifier: "addUser",
            type: ButtonType.RAISED,
            label: "Add User",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST]
        },
        {
            identifier: "goToGithub",
            type: ButtonType.STROKED,
            label: "Code in Github",
            icon: "call_made",
            onlyIcon: false,
            color: ButtonColor.DEFAULT,
            size: ButtonSize.DEFAULT,
        }
    ],
    actionPages: [
        {
            buttonIdentifier: "addUser",
            associatedWidgetIdentifiers: ["userForm"]
        }
    ],
    search: {
        displayType: SearchDisplayType.LEFT_MODAL,
        form: {
            identifier: "userSearch",
            header: {
                title: "Search User(s)",
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "name",
                        label: "Name/Email",
                        type: FieldType.TEXT,
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
                        type: FieldType.DROPDOWN,
                        multiselect: true,
                        options: [
                            {
                                key: "Trans*Man",
                                value: "Trans*Man"
                            },
                            {
                                key: "Non-binary",
                                value: "Non-binary"
                            },
                            {
                                key: "T* woman",
                                value: "T* woman"
                            },
                            {
                                key: "Transexual",
                                value: "Transexual"
                            },
                            {
                                key: "Transgender Person",
                                value: "Transgender Person"
                            },
                            {
                                key: "Trans",
                                value: "Trans"
                            },
                            {
                                key: "Cis Man",
                                value: "Cis Man"
                            },
                            {
                                key: "Pangender",
                                value: "Pangender"
                            },
                            {
                                key: "Cis",
                                value: "Cis"
                            },
                        ]
                    },
                },
            ],
            action: {
                align: "right",
                buttons: [
                    {
                        identifier: "reset",
                        type: ButtonType.STROKED,
                        label: "Reset",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "replay",
                        onlyIcon: false
                    },
                    {
                        identifier: "search",
                        type: ButtonType.RAISED,
                        label: "Search",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false
                    }
                ]
            },
            displayType: FieldDiaplyType.INLINE,
            displayMode: FormDiaplyMode.CRUD_LIST,
        },
    },

    list: {
        displayType: CrudListDisplayType.TAB,
        lists: [
            {
                identifier: "userList",
                shade: {
                    type: ListShadeType.ALTERNATE
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "firstName",
                                label: "Name",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD
                            },
                            {
                                key: "middleName",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD
                            },
                            {
                                key: "lastName",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD
                            }
                        ],
                        displayInline: {
                            separator: " ",
                        },
                        sortable: true,
                        show: true,
                        width: 20
                    },
                    {
                        fields: [
                            {
                                key: "email",
                                label: "Email",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    },
                    {
                        fields: [
                            {
                                key: "gender",
                                label: "Gender",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD
                            }
                        ],
                        sortable: false,
                        show: true,
                        width: 15,
                    },
                    {
                        fields: [
                            {
                                key: "dob",
                                label: "Date of Birth",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 25,
                    }
                ],
                actions: [
                    {
                        identifier: "deleteUser",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.WARN,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteUserCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete User - '{firstName} {middleName} {lastName}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteUser",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.STROKED,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteUserConfirm",
                                    color: ButtonColor.WARN,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        },
                    },
                    {
                        identifier: "editUser",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.DEFAULT,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false
                    }
                ],
                listType: ListType.DYNAMIC,
                staticList: {
                    hasOnPageFilter: false
                },
                noRecordFound: "No user found",
                hasColumnSelection: false,
                pagination: PaginationType.PAGE_WISE,
                pageSize: 10,
                hideFooter: false,
                hideHeader: false,
                hideCard: false,
                stickyHeader: false,
                actionWidth: 20,
                defaultSort: {
                    column: "firstName",
                    order: ListSortOrder.asc
                }
            }
        ]
    },
    form: {
        displayType: CrudFormDisplayType.TAB,
        tabs: [
            {
                identifier: "userForms",
                label: "User Detail",
                description: {
                    text: ""
                },
//                statistic: "N",
                actions: [
                    {
                        identifier: "backToList",
                        type: ButtonType.RAISED,
                        label: "Close",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "settings_power",
                        onlyIcon: false
                    }
                ],
                // customPlugin: {
                //     component: MessageRowHoverComponent,
                //     placement: CrudCustomPluginPlacement.ABOVE
                // },
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        // displayOnAction: "userForm",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "userForm",
                            header: {
                                title: "Personal Details"
                            },
                            displayInColumns: 2,
                            formFields: [
                                {
                                    field: {
                                        key: "firstName",
                                        label: "First Name",
                                        type: FieldType.TEXT,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "First Name can't be empty"
                                                }
                                            }
                                        ]
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
                                        validations: [
                                            {
                                                type: Validators.email,
                                                message: {
                                                    key: "email",
                                                    message: "Invalid email Id"
                                                }
                                            }
                                        ]
                                    },
                                },
                                {
                                    field: {
                                        key: "dob",
                                        label: "Date of Birth",
                                        type: FieldType.CALENDAR,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Date of birth can't be empty"
                                                }
                                            }
                                        ]
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
                                                key: "Men",
                                                value: "Men"
                                            },
                                            {
                                                key: "Women",
                                                value: "Women"
                                            },
                                            {
                                                key: "Trans*Man",
                                                value: "Trans*Man"
                                            },
                                            {
                                                key: "Non-binary",
                                                value: "Non-binary"
                                            },
                                            {
                                                key: "T* woman",
                                                value: "T* woman"
                                            },
                                            {
                                                key: "Transexual",
                                                value: "Transexual"
                                            },
                                            {
                                                key: "Transgender Person",
                                                value: "Transgender Person"
                                            },
                                            {
                                                key: "Trans",
                                                value: "Trans"
                                            },
                                            {
                                                key: "Cis Man",
                                                value: "Cis Man"
                                            },
                                            {
                                                key: "Pangender",
                                                value: "Pangender"
                                            },
                                            {
                                                key: "Cis",
                                                value: "Cis"
                                            },
                                        ],
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Gender can't be empty"
                                                }
                                            }
                                        ]                                    },
                                },
                                {
                                    field: {
                                        key: "description",
                                        label: "Short Description",
                                        type: FieldType.TEXTAREA,
                                        rows: 5
                                    },
                                    displayInColumns: 2
                                },
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
                                        identifier: "deleteUser",
                                        type: ButtonType.RAISED,
                                        label: "Delete",
                                        color: ButtonColor.WARN,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        confirmationConfiguration: {
                                            identifier: "deleteUserCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete User - '{firstName} {middleName} {lastName}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteUser",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.STROKED,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteUserConfirm",
                                                    color: ButtonColor.WARN,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.FLAT,
                                                    icon: "delete",
                                                    label: "Delete"
                                                }
                                            ]
                                        },
                                        displayInFormModes: [
                                            FormDiaplyMode.EDIT
                                        ],
                                    },
                                    {
                                        identifier: "saveUser",
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
                                        identifier: "updateUser",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "mode_edit",
                                        onlyIcon: false,
                                        displayInFormModes: [
                                            FormDiaplyMode.EDIT
                                        ]
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    }
                ]
            }
        ]
    }
}
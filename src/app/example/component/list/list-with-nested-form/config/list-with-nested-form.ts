import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ChildListType, FormDiaplyMode, List, ListShadeType, ListSortOrder, ListType, PaginationType } from 'ngx-material-widget';

export const listWithNestedForm: List = {
    identifier: "listWithNestedForm",
    header: {
        title: "List with nested form",
        icon: {
            font: "blur_circular"
        }
    },
    description: {
        text: "Click on a row to expand the row to display a form with respect to the row"
    },
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
            width: 25
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
            width: 15,
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
            identifier: "delete",
            type: ButtonType.GHOST,
            label: "Delete",
            color: ButtonColor.WARN,
            size: ButtonSize.SMALL,
            icon: "delete",
            onlyIcon: false
        },
        {
            identifier: "save",
            type: ButtonType.GHOST,
            label: "Save",
            color: ButtonColor.DEFAULT,
            size: ButtonSize.SMALL,
            icon: "save",
            onlyIcon: false
        }
    ],
    listType: ListType.STATIC,
    staticList: {
        hasOnPageFilter: false
    },
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
    },
    child: {
        type: ChildListType.FORM,
        recordIdentifier: "",
        record: {
            identifier: "nestedForm",
            displayInColumns: 1,
            formFields: [
                {
                    field: {
                        key: "description",
                        label: "Description",
                        type: FieldType.TEXTAREA,
                        rows: 10
                    },
                }
            ],
            action: {
                align: "right",
                buttons: [
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
                    }
                ]
            },
            displayType: FieldDiaplyType.INLINE,
            displayMode: FormDiaplyMode.EDIT,
        }
    }
}
import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ChildListType, List, ListShadeType, ListSortOrder, ListType, PaginationType } from 'ngx-material-widget';

export const listWithNestedList: List = {
    identifier: "listWithNestedList",
    header: {
        title: "List with nested list",
        icon: {
            font: "blur_linear"
        }
    },
    description: {
        text: "Click on a row to expand the row to display a child list with respect to the row"
    }, 
    shade: {
        type: ListShadeType.ALTERNATE
    },
    uniqueKeys: ["id"],
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
    listType: ListType.DYNAMIC,
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
        type: ChildListType.LIST,
        recordIdentifier: "address",
        record: {
            identifier: "nestedList",
            header: {
                title: "Nested list"
            },
            shade: {
                type: ListShadeType.HOVER
            },
            columns: [
                {
                    fields: [
                        {
                            key: "address1",
                            label: "Address",
                            type: FieldType.TEXT,
                            appearance: FieldAppearance.STANDARD
                        },
                        {
                            key: "address2",
                            type: FieldType.TEXT,
                            appearance: FieldAppearance.STANDARD
                        }
                    ],
                    displayInline: {
                        separator: ", ",
                    },
                    sortable: true,
                    show: true,
                    width: 25
                },
                {
                    fields: [
                        {
                            key: "city",
                            label: "City",
                            type: FieldType.TEXT,
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
                            key: "state",
                            label: "State",
                            type: FieldType.TEXT,
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
                            key: "pincode",
                            label: "Pincode",
                            type: FieldType.TEXT,
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
                column: "address1",
                order: ListSortOrder.asc
            }
        }
    }
}
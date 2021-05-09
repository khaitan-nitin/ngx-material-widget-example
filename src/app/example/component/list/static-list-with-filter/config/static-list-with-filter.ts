import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { List, ListShadeType, ListSortOrder, ListType, PaginationType } from 'ngx-material-widget';

export const staticListWithFilter: List = {
    identifier: "staticListWithFilter",
    header: {
        title: "Static List (with on page filter)",
        icon: {
            font: "find_in_page"
        }
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
        hasOnPageFilter: true
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
    }
}
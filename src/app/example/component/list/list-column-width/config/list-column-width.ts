import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormDiaplyMode, List, ListShadeType, ListSortOrder, ListType, PaginationType } from 'ngx-material-widget';

export const listColumnWidth: List = {
    identifier: "listColumnWidth",
    header: {
        title: "Column custom width",
        icon: {
            font: "waterfall_chart"
        },
        actions: [
            {
                identifier: "goToGithub",
                type: ButtonType.STROKED,
                label: "Code in Github",
                icon: "call_made",
                onlyIcon: false,
                color: ButtonColor.DEFAULT,
                size: ButtonSize.DEFAULT
            }
        ]
    },
    description: {
        text: "We have defined custom width per column inclucing the action column in the configuration of this page. This can be changed as per the the module user will be configuring."
    },
    shade: {
        type: ListShadeType.HOVER
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
            width: 30
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
            width: 10,
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
    stickyHeader: true,
    actionWidth: 15,
    defaultSort: {
        column: "firstName",
        order: ListSortOrder.asc
    }
}
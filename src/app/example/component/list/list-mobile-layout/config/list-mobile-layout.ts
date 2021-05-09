import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { CellControllFieldClass, CellControllType, FormDiaplyMode, List, ListShadeType, ListSortOrder, ListType, PaginationType } from 'ngx-material-widget';

export const listMobileLayout: List = {
    identifier: "listMobileLayout",
    header: {
        title: "Mobile layout",
        icon: {
            font: "line_weight"
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
        text: "List view will change to the card view and list sorting options will move to a dropdown above the card list"
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
    mobile: {
        sorting: [
            {
                key: "firstName",
                label: "Name",
                direction: ListSortOrder.asc
            },
            {
                key: "dob",
                label: "Date of Birth",
                direction: ListSortOrder.desc
            }
        ],
        rowHeight: 30,
        cellCount: 12,
        cells: [
            {
                rows: 1,
                cols: 12,
                key: "name",
                label: "",
                controls: [
                    {
                        key: "firstName",
                        type: CellControllType.FIELD
                    },
                    {
                        key: "middleName",
                        type: CellControllType.FIELD
                    },
                    {
                        key: "lastName",
                        type: CellControllType.FIELD
                    }
                ],
                show: true,
                displayInline: {
                    separator: " "
                },
                fieldStyle: {
                    class: CellControllFieldClass.SECONDARY
                },
            },
            {
                rows: 1,
                cols: 12,
                key: "eamil",
                label: "",
                controls: [
                    {
                        key: "email",
                        type: CellControllType.FIELD
                    }
                ],
                show: true,
                fieldStyle: {
                    class: CellControllFieldClass.TERTIARY
                }
            }
        ],
    }
}
import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const buttonTypesWithBadge: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "flatButtonWithBadge",
        type: ButtonType.FLAT,
        label: "Flat",
        color: ButtonColor.DEFAULT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "aboveAfterBadge",
            content: "1",
            color: BadgeColor.WARN,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "ghostButtonWithBadge",
        type: ButtonType.GHOST,
        label: "Ghost",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "aboveBadge",
            content: "2",
            color: BadgeColor.ASCENT,
            position: BadgePosition.ABOVE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "strokedButtonWithBadge",
        type: ButtonType.STROKED,
        label: "Stroked",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "belowBeforeBadge",
            content: "3",
            color: BadgeColor.WARN,
            position: BadgePosition.BELOW_BEFORE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "raisedButtonWithBadge",
        type: ButtonType.RAISED,
        label: "Raised",
        color: ButtonColor.ASCENT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "afterBadge",
            content: "4",
            color: BadgeColor.PRIMARY,
            position: BadgePosition.AFTER,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "fabButtonWithBadge",
        type: ButtonType.FAB,
        label: "Fab",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "belowBadge",
            content: "5",
            color: BadgeColor.ASCENT,
            position: BadgePosition.BELOW,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "maleChipButtonWithBadge",
        type: ButtonType.CHIP,
        label: "Male",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "genderChipGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "belowAboveAfterBadge",
            content: "8",
            color: BadgeColor.ASCENT,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "femaleChipButtonWithBadge",
        type: ButtonType.CHIP,
        label: "Female",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "genderChipGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "belowBelowBeforeBadge",
            content: "8",
            color: BadgeColor.ASCENT,
            position: BadgePosition.BELOW_BEFORE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "trueDdButtonWithBadge",
        type: ButtonType.DROPDOWN,
        label: "Active",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "activeDdGroup",
        groupLabel: "",
        groupIcon: "more_horiz",
        onlyIcon: true,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "beforeBadge",
            content: "10",
            color: BadgeColor.WARN,
            position: BadgePosition.BEFORE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "falseDdButtonWithBadge",
        type: ButtonType.DROPDOWN,
        label: "In active",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "activeDdGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
];
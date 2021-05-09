import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const buttonColors: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "primaryColor",
        type: ButtonType.FLAT,
        label: "Primary Color",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ]
    },
    {
        identifier: "ascentColor",
        type: ButtonType.FLAT,
        label: "Ascent Color",
        color: ButtonColor.ASCENT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ]
    },
    {
        identifier: "warnColor",
        type: ButtonType.FLAT,
        label: "Warn Color",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ]
    },
    {
        identifier: "defaultColor",
        type: ButtonType.FLAT,
        label: "Default Color",
        color: ButtonColor.DEFAULT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ]
    }
];
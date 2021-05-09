import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const buttonGroupWidth: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "10Button",
        type: ButtonType.FLAT,
        label: "10%",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        width: '10'
    },
    {
        identifier: "15Button",
        type: ButtonType.FLAT,
        label: "15%",
        color: ButtonColor.ASCENT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        width: '15'
    },
    {
        identifier: "25Button",
        type: ButtonType.FLAT,
        label: "25%",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        width: '25'
    },
    {
        identifier: "50Button",
        type: ButtonType.FLAT,
        label: "50 %",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        width: '50'
    }
];
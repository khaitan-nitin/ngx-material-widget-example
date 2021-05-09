import { Form, FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType } from 'ngx-material-widget/lib/field/model';

export const formColumnSelector: Form = {
    identifier: "formColumnSelector",
    displayInColumns: 1,
    formFields: [
        {
            field: {
                key: "columnSelector",
                label: "Display in columns",
                type: FieldType.SLIDER,
                min: 1,
                max: 3,
                step: 1,
                thumbLabel: true,
                tickInterval: "auto"
              },
        }
    ],
    displayType: FieldDiaplyType.HORIZONTAL,
    displayMode: FormDiaplyMode.ADD,
}
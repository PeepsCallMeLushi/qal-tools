import { MaterialOptionValues } from "src/app/shared/components/enums/material-options.enum";
import { Option } from "src/app/shared/models";

export const MaterialOptions: Option[] = [
    {
        value: MaterialOptionValues.CREDITS,
        name: 'Credits',
    },
    {
        value: MaterialOptionValues.DATA_SETS,
        name: 'Data Set',
    },
    {
        value: MaterialOptionValues.CORE_DUSTS,
        name: 'Core Dust',
    },
    
];

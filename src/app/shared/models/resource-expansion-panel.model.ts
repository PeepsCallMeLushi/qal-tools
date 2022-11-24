import { FormControl } from "@angular/forms";

export class ResourceExpansionPanel {
    constructor(public headerName = '',
                public leftInputLabel = '',
                public leftIndentifier = '',
                public leftPlaceholder = '',
                public leftFormControl = new FormControl(0),
                public rightInputLabel = '',
                public rightIndentifier = '',
                public rightPlaceholder = '',
                public rightFormControl = new FormControl(0),
                ) {
                    this.headerName = headerName;
                    this.leftInputLabel = leftInputLabel;
                    this.leftIndentifier = leftIndentifier;
                    this.leftPlaceholder = leftPlaceholder;
                    this.leftFormControl = leftFormControl;
                    this.rightInputLabel = rightInputLabel;
                    this.rightIndentifier = rightIndentifier;
                    this.rightPlaceholder = rightPlaceholder;
                    this.rightFormControl = rightFormControl;
                }

}
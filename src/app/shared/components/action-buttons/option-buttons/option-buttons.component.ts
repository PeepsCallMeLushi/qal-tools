import { Component, Input } from '@angular/core';
import { ActionButton } from 'src/app/shared/models';

@Component({
  selector: 'option-buttons',
  templateUrl: './option-buttons.component.html',
  styleUrls: ['./option-buttons.component.scss']
})
export class OptionButtonsComponent {

  @Input() actions: ActionButton[] = [];

}

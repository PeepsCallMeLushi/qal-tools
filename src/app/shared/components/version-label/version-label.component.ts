import { Component } from '@angular/core';

import packageJson from '../../../../../package.json';

@Component({
  selector: 'version-label',
  templateUrl: './version-label.component.html',
  styleUrls: ['./version-label.component.scss']
})
export class VersionLabelComponent{

  public appVersion = packageJson.version;

  constructor() { }

}

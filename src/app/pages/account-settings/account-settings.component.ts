import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private sService: SettingsService) { }

  ngOnInit(): void {
    this.sService.checkTheme();
  }

  changeTheme(theme: string) {
    this.sService.changeTheme(theme);
  }

  

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  showInput = false
  navSearchInput: string = ''

  constructor(
    public auth: AuthService,
    private sharedService:  SharedService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
  }
// Send navSearchInput to navSearchInputSource$ Subject
onNavSearchInputChange(){
  this.sharedService.navSearchInputSource$.next(this.navSearchInput)
}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  showInput = false
  navSearchInput = ''
  constructor(
    public authService: AuthService,
    private sharedService:  SharedService
  ){}
  ngOnInit(): void { 
  }
  // Logout
  logout(){
    this.authService.logout()
  }
  // Send navSearchInput to navSearchInputSource$ Subject
  onNavSearchInputChange(){
    this.sharedService.navSearchInputSource$.next(this.navSearchInput)
  }
}

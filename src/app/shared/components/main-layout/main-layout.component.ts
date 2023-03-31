import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public authService: AuthService
  ){}
  
  ngOnInit(): void {
  }
  // Logout
  logout(){
    this.authService.logout()
  }

}

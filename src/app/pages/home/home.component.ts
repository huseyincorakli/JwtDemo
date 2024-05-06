import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`Home
  `
})
export class HomeComponent {
  obj:any;
http= inject(HttpServiceService)
async ngOnInit(){
 var obs = this.http.get({
    action:'GetAllUsers',
    controller:'Auth'
  })
  await firstValueFrom(obs).then(data=>{
    this.obj=data;
  }).catch(err=>{
    console.log(err);
    
  })
}
}

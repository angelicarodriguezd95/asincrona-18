import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  constructor(private userService: UserservicesService){}
  comentarios = new Array();
  ngOnInit(){
  
    this.userService.getUsersAll().subscribe({
      next: (UserAll : Users[]) => this.comentarios = UserAll,
      error: (e) => console.error(e),
      complete : () => console.info("La API devolvio todo los registros")
    })
  }
}

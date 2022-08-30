import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Show } from 'src/app/shared/models/show';
import { ShowsService } from 'src/app/shared/services/shows/shows.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ShowsListComponent implements OnInit {

  showsList: Show[] = [];
  
  constructor(
    private showService: ShowsService,
    private messageService : MessageService, 
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  getShowsList(){

    this.showService.getShowsList()
    .subscribe(
      (result : any)=>{

        if(result.success){
          
        this.showsList = result.message;}
      }
    
    )
  }

  editShow(showId: string){

    this.showService.getShow(showId)
    .subscribe(
      (result : any) => {

        if(result.success){
          this.router.navigateByUrl(`categories/modifier-catégorie/${showId}`)

        }

        else{
          this.messageService.add({severity:'warn', detail: result.message });
        }
      },
      (err) =>{
        this.messageService.add({severity:'error', detail: 'Erreur, contactez webmaster' });
      }
    )
  }

  deleteShow(showId : string){
      this.confirmationService.confirm({
          message: 'Voulez-vous vraiment supprimer cette catégories?',
          accept: () => {
              //Actual logic to perform a confirmation
              this.showService.deleteShow(showId)
              .subscribe(
                  (result : any) =>{
                  if(result.success == true ){

                    //affichage du message lors d'un ajout sans erreur
                    this.messageService.add({severity:'success', detail: result.message});
                    this.getShowsList();

                  }
                  else{
                    this.messageService.add({severity:'error', detail: result.message});
                  }
                },
                (err) =>{
                  this.messageService.add({severity:'error', detail: 'Erreur système: faire appel au webmaster'});
                }
              )
        },
            reject: (type: any) => {
                switch(type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'info', detail:'Suppression annulée'});
                    break;
                }
            }
      }
      )}
}

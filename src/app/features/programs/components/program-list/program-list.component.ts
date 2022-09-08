import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Show } from 'src/app/shared/models/show';
import { ProgramDataService } from 'src/app/shared/services/programs/program-data/program-data.service';
import { ProgramRoutesService } from 'src/app/shared/services/programs/program-routes/program-routes.service';
import { ShowsService } from 'src/app/shared/services/shows/shows.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class ProgramListComponent implements OnInit {

  showsList: Show[] = [];

  currentDate: any;
  
  constructor(
    private showService: ShowsService,
    private calendarDataService: ProgramDataService,
    private calendarRouteService: ProgramRoutesService,
    private messageService : MessageService, 
    private confirmationService: ConfirmationService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getPrograms();
    this.getCurrentDate();
  }

  getCurrentDate(){
    this.route.queryParams
      .subscribe( params =>{

        const date = new Date( Date.UTC(params.annee, params.mois - 1, params.jour));

        this.currentDate = date.toLocaleDateString(
          'fr-FR', 
          { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day:'numeric'
          }
        );
      })
  }

  getPrograms(){  
    
    this.calendarRouteService.getProgramsList()
    .subscribe(
      (result : any)=>{

        if(result?.success){
          this.showsList = result.message;
        }
      }
    
    )
  }

  onAddProgram(){
    this.router.navigate(['/programmes-tv/créer'], { queryParamsHandling: 'preserve' })
  }

  editShow(showId: string){

    this.showService.getShow(showId)
    .subscribe(
      (result : any) => {

        if(result.success){
          this.router.navigateByUrl(`types-émissions/modifier/${showId}`)

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
                    this.getPrograms();

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

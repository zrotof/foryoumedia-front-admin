import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { lastValueFrom, timer } from 'rxjs';
import { ProgramRoutesService } from 'src/app/shared/services/programs/program-routes/program-routes.service';

@Component({
  selector: 'app-program-add-edit',
  templateUrl: './program-add-edit.component.html',
  styleUrls: ['./program-add-edit.component.scss'],
  providers: [MessageService]
})

export class ProgramAddEditComponent implements OnInit {

  //Program form declaration
  programForm : FormGroup;
  isSaveButtonClicked = false;
  isEditButtonClicked = false
  imageDisplay!: string | ArrayBuffer | null;
  isEditMode = false;
  initialShowDataWhenEdit: any;

  currentDate: any;

  constructor(

    private fb: FormBuilder, 
    private programRouteService: ProgramRoutesService, 
    private messageService : MessageService, 
    private location: Location,
    private router : Router,
    private activatedRoute: ActivatedRoute) {

    this.programForm = this.fb.group({
      name: ["", Validators.required],
      purpose: [""]
    });

   }

  ngOnInit(): void {
    //this.checkEditMode();
    this.getCurrentDate();
  }

  getCurrentDate(){
    this.activatedRoute.queryParams
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

  onSaveProgram(){

    this.isSaveButtonClicked = true;

    if(this.programForm.invalid){
      return; 
    }

    const newShowFormData = new FormData();

    newShowFormData.append('name', this.programForm.controls['name'].value);
    newShowFormData.append('image', this.programForm.controls['image'].value);
    newShowFormData.append('description', this.programForm.controls['description'].value);

    
    this.programRouteService.addShow(newShowFormData)
    .subscribe(
      (result : any) =>{
      if(result.success == true ){

        //affichage du message lors d'un ajout sans erreur
        this.messageService.add({severity:'success', detail: result.message});
        lastValueFrom(timer(2000))
        .then( 

          //après l'ajout d'une catégorie on revient à la liste
          () =>{ this.location.back()});
      }
      else{
        this.messageService.add({severity:'error', detail: result.message});
      }
    },
    () =>{
      this.messageService.add({severity:'error', detail: 'Erreur système: faire appel au webmaster'});
    }
    )}

  get formControls(){
    return this.programForm.controls;
  }


  onCancelAddEditProgram(){
    this.router.navigate(['programmes-tv/liste'], {queryParamsHandling: 'preserve'});
  }

/*
  //This function is use to initialise form when editing a category
  checkEditMode(){

      this.activatedRoute.params.subscribe(
        (params : any)=>{
          if(params.id){
          this.isEditMode =true;

          this.showService.getShow(params.id).subscribe(
            (result : any) => {

              if(result.success){

                //initialising first data when edit in order to kow if value have changes

                this.initialShowDataWhenEdit = result.message;
                this.showForm.controls['name'].setValue(result.message.name);
                this.showForm.controls['description'].setValue(result.message.description)       
                const imagePreviewed = <HTMLImageElement>document.getElementById('image-previewed');
                this.imageDisplay = `${result.message.image}`;
                imagePreviewed.style.display = 'block';
              }
            },
            () =>{
              this.messageService.add({severity:'warn', detail: 'Émission inexistante, contactez le webmaster'});
              return;
            }
          )}
        },
        () =>{
          this.messageService.add({severity:'warn', detail: 'Émission inconnue' });
          return;
        }
  )}
*/


  onEditProgram(){

    this.isEditButtonClicked = true;

    if((
      this.programForm.controls['name'].value ==  this.initialShowDataWhenEdit.name
      &&
      this.programForm.controls['description'].value ==  this.initialShowDataWhenEdit.description )
      ){

      this.messageService.add({severity:'info', detail: 'Aucune modification enregistrée'});
      return ;
    }

    if(this.programForm.invalid && !this.programForm.controls['name'].value){
     
      return;
    }
    
    const newShowFormData = new FormData();

    if(this.programForm.controls['name'].value  !==  this.initialShowDataWhenEdit.name){
      newShowFormData.append('name', this.programForm.controls['name'].value);
    }

    if(this.programForm.controls['description'].value ==  this.initialShowDataWhenEdit.description){
      newShowFormData.append('description', this.programForm.controls['description'].value);
    }

    /*
    this.showService.editShow(this.initialShowDataWhenEdit._id, newShowFormData).subscribe(
      (result)=>{

        if(result.success){
         //affichage du message lors d'un ajout sans erreur
         this.messageService.add({severity:'success', detail: result.message});
         lastValueFrom(timer(2000))
         .then( 
 
           //après l'ajout d'une catégorie on revient à la liste
           () =>{ this.location.back()}
          );
        }
      },
      ()=>{
        this.messageService.add({severity:'info', detail: 'Categorie inconnue'});
      }
    )

    */


  }


}

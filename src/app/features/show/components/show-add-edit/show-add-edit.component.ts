import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, timer, lastValueFrom } from 'rxjs';
import { ShowsService } from 'src/app/shared/services/shows/shows.service';

@Component({
  selector: 'app-show-add-edit',
  templateUrl: './show-add-edit.component.html',
  styleUrls: ['./show-add-edit.component.scss'],
  providers: [MessageService]
})
export class ShowAddEditComponent implements OnInit {

//Show form declaration
showForm : FormGroup;
isSaveButtonClicked = false;
isEditButtonClicked = false
imageDisplay!: string | ArrayBuffer | null;
isEditMode = false;
isImageEdit = false;
initialShowDataWhenEdit: any ;

  constructor(

    private fb: FormBuilder, 
    private showService: ShowsService, 
    private messageService : MessageService, 
    private location: Location,
    private router : Router,
    private activatedRoute: ActivatedRoute) {

    this.showForm = this.fb.group({
      name: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required]
    });

   }

  ngOnInit(): void {
    this.checkEditMode();
  }


  showImagePreview(event: any){
    
    const file = event.target.files[0];

    if(file){

      this.isImageEdit = true;
      this.showForm.patchValue({image: file});
      this.formControls['image'].updateValueAndValidity();

      const fileReader = new FileReader();
      fileReader.onload = () =>{
        this.imageDisplay = fileReader.result;
      }

      fileReader.readAsDataURL(file);

      const imgElement = <HTMLElement>document.getElementById('image-previewed');
      imgElement.style.display = 'block';
    }
  }

  onSaveShow(){

    this.isSaveButtonClicked = true;

    if(this.showForm.invalid){
      return; 
    }

    const newShowFormData = new FormData();

    newShowFormData.append('name', this.showForm.controls['name'].value);
    newShowFormData.append('image', this.showForm.controls['image'].value);
    newShowFormData.append('description', this.showForm.controls['description'].value);

    
    this.showService.addShow(newShowFormData)
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
    return this.showForm.controls;
  }

  onCancelAddEditShow(){
    this.router.navigateByUrl('types-émissions');
  }

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
  

  onEditShow(){

    this.isEditButtonClicked = true;

    if((
      this.showForm.controls['name'].value ==  this.initialShowDataWhenEdit.name
      &&
      this.showForm.controls['description'].value ==  this.initialShowDataWhenEdit.description )
      && 
      !this.isImageEdit){

      this.messageService.add({severity:'info', detail: 'Aucune modification enregistrée'});
      return ;
    }

    if(this.showForm.invalid && !this.showForm.controls['name'].value){
     
      return;
    }
    
    const newShowFormData = new FormData();

    if(this.showForm.controls['name'].value  !==  this.initialShowDataWhenEdit.name){
      newShowFormData.append('name', this.showForm.controls['name'].value);
    }

    if(this.showForm.controls['description'].value ==  this.initialShowDataWhenEdit.description){
      newShowFormData.append('description', this.showForm.controls['description'].value);
    }

    if(this.isImageEdit){
      newShowFormData.append('image', this.showForm.controls['image'].value);
    }

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


  }
}



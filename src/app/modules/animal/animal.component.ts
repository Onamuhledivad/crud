import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';
import { Animal } from 'src/app/shared/interfaces/animal.interface';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {

  objAnimals: Animal[] = [
    {
      id: 1,
      animalType: 'Dog',
      name: 'Shiba Inu',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',    
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      pic: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      id: 2,
      animalType: 'Dog',
      name: 'Siberian Husky',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',    
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      pic: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      id: 3,
      animalType: 'Cat',
      name: 'Bombay',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://static.vecteezy.com/system/resources/previews/027/540/319/non_2x/black-bombay-cat-white-background-ai-generative-free-photo.jpeg',
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2v3y-yMdRezbQs69QlAaHyUOaSWfjCZmQXxaYGveVA&s',
    },
    {
      id: 4,
      animalType: 'Bird',
      name: 'Owl',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://static.vecteezy.com/system/resources/previews/027/540/319/non_2x/black-bombay-cat-white-background-ai-generative-free-photo.jpeg',
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2v3y-yMdRezbQs69QlAaHyUOaSWfjCZmQXxaYGveVA&s',
    },
    {
      id: 5,
      animalType: 'Horse',
      name: 'Mustang',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://animales.me/wp-content/uploads/2020/04/Caballo-Mustang.jpg',
      pic: 'https://i.pinimg.com/474x/10/8d/ee/108dee87c3972fc39457c3f6e28ecfc7.jpg',
    },
    {
      id: 6,
      animalType: 'Snake',
      name: 'Black Mamba',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://www.ecoticias.com/userfiles/2017/Oct_20/eco62_32_original.jpg',
      pic: 'https://pm1.aminoapps.com/7722/a1c20c85733e2ea546ab1cae4a176f7f6dd720abr1-522-392v2_128.jpg',
    },
    {
      id: 7,
      animalType: 'Primate',
      name: 'Spider monkey',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Ateles_fusciceps_Colombia.JPG',
      pic: 'https://pm1.aminoapps.com/7722/a1c20c85733e2ea546ab1cae4a176f7f6dd720abr1-522-392v2_128.jpg',
    },
    {
      id: 8,
      animalType: 'Turtle',
      name: 'Marine Turtle',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://cdn0.ecologiaverde.com/es/posts/9/6/9/tortuga_boba_2969_7_600.webp',
      pic: 'https://pm1.aminoapps.com/7722/a1c20c85733e2ea546ab1cae4a176f7f6dd720abr1-522-392v2_128.jpg',
    },
    {
      id: 9,
      animalType: 'Turtle',
      name: 'Marine Turtle',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://cdn0.ecologiaverde.com/es/posts/9/6/9/tortuga_boba_2969_7_600.webp',
      pic: 'https://pm1.aminoapps.com/7722/a1c20c85733e2ea546ab1cae4a176f7f6dd720abr1-522-392v2_128.jpg',
    },
    {
      id: 10,
      animalType: 'Bird',
      name: 'Owl',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur quae id accusamus quod ad est odio nostrum, qui iste repudiandae consequuntur delectus eos, cupiditate minus deserunt facere, quo laborum!',    
      img: 'https://static.vecteezy.com/system/resources/previews/027/540/319/non_2x/black-bombay-cat-white-background-ai-generative-free-photo.jpeg',
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2v3y-yMdRezbQs69QlAaHyUOaSWfjCZmQXxaYGveVA&s',
    },
  ];

  dataTable = new MatTableDataSource(this.objAnimals);

  dataTitle = 'Animals List';
  dataType = 'Animal';


  constructor(public dialog: MatDialog) {}

  // constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddFormComponent,{
      data: this.dataType
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}

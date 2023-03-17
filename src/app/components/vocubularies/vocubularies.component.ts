import { Component, OnInit } from '@angular/core';
import { IVocubulary } from 'src/app/Models/IVocubulary';
import { Vocubulary } from 'src/app/Models/Vocubulary';
import { VocubService } from 'src/app/Services/vocub.service';

@Component({
  selector: 'app-vocubularies',
  templateUrl: './vocubularies.component.html',
  styleUrls: ['./vocubularies.component.css'],
})
export class VocubulariesComponent implements OnInit {
  vocubularies: Vocubulary[] = [];
  jwtToken: any;
  constructor(private vocubService: VocubService) {}

  ngOnInit(): void {
    if (localStorage.getItem('jwtToken')) {
      this.jwtToken = JSON.parse(localStorage.getItem('jwtToken')!);
      console.log(this.jwtToken.token);
    }

    this.vocubService.getVocubs(this.jwtToken.token).subscribe((data: any) => {
      this.vocubularies = data.data;
      // console.log(data);
    });
  }
}

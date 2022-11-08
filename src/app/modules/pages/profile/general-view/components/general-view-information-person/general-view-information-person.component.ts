import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-view-information-person',
  templateUrl: './general-view-information-person.component.html',
  styleUrls: ['./general-view-information-person.component.scss']
})
export class GeneralViewInformationPersonComponent implements OnInit {

  dateValue : string = '12/11/1997' ;
  selected !: any;
  phones: any[] = [{ name : '+ 57', code: 'AU' }, { name : '+ 86', code: 'AU' }];

  constructor() { }

  ngOnInit(): void {
  }

}

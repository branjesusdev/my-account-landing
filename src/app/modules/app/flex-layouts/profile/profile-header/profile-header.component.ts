import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@shared/services/code/spinner.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(
    public spinner : SpinnerService
  ) { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

import { HotToastService } from '@ngneat/hot-toast';


@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {

  private configuration : object = {}

  constructor(private toast: HotToastService) {
    this.configuration = {
      autoClose: true,
      dismissible: true,
      position: "bottom-center",
      duration: 10000,
      style: {
        'margin-bottom' : '3rem',
        'font-size' : '1.5rem'
      }
    }
  }

  clearShow() {
    this.toast.close();
  }

  showSuccess( message : string ) {
    this.clearShow()
    this.toast.success(message, this.configuration);
  }

  showInfo(message : string ) {
    this.clearShow()
    this.toast.info(message, this.configuration);
  }

  showWarn(message : string ) {
    this.clearShow()
    this.toast.warning(message, this.configuration);
  }

  showLoading(message : string ) {
    this.clearShow()
    this.toast.success(message, this.configuration);
  }

  showError(message : string ) {
    this.clearShow()
    this.toast.error(message, this.configuration);
  }

}

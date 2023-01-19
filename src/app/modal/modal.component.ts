import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  baseUrl: string;
  constructor(
    private modalService: NgbModal,
    private readonly configService: ConfigService
  ) {
    this.baseUrl = this.configService.getBaseUrl();
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.baseUrl = result.value;
          this.configService.setBaseUrl(this.baseUrl);
          console.log(this.configService.getBaseUrl());
        },
        (f) => f
      );
  }
}

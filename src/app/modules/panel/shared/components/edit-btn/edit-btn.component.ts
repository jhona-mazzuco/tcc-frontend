import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss']
})
export class EditBtnComponent {
  @Input() id!: string;
  @Input() disabled!: boolean;

  constructor(private router: Router) {
  }

  onClick($event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    this.router.navigate([this.id, 'editar']);
  }
}

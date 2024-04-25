import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AngularNodeViewComponent } from 'ngx-tiptap';

@Component({
  selector: 'app-nodeview-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})

export class NodeviewFileComponent extends AngularNodeViewComponent {

  onDelete(){
    this.deleteNode();
  }
}
import { NgFor, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Editor } from '@tiptap/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuDropdownComponent } from '../menu-dropdown/menu-dropdown.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuItemComponent, MenuDropdownComponent, NgFor, NgClass],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  @Input() editor: Editor;
  items = [
    {
      icon: 'format_bold',
      title: 'Bold',
      action: () => this.editor.chain().focus().toggleBold().run(),
      isActive: () => this.editor.isActive('bold'),
    },
    {
      icon: 'format_italic',
      title: 'Italic',
      action: () => this.editor.chain().focus().toggleItalic().run(),
      isActive: () => this.editor.isActive('italic'),
    },
    {
      icon: 'strikethrough_s',
      title: 'Strike',
      action: () => this.editor.chain().focus().toggleStrike().run(),
      isActive: () => this.editor.isActive('strike'),
    },
  ]

  textFormatMenu = {
    icon: 'match_case',
    title: 'match_case',
  }

  imageMenu = {
    icon: 'image',
    title: 'image',
  }

  headingItems = 
    [
      {
        title: 'Heading 1',
        action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => this.editor.isActive('heading', { level: 1 }),
      },
      {
        title: 'Heading 2',
        action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => this.editor.isActive('heading', { level: 2 }),
      },
      {
        title: 'Body',
        action: () => this.editor.chain().focus().setParagraph().run(),
        isActive: () => this.editor.isActive('paragraph'),
      },
    ]

  otherItems = [
    {
      icon: 'event_list',
      title: 'Task',
      action: () => this.editor.chain().focus().toggleTaskList().run(),
      isActive: () => this.editor.isActive('taskList'),
    }
  ]

  selectedFile: File;
  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
    if (this.editor) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.editor.chain().focus().setImage({ src: reader.result.toString() }).run();
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addImageByUrl(url: string){
    if(url){
      this.editor.chain().focus().setImage({ src: url }).run();
    }
  }
}

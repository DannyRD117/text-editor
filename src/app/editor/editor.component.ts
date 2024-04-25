import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { NgxTiptapModule } from 'ngx-tiptap';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Image from '@tiptap/extension-image'
import { CommonModule } from '@angular/common';
import Placeholder from '@tiptap/extension-placeholder';

import { CounterComponentExtension, FileComponentExtension } from "./extensions/extension";


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [NgxTiptapModule,MenuBarComponent, CommonModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit, OnDestroy{

  editor: Editor;

  counterContentExample =  `
  <p>This is still the text editor you're used to, but enriched with node views.</p>
  <angular-component-counter count="0"></angular-component-counter>
  <p>The below is another counter component with different scope, The count is preset to "1"</p>
  <angular-component-counter count="1"></angular-component-counter>
  <p>You can also create an editable component item inside the component</p>
  <angular-component-editable><p>This text is editable</p></angular-component-editable>
  <p>Did you see that? These are Angular components. We are really living in the future.</p>
  `

  fileContentExample =  `
  <p>This is a file</p>
  <file></file>
  <p>This is a file</p>
  <file></file>
  <p>End</p>
  `

  fileJson = { "type": "doc", "content": [ { "type": "heading", "attrs": { "level": 1 }, "content": [ { "type": "text", "text": "This is a file" } ] }, { "type": "angularFileComponent", "attrs": { "count": 0 } }, { "type": "paragraph", "content": [ { "type": "text", "text": "This is a file" } ] }, { "type": "angularFileComponent", "attrs": { "count": 0 } }, { "type": "paragraph", "content": [ { "type": "text", "text": "End" } ] } ] }

  constructor(private injector: Injector){}

  ngOnInit(): void {
    this.editor = new Editor({
      editable: true,
      content: this.fileJson,
      extensions: [
        StarterKit,
        CounterComponentExtension(this.injector),
        FileComponentExtension(this.injector), 
        TaskList,
        TaskItem.configure({
          nested: true,
          HTMLAttributes: {
            class: 'editor-task',
          },
        }),
        Image.configure({
          inline: false,
          HTMLAttributes: {
            class: 'editor-image',
          },
        }),
        // Placeholder.configure({
        //   placeholder: 'Write something …',
        // }),
        
      ],
      onUpdate: ({editor}) => {
        console.log("updated");
      }
    });
  }
      
      value = '<p>Hello, Tiptap!</p>';
      
      nobleTeamTamplate = `
      <h1>Noble Team</h1>
      <p>Noble Team was a special operations unit of the UNSC Special Warfare Command...</p>
      <p>Insert more content about Noble Team here...</p>
      `;
      
      setNobleTeamTamplate(){
        this.editor.commands.setContent(this.nobleTeamTamplate)
      }
      ngOnDestroy(): void {
        this.editor.destroy();
      }
    }
    
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header  from '@editorjs/header';
import { EditorComponent } from './editor/editor.component';

class CustomBlock  {
  constructor(private data: any, private config: any, private api: any) {
    this.data = data;
    this.config = config;
    this.api = api;
  }

  // Devuelve la estructura HTML del bloque
  render() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('custom-block');
    wrapper.innerHTML = `<p>${this.data.text}</p>`;
    return wrapper;
  }

  // Devuelve la configuración de la barra de herramientas del bloque
  static get toolbox() {
    return {
      icon: '<svg width="20" height="20"><circle cx="10" cy="10" r="8" fill="none" stroke="black"/></svg>',
      title: 'Custom Block'
    };
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'text-editor';
  editorJs: EditorJS; 
  
  ngOnInit(): void {
    this.editorJs = new EditorJS({
      holder:'editorjs',
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        // customBlock: {
        //   class: CustomBlock,
        //   inlineToolbar: true
        // }
      }  
    });
  }
  
  open(){
    this.editorJs.toolbar.open();
  }
}

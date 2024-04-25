import { Injector } from '@angular/core';
import { Node, mergeAttributes } from '@tiptap/core';
import { AngularNodeViewRenderer } from 'ngx-tiptap';

import { NodeviewCounterComponent } from './counter/counter.component';
import { NodeviewFileComponent } from './file/file.component';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    file: {
      /**
       * Set a file
       */
      addFile: () => ReturnType,
    }
  }
}

export const CounterComponentExtension = (injector: Injector): Node => {
    return Node.create({
      name: 'angularCounterComponent',
      group: 'block',
      atom: true,
      draggable: true,
  
      addAttributes() {
        return {
          count: {
            default: 0,
          },
        };
      },
  
      parseHTML() {
        return [
          {
            tag: 'angular-component-counter',
          },
        ];
      },
  
      renderHTML({ HTMLAttributes }) {
        return ['angular-component-counter', mergeAttributes(HTMLAttributes)];
      },
  
      addNodeView() {
        return AngularNodeViewRenderer(NodeviewCounterComponent, { injector });
      },
      
      addCommands() {
        return {
          setCode: () => ({ commands }) => {
            return commands.setMark(this.name)
          },
        }
      },
    });
  };

export const FileComponentExtension = (injector: Injector): Node => {
    return Node.create({
      name: 'angularFileComponent',
      group: 'block',
      atom: true,
      draggable: true,
  
      addAttributes() {
        return {
          count: {
            default: 0,
          },
        };
      },
  
      parseHTML() {
        return [
          {
            tag: 'file',
          },
        ];
      },
  
      renderHTML({ HTMLAttributes }) {
        return ['file', mergeAttributes(HTMLAttributes)];
      },
  
      addNodeView() {
        return AngularNodeViewRenderer(NodeviewFileComponent, { injector });
      },

      addCommands() {
        return {
          setCode: () => ({ commands }) => {
            return commands.setMark(this.name)
          },
          toggleCode: () => ({ commands }) => {
            return commands.toggleMark(this.name)
          },
          unsetCode: () => ({ commands }) => {
            return commands.unsetMark(this.name)
          },
        }
      },
    });
  };
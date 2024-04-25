import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface MenuItemConfig {
  icon: string;
  title: string;
  action?: () => any;
  isActive?: () => boolean;
}

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss', '../menu-bar/menu-bar.component.scss']
})
export class MenuItemComponent {
  @Input() menuBarConfig: MenuItemConfig;
}

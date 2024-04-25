import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItemComponent, MenuItemConfig } from '../menu-item/menu-item.component';

export interface MenuDropdownConfig {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-menu-dropdown',
  standalone: true,
  imports: [MatMenuModule, MenuItemComponent],
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss', '../menu-bar/menu-bar.component.scss']
})
export class MenuDropdownComponent {
  @Input() menuDropdownConfig: MenuDropdownConfig;

}

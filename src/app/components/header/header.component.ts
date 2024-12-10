import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import  {PayService}  from './pay.service';
import { Item } from "./pay-item.interface";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [PayService], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSubmenuVisible = false;
  isMobileView = false;
  isMobileMenuVisible = false;

  payIns: Item[] = []; 
  payOuts: Item[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private payService: PayService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 768;
    }
    this.loadPayItems();
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 768;
    }
  }

  loadPayItems() {
    this.payIns = this.payService.getPayIns();
    this.payOuts = this.payService.getPayOuts();
  }

  showSubmenu() {
    this.isSubmenuVisible = true;
  }

  hideSubmenu() {
    this.isSubmenuVisible = false;
  }

  toggleSubmenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}

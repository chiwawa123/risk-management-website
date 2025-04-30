import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mobileMenuOpen = false;
  searchQuery: string = '';
  filteredPages: { name: string; route: string }[] = [];

  pages = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Downloads', route: '/downloads' },
    { name: 'Services', route: '/services' },
    { name: 'Staff', route: '/staff' },
    { name: 'Contact', route: '/contact' },
  ];

  constructor(private router: Router) {
    this.filteredPages = [...this.pages];
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  filterPages() {
    const query = this.searchQuery.toLowerCase().trim();
    if (query) {
      this.filteredPages = this.pages.filter((page) =>
        page.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredPages = [...this.pages];
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredPages = [...this.pages];
  }

  navigateToPage(page: any) {
    this.router.navigate([page.route], { queryParams: { search: this.searchQuery } });
    this.clearSearch();
  }
}

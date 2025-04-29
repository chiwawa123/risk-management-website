import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = false
  pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Downloads', route: '/downloads' },
  { name: 'Services', route: '/services' },
  { name: 'Staff', route: '/staff' },
  { name: 'Contact', route: '/contact' },
];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }
  searchQuery: string = '';
filteredPages = [...this.pages];

filterPages() {
  const query = this.searchQuery.toLowerCase().trim();
  if (query) {
    this.filteredPages = this.pages.filter(page =>
      page.name.toLowerCase().includes(query)
    );
  } else {
    this.filteredPages = [...this.pages];
  }
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  tabs = [
    { id: "values", label: "Our Values" },
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
  ]

  activeTab = "values"

}

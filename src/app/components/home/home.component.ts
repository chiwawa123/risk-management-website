import { Component } from '@angular/core';
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tabs = [
    { id: "values", label: "Our Values" },
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
  ]

  activeTab = "values"

    services: Service[] = [
      {
        id: "identification",
        title: "Risk Identification",
        description:
          "The Risk Management Unit do the risk identification process which is a systematic process of spotting potential threats that could impact a university's objectives. Those risks can ....",
        iconClass: 'fas fa-clipboard-check',
        image: "assets/images/identify.png",
      },
      {
        id: "assessment",
        title: "Risk Assessment",
        description:
          "The Risk Management Unit do the risk assessment process which is a crucial step in risk management that follows risk identification. The risk assessment process involves analysing and evaluating ....",
         iconClass: 'fas fa-comments',
        image: "assets/images/assess.jpg",
      },
      {
        id: "evaluation",
        title: "Risk Evaluation",
        description:
          "The Risk Management Team also develop and implement strategies and actions to modify the identified risks.....",
         iconClass: 'fas fa-chart-line',
        image: "assets/images/ev.jpg",
      },
      {
        id: "treatment",
        title: "Risk Treatment",
        description:
          "The Risk Management Team also develop and implement strategies and actions to modify the....",
        iconClass: 'fas fa-shield-alt',
              image: "assets/images/treatment.png",
      },
    ]

}

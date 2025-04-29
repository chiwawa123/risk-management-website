import { Component } from '@angular/core';
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: "Risk Identification",
      description: "The Risk Management Unit do the risk identification process which is a systematic process of spotting potential threats that could impact a university's objectives. Those risks can arise from internal operations, market changes, regulatory shifts, or external factors like natural disasters or regional upheavals. The main goal will be to recognize and document possible disruptions before they affect the educational activities. This approach of identifying risks early helps the university to prepare for challenges and make informed decisions on risk management strategies, ultimately improving the likelihood of success and achieving objectives more efficiently.",
      image: "assets/images/identify.png",
      iconClass: 'fas fa-balance-scale',
      id: ''
    },
    {
      title: "Risk Assessment",
      description: "The Risk Management Unit do the risk assessment process which is a crucial step in risk management that follows risk identification. The risk assessment process involves analysing and evaluating the identified risks to understand their potential impact and likelihood, ultimately helping organizations make informed decisions about how to manage them. The evaluation process involves, assessing the likelihood which is the probability that the hazard will occur and result in harm. The Risk Management Team will also assess the severity/impact which examines, how serious could the consequences be. The level of risk which combines the assessment of likelihood and severity to determine the overall level of risk is determined.",
      image: "assets/images/assess.jpg",
      iconClass: 'fas fa-shield-alt',
      id: ''
    },
    {
      title: "Risk Evaluation",
      description: "The Risk Management Team compare the analyzed risks against established risk criteria such as the risk appetite and the university tolerances. This will help to determine the significance of each risk and prioritizing them for treatment. This often involves using a risk matrix which is the likelihood versus the impact to categorize risks into different levels like low, medium and high.",
      image: "assets/images/ev.jpg",
      iconClass: 'fas fa-clipboard-check',
      id: ''
    },
    {
      title: "Risk Treatment",
      description: "The Risk Management Team also develop and implement strategies and actions to modify the identified risks. The common risk treatment options which may be given includes, risk avoidance which is the elimination of the activity or condition that gives rise to the risk. Risk mitigation or reduction which is taking actions to reduce the likelihood or impact of the risk. The risk can also be transferred by shifting the responsibility or financial burden of the risk to a third party like insurances and also outsourcing. Risk may also be accepted through acknowledging the risk and deciding to take no action usually for low-level risks. A risk treatment plan outlining the chosen strategies and specific actions to be taken for each significant risk, along with responsible parties and timelines..",
      image: "assets/images/treatment.png",
      iconClass: 'fas fa-shield-alt',
      id: ''
    },
    {
      title: "Risk Monitoring and Review",
      description: "This process is an ongoing process of tracking the identified risks, monitoring the effectiveness of the implemented risk treatments, and identifying new or emerging risks. Regular reviews of the risk register and risk management plan are conducted. This step ensures that the risk management process remains relevant and effective over time. The risk management process is a vital framework that enables Chinhoyi University of Technology to proactively manage uncertainties, protect their assets, achieve their objectives, and capitalize on opportunities in a dynamic environment..",
      image: "assets/images/monitor.png",
      iconClass: 'fas fa-chart-line',
      id: ''
    },

  ];
  selectedService: any = null;

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }

}

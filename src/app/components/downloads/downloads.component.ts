import { Component, OnInit } from '@angular/core';
import { DownloadCategory } from '../../interfaces/download-category';
import { DownloadFile } from '../../interfaces/download-file';

@Component({
  selector: 'app-downloads',
  standalone: false,
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.css'
})
export class DownloadsComponent  implements OnInit {
  categories: DownloadCategory[] = [
    {
      id: "policies",
      name: "Policies",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>`,
      description: "Official risk management policies and guidelines",
    },
    {
      id: "frameworks",
      name: "Frameworks",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>`,
      description: "Comprehensive risk management frameworks and methodologies",
    },
    {
      id: "legislation",
      name: "Legislation",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>`,
      description: "Acts, statutory instruments, and legal requirements",
    },
    {
      id: "templates",
      name: "Templates",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>`,
      description: "Standardized templates and forms for risk management",
    },
  ]

  allDownloads: DownloadFile[] = [
    {
      id: "risk-policy",
      title: "Risk Management Policy",
      description: "Comprehensive policy outlining the university's approach to risk management",
      fileType: "pdf",
      fileSize: "1.2 MB",
      downloadCount: 1245,
      lastUpdated: "15 Mar 2024",
      category: "policies",
      featured: true,
      url: "/assets/files/risk-policy.pdf",
    },
    {
      id: "risk-framework",
      title: "Risk Management Framework",
      description: "Structured approach for identifying, assessing, and managing risks",
      fileType: "pdf",
      fileSize: "2.8 MB",
      downloadCount: 987,
      lastUpdated: "10 Apr 2024",
      category: "frameworks",
      featured: true,
      url: "/assets/files/risk-framework.pdf",
    },
    {
      id: "data-protection-act",
      title: "Data Protection Act",
      description: "Zimbabwe Data Protection Act governing personal data processing",
      fileType: "pdf",
      fileSize: "3.5 MB",
      downloadCount: 756,
      lastUpdated: "22 Jan 2024",
      category: "legislation",
      featured: true,
      url: "/assets/files/act.pdf",
    },
    {
      id: "si-155-2024",
      title: "SI 155/2024",
      description: "SI 155 of 2024 establishes a framework for licensing data protection entities and appointing Data Protection Officers in Zimbabwe",
      fileType: "pdf",
      fileSize: "890 KB",
      downloadCount: 432,
      lastUpdated: "05 May 2024",
      category: "legislation",
      new: true,
      url: "/assets/files/si.pdf",
    },

    {
      id: "risk-assessment-guide",
      title: "Risk Assessment Guide",
      description: "Step-by-step guide for conducting effective risk assessments",
      fileType: "pdf",
      fileSize: "1.7 MB",
      downloadCount: 654,
      lastUpdated: "12 Mar 2024",
      category: "frameworks",
      url: "/assets/documents/risk-assessment-guide.pdf",
    },

  ]

  featuredDownloads: DownloadFile[] = []
  filteredDownloads: DownloadFile[] = []
  activeCategory = "all"
  searchQuery = ""

  ngOnInit(): void {
    // Initialize featured downloads
    this.featuredDownloads = this.allDownloads.filter((file) => file.featured)

    // Initialize filtered downloads
    this.filterDownloads()
  }

  setActiveCategory(categoryId: string): void {
    this.activeCategory = categoryId
    this.filterDownloads()
  }

  filterDownloads(): void {
    // Filter by category
    let result = this.allDownloads

    if (this.activeCategory !== "all") {
      result = result.filter((file) => file.category === this.activeCategory)
    }

    // Filter by search query
    if (this.searchQuery.trim() !== "") {
      const query = this.searchQuery.toLowerCase()
      result = result.filter(
        (file) => file.title.toLowerCase().includes(query) || file.description.toLowerCase().includes(query),
      )
    }

    this.filteredDownloads = result
  }

  getFileIconClass(fileType: string): string {
    switch (fileType) {
      case "pdf":
        return "bg-red-600"
      case "doc":
        return "bg-blue-600"
      case "xls":
        return "bg-green-600"
      default:
        return "bg-gray-600"
    }
  }

  getCategoryClass(categoryId: string): string {
    switch (categoryId) {
      case "policies":
        return "bg-blue-100 text-blue-800"
      case "frameworks":
        return "bg-purple-100 text-purple-800"
      case "legislation":
        return "bg-yellow-100 text-yellow-800"
      case "templates":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find((cat) => cat.id === categoryId)
    return category ? category.name : categoryId
  }

}

import { Component, Input } from '@angular/core';
import { Technology } from '../../../../models/technology';

@Component({
  selector: 'app-about-me',
  standalone: false,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @Input() technologies: Technology[] = [];

  get groupedTechnologies() {
    const grouped: { [key: string]: string[] } = {};
  
    // Group the technologies by category
    for (const tech of this.technologies) {
      if (!grouped[tech.category]) {
        grouped[tech.category] = [];
      }
      grouped[tech.category].push(tech.name);
    }
  
    return grouped;
  }
  
  public formatCategoryName(key: string): string {
    switch (key) {
      case 'FE': return 'Frontend';
      case 'BE': return 'Backend';
      case 'DB': return 'Databases';
      case 'DevOps': return 'DevOps';
      case 'Productivity': return 'Productivity';
      case 'Design': return 'Design Tools';
      case 'Analytics': return 'Business Intelligence'; // Keep Analytics but display as BI
      case 'Other': return 'Other';
      default: return key;
    }
  }
  
  get sortedCategories() {
    const order = ['BE', 'FE', 'DB', 'DevOps', 'Productivity', 'Analytics']; // Adjusted order
    return order;
  }
  
}

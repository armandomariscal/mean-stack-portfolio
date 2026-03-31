import { Component, inject, OnInit } from '@angular/core';
import { CvService } from './services/cv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  private cvService = inject(CvService);
  profile: any;

  ngOnInit() {
    this.loadData(); // Load data automatically when the page starts
  }

  // This is the function the HTML was looking for!
  loadData() {
    this.cvService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        console.log('Data received:', data);
      },
      error: (err) => console.error('Error fetching CV:', err)
    });
  }
}
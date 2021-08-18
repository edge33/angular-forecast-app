import { Component, OnInit } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-name-bar',
  templateUrl: './name-bar.component.html',
  styleUrls: ['./name-bar.component.css'],
})
export class NameBarComponent implements OnInit {
  name: string;
  loading = true;
  constructor(private nameService: NameService) {}

  ngOnInit(): void {
    this.nameService.getName('').subscribe((name) => {
      this.name = name;
      this.loading = false;
    });
  }
}

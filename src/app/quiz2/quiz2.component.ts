import { Component } from '@angular/core';
import { Quiz2Service } from './service/quiz2service';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component {
  items = [];
  resetItems = [];
  constructor(private service: Quiz2Service) {

  }
  ngOnInit() {
    this.service.getCategories().subscribe((data) => {
      this.items = data;
      this.resetItems = data;
    });
  }
  onSearchChange(event: any) {
    this.items = this.resetItems;
    this.items = this.items.filter((item: any) => {
      if(item.includes(event.target.value)) {
        return item;
      }
    })
  }

}

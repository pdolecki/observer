import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent {
  constructor(private demoService: DemoService) {}

  handleKeyUp(event: KeyboardEvent) {
    const queryValue = (event.target as HTMLInputElement).value;
    this.demoService.query$.next(queryValue);
  }
}

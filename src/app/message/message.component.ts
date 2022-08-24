import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  response: any;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoService.query().subscribe((res) => (this.response = res));
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() btnClick = new EventEmitter()

  title: string = "Notes"
  dateTime: any = new Date();
  showAddTopic!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => {
        this.showAddTopic = value;
      })
   }

  ngOnInit(): void {
  }

  toggleAddTopic() {
    this.uiService.toggleAddTopic();
    console.log(`ToggleAddTopic clicked! ${this.showAddTopic}`);
  }

}

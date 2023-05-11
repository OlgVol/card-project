import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'card-project';

  ngAfterViewInit(): void {
    $(function() {
      $('[data-toggle="popover"').popover()
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(private router: RouterExtensions, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate([{
      outlets: {
        resources: ['resources'],
        orders: ['orders']
      },
      relativeTo: this.activatedRoute
    }]);
  }

}

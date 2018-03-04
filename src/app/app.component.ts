import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'app';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
   
  }
  ngOnInit() {
    this.router.navigate(['/listaTarefa']);
  }
}



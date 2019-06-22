import { SubtypesService } from './subtypes.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-subtypes',
  templateUrl: './subtypes.page.html',
  styleUrls: ['./subtypes.page.scss'],
})
export class SubtypesPage implements OnInit {

  subtypes: string[]

  constructor(private service: SubtypesService,
    private router: Router) { }

  ngOnInit() {
    this.service.getSubtypes().subscribe(subtypes =>
      this.subtypes = subtypes
    )
  }

  removeSubTypeByIndex(indexToRemove: number) {
    this.subtypes = this.subtypes.filter(function (value, index, array) {
      return index != indexToRemove
    })
  }

  navigateToCards(id: string, subtype: string) {
    let spinner = document.createElement('ion-spinner')
    spinner.color = "primary"
    document.getElementById(id).appendChild(spinner)
    this.router.navigate(['cards', { subtype: subtype }]).then(result =>
      document.getElementById(id).removeChild(spinner)
    )
  }
}

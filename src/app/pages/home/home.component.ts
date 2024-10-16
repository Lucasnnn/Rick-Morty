import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { Character } from 'src/app/shared/models/character.class';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  characters: Character[];
  subscription: Subscription;
  inputSearch = new FormControl('');

  constructor(private _characters: CharactersService) {}

  ngOnInit(): void {
    this.subscriptionCharacters();

    this.initLoad();

    this.subscriptionSearch();
  }

  subscriptionCharacters() {
    this.subscription = this._characters.items$.subscribe({
      next: (value) => {
        this.characters = value;
      },
    });
  }

  initLoad() {
    this._characters.loadAll();
  }

  subscriptionSearch() {
    this.subscription = this.inputSearch.valueChanges
      .pipe(debounceTime(1000))
      .subscribe({
        next: (input) => {
          this._characters.filter(input);
        },
      });
  }

  nextPage(event: Boolean) {
    if (event) {
      this._characters.loadNextPage();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddUser } from '@state/user/user.actions';
import { User } from '@state/user/user.model';
import { State } from '@state/index';
import { selectAllUsers } from '@state/user';
import { map } from 'rxjs/operators'

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  userCount = this.store.pipe(select(selectAllUsers), map(users => users.length));
  constructor(private store: Store<State>) {}

  onUserChange(user: User) {
    this.store.dispatch(new AddUser({ user: user }));
  }
}

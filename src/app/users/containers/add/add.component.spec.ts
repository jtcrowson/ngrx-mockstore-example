import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { AddUser } from '@state/user/user.actions';
import { generateUser } from '@state/user/user.model';
import { UserFormComponent } from './../../components/user-form/user-form.component';
import { AddComponent } from './add.component';
import { State } from '@state/index';
import { provideMockStore, MockStore } from 'ngrx-mockstore';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let store: MockStore<State>;
  const initialState = {
    user: {
      ids: [1],
      entities: {
        1: {
          id: 1,
          firstName: 'John',
          lastName: 'Crowson'
        }
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent, UserFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should dispatch the AddUser action when onUserChange is invoked', () => {
  //   const user = generateUser();
  //   const action = new AddUser({ user });
  //   const spy = jest.spyOn(store, 'dispatch');

  //   fixture.detectChanges();

  //   component.onUserChange(user);
  //   expect(spy).toHaveBeenCalledWith(action);
  // });

  it('should display the right number of users', () => {
    component.userCount.subscribe(count => expect(count).toBe(1));
  });
});

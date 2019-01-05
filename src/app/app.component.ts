import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'octank-claims-angular';

  subscription: Subscription;
  public loggedIn: boolean;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.subscription = this.auth.isAuthenticated()
      .subscribe(result => {
        this.loggedIn = result;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickLogout() {
    this.auth.signOut();
  }
}

import { AmplifyService } from 'aws-amplify-angular';
import awsconfig from '../../aws-exports';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 url = 'https://' + awsconfig.aws_project_region + '.console.aws.amazon.com/pinpoint/home/?region='
        + awsconfig.aws_project_region + '#/apps/'
        + awsconfig.aws_mobile_analytics_app_id + '/analytics/events';
  eventsSent = 0;
  analyticsEventSent = false;

  signedIn: boolean;
    user: any;
    greeting: string;

  constructor( private amplifyService: AmplifyService, private router: Router ) {

    this.amplifyService.authStateChange$
        .subscribe(authState => {
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
                this.user = authState.user;
                this.greeting = 'Howdy ' + this.user.username;
            }

            console.log('user signedin: ' + this.signedIn);

            if ( this.signedIn )  {
                this.router.navigate(['/claims']);
            }

    });

}

  ngOnInit() {
  }

}

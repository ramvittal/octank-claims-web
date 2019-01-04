# Octank Claims Web

This is an Angular 7 and AWS Amplify project that hosts artifacts for running the prototype serverless claims website on AWS. It uses AWS Amplify
framework for user authentication that integrates with AWS Cognito. Furthermore, it hosts the Angular Material UI components that invokes AWS API Gateway endpoints
for creating and listing claims.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. Execute environment setup instructions mentioned here - https://github.com/ramvittal/octank-claims-master/blob/master/README.md  
2. Setup your local envrionment for angular and amplify development - https://aws-amplify.github.io/docs/js/start?platform=angular

### Installing
1. Checkout this project  
2. Update apiUrl in claims-api.service.ts
3. Enable cors for api if needed - https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html 
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 




## Running the tests

 




## Deployment


Package and deploy web apis. Create your own s3 bucket.

```
Build for prod deploy - ng build --prod --aot  
Create a static website hosting s3 bucket and upload the contents of dist folder e.g  aws s3 cp ./octank-claims-angular s3://octank-claims-web --recursive
```

## Contributing

## Authors

* **Ram Vittal** - *Initial work* - [RamVittal](https://github.com/ramvittal)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

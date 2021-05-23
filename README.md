# CanstarTechTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Task Requirements

Build a web-page in Angular that has all of these elements (Table, Module, Service, Component(s), data population, cool CSS element) 

* ### Repository

  https://github.com/ironest/canstar-tech-task

* ### Table
  I originally used Angular Material Tables but later on I tought I should have demonstrated how to use directives (ngIf, ngFor) so I went back to normal plain tables

* ### Module
  Since no routing requested and one single “feature”, there is only the default app module.

* ### Services
  A data.service (that acts as if there was an API to call) is being injected into my state-list component
* ### Components
  * app-component (default)
  * app-state-list (collects data from the service and shows multiple children components)
  * app-state (showing a table)

* ### Data Population
  I created my own data on a different repo and exposed it here: 
  
  http://my-json-server.typicode.com/ironest/canstar-tech-task-api/entries
  
  This data is consumed by the `data.service` using HttpClient

* ### Cool CSS element
  I am not sure what could have been considered “cool”, so I decided to cover different aspects of my layout by demoing:
  * Import an external UI component library (Material)
    * Manual styling plain tables to
    * Replicate some of the real Material Table styles
    * Adding personal touch of coloring
  * Interactive row hovering
  * Flexbox styling to make the UI adapting and fully responsive (desktop / tablet / smartphones)

## To review the submission

* Clone locally the repository
* Run `ng serve`
* Navigate to `http://localhost:4200/`

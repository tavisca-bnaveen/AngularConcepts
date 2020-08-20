import { BrowserModule } from '@angular/platform-browser';
// CUSTOM_ELEMENTS_SCHEMA: This object is use by Angular to define an
// execution for the LitElement/Any other WebComponents
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {createCustomElement} from '@angular/elements';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleComponent} from './simplecomponent';
import {ProductFormComponent} from './components/productformcomponent/app.productform.component';
import { TableDirectiveComponent } from './directive/componentdirective/app.tablecomponent.directive';
import { ProductReactiveFormComponent } from './components/productreactiveformcomponent/app.productreactiveform.component';
import { CategorySenderComponent } from './components/multicomponents/app.categorysender.component';
import { ProductReceiverComponent } from './components/multicomponents/app.productreceiver.component';
import { ServiceComponent } from './components/servicecomponent/app.service.component';
import { LifecycleParentComponent, LifecycleChildComponent } from './components/LifecycleComponent/app.lifecycledemo.component';
import { ListElementComponent } from './litelementsdemo/app.litelement.component';
import {ElementUserComponent} from './elements/app.elementuser.component';
// import LitElements
import './litelementsdemo/app.simpleelement.litelement';
// importing Angular components those will be used as Elements
import {DropDownElement} from './elements/app.dropdown.element';
import { ColorDirective } from './directive/customdirective/app.color.directive';
import { ColorDirectiveComponent } from './components/colordirectivecomponent/app.colordirective.component';
import { CardDirective} from './directive/customdirective/app.card.directive';

// NgModule decorator with properties
// 1. imports: of the type array, used to import standard and external
// angular modules in current application
// 2. declarations: of the type array, used to declare all
// components, pipes and directives of current application
// 3. providers: of the type array, used to provide D.I. Container
// for the current Angular module to register all angular services
// 4. entryComponent: of the type array, used to define Angular
// components as Elements so that they can be exposed to other
// JavaSCript libs/frwks
// 5. bootsrap: of the type array, used to bootsrap all those
// components from declarations array so that they can be used to
// load and render in browser
// 6. schemas: the array that will accepts WEB COmponents' Schema
// to render them using Angular Application
// 7. entryComponents: an array that wil be used to define an array of
// components those will be registered as custom element
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, ProductFormComponent,
    TableDirectiveComponent, ProductReactiveFormComponent,
    CategorySenderComponent, ProductReceiverComponent,
    ServiceComponent, LifecycleParentComponent, LifecycleChildComponent,
    ListElementComponent, DropDownElement, ElementUserComponent,
    ColorDirective, ColorDirectiveComponent,CardDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DropDownElement],
  providers: [],
  bootstrap: [ProductReactiveFormComponent]
})
export class AppModule {
  // process for registering the Angular Component as Custom Element
  // inject the ctro with Injector object. This will help the
  // CustomElementRegisetry to inject the Custom Element in DOM
  constructor(private injector: Injector){
    // regoster the component as element using
    // createCustomElement() method from @angular/element
    const dropDownElement = createCustomElement(DropDownElement, {injector: this.injector});
    // defining the custom tag
    customElements.define('dropdown-element', dropDownElement);
  }
}

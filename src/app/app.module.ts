import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { WizardComponent } from './components/wizard/wizard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AirbnbCalendarModule } from 'comrax-alex-airbnb-calendar';
import { GlobalErrorHandler } from './utilities/interceptors/error';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './screens/login-backdrop/login/login.component';
import { LoginBackdropComponent } from './screens/login-backdrop/login-backdrop.component';
import { LoginFormComponent } from './screens/login-backdrop/login-form/login-form.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { OtpFormComponent } from './screens/login-backdrop/otp-form/otp-form.component';
import { LoginProcessComponent } from './screens/login-backdrop/login-process/login-process.component';
import { SearchComponent } from './screens/search/search.component';
import { DatePickerComponent } from './screens/search/education/date-picker/date-picker.component';
import { EducationResultsComponent } from './screens/education-results/education-results.component';
import { HeaderComponent } from './screens/education-results/header/header.component';
import { TooltipComponent } from './screens/education-results/tooltip/tooltip.component';
import { MyToursComponent } from './screens/my-tours/my-tours.component';
import { ToursTableComponent } from './screens/my-tours/tours-table/tours-table.component';
import { SquadGroupComponent } from './screens/order-tour/squad-assemble/components/squad-group/squad-group.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LinksComponent } from './components/links/links.component';
import { MainComponent } from './components/main/main.component';
import { FormContainerComponent } from './components/form/form-container/form-container.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { OrderTourComponent } from './screens/order-tour/order-tour.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { WorkingStepsComponent } from './components/working-steps/working-steps.component';
import { EducationComponent } from './screens/search/education/education.component';
import { MapsComponent } from './screens/education-results/maps/maps.component';

import { ApiModule } from './api/api.module';

import { InfoCardComponent } from './components/info-card/info-card.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { IconComponent } from './components/icon/icon.component';
import { NavigationGridComponent } from './screens/order-tour/additions/components/navigation-grid/navigation-grid.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FormQuestionComponent } from './components/form/form-question/form-question.component';
import { NavCardComponent } from './components/nav-card/nav-card.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { InputRadioComponent } from './components/form/input-radio/input-radio.component';
import { SleepingOptionsComponent } from './screens/order-tour/sleeping-options/sleeping-options.component';
import { SleepingOptionsFormComponent } from './screens/order-tour/sleeping-options/sleeping-options-form/sleeping-options-form.component';
import { SleepingOptionsByDayComponent } from './components/sleeping-options-by-day/sleeping-options-by-day.component';
import { ExpendPanelComponent } from './components/expend-panel/expend-panel.component';

import { TypographyComponent } from './components/typography/typography.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { FilledNightComponent } from './screens/order-tour/sleeping-options/filled-night/filled-night.component';
import { FlexRowComponent } from './components/grid/flex-row/flex-row.component';
import { SummaryComponent } from './screens/order-tour/summary/summary.component';
import { FlexTableComponent } from './components/grid/flex-table/flex-table.component';
import { FormComponent } from './components/form/form/form.component';
import { FacilitiesComponent } from './screens/order-tour/facilities/facilities.component';

import { AdditionsComponent } from './screens/order-tour/additions/components/additions/additions.component';
import { TourPanelComponent } from './screens/order-tour/additions/components/tour-panel/tour-panel.component';
import { TourTitleComponent } from './screens/order-tour/tour-title/tour-title.component';
import { TransportDetailsComponent } from './screens/order-tour/additions/components/transport-details/transport-details.component';
import { TransportFormComponent } from './screens/order-tour/additions/components/transport-form/transport-form.component';
import { TransportModel } from './screens/order-tour/additions/models/transport-model';
import { SquadAssembleComponent } from './screens/order-tour/squad-assemble/components/squad-assemble.component';

import { NumberToTimePipe } from './utilities/pipes/numberToTime.pipe';
import { FormHeaderComponent } from './components/form/form-header/form-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    NavbarComponent,
    WizardComponent,
    LinksComponent,
    UserInfoComponent,
    NumberToTimePipe,

    // LOGIN COMPS
    LoginComponent,
    LoginBackdropComponent,
    LoginFormComponent,
    OtpFormComponent,
    LoginProcessComponent,

    SearchComponent,
    DatePickerComponent,

    // EDUCTIOM COMPS
    EducationComponent,
    EducationResultsComponent,

    HeaderComponent,
    TooltipComponent,
    PaginationComponent,

    ToursTableComponent,
    MyToursComponent,
    // form comps
    FormContainerComponent,
    FormQuestionComponent,

    OrderTourComponent,
    FormQuestionComponent,
    FormInputComponent,

    NavigationComponent,
    SpinnerComponent,
    BottomNavigationComponent,
    WorkingStepsComponent,
    NavigationGridComponent,
    NavCardComponent,
    NumberInputComponent,
    IconComponent,
    FormInputComponent,
    SquadGroupComponent,


    // ADDITIONS COMPONENTS
    AdditionsComponent,
    TourPanelComponent,
    TransportDetailsComponent,
    TourTitleComponent,
    TransportFormComponent,

    DrawerComponent,
    InfoCardComponent,
    NumberInputComponent,
    IconComponent,
    SquadGroupComponent,
    InputRadioComponent,
    ExpendPanelComponent,
    SleepingOptionsComponent,
    SleepingOptionsFormComponent,
    SleepingOptionsByDayComponent,
    SquadAssembleComponent,
    TypographyComponent,
    DashboardCardComponent,

    FilledNightComponent,
    SummaryComponent,
    FlexRowComponent,
    FormComponent,
    FacilitiesComponent,
    FlexTableComponent,
    MapsComponent,
    FormHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AirbnbCalendarModule,
    ApiModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: TransportModel, useValue: new TransportModel() },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

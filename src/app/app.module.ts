import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatTabsModule, MatDialogModule, MatSortModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DelegationTypeComponent } from './components/delegation-type/delegation-type.component';
import { LeadDelegateComponent } from './components/lead-delegate/lead-delegate.component';
import { NumberOfDelegatesComponent } from './components/number-of-delegates/number-of-delegates.component';


import { DelegationRequestCommentComponent } from './components/delegation-request-comment/delegation-request-comment.component';
import { DelegationRequestThankuComponent } from './components/delegation-request-thanku/delegation-request-thanku.component';

import { DelegationRequestAddMembersComponent } from './components/delegation-request-add-members/delegation-request-add-members.component';
import { DelegationRequestPreferredTimesComponent } from './components/delegation-request-preferred-times/delegation-request-preferred-times.component';
import { DelegationReqRegisterMemberUnderFifteenComponent } from './components/delegation-req-register-member-under-fifteen/delegation-req-register-member-under-fifteen.component';
import { DelegationReqRegisterMemberAboveFifteenComponent } from './components/delegation-req-register-member-above-fifteen/delegation-req-register-member-above-fifteen.component';
import { DelegationUrnComponent } from './components/delegation-urn/delegation-urn.component';
import { DelegationDetailsComponent } from './components/delegation-details/delegation-details.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberAddedComponent } from './components/member-added/member-added.component';
import { MemberUpdateComponent } from './components/member-update/member-update.component';
import { DelegaTaFormComponent } from './components/delega-ta-form/delega-ta-form.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DelegationTypeComponent,
    LeadDelegateComponent,
    DelegationRequestCommentComponent,
    DelegationRequestThankuComponent,
    DelegationRequestAddMembersComponent,
    DelegationRequestPreferredTimesComponent,
    DelegationReqRegisterMemberUnderFifteenComponent,
    DelegationReqRegisterMemberAboveFifteenComponent,
    NumberOfDelegatesComponent,
    DelegationUrnComponent,
    DelegationDetailsComponent,
    EditMemberComponent,
    AddMemberComponent,
    MemberAddedComponent,
    MemberUpdateComponent,
    DelegaTaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // WavesModule, CarouselModule, ButtonsModule, InputsModule,
    FormsModule, ReactiveFormsModule,
    MatDatepickerModule,
    WavesModule, ButtonsModule,
    MatTabsModule, MatDialogModule, MatSortModule, MatNativeDateModule,MatRadioModule,
    MatProgressSpinnerModule,MatSnackBarModule,MatExpansionModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DelegaTaFormComponent]
})
export class AppModule { }

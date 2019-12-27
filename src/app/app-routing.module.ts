import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { DelegationTypeComponent } from './components/delegation-type/delegation-type.component';
import { LeadDelegateComponent } from './components/lead-delegate/lead-delegate.component';
import { DelegationReqRegisterMemberUnderFifteenComponent } from './components/delegation-req-register-member-under-fifteen/delegation-req-register-member-under-fifteen.component'
import { DelegationRequestCommentComponent } from './components/delegation-request-comment/delegation-request-comment.component';
import { NumberOfDelegatesComponent } from './components/number-of-delegates/number-of-delegates.component';
import { DelegationRequestThankuComponent } from './components/delegation-request-thanku/delegation-request-thanku.component';

import { DelegationReqRegisterMemberAboveFifteenComponent } from './components/delegation-req-register-member-above-fifteen/delegation-req-register-member-above-fifteen.component';
import { DelegationRequestAddMembersComponent } from './components/delegation-request-add-members/delegation-request-add-members.component';
import { DelegationRequestPreferredTimesComponent } from './components/delegation-request-preferred-times/delegation-request-preferred-times.component';


import{ DelegationUrnComponent } from './components/delegation-urn/delegation-urn.component';
import{ DelegationDetailsComponent } from './components/delegation-details/delegation-details.component';
import{ AddMemberComponent } from './components/add-member/add-member.component';
import{ EditMemberComponent } from './components/edit-member/edit-member.component';
import{ MemberAddedComponent } from './components/member-added/member-added.component';
import{ MemberUpdateComponent } from './components/member-update/member-update.component';




// const routes: Routes = [
//   {path: '', redirectTo: "/WelcomeComponent", pathMatch: "full"},
//   {path: 'home', component: HomeComponent},
//   {path: 'faq', component: FaqComponent},

  
//   {path: 'DelegationType', component: DelegationTypeComponent},
//   {path: 'LeadDelegate', component: LeadDelegateComponent},
//   {path: 'typeOfDelegation', component: NumberOfDelegatesComponent},
//   {path: 'registerMemberUnderFifteen', component:DelegationReqRegisterMemberUnderFifteenComponent },
//   {path: 'DelegationRequestComment', component: DelegationRequestCommentComponent},
  

//   {path: 'registerMemberAboveFifteen', component: DelegationReqRegisterMemberAboveFifteenComponent},
//   {path: 'AddMembers', component: DelegationRequestAddMembersComponent},
//   {path: 'PreferredTimes', component: DelegationRequestPreferredTimesComponent},

//   {path: 'DelegationRequestThanku', component: DelegationRequestThankuComponent},



//   {path: 'urn', component: DelegationUrnComponent},
//   {path: 'DelegationDetails', component: DelegationDetailsComponent},
//   {path: 'AddMember', component: AddMemberComponent},
//   {path: 'EditMember', component: EditMemberComponent},
//   {path: 'MemberAdded', component: MemberAddedComponent},
//   {path: 'MemberUpdate', component: MemberUpdateComponent}
  
// ];


const routes: Routes = [
  {path: '', redirectTo:'/welcome', pathMatch: "full"},
  {path :'welcome', component:WelcomeComponent},
  {path: 'DelegationType', component: DelegationTypeComponent},
  {path: 'LeadDelegate', component: LeadDelegateComponent},
  {path: 'typeOfDelegation', component: NumberOfDelegatesComponent},
  {path: 'registerMemberUnderFifteen', component:DelegationReqRegisterMemberUnderFifteenComponent },
  {path: 'DelegationRequestComment', component: DelegationRequestCommentComponent},
  

  {path: 'registerMemberAboveFifteen', component: DelegationReqRegisterMemberAboveFifteenComponent},
  {path: 'AddMembers', component: DelegationRequestAddMembersComponent},
  {path: 'PreferredTimes', component: DelegationRequestPreferredTimesComponent},

  {path: 'DelegationRequestThanku', component: DelegationRequestThankuComponent},



  {path: 'urn', component: DelegationUrnComponent},
  {path: 'DelegationDetails', component: DelegationDetailsComponent},
  {path: 'AddMember', component: AddMemberComponent},
  {path: 'EditMember', component: EditMemberComponent},
  {path: 'MemberAdded', component: MemberAddedComponent},
  {path: 'MemberUpdate', component: MemberUpdateComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

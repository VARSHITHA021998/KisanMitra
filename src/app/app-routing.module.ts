import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddCropComponent } from './add-crop/add-crop.component'
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'foot', component: FooterComponent },
  { path: 'main', component: MainBodyComponent },
  { path: 'login', component: LogInComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: 'addcrop', component: AddCropComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'contact', component:ContactUsComponent},
  { path: 'faq', component:FAQComponent},
  { path: 'privacy', component:PrivacyPolicyComponent},
  { path: 'terms', component: TermsAndConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

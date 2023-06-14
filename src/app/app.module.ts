import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ionEyeOutline, ionEyeOffOutline } from '@ng-icons/ionicons';
@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ ionEyeOutline, ionEyeOffOutline }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

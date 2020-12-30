import { AppConfig } from './app.config.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

// App Components
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MatchComponent } from './components/match/match.component';
import { MatchCandidateComponent } from './components/match-candidate/match-candidate.component';
import { MatchMadeComponent } from './components/match-made/match-made.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MatchComponent,
    MatchCandidateComponent,
    MatchMadeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

export function initializeApp(config: AppConfig) {
  return () => config.load();
}

import { registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { BUCKET } from "@angular/fire/compat/storage";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@environment';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HttpRequestInterceptor } from "./shared/interceptors/http-request.interceptor";
import { CustomPaginatorIntl } from "./modules/panel/shared/i18n/custom-paginator.intl";

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket },
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

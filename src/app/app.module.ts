import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule    } from '@angular/material/icon';
import { BrowserModule    } from '@angular/platform-browser';
import { FormsModule      } from '@angular/forms';
import { NgModule         } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { OrderComponent   } from './order/order.component';
import { LoginComponent   } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { MatIconModule            } from '@angular/material/icon';
import { FlexLayoutModule         } from '@angular/flex-layout';
import { MatToolbarModule         } from '@angular/material/toolbar';
import { MatButtonModule          } from '@angular/material';
import { MatCardModule            } from '@angular/material';
import { MatFormFieldModule       } from '@angular/material';
import { MatInputModule           } from '@angular/material';
import { BrowserModule            } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { FormsModule              } from '@angular/forms';
import { ReactiveFormsModule      } from "@angular/forms";
import { NgModule                 } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { OrderComponent   } from './order/order.component';
import { LoginComponent   } from './login/login.component';
import { CommonModule     } from '@angular/common';

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
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

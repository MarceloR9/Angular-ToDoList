import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './app/todo.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    TodoService
  ]
}).catch(err => console.error(err));

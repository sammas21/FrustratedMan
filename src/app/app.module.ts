import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainMessageComponent } from './mainmessage/main-message.component';
import { CreatePostComponent } from './mainmessage/create-post/create-post.component';
import { MsgpostComponent } from './mainmessage/create-post/msgpost/msgpost.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMessageComponent,
    CreatePostComponent,
    MsgpostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

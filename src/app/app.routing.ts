import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'userlogin', component: UserloginComponent },
            { path: 'about', component: AboutComponent },
            { path: 'adminlogin', component: AdminloginComponent},
        ], { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

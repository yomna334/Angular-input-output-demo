import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentslistComponent } from './components/equipmentslist/equipmentslist.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EquipmentDetailComponent } from './components/equipment-detail/equipment-detail.component';


const routes: Routes = [
    // { component: EquipmentsListComponent, path: "home" },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: "equipmentsList",
                component: EquipmentslistComponent,
            },
            {
                path:"equipment-detail",
                component:EquipmentDetailComponent
            }
        ]
    }
    ,
    {
        path: "",
        component: LoginComponent
    }
];

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


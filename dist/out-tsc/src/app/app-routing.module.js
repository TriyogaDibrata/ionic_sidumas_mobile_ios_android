import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full', runGuardsAndResolvers: "always" },
    {
        path: 'app',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
    { path: 'detail-laporan/:id', loadChildren: './pages/detail-laporan/detail-laporan.module#DetailLaporanPageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'lapor-file/:dataObj', loadChildren: './pages/lapor-file/lapor-file.module#LaporFilePageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'lapor-tinjau/:dataObj', loadChildren: './pages/lapor-tinjau/lapor-tinjau.module#LaporTinjauPageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'lokasi', loadChildren: './pages/lokasi/lokasi.module#LokasiPageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'lapor-kategori', loadChildren: './pages/lapor-kategori/lapor-kategori.module#LaporKategoriPageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'lapor/:kategori_id', loadChildren: './pages/lapor/lapor.module#LaporPageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'update-profile/:id', loadChildren: './pages/update-profile/update-profile.module#UpdateProfilePageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'update-password/:id', loadChildren: './pages/update-password/update-password.module#UpdatePasswordPageModule',
        runGuardsAndResolvers: "always",
        canActivate: [AuthGuard]
    },
    { path: 'project', loadChildren: './pages/project/project.module#ProjectPageModule' },
    { path: 'detail-project/:id', loadChildren: './pages/detail-project/detail-project.module#DetailProjectPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
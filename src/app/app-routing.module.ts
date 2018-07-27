import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { Route } from "@app/core";

const routes: Routes = [
  Route.withShell([
    { path: "about", loadChildren: "app/about/about.module#AboutModule" },
    { path: "post", loadChildren: "app/post/post.module#PostModule" },
    { path: "employee", loadChildren: "app/employee/employee.module#EmployeeModule" }
  ]),
  // Fallback when no prior route is matched
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

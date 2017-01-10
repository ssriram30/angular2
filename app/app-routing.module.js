"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var routes = [
    { path: '', component: home_component_1.homeComponent, pathMatch: 'full' },
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'about', component: about_component_1.aboutComponent }
];
exports.router = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map
"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./welcome-form/index');
var app_routes = [
    { path: '', component: index_1.WelcomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map
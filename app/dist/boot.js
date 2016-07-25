/// <<reference path="_all.ts" />
var TaskManagerApp;
(function (TaskManagerApp) {
    angular.module('taskManagerApp', ['ngMaterial', 'ngMdIcons'])
        .controller('mainController', TaskManagerApp.MainController)
        .service('userService', TaskManagerApp.UserService)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(TaskManagerApp || (TaskManagerApp = {}));
//# sourceMappingURL=boot.js.map
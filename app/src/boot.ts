/// <<reference path="_all.ts" />

module TaskManagerApp {
    angular.module('taskManagerApp', ['ngMaterial', 'ngMdIcons'])
    .controller('mainController', MainController)
    .service('userService', UserService)
    .config((
        $mdIconProvider: angular.material.IIconProvider,
        $mdThemingProvider: angular.material.IThemingProvider) => {

        $mdIconProvider
            .defaultIconSet('assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    })
}
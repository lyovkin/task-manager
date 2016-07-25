/// <reference path="../_all.ts" />
var TaskManagerApp;
(function (TaskManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Erick Riley',
                    avatar: 'svg-1',
                    bio: 'My bio',
                    notes: [
                        { title: "Pay back dinner", date: new Date("2016-01-12") },
                        { title: "Buy flowers for birthday", date: new Date("2016-01-19") }
                    ]
                },
                {
                    name: 'May Gockam',
                    avatar: 'svg-2',
                    bio: 'My bio',
                    notes: [
                        { title: "Pay back dinner", date: new Date("2016-01-12") },
                        { title: "Buy flowers for birthday", date: new Date("2016-01-19") }
                    ]
                },
                {
                    name: 'Elsa Ginda',
                    avatar: 'svg-3',
                    bio: 'My bio',
                    notes: [
                        { title: "Pay back dinner", date: new Date("2016-01-12") },
                        { title: "Buy flowers for birthday", date: new Date("2016-01-19") }
                    ]
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    }());
    TaskManagerApp.UserService = UserService;
})(TaskManagerApp || (TaskManagerApp = {}));
//# sourceMappingURL=userService.js.map
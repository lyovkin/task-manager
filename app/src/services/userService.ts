/// <reference path="../_all.ts" />

module TaskManagerApp {
    export interface IUserService {
        loadAllUsers() : ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {
        static $inject = ['$q'];

        constructor(private $q: ng.IQService) {
        }

        selectedUser : User = null;

        loadAllUsers() : angular.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users : User[] = [
            {
                name: 'Erick Riley',
                avatar: 'svg-1',
                bio: 'My bio',
                notes: [
                    {title: "Pay back dinner", date: new Date("2016-01-12")},
                    {title: "Buy flowers for birthday", date: new Date("2016-01-19")}
                ]
            },
            {
                name: 'May Gockam',
                avatar: 'svg-2',
                bio: 'My bio',
                notes: [
                    {title: "Pay back dinner", date: new Date("2016-01-12")},
                    {title: "Buy flowers for birthday", date: new Date("2016-01-19")}
                ]
            },
            {
                name: 'Elsa Ginda',
                avatar: 'svg-3',
                bio: 'My bio',
                notes: [
                    {title: "Pay back dinner", date: new Date("2016-01-12")},
                    {title: "Buy flowers for birthday", date: new Date("2016-01-19")}
                ]
            }
        ];
    }
}
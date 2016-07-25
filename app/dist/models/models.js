/// <reference path="../_all.ts" />
var TaskManagerApp;
(function (TaskManagerApp) {
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        return User;
    }());
    TaskManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    TaskManagerApp.Note = Note;
})(TaskManagerApp || (TaskManagerApp = {}));
//# sourceMappingURL=models.js.map
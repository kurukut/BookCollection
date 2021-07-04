import {UserController} from "./controller/UserController";
import {BookController} from "./controller/BookController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/books",
    controller: BookController,
    action: "all"
}, {
    method: "get",
    route: "/books/:bookName",
    controller: BookController,
    action: "one"
}, {
    method: "post",
    route: "/books",
    controller: BookController,
    action: "save"
}, {
    method: "delete",
    route: "/books/:bookId",
    controller: BookController,
    action: "remove"
}

];
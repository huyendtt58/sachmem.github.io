"use strict";
var book_component_1 = require('./book.component');
var book_detail_component_1 = require('./book-detail.component');
exports.bookRoutes = [
    { path: '/books', component: book_component_1.BookComponent },
    { path: '/books/:id', component: book_detail_component_1.BookDetailComponent }
];
//# sourceMappingURL=book.routing.js.map
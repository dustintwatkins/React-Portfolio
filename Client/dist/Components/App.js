var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './App.css';
import Project from './ProjectDisplay/Project';
import Footer from './Footer/Footer';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("section", { className: 'app' },
            React.createElement("div", { className: "header" },
                React.createElement("a", { href: "#default", className: "logo" }, "Dustin Watkins Portfolio"),
                React.createElement("div", { className: "header-right" },
                    React.createElement("a", { href: "#home" },
                        React.createElement("button", null, "Home")),
                    React.createElement("a", { href: "#experience" },
                        React.createElement("button", null, "Experience")),
                    React.createElement("a", { href: "#contact" }, "Contact"),
                    React.createElement("a", { href: "#about" }, "About"))),
            React.createElement("div", { className: 'main-container' },
                React.createElement("div", { className: 'title-photo' },
                    React.createElement("img", { src: '/Users/DustinWatkins/WebstormProjects/React-Portfolio/Client/public/images/ToriDustin-33.png' }))),
            React.createElement("hr", null),
            React.createElement(Project, null),
            React.createElement(Footer, null)));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map
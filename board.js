var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var card = {
    content: "",
    description: "",
    comment: ""
};

var list = {
    title: "",
    cards: []
};

var ListComponent = function (_React$Component) {
    _inherits(ListComponent, _React$Component);

    function ListComponent(props) {
        _classCallCheck(this, ListComponent);

        var _this = _possibleConstructorReturn(this, (ListComponent.__proto__ || Object.getPrototypeOf(ListComponent)).call(this, props));

        _this.state = {
            cards: [{ title: "BD" }],
            show: false,
            input: ""
        };
        _this.cardList = _this.cardList.bind(_this);
        _this.addcard = _this.addcard.bind(_this);
        _this.displayMenu = _this.displayMenu.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(ListComponent, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
    }, {
        key: "displayMenu",
        value: function displayMenu() {
            this.setState({ show: true });
        }
    }, {
        key: "addcard",
        value: function addcard(event) {
            var newlist = [].concat(_toConsumableArray(this.state.cards));
            newlist.push({ title: this.state.input });
            this.setState({
                cards: newlist,
                show: false
            });
            event.preventDefault();
        }
    }, {
        key: "cardList",
        value: function cardList() {
            var arr = this.state.cards.map(function (card, item) {
                return React.createElement(
                    "li",
                    { key: item + card.title },
                    React.createElement(
                        "div",
                        { className: "white" },
                        card.title
                    )
                );
            });
            return React.createElement(
                "ul",
                { id: "dv" },
                arr
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "divclass", id: "1d" },
                React.createElement(
                    "strong",
                    null,
                    this.props.list.title
                ),
                this.cardList(),
                React.createElement(
                    "div",
                    { className: this.state.show ? "f" : "hiddentextarea" },
                    React.createElement(
                        "form",
                        { onSubmit: this.addcard },
                        React.createElement(
                            "p",
                            null,
                            React.createElement("textarea", { onChange: this.handleChange, value: this.state.input, required: true })
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("input", { type: "submit", value: "Add card" }),
                            React.createElement(
                                "button",
                                { onClick: "" },
                                "X"
                            )
                        )
                    )
                ),
                React.createElement(
                    "button",
                    { onClick: this.displayMenu, className: "" },
                    "Add another card"
                )
            );
        }
    }]);

    return ListComponent;
}(React.Component);

var BoardComponent = function (_React$Component2) {
    _inherits(BoardComponent, _React$Component2);

    function BoardComponent(props) {
        _classCallCheck(this, BoardComponent);

        var _this2 = _possibleConstructorReturn(this, (BoardComponent.__proto__ || Object.getPrototypeOf(BoardComponent)).call(this, props));

        _this2.state = {
            lists: [{
                title: "Stuff to try (this is a list)",
                cards: [{ title: "Add all the cards and lists you need" }]
            }, {
                title: "Stuff to try (this is a list)",
                cards: [{ title: "Add all the cards and lists you need" }]
            }]
        };
        _this2.listOfList = _this2.listOfList.bind(_this2);
        return _this2;
    }

    _createClass(BoardComponent, [{
        key: "listOfList",
        value: function listOfList() {
            var arr = this.state.lists.map(function (list, index) {
                return React.createElement(ListComponent, { list: list });
            });
            return arr;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.listOfList(),
                React.createElement(
                    "div",
                    { className: "divclass" },
                    "Add another list"
                )
            );
        }
    }]);

    return BoardComponent;
}(React.Component);

ReactDOM.render(React.createElement(BoardComponent, null), document.getElementById("board"));
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListComponent = function (_React$Component) {
    _inherits(ListComponent, _React$Component);

    function ListComponent(props) {
        _classCallCheck(this, ListComponent);

        var _this = _possibleConstructorReturn(this, (ListComponent.__proto__ || Object.getPrototypeOf(ListComponent)).call(this, props));

        _this.state = {
            show: false,
            cards: [],
            input: ""
        };
        _this.cardList = _this.cardList.bind(_this);
        _this.addcard = _this.addcard.bind(_this);
        _this.displayMenu = _this.displayMenu.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.hideMenu = _this.hideMenu.bind(_this);
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
        key: "hideMenu",
        value: function hideMenu() {
            //hide the textarea form
            this.setState({ show: false });
        }
    }, {
        key: "displayMenu",
        value: function displayMenu() {
            //display the textarea form
            this.setState({ show: true });
        }
    }, {
        key: "addcard",
        value: function addcard(event) {
            //add new card
            event.preventDefault();
            if (this.state.input.trim() !== "") {
                var newlist = [].concat(_toConsumableArray(this.state.cards));
                newlist.push({ title: this.state.input });
                this.setState({
                    input: "",
                    cards: newlist
                });
            }
        }
    }, {
        key: "cardList",
        value: function cardList() {
            //list the cards
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
            if (_typeof(this.props.list) !== "object" || !this.props.list.hasOwnProperty('title')) {
                return React.createElement(
                    "h1",
                    null,
                    "No List found!"
                );
            }

            return React.createElement(
                "div",
                null,
                this.cardList(),
                React.createElement(
                    "div",
                    { className: this.state.show ? "" : "hiddentextarea" },
                    React.createElement(
                        "form",
                        { id: "usrform", onSubmit: this.addcard },
                        React.createElement(
                            "p",
                            null,
                            React.createElement("textarea", { className: "w-100", value: this.state.input,
                                onChange: this.handleChange,
                                placeholder: "Enter a title for this card", required: true })
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("input", { type: "submit", value: "Add card" }),
                            React.createElement(
                                "button",
                                { form: "", onClick: this.hideMenu },
                                "X"
                            )
                        )
                    )
                ),
                React.createElement(
                    "button",
                    { onClick: this.displayMenu, className: this.state.show ? "hiddentextarea" : "" },
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
                title: "Stuff to try (this is a list)"
            }, {
                title: "Stuff to try (this is a list)"
            }],
            input: "",
            show: false,
            displays: [],
            titleinput: "",
            titleinputs: []
        };
        _this2.listOfList = _this2.listOfList.bind(_this2);
        _this2.addList = _this2.addList.bind(_this2);
        _this2.displayForm = _this2.displayForm.bind(_this2);
        _this2.hideForm = _this2.hideForm.bind(_this2);
        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleTitleChange = _this2.handleTitleChange.bind(_this2);
        _this2.edits = [];
        _this2.shows = [];
        var listlength = _this2.state.lists.length;
        for (var i = 0; i < listlength; i++) {
            //I am trying to bind the index of lists to method
            //to make sure each changeListTitle and showTitleEditor method work for different lists
            _this2.edits.push(_this2.changeListTitle.bind(_this2, i));
            _this2.shows.push(_this2.showTitleEditor.bind(_this2, i));
        }
        return _this2;
    }

    _createClass(BoardComponent, [{
        key: "showTitleEditor",
        value: function showTitleEditor(id) {
            //show the title editor when clicked and make sure other title editor is hidden
            var newdisplay = [].concat(_toConsumableArray(this.state.displays)).map(function (item) {
                return false;
            });

            newdisplay[id] = true;

            this.setState({
                displays: newdisplay,
                titleinput: ""
            });
        }
    }, {
        key: "handleTitleChange",
        value: function handleTitleChange(event) {
            this.setState({
                titleinput: event.target.value
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
    }, {
        key: "changeListTitle",
        value: function changeListTitle(id) {
            event.preventDefault();
            if (this.state.titleinput.trim() !== "") {
                var newlist = [].concat(_toConsumableArray(this.state.lists));
                var newdisplay = [].concat(_toConsumableArray(this.state.displays));
                newlist[id] = {
                    title: this.state.titleinput
                };
                newdisplay[id] = false;
                this.setState({ lists: newlist, displays: newdisplay });
            }
        }
    }, {
        key: "hideForm",
        value: function hideForm() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "displayForm",
        value: function displayForm() {
            this.setState({
                show: true
            });
        }
    }, {
        key: "addList",
        value: function addList() {
            event.preventDefault();
            if (this.state.input.trim() !== "") {
                var newlist = [].concat(_toConsumableArray(this.state.lists));
                newlist.push({ title: this.state.input });
                this.setState({
                    lists: newlist,
                    input: ""
                });
                //Bind methods to new list again
                this.edits.push(this.changeListTitle.bind(this, newlist.length - 1));
                this.shows.push(this.showTitleEditor.bind(this, newlist.length - 1));
            }
        }
    }, {
        key: "listOfList",
        value: function listOfList() {
            var _this3 = this;

            var arr = this.state.lists.map(function (list, index) {
                return React.createElement(
                    "div",
                    { className: "divclass", id: "1d" },
                    React.createElement(
                        "strong",
                        {
                            className: _this3.state.displays[index] ? "hiddentextarea" : "",
                            onClick: _this3.shows[index] },
                        list.title
                    ),
                    React.createElement(
                        "form",
                        { className: _this3.state.displays[index] ? "" : "hiddentextarea", onSubmit: _this3.edits[index] },
                        React.createElement("input", { onChange: _this3.handleTitleChange, value: _this3.state.titleinput, type: "text", required: true }),
                        React.createElement("input", { type: "submit", value: "Change list title" })
                    ),
                    React.createElement(ListComponent, { list: list })
                );
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
                    React.createElement(
                        "button",
                        { className: this.state.show ? "hiddentextarea" : "",
                            onClick: this.displayForm },
                        "Add another List"
                    ),
                    React.createElement(
                        "form",
                        { id: "on0", className: "small " + (this.state.show ? "" : "hiddentextarea"), onSubmit: this.addList },
                        React.createElement(
                            "p",
                            null,
                            React.createElement("input", { onChange: this.handleChange, value: this.state.input, type: "text", required: true })
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("input", { type: "submit", value: "Add list" }),
                            React.createElement(
                                "button",
                                { form: "", onClick: this.hideForm },
                                "X"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BoardComponent;
}(React.Component);

ReactDOM.render(React.createElement(BoardComponent, null), document.getElementById("board"));

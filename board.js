"use strict"; /*class ListComponent extends React.Component {
              constructor(props) {
              super(props);
              this.state = {
              show: false,
              cards: [],
              input: ""
              }
              this.cardList = this.cardList.bind(this);
              this.addcard = this.addcard.bind(this);
              this.displayMenu = this.displayMenu.bind(this);
              this.handleChange = this.handleChange.bind(this);
              this.hideMenu = this.hideMenu.bind(this);
              }
              handleChange(event) {
              this.setState({
              input: event.target.value
              });
              }
              hideMenu() {
              //hide the textarea form
              this.setState({ show: false });
              }
              displayMenu() {
              //display the textarea form
              this.setState({ show: true });
              }
              addcard(event) {
              //add new card
              event.preventDefault();
              if (this.state.input.trim() !== "") {
              let newlist = [...this.state.cards];
              newlist.push({ title: this.state.input });
              this.setState({
                 input: "",
                 cards: newlist
              });
              }
              }
              cardList() {
              //list the cards
              let arr = this.state.cards.map((card, item) => {
              return <li key={item + card.title}>
                 <div className="white">{card.title}</div>
              </li>;
              });
              return <ul id="dv">{arr}</ul>;
              }
              render() {
              if (typeof this.props.list !== "object" || !(this.props.list.hasOwnProperty('title'))) {
              return <h1>No List found!</h1>;
              }
              return <div>
              {this.cardList()}
              <div className={this.state.show ? "" : "hiddentextarea"}>
                 <form id="usrform" onSubmit={this.addcard}>
                     <p>
                         <textarea className="w-100" value={this.state.input}
                             onChange={this.handleChange}
                             placeholder="Enter a title for this card" required />
                     </p>
                     <p>
                         <input type="submit" value="Add card" />
                         <button form="" onClick={this.hideMenu}>X</button>
                     </p>
                 </form>
              </div>
              <button onClick={this.displayMenu} className={this.state.show ? "hiddentextarea" : ""}>
                 Add another card
              </button>
              </div>
              }
              }
              */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardComponent = function (_React$Component) {
    _inherits(BoardComponent, _React$Component);

    function BoardComponent(props) {
        _classCallCheck(this, BoardComponent);

        var _this = _possibleConstructorReturn(this, (BoardComponent.__proto__ || Object.getPrototypeOf(BoardComponent)).call(this, props));

        _this.onDragEnd = function (result) {

            var newlist = [].concat(_toConsumableArray(_this.state.lists));
            if (result.source.droppableId === result.destination.droppableId) {
                console.log("Call");
                if (result.source.index < result.destination.index) {
                    newlist[result.source.droppableId].cards = _this.swapArray(newlist[result.source.droppableId].cards, result.source.index, result.destination.index);

                    //console.log(newlist[id].cards);
                    _this.setState({
                        lists: newlist
                    });
                } else if (result.source.index > result.destination.index) {
                    newlist[result.source.droppableId].cards = _this.swapArray2(newlist[result.source.droppableId].cards, result.source.index, result.destination.index);

                    _this.setState({
                        lists: newlist
                    });
                }
            } else {
                newlist[result.destination.droppableId].cards.splice(result.destination.index, 0, newlist[result.source.droppableId].cards[result.source.index]);
                newlist[result.source.droppableId].cards.splice(result.source.index, 1);
                _this.setState({
                    lists: newlist
                });
            }
        };

        _this.state = {
            lists: [{
                id: "L0",
                title: "Stuff to try (this is a list)",
                cards: [{ id: "C0", title: "A" }, { id: "C1", title: "B" }]
            }, {
                id: "L1",
                title: "Another List",
                cards: [{ id: "C2", title: "X" }, { id: "C3", title: "Y" }, { id: "C4", title: "Z" }]
            }],
            input: "",
            show: false,
            cardshows: [],
            displays: [],
            titleinput: "",
            cardinput: ""
        };
        _this.listId = 2;
        _this.cardsId = 5;
        _this.cardList = _this.cardList.bind(_this);
        _this.listOfList = _this.listOfList.bind(_this);
        _this.addList = _this.addList.bind(_this);
        _this.displayForm = _this.displayForm.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleTitleChange = _this.handleTitleChange.bind(_this);
        _this.hideTitleEditor = _this.hideTitleEditor.bind(_this);
        _this.ListComonpent = _this.ListComonpent.bind(_this);
        _this.handleCardChange = _this.handleCardChange.bind(_this);
        _this.hideCardMenu = _this.displayCardMenu.bind(_this);
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        //Bind methods to different lists
        _this.edits = [];
        _this.shows = [];
        _this.addcards = [];
        _this.displayCardMenus = [];
        var listlength = _this.state.lists.length;
        for (var i = 0; i < listlength; i++) {
            //I am trying to bind the index of lists to method
            //to make sure each changeListTitle and showTitleEditor
            //method work for different lists
            _this.edits.push(_this.changeListTitle.bind(_this, i));
            _this.shows.push(_this.showTitleEditor.bind(_this, i));
            _this.displayCardMenus.push(_this.displayCardMenu.bind(_this, i));
            _this.addcards.push(_this.addcard.bind(_this, i));
        }
        return _this;
    }

    _createClass(BoardComponent, [{
        key: "falseCardShowsList",
        value: function falseCardShowsList(length) {

            var newcardshows = [];
            for (var i = 0; i < length; i++) {
                newcardshows[i] = false;
            }
            return newcardshows;
        }
    }, {
        key: "hideCardMenu",
        value: function hideCardMenu() {

            this.setState({
                cardshows: this.falseCardShowsList(this.state.cardshows.length),
                cardinput: ""
            });
        }
    }, {
        key: "displayCardMenu",
        value: function displayCardMenu(id) {
            var newcardshows = this.falseCardShowsList(this.state.cardshows.length);

            newcardshows[id] = true;

            this.setState({
                cardshows: newcardshows,
                cardinput: ""
            });
        }
    }, {
        key: "ListComonpent",
        value: function ListComonpent(cardlist) {
            return React.createElement(
                "div",
                null,
                cardlist
            );
        }
    }, {
        key: "cardList",
        value: function cardList() {
            var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            //list the cards
            if ((typeof cards === "undefined" ? "undefined" : _typeof(cards)) === 'object' && typeof cards.map === 'function') {

                var arr = cards.map(function (card, index) {
                    return React.createElement(
                        ReactBeautifulDnd.Draggable,
                        { key: card.id, draggableId: card.id, index: index },
                        function (provided) {
                            return React.createElement(
                                "div",
                                Object.assign({}, provided.draggableProps, provided.dragHandleProps, { ref: provided.innerRef }),
                                React.createElement(
                                    "div",
                                    { className: "white" },
                                    card.title + "(" + card.id + ")"
                                )
                            );
                        }
                    );
                });
                return arr;
            }
            return [];
        }
    }, {
        key: "addcard",
        value: function addcard(id) {

            event.preventDefault();
            if (this.state.cardinput.trim() !== "") {
                var newlist = [].concat(_toConsumableArray(this.state.lists));
                newlist[id].cards.push({ id: "C" + this.cardsId, title: this.state.cardinput });
                this.setState({
                    id: newlist[id],
                    cardinput: "",
                    lists: newlist
                });
                this.cardsId++;
            }
        }
    }, {
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
        key: "hideTitleEditor",
        value: function hideTitleEditor() {
            this.setState({
                displays: [].concat(_toConsumableArray(this.state.displays)).map(function (item) {
                    return false;
                }),
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
        key: "handleCardChange",
        value: function handleCardChange(event) {
            this.setState({
                cardinput: event.target.value
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
                var newcards = [].concat(_toConsumableArray(newlist[id].cards));
                newlist[id] = {
                    id: newlist[id].id,
                    title: this.state.titleinput,
                    cards: newcards
                };
                newdisplay[id] = false;
                this.setState({ lists: newlist, displays: newdisplay });
            }
        }
    }, {
        key: "displayForm",
        value: function displayForm() {
            this.setState(function (state) {
                return {
                    show: !state.show
                };
            });
        }
    }, {
        key: "swapArray2",
        value: function swapArray2(array, source, destination) {
            //reorder position when the source index is greater than destination index
            var startarray = array.slice(0, destination);
            var middlearray = array.slice(destination, source);
            var endarray = array.slice(source + 1, array.length);
            return [].concat(_toConsumableArray(startarray), [array[source]], _toConsumableArray(middlearray), _toConsumableArray(endarray));
        }
    }, {
        key: "swapArray",
        value: function swapArray(array, source, destination) {
            //reorder position when the destination index is greater than source index
            var startarray = array.slice(0, source);
            var middlearray = array.slice(source + 1, destination + 1);
            var endarray = array.slice(destination + 1, array.length);

            return [].concat(_toConsumableArray(startarray), _toConsumableArray(middlearray), [array[source]], _toConsumableArray(endarray));
        }
    }, {
        key: "addList",
        value: function addList() {
            event.preventDefault();
            if (this.state.input.trim() !== "") {
                var newlist = [].concat(_toConsumableArray(this.state.lists));
                var realid = "L" + this.listId;
                newlist.push(realid = {
                    id: "L" + this.listId,
                    title: this.state.input, cards: []
                });
                this.setState({
                    lists: newlist,
                    input: ""
                });
                this.listId++;
                //Bind methods to new list again
                this.edits.push(this.changeListTitle.bind(this, newlist.length - 1));
                this.shows.push(this.showTitleEditor.bind(this, newlist.length - 1));
                this.displayCardMenus.push(this.displayCardMenu.bind(this, newlist.length - 1));
                this.addcards.push(this.addcard.bind(this, newlist.length - 1));
            }
        }
    }, {
        key: "listOfList",
        value: function listOfList() {
            var _this2 = this;

            var arr = this.state.lists.map(function (list, index) {
                return React.createElement(
                    "div",
                    { key: list.id, className: "divclass" },
                    React.createElement(
                        "strong",
                        {
                            className: _this2.state.displays[index] ? "hiddentextarea" : "",
                            onClick: _this2.shows[index] },
                        list.title + "(" + list.id + ")"
                    ),
                    React.createElement(
                        "form",
                        { className: _this2.state.displays[index] ? "" : "hiddentextarea",
                            onSubmit: _this2.edits[index] },
                        React.createElement("input", { autoFocus: true, onChange: _this2.handleTitleChange, value: _this2.state.titleinput,
                            type: "text", required: true }),
                        React.createElement("input", { type: "submit", value: "Change list title" }),
                        React.createElement(
                            "button",
                            { onClick: _this2.hideTitleEditor },
                            "X"
                        )
                    ),
                    React.createElement(
                        ReactBeautifulDnd.Droppable,
                        { key: list.id, droppableId: index.toString() },
                        function (provided) {
                            return React.createElement(
                                "div",
                                Object.assign({ className: "Container" }, provided.droppableProps, {
                                    ref: provided.innerRef }),
                                _this2.ListComonpent(_this2.cardList(list.cards), _this2.state.cardshows[index], _this2.addcards[index], _this2.state.cardinput, _this2.displayCardMenus[index]),
                                provided.placeholder
                            );
                        }
                    ),
                    React.createElement(
                        "div",
                        { className: _this2.state.cardshows[index] ? "" : "hiddentextarea" },
                        React.createElement(
                            "form",
                            { onSubmit: _this2.addcards[index] },
                            React.createElement("textarea", { autoFocus: true, className: "w-100", value: _this2.state.cardinput,
                                onChange: _this2.handleCardChange,
                                placeholder: "Enter a title for this card", required: true }),
                            React.createElement("br", null),
                            "                            ",
                            React.createElement("input", { type: "submit", value: "Add card" }),
                            React.createElement(
                                "button",
                                { onClick: _this2.hideCardMenu },
                                "X"
                            )
                        )
                    ),
                    React.createElement(
                        "button",
                        { onClick: _this2.displayCardMenus[index],
                            className: _this2.state.cardshows[index] ? "hiddentextarea" : "" },
                        "Add another card"
                    )
                );
            });
            return arr;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                ReactBeautifulDnd.DragDropContext,
                { onDragEnd: this.onDragEnd },
                React.createElement(
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
                            { id: "on0", className: "small " + (this.state.show ? "" : "hiddentextarea"),
                                onSubmit: this.addList },
                            React.createElement(
                                "p",
                                null,
                                React.createElement("input", { onChange: this.handleChange,
                                    value: this.state.input, type: "text", required: true })
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement("input", { type: "submit", value: "Add list" }),
                                React.createElement(
                                    "button",
                                    { onClick: this.displayForm },
                                    "X"
                                )
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

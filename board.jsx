"use strict";/*class ListComponent extends React.Component {
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
class BoardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
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
            }
        this.listId = 2;
        this.cardsId = 5;
        this.cardList = this.cardList.bind(this);
        this.listOfList = this.listOfList.bind(this);
        this.addList = this.addList.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.hideTitleEditor = this.hideTitleEditor.bind(this);
        this.ListComonpent = this.ListComonpent.bind(this);
        this.handleCardChange = this.handleCardChange.bind(this);
        this.hideCardMenu = this.displayCardMenu.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        //Bind methods to different lists
        this.edits = [];
        this.shows = [];
        this.addcards = [];
        this.displayCardMenus = [];
        let listlength = this.state.lists.length;
        for (let i = 0; i < listlength; i++) {
            //I am trying to bind the index of lists to method
            //to make sure each changeListTitle and showTitleEditor
            //method work for different lists
            this.edits.push(this.changeListTitle.bind(this, i));
            this.shows.push(this.showTitleEditor.bind(this, i));
            this.displayCardMenus.push(this.displayCardMenu.bind(this, i));
            this.addcards.push(this.addcard.bind(this, i));
        }
    }

    falseCardShowsList(length) {
    
        let newcardshows = [];
        for (let i = 0; i < length; i++) {
            newcardshows[i] = false;
        }
        return newcardshows;
    }

    hideCardMenu() {

        this.setState({
            cardshows: this.falseCardShowsList(this.state.cardshows.length),
            cardinput: ""
        });
    }

    displayCardMenu(id) {
        let newcardshows = this.falseCardShowsList(this.state.cardshows.length);

        newcardshows[id] = true;

        this.setState({
            cardshows: newcardshows,
            cardinput: ""
        });
    }

    ListComonpent(cardlist) {
        return <div>
            {cardlist}
        </div>
    }

    cardList(cards = []) {
        //list the cards
        if (typeof cards === 'object' && typeof cards.map === 'function') {

            let arr = cards.map((card, index) => {
                return <ReactBeautifulDnd.Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (<div {...provided.draggableProps}
                        {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div className="white">{card.title + "(" + card.id + ")"}</div>
                    </div>)}

                </ReactBeautifulDnd.Draggable>;
            });
            return arr;
        }
        return [];
    }

    addcard(id) {

        event.preventDefault();
        if (this.state.cardinput.trim() !== "") {
            let newlist = [...this.state.lists];
            newlist[id].cards.push({ id: "C" + this.cardsId, title: this.state.cardinput });
            this.setState({
                id: newlist[id],
                cardinput: "",
                lists: newlist
            });
            this.cardsId++;
        }

    }

    showTitleEditor(id) {
        //show the title editor when clicked and make sure other title editor is hidden
        let newdisplay = [...this.state.displays].map((item) => {
            return false;
        });

        newdisplay[id] = true;

        this.setState({
            displays: newdisplay,
            titleinput: ""
        });
    }

    hideTitleEditor() {
        this.setState({
            displays: [...this.state.displays].map((item) => {
                return false;
            }),
            titleinput: ""
        });
    }

    handleTitleChange(event) {
        this.setState({
            titleinput: event.target.value
        });
    }

    handleCardChange(event) {
        this.setState({
            cardinput: event.target.value
        });
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    changeListTitle(id) {
        event.preventDefault();
        if (this.state.titleinput.trim() !== "") {
            let newlist = [...this.state.lists];
            let newdisplay = [...this.state.displays];
            let newcards = [...newlist[id].cards];
            newlist[id] = {
                id: newlist[id].id,
                title: this.state.titleinput,
                cards: newcards
            };
            newdisplay[id] = false;
            this.setState({ lists: newlist, displays: newdisplay });
        }

    }

    displayForm() {
        this.setState((state) => ({
            show: !state.show
        }));
    }

    swapArray2(array, source, destination) {
        //reorder position when the source index is greater than destination index
        let startarray = array.slice(0, destination);
        let middlearray = array.slice(destination, source);
        let endarray = array.slice(source + 1, array.length);
        return [...startarray, array[source], ...middlearray, ...endarray];
    }

    swapArray(array, source, destination) {
        //reorder position when the destination index is greater than source index
        let startarray = array.slice(0, source);
        let middlearray = array.slice(source + 1, destination + 1);
        let endarray = array.slice(destination + 1, array.length);

        return [...startarray, ...middlearray, array[source], ...endarray];

    }

    onDragEnd = (result) => {

        let newlist = [...this.state.lists];
        if (result.source.droppableId === result.destination.droppableId) {
            console.log("Call");
            if (result.source.index < result.destination.index) {
                newlist[result.source.droppableId].cards =
                    this.swapArray(newlist[result.source.droppableId].cards,
                        result.source.index, result.destination.index);

                //console.log(newlist[id].cards);
                this.setState(
                    {
                        lists: newlist
                    }
                );
            }
            else if (result.source.index > result.destination.index) {
                newlist[result.source.droppableId].cards =
                    this.swapArray2(newlist[result.source.droppableId].cards,
                        result.source.index, result.destination.index);

                this.setState(
                    {
                        lists: newlist
                    }
                );
            }
        }
        else {
            newlist[result.destination.droppableId].cards.splice(result.destination.index, 0,
                newlist[result.source.droppableId].cards[result.source.index]);
            newlist[result.source.droppableId].cards.splice(result.source.index, 1);
            this.setState(
                {
                    lists: newlist
                }
            );
        }
    }

    addList() {
        event.preventDefault();
        if (this.state.input.trim() !== "") {
            let newlist = [...this.state.lists];
            let realid = "L" + this.listId;
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

    listOfList() {
        let arr = this.state.lists.map((list, index) => {
            return <div key={list.id} className="divclass"><strong
                className={this.state.displays[index] ? "hiddentextarea" : ""}
                onClick={this.shows[index]}>{list.title + "(" + list.id + ")"}</strong>
                <form className={this.state.displays[index] ? "" : "hiddentextarea"}
                    onSubmit={this.edits[index]}>
                    <input autoFocus onChange={this.handleTitleChange} value={this.state.titleinput}
                        type="text" required />
                    <input type="submit" value="Change list title" />
                    <button onClick={this.hideTitleEditor}>X</button>
                </form>
                <ReactBeautifulDnd.Droppable key={list.id} droppableId={index.toString()}>

                    {(provided) => (<div className="Container" {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {this.ListComonpent(this.cardList(list.cards),
                            this.state.cardshows[index], this.addcards[index], this.state.cardinput,
                            this.displayCardMenus[index])
                        }
                        {provided.placeholder}
                    </div>)}
                </ReactBeautifulDnd.Droppable>
                <div className={this.state.cardshows[index] ? "" : "hiddentextarea"}>
                    <form onSubmit={this.addcards[index]}>
                        <textarea autoFocus className="w-100" value={this.state.cardinput}
                            onChange={this.handleCardChange}
                            placeholder="Enter a title for this card" required />
                        <br />                            <input type="submit" value="Add card" />
                        <button onClick={this.hideCardMenu}>X</button>
                    </form>
                </div>
                <button onClick={this.displayCardMenus[index]}
                    className={this.state.cardshows[index] ? "hiddentextarea" : ""}>
                    Add another card
            </button></div>
        });
        return arr;
    }

    render() {
        return <ReactBeautifulDnd.DragDropContext onDragEnd={this.onDragEnd}>

            <div>
                {this.listOfList()}
                <div className="divclass">
                    <button className={this.state.show ? "hiddentextarea" : ""}
                        onClick={this.displayForm}>Add another List</button>
                    <form id="on0" className={"small " + (this.state.show ? "" : "hiddentextarea")}
                        onSubmit={this.addList}>
                        <p>
                            <input onChange={this.handleChange}
                                value={this.state.input} type="text" required />
                        </p>
                        <p>
                            <input type="submit" value="Add list" />
                            <button onClick={this.displayForm}>X</button>
                        </p>
                    </form>
                </div>
            </div>
        </ReactBeautifulDnd.DragDropContext>;
    }
}

ReactDOM.render(<BoardComponent />, document.getElementById("board"));

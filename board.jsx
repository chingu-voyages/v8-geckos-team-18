"use strict";

class BoardTitleComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            boardtitle: "Editable board title",
            tempboardtitle: "Editable board title",
            showboardtitleeditor:false
        }

        this.clickOutsideTarget = this.clickOutsideTarget.bind(this);
        this.changeBoardTitle = this.changeBoardTitle.bind(this);
        this.showBoardTitleEditor = this.showBoardTitleEditor.bind(this);

    }

    clickOutsideTarget()
    {            

        window.addEventListener("click",((event)=>{
            if (!event.target.matches(".boardtitle")
                && this.state.showboardtitleeditor) {
                this.setState({
                    showboardtitleeditor: false
                });

                if (this.state.tempboardtitle.trim() !== "") {
                    this.setState({
                        boardtitle: this.state.tempboardtitle
                    });
                }
                else {
                    this.setState({
                        tempboardtitle: this.state.boardtitle
                    });
                }

            }
        }));
    }

    changeBoardTitle() {
        this.setState(
            {
                tempboardtitle: event.target.value
            }
        );
    }

    showBoardTitleEditor() {
        this.setState(
            {
                showboardtitleeditor: true
            }
        );
        window.setTimeout(() => document.getElementById("boardtitleeditor").select(), 0);
    }

    render()
    {
        this.clickOutsideTarget();
        console.log(this.state.showboardtitleeditor);
        console.log("BoardTitle render");
        return (<div><p  className={"whitetext " + (this.state.showboardtitleeditor ? "hiddentextarea" : "")}><b onClick={this.showBoardTitleEditor} className="actlikebutton padding5px boardtitle">{this.state.boardtitle}</b></p>
        <p className={"whitetext boardtitle " + (this.state.showboardtitleeditor ? "" : "hiddentextarea")}><input id="boardtitleeditor" className="boardtitle" type="text" onChange={this.changeBoardTitle} value={this.state.tempboardtitle} /></p></div>);
        
    }
}

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                boardtitle: "Editable board title",
                tempboardtitle: "Editable board title",
                showboardtitleeditor: false,
                lists: [{
                    id: "L0",
                    title: "Stuff to try (this is a list)",
                    cards: [{
                        id: "C0", title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                        displayaction: false
                    }, { id: "C1", title: "Familiarize yourself with git + github", displayaction: false }]
                }, {
                    id: "L1",
                    title: "Another Listttttttttttttttttttttttttttttttttttttttttttttttttttt",
                    cards: [{ id: "C3", title: "X", displayaction: false }, { id: "C4", title: "Y", displayaction: false }, { id: "C5", title: "Z", displayaction: false }]
                }, {
                    id: "L2",
                    title: "Bonus Considerations",
                    cards: [{ id: "C6", title: "Test Units", displayaction: false },
                    { id: "C7", title: "Make it mobile responsive", displayaction: false },
                    {
                        id: "C8",
                        title: "Create a bookself for the users that stores bookmarked books",
                        displayaction: false
                    },
                    {
                        id: "C9",
                        title: "On search input, display the last 10 search queries.",
                        displayaction: false
                    }]
                }],
                input: "",
                show: false,
                cardshows: [],
                displays: [],
                actionlistdisplays: [],
                actioncarddisplays: [],
                titleinput: "",
                cardinput: ""
            }
        this.temptext = "";
        this.listId = 3;
        this.cardsId = 10;
        let tempcardsid = this.cardsId;
        this.clickOutsideTarget = this.clickOutsideTarget.bind(this);
        this.changeBoardTitle = this.changeBoardTitle.bind(this);
        this.showBoardTitleEditor = this.showBoardTitleEditor.bind(this);
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
        this.copycards = [];
        this.deletecards = [];
        this.displayCardMenus = [];
        this.displayActionLists = [];
        this.listDisplayActionCards = [];
        this.deletelists = [];
        this.copylists = [];
        let listlength = this.state.lists.length;
        for (let i = 0; i < tempcardsid; i++) {
            this.listDisplayActionCards.push(this.displayActionCard.bind(this, i));
        }

        for (let i = 0; i < listlength; i++) {
            //I am trying to bind the index of lists to method
            //to make sure each changeListTitle and showTitleEditor
            //method work for different lists
            this.edits.push(this.changeListTitle.bind(this, i));
            this.shows.push(this.showTitleEditor.bind(this, i));
            this.displayCardMenus.push(this.displayCardMenu.bind(this, i));
            this.displayActionLists.push(this.displayActionList.bind(this, i));
            this.addcards.push(this.addcard.bind(this, i));
            this.deletelists.push(this.deleteList.bind(this, i));
            this.copylists.push(this.copyList.bind(this, i));
            let cardlength = this.state.lists[i].cards.length;
            let temparr = [];
            let temparr2 = [];
            for (let j = 0; j < cardlength; j++) {
                temparr.push(this.copyCard.bind(this, i, j));
                temparr2.push(this.deleteCard.bind(this, i, j));
            }
            this.copycards.push(temparr);
            this.deletecards.push(temparr2);

        }
    }

    clickOutsideTarget() {
        window.addEventListener("click", (event) => {
                if (!event.target.matches(".actionbutton")
                && this.state.actionlistdisplays.includes(true)) {
                this.setState({
                    actionlistdisplays: this.falseCardShowsList(this.state.actionlistdisplays.length),
                });
            }

        });
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

        window.setTimeout(() => document.getElementById("addcardid" + id).focus(), 0);
    }

    displayActionCard(id) {
        console.log(id);
        this.setState(
            {
                actioncarddisplays: this.makeListTrue(this.state.actioncarddisplays[id], id, this.state.actioncarddisplays)
            });
    }

    makeListTrue(condition, id, length) {
        let newarr = [];
        for (let i = 0; i < length; i++) {
            newarr[i] = false;
        }

        if (!condition) {
            newarr[id] = true;
        }
        return newarr;
    }

    displayActionList(id) {
        this.setState({
            actionlistdisplays: this.makeListTrue(this.state.actionlistdisplays[id], id
                , this.state.actionlistdisplays.length)
        });
    }

    ListComonpent(cardlist) {
        return <div>
            {cardlist}
        </div>
    }

    cardList(cards = [], id) {
        //list the cards
        if (typeof cards === 'object' && typeof cards.map === 'function') {

            let arr = cards.map((card, index) => {
                let realid = parseInt(card.id[1]);
                return <ReactBeautifulDnd.Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (<div {...provided.draggableProps}
                        {...provided.dragHandleProps} ref={provided.innerRef}>
                        <li><div className="white cardtitle"><p className="fixwidth">{card.title + " (" + card.id + ")"}</p><div>
                            <button className="btn btn-sm actionbutton" onClick={this.listDisplayActionCards[realid]}>...</button>
                            <div className={"inline actionlist " + (this.state.actioncarddisplays[realid] ? "WPWWP" : "hiddentextarea")}>
                                <button className="actionbutton" onClick={this.deletecards[id][index]}>Delete</button>
                                <br />
                                <button className="actionbutton" onClick={this.copycards[id][index]}>Copy</button>
                            </div>
                        </div></div></li>
                    </div>)}

                </ReactBeautifulDnd.Draggable>;
            });
            return <ul>{arr}</ul>;
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
            this.listDisplayActionCards.push(this.displayActionCard.bind(this, this.cardsId - 1));
            this.copycards[id].push(this.copyCard.bind(this, id, newlist[id].cards.length - 1));
            this.deletecards[id].push(this.deleteCard.bind(this, id, newlist[id].cards.length - 1));
        }

    }

    copyCard(listindex, cardindex) {
        let tempcards = [...this.state.lists];
        tempcards[listindex].cards.push({
            id: "C" + this.cardsId,
            title: tempcards[listindex].cards[cardindex].title,
            displayaction: tempcards[listindex].cards[cardindex].displayaction
        });
        this.setState({
            lists: tempcards
        });
        this.cardsId++;
        this.listDisplayActionCards.push(this.displayActionCard.bind(this, this.cardsId - 1));
        this.copycards[listindex].push(this.copyCard.bind(this, listindex, tempcards[listindex].cards.length - 1));
        this.deletecards[listindex].push(this.deleteCard.bind(this, listindex, tempcards[listindex].cards.length - 1));
    }

    deleteCard(listindex, cardindex) {
        let templist = [...this.state.lists];
        templist[listindex].cards.splice(cardindex, 1);
        this.setState({
            lists: templist
        });
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
        window.setTimeout(function () {
            document.getElementById("titlechange" + id).focus();
        }, 0);
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

        console.log(this.state.titleinput);
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
        window.setTimeout(() => document.getElementById("addlistid").focus(), 0);

    }

    swapArray2(array, source, destination) {
        array.splice(destination, 0, array[source]);
        array.splice(source + 1, 1);
        return array;
    }

    swapArray(array, source, destination) {
        //reorder position when the destination index is greater than source index
        array.splice(destination + 1, 0, array[source]);
        array.splice(source, 1);
        return array;
    }

    findindexById(array, id)
    {
        let length = array.length;
        for (let i = 0; i < length;i++)
        {
            if (array[i].id === id)
            {
                return i;
            }
        }
        return -1;
    }

    onDragEnd = (result) => {

        if (!result.destination)
        {
            return;
        }

        if (result.type === "column")
        {
            let newlist = [...this.state.lists];
            let target = {...newlist[result.source.index]};
            newlist.splice(result.source.index,1);
            newlist.splice(result.destination.index,0,target);
            this.setState({
                lists:newlist
            });
            return;
        }
        let newlist = [...this.state.lists];
        if (result.source.droppableId === result.destination.droppableId) {
            if (result.source.index < result.destination.index) {
                newlist[this.findindexById(
                    newlist,result.source.droppableId)].cards =
                    this.swapArray(newlist[this.findindexById(
                        newlist,result.source.droppableId)].cards,
                        result.source.index, result.destination.index);

                //console.log(newlist[id].cards);
                this.setState(
                    {
                        lists: newlist
                    }
                );
            }
            else if (result.source.index > result.destination.index) {
                newlist[this.findindexById(
                    newlist,result.source.droppableId)].cards =
                    this.swapArray2(newlist[this.findindexById(
                        newlist,result.source.droppableId)].cards,
                        result.source.index, result.destination.index);

                this.setState(
                    {
                        lists: newlist
                    }
                );
            }
        }
        else {
            newlist[this.findindexById(
                newlist,result.destination.droppableId)].cards.splice(result.destination.index, 0,
                newlist[this.findindexById(
                    newlist,result.source.droppableId)].cards[result.source.index]);
            newlist[this.findindexById(
                newlist,result.source.droppableId)].cards.splice(result.source.index, 1);
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
            this.deletelists.push(this.deleteList.bind(this, newlist.length - 1));
            this.displayActionLists.push(this.displayActionList.bind(this, newlist.length - 1));
            this.copycards.push([]);
            this.deletecards.push([]);
        }

    }

    deleteList(id) {
        let temp = [...this.state.lists];
        temp.splice(id, 1);
        this.setState({
            lists: temp
        });
    }

    copyList(id) {
        let newlist = [...this.state.lists];
        let newarr = newlist[id].cards.map((card) => {
            let obj = {
                id: "C" + this.cardsId,
                title: card.title
            };
            this.cardsId++;
            return obj;
        })

        let templist = {
            id: "L" + this.listId,
            title: newlist[id].title,
            cards: newarr
        };

        newlist.push(templist);
        this.setState({
            lists: newlist
        });
        this.listId++;
        this.edits.push(this.changeListTitle.bind(this, newlist.length - 1));
        this.shows.push(this.showTitleEditor.bind(this, newlist.length - 1));
        this.displayCardMenus.push(this.displayCardMenu.bind(this, newlist.length - 1));
        this.addcards.push(this.addcard.bind(this, newlist.length - 1));
        this.deletelists.push(this.deleteList.bind(this, newlist.length - 1));
        this.copylists.push(this.copyList.bind(this, newlist.length - 1));
        this.displayActionLists.push(this.displayActionList.bind(this, newlist.length - 1));

    }

    listOfList() {
        let arr = this.state.lists.map((list, index) => {
            return <ReactBeautifulDnd.Draggable key={list.id+"dropper"} draggableId={list.id} index={index}>
            {(provided) => (
            <div className="inlinetable" {...provided.draggableProps} ref={provided.innerRef}>
            <div key={list.id} className="divclass "><div className="listtitle"><p {...provided.dragHandleProps}
                className={this.state.displays[index] ? "hiddentextarea" : ""}
                onClick={this.shows[index]}><b>{list.title + " (" + list.id + ")"}</b></p>
                <form className={this.state.displays[index] ? "" : "hiddentextarea"}
                    onSubmit={this.edits[index]}>
                    <input id={"titlechange" + index} onChange={this.handleTitleChange}
                        value={this.state.titleinput}
                        type="text" />
                    <input className="btn btn-sm btn-dark" type="submit" value="Change" />
                    <button className="btn btn-sm btn-dark" onClick={this.hideTitleEditor}>X</button>
                </form>
                <div><button className="btn btn-sm actionbutton" onClick={this.displayActionLists[index]}>...</button>

                    <div className={"actionlist " +
                        (this.state.actionlistdisplays[index] ? "" : "hiddentextarea")}>

                        <button className="btn actionbutton" onClick={this.deletelists[index]}>Delete</button>
                        <br />
                        <button className="btn actionbutton" onClick={this.copylists[index]}>Copy</button>
                    </div></div>

            </div>
                <ReactBeautifulDnd.Droppable key={list.id} droppableId={list.id} type="task">

                    {(provided) => (<div className="Container" {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {this.ListComonpent(this.cardList(list.cards, index))
                        }
                        {provided.placeholder}
                    </div>)}
                </ReactBeautifulDnd.Droppable>
                <div className={this.state.cardshows[index] ? "" : "hiddentextarea"}>
                    <form onSubmit={this.addcards[index]}>
                        <textarea maxLength={250} id={"addcardid" + index} className="w-100" value={this.state.cardinput}
                            onChange={this.handleCardChange}
                            placeholder="Enter a title for this card" />
                        <br />                            <input className="btn btn-sm btn-primary" type="submit" value="Add card" />
                        <button onClick={this.hideCardMenu}>X</button>
                    </form>
                </div>
                <a href="#" role="button" onClick={this.displayCardMenus[index]}
                    className={"" + (this.state.cardshows[index] ? "hiddentextarea" : "")}>
                    Add a card
            </a></div>
            </div>)}</ReactBeautifulDnd.Draggable>
        });
        return arr;
    }

    changeBoardTitle() {
        this.setState(
            {
                boardtitle: event.target.value
            }
        );
    }

    showBoardTitleEditor() {
        this.setState(
            {
                showboardtitleeditor: true
            }
        );
        window.setTimeout(() => document.getElementById("boardtitleeditor").select(), 0);
    }

    render() {
        { this.clickOutsideTarget() }
        
        return <ReactBeautifulDnd.DragDropContext onDragEnd={this.onDragEnd}>

            <div className="h-100">
            <BoardTitleComponent/>
                <div className="inlinetable">
                <ReactBeautifulDnd.Droppable droppableId="all-col" direction="horizontal" type="column">
                    {(provided) => (
                        <div className="inlinetable" {...provided.droppableProps} ref={provided.innerRef}>
                            {this.listOfList()}
                            {...provided.placeholder}
                        </div>
                    )}
                </ReactBeautifulDnd.Droppable>
                <div className="divclass">
                    <button className={"btn btn-sm btn-light " + (this.state.show ? "hiddentextarea" : "")}
                        onClick={this.displayForm}>Add another List</button>
                    <form id="on0" className={"small " + (this.state.show ? "" : "hiddentextarea")}
                        onSubmit={this.addList}>
                        <p>
                            <input id="addlistid" onChange={this.handleChange}
                                value={this.state.input} type="text" />
                        </p>
                        <p>
                            <input type="submit" value="Add list" />
                            <button onClick={this.displayForm}>X</button>
                        </p>
                    </form>
                </div>
            </div>
            </div>
        </ReactBeautifulDnd.DragDropContext>;
    }
}

ReactDOM.render(<BoardComponent />, document.getElementById("board"));

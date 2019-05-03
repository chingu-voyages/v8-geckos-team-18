"use strict";

let temps = function () {
    let tempdata = {
        boardtitle: "Editable board title",
        lists: [{
            id: "L0",
            title: "Stuff to try (this is a list)",
            cards: [{
                id: "C0", title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", finished: false
            }, { id: "C1", title: "Familiarize yourself with git + github", finished: false }]
        }, {
            id: "L1",
            title: "Another Listttttttttttttttttttttttttttttttttttttttttttttttttttt",
            cards: [{ id: "C3", title: "X", finished: false },
            { id: "C4", title: "Y", finished: false },
            { id: "C5", title: "Z", finished: false }]
        }, {
            id: "L2",
            title: "Bonus Considerations",
            cards: [{ id: "C6", title: "Test Units", finished: false },
            { id: "C7", title: "Make it mobile responsive", finished: false },
            {
                id: "C8",
                title: "Create a bookself for the users that stores bookmarked books", finished: false
            },
            {
                id: "C9",
                title: "On search input, display the last 10 search queries.", finished: false
            }]
        }], ids: {
            listsId: 3,
            cardsId: 10
        }
    }

    function copyCard(listIndex, cardIndex) {
        let tempcard = {
            id: "C" + tempdata.ids.cardsId,
            title: tempdata.lists[listIndex].cards[cardIndex].title + "(1)"
            , finished: tempdata.lists[listIndex].cards[cardIndex].finished
        };

        tempdata.lists[listIndex].cards.splice(cardIndex + 1, 0, tempcard);
        tempdata.ids.cardsId++;

    }

    function addList(listTitle) {
        let list = {
            id: "L" + tempdata.ids.listsId,
            title: listTitle,
            cards: []
        };
        tempdata.lists.push(list);
        tempdata.ids.listsId++;
    }

    function deleteList(listId) {
        tempdata.lists.splice(listId, 1);
    }

    function copyList(listId) {
        let list = {
            id: "L" + tempdata.ids.listsId,
            title: tempdata.lists[listId].title,
            cards: tempdata.lists[listId].cards.map((card) => {
                return {
                    id: "C" + tempdata.ids.cardsId++,
                    title: card.title,
                    finished: card.finished
                };
            })
        }
        tempdata.lists.splice(listId + 1, 0, list);
        tempdata.ids.listsId++;
    }

    function get() {
        return tempdata;
    }

    function getById(id) {
        return tempdata.lists.find((item) => {
            return item.id === id;
        });
    }

    function test() {
        tempdata.lists[1].cards.push([]);
    }

    function getTitle() {
        return tempdata.boardtitle;
    }

    function addCardId() {
        tempdata.ids.cardsId++;

    }

    function addListId() {
        tempdata.ids.listsId++;
    }

    function getList() {
        let newarr = tempdata.lists.map((item) => {
            return {
                id: item.id,
                title: item.title,
                cards: item.cards.concat()
            }
        });
        return newarr;
    }

    function changeTitle(title) {
        tempdata.boardtitle = title;
    }

    function addCard(listId, cardTitle) {
        tempdata.lists[listId].cards.push(
            {
                id: "C" + tempdata.ids.cardsId,
                title: cardTitle, finished: false
            }
        );
        tempdata.ids.cardsId++;
    }

    function deleteCard(listIndex, cardIndex) {
        tempdata.lists[listIndex].cards.splice(cardIndex, 1);
    }

    function finishCard(listIndex, cardIndex) {
        tempdata.lists[listIndex].cards[cardIndex].finished = !tempdata.lists[listIndex].cards[cardIndex].finished;
    }

    function changeCardTitle(listIndex, cardIndex, cardTitle) {
        tempdata.lists[listIndex].cards[cardIndex].title = cardTitle;
    }

    function changeListTitle(id, listTitle) {
        getById(id).title = listTitle;
    }

    function swapList(sourceIndex, destinationIndex) {
        let target = { ...tempdata.lists[sourceIndex] };
        tempdata.lists.splice(sourceIndex, 1);
        tempdata.lists.splice(destinationIndex, 0, target);

    }

    function swapCardWithinList(sourceDroppableId, sourceIndex, destinationIndex) {
        let target = {
            ...getById(sourceDroppableId).
                cards[sourceIndex]
        };
        getById(sourceDroppableId).cards.splice(sourceIndex, 1);
        getById(sourceDroppableId).cards.splice(destinationIndex, 0, target);

    }

    function swapCard(sourceDroppableId, destinationDroppableId, sourceIndex, destinationIndex) {
        let target = {
            ...getById(sourceDroppableId).
                cards[sourceIndex]
        };
        getById(sourceDroppableId).cards.splice(sourceIndex, 1);
        if (sourceDroppableId === destinationDroppableId) {
            getById(sourceDroppableId).cards.splice(destinationIndex, 0, target);
        }
        else {
            getById(destinationDroppableId).cards.splice(destinationIndex, 0, target);
        }
    }

    return {
        getTitle: getTitle,
        get: get,
        changeTitle: changeTitle,
        getById: getById,
        addCardId: addCardId,
        addListId: addListId,
        test: test,
        getList: getList,
        addList: addList,
        copyList: copyList,
        deleteList: deleteList,
        addCard: addCard,
        copyCard: copyCard,
        deleteCard: deleteCard,
        finishCard: finishCard,
        changeCardTitle: changeCardTitle,
        changeListTitle: changeListTitle,
        swapList: swapList,
        swapCardWithinList: swapCardWithinList,
        swapCard: swapCard
    }
}();

class BigListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {/*
        console.log("Big man");
        let arr = this.props.lists.map((list, index) => {

            let props = {
                list: { ...list },
                index: index,
                showListAction: this.showListActions[index],
                showActionList: this.state.showActionList[index],
                copyList: this.copyLists[index],
                deleteList: this.deleteLists[index]
                //CardsComponent: this.CardsComponent(list.cards, index, list.id),
            };

            return <ListComponent {...props} />
        });

        return <ReactBeautifulDnd.Droppable droppableId="all-col" direction="horizontal" type="column">
            {(provided) => (
                <div className="inlinetable" {...provided.droppableProps} ref={provided.innerRef}>
                    <div className="inlinetable">
                        {arr}
                        {...provided.placeholder}
                    </div>
                </div>
            )}

        </ReactBeautifulDnd.Droppable>

            */}
}

class NoCardsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            cardsInList: [...this.props.cards],
            listIndex: this.props.listIndex,
            showCardActions: this.props.showCardActions[this.props.listIndex],
            showAdd: this.props.showAdd,
            deleteCards: this.props.deleteCards[this.props.listIndex],
            copyCards: this.props.copyCards[this.props.listIndex],
            showCardActionList: [...this.props.showCardActionList]
        };

        return <div>
            <CardListComponent {...props} />{/*<ReactBeautifulDnd.Droppable key={this.props.listId} 
        droppableId={this.props.listId} type="task">
            {(provided) => (<div className="Container" {...provided.droppableProps}
                ref={provided.innerRef}>
                <div>
                    <ul><CardListComponent {...props} /></ul>
                </div>
                {provided.placeholder}
            </div>)}
        </ReactBeautifulDnd.Droppable>*/}
            <button className={"btn btn-sm btn-link " + (this.props.showAddCardList[this.props.listIndex] ? "hiddentextarea" : "")}
                type="button" onClick={this.props.showAddCards[this.props.listIndex]}>Add another card</button>
            <div className={(this.props.showAddCardList[this.props.listIndex] ? "" : "hiddentextarea ")}>
                <textarea className="w-100" placeholder="Enter a title for this card..." onChange={this.props.handleCardTitleChange} value={this.props.cardTitle} />
                <div className="inlinetable just">
                    <button className="btn btn-sm btn-success" onClick={this.props.addCards[this.props.listIndex]}>Add card</button><button className="btn btn-sm btn-dark" onClick={this.props.showAddCards[this.props.listIndex]}>x</button><button className="btn btn-sm btn-dark">...</button>
                </div>
            </div>
        </div>;

    }
}

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {

        if (this.props.index !== nextProps.index) {
            return true;
        }
        let oldCardLength = this.props.list.cards.length;
        let newCardLength = nextProps.list.cards.length;
        if (oldCardLength !== newCardLength) {
            return true;
        }

        for (let i = 0; i < oldCardLength; i++) {

            if (this.props.list.cards[i].title
                .localeCompare(nextProps.list.cards[i].title) !== 0) {
                return true;
            }

            if (this.props.list.cards[i].id
                .localeCompare(nextProps.list.cards[i].id) !== 0) {
                return true;
            }

            if (this.props.list.cards[i].finished !== nextProps.list.cards[i].finished) {
                return true;
            }
        }

        if (this.props.showCardActionList[this.props.index] !== undefined) {

            if (nextProps.showCardActionList[this.props.index] === undefined) {
                return true;
            }

            for (let i = 0; i < this.props.showCardActionList[this.props.index].length; i++) {
                if (this.props.showCardActionList[this.props.index][i]
                    !== nextProps.showCardActionList[this.props.index][i]) {
                    return true;
                }
            }
        }
        else {
            if (nextProps.showCardActionList[this.props.index] !== undefined) {
                return true;
            }
        }

        if (this.props.showActionList !== nextProps.showActionList) {
            return true;
        }

        return false;
    }
    //cardsInList,listIndex,listId,this.showCardActions,this.showAdd
    //this.deleteCards,this.copyCards,this.state.showCardActionList
    //this.state.showAddCardList,this.showAddCards,this.handleCardChange
    //this.state.cardTitle,this.addCards

    render() {
        return <div key={this.props.list.id}>
            <div className={"inlinetable just" +
                (this.props.showActionList ? "" : "")}>

                <button className="btn-warning" onClick={this.props.deleteList}>Delete List</button>
                <br />
                <button className="btn-warning" onClick={this.props.copyList}>Copy List</button>
            </div>

            {this.props.CardsComponent(this.props.list.cards,
                this.props.index, this.props.list.id, this.props.showCardActionList
                , this.props.showAddCardList, this.props.newListTitle)}

        </div>
        {/*<ListTitleComponent id={list.id} />*/ }
    }
}

class ListsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: temps.getList(),
            showActionList: [],
            showTitleEditor: false,
            showAddList: false,
            newListTitle: "",
            showCardActionList: [],
            showAddCardList: [],
            cardTitle: ""

        };

        this.toggleAddList = this.toggleAddList.bind(this);
        this.handleListTitleChange = this.handleListTitleChange.bind(this);
        this.addList = this.addList.bind(this);
        this.copyLists = [];
        this.deleteLists = [];
        this.showListActions = [];
        let listLength = this.state.lists.length;

        //Card method
        this.handleCardTitleChange = this.handleCardTitleChange.bind(this);
        this.showAddCards = [];
        this.addCards = [];
        this.copyCards = [];
        this.deleteCards = [];
        this.showCardActions = [];
        this.CardsComponent = this.CardsComponent.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);

        for (let i = 0; i < listLength; i++) {
            this.showAddCards.push(this.showAddCard.bind(this, i));
            this.addCards.push(this.addCard.bind(this, i));
            this.copyLists.push(this.copyList.bind(this, i));
            this.deleteLists.push(this.deleteList.bind(this, i));
            this.showListActions.push(this.showListAction.bind(this, i));

            //card method
            let cardLength = this.state.lists[i].cards.length;
            let newarr1 = [];
            let newarr2 = [];
            let newarr3 = [];
            for (let j = 0; j < cardLength; j++) {
                newarr1.push(this.copyCard.bind(this, i, j));
                newarr2.push(this.deleteCard.bind(this, i, j));
                newarr3.push(this.showCardAction.bind(this, i, j));
            }
            this.copyCards.push(newarr1);
            this.deleteCards.push(newarr2);
            this.showCardActions.push(newarr3);
        }
    }

    showCardAction(listIndex = 0, cardIndex = 0) {
        let newarr = [...this.state.showCardActionList];
        if (newarr[listIndex] === undefined) {
            newarr[listIndex] = [];
        }
        if (newarr[listIndex][cardIndex]) {
            newarr[listIndex] = [];
            newarr[listIndex][cardIndex] = false;
        }
        else {
            newarr = [];
            newarr[listIndex] = [];
            newarr[listIndex][cardIndex] = !newarr[listIndex][cardIndex];
        }


        this.setState({
            showCardActionList: newarr
        });

    }

    showAdd(item = [], listIndex = 0, cardIndex = 0) {
        if (item[listIndex] === undefined) {
            return false;
        }
        return item[listIndex][cardIndex];
    }

    deleteCard(listIndex, cardIndex) {
        temps.deleteCard(listIndex, cardIndex);
        this.setState({
            lists: temps.getList(),
            showCardActionList: []
        });
    }

    copyCard(listIndex, cardIndex) {
        /*let tempcard = {
            id: "C" + temps.get().ids.cardsId,
            title: temps.get().lists[listIndex].cards[cardIndex].title + "(1)"
            , finished: temps.get().lists[listIndex].cards[cardIndex].finished
        };

        temps.get().lists[listIndex].cards.push(tempcard);

        temps.addCardId();*/
        temps.copyCard(listIndex, cardIndex);
        this.setState({
            lists: temps.getList(),
            showCardActionList: []
        });

        let cardLength = temps.get().lists[listIndex].cards.length;
        if (this.copyCards[listIndex].length < cardLength) {

            this.copyCards[listIndex].push(this.copyCard.bind(this, listIndex, cardLength - 1));
            this.deleteCards[listIndex].push(this.deleteCard.bind(this, listIndex, cardLength - 1));
            this.showCardActions[listIndex].push(this.showCardAction.bind(this, listIndex, cardLength - 1));
        }
    }

    addCard(index) {

        temps.addCard(index, this.state.cardTitle);
        /*temps.get().lists[index].cards.push(
            {
                id: "C" + temps.get().ids.cardsId,
                title: this.state.cardTitle, finished: false
            }
        );

        temps.addCardId();*/

        this.setState({
            lists: temps.getList(),
            cardTitle: ""
        });

        let cardLength = temps.get().lists[index].cards.length;
        if (this.copyCards[index].length < cardLength) {
            this.copyCards[index].push(this.copyCard.bind(this, index, cardLength - 1));
            this.deleteCards[index].push(this.deleteCard.bind(this, index, cardLength - 1));
            this.showCardActions[index].push(this.showCardAction.bind(this, index, cardLength - 1));
        }
    }

    //cardsInList,listIndex,listId,this.showCardActions,this.showAdd
    //this.deleteCards,this.copyCards,this.state.showCardActionList
    //this.state.showAddCardList,this.showAddCards,this.handleCardChange
    //this.state.cardTitle,this.addCards
    CardsComponent(cardsInList = [], listIndex = -1,
        listId = "", showCardActionList, showAddCardList, newListTitle) {
        let props = {
            listId: listId,
            cardsInList: [...cardsInList],
            listIndex: listIndex,
            showCardActions: this.showCardActions[listIndex],
            showAdd: this.showAdd,
            deleteCards: this.deleteCards[listIndex],
            copyCards: this.copyCards[listIndex],
            showCardActionList: [...showCardActionList]
        };

        /*let arr = cardsInList.map((card, index) => {
            return <ReactBeautifulDnd.Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (<div {...provided.draggableProps}
                    {...provided.dragHandleProps} ref={provided.innerRef}>
                    <li><div className="white cardtitle"><CardComponent cardTitle={card.title + " (" + card.id + ")"} /><div>
                        <button className="btn btn-sm actionbutton" onClick={this.showCardActions[listIndex][index]}>...</button>
                        <div className="inner"><div className={"inline actionlist " + ((this.showAdd(this.state.showCardActionList, listIndex, index)) ? "" : "hiddentextarea")}>
                            <button className="btn actionbutton" onClick={this.deleteCards[listIndex][index]}>Ddelete</button>
                            <br />
                            <button className="btn actionbutton" onClick={this.copyCards[listIndex][index]}>Copy</button>
                        </div>
                        </div>
                    </div></div></li>
                </div>)}

            </ReactBeautifulDnd.Draggable>;
        });*/

        return <div>
            <CardListComponent {...props} />
            {/*<button className={"btn btn-sm btn-link " + (this.state.showAddCardList[listIndex] ? "hiddentextarea" : "")}
                type="button" onClick={this.showAddCards[listIndex]}>Add another card</button>
            <div className={(this.state.showAddCardList[listIndex] ? "" : "hiddentextarea ")}>
                <textarea className="w-100" placeholder="Enter a title for this card..." onChange={this.handleCardTitleChange} value={newListTitle} />
                <div className="inlinetable just">
                    <button className="btn btn-sm btn-success" onClick={this.addCards[listIndex]}>Add card</button><button className="btn btn-sm btn-dark" onClick={this.showAddCards[listIndex]}>x</button><button className="btn btn-sm btn-dark">...</button>
                </div>
            </div>*/}
        </div>;
    }

    showAddCard(index) {
        let newarr = [...this.state.showAddCardList];
        if (newarr[index]) {
            newarr[index] = !newarr[index];

        }
        else {
            newarr = [];
            newarr[index] = !newarr[index];
        }
        this.setState({
            showAddCardList: newarr
        });
    }

    shouldComponentUpdate(nextState) {
        return true;
    }

    toggleAddList() {
        this.setState({
            showAddList: !this.state.showAddList
        });
    }

    toggleAddCardList() {
        this.setState({
            showAddCardList: !this.state.showAddCardList
        });
    }

    handleCardTitleChange() {
        this.setState({
            cardTitle: event.target.value
        });
    }

    handleListTitleChange() {
        this.setState({
            newListTitle: event.target.value
        });
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.type === "column") {
            temps.swapList(result.source.index, result.destination.index);
            this.setState({
                lists: temps.getList()
            });
            return;
        }
        else if (result.type === "task") {
            temps.swapCard(result.source.droppableId, result.destination.droppableId,
                result.source.index, result.destination.index);
                this.setState({
                    lists: temps.getList()
                });

            if (result.source.droppableId === result.destination.droppableId) {
                /*temps.swapCard(result.source.droppableId, result.destination.droppableId,
                    result.source.index, result.destination.index);*/
                /*let target = {
                    ...temps.getById(result.source.droppableId).
                        cards[result.source.index]
                };
                temps.getById(result.source.droppableId).cards.splice(result.source.index, 1);
                temps.getById(result.source.droppableId).cards.splice(result.destination.index, 0, target);
                */
                /*this.setState({
                    lists: temps.getList()
                });*/
                return;
            }
            else {
                /*temps.swapCard(result.source.droppableId,
                    result.destination.droppableId,
                    result.source.index,
                    result.destination.index);
                this.setState({
                    lists: temps.getList()
                });*/
                let index = temps.get().lists.indexOf(temps.getById(result.destination.droppableId));
                let cardLength = temps.getById(result.destination.droppableId).cards.length;
                if (this.copyCards[index].length < cardLength) {
                    this.copyCards[index].push(this.copyCard.bind(this, index,
                        cardLength - 1));
                    this.deleteCards[index].push(this.deleteCard.bind(this, index,
                        cardLength - 1));
                    this.showCardActions[index].push(this.showCardAction.bind(this, index,
                        cardLength - 1));

                }
                return;
            }
        }
    }

    showListAction(index) {
        let newarr = [...this.state.showActionList];
        if (newarr[index]) {
            newarr[index] = !newarr[index];

        }
        else {
            newarr = [];
            newarr[index] = !newarr[index];
        }

        this.setState({
            showActionList: newarr
        });
    }

    addList() {
        temps.addList(this.state.newListTitle);
        /*temps.get().lists.push({
            id: "L" + temps.get().ids.listsId,
            title: this.state.newListTitle,
            cards: []
        });
        temps.addListId();*/
        this.setState({
            lists: temps.getList(),
            newListTitle: ""
        });

        let listLength = temps.get().lists.length;

        if (this.copyLists.length < listLength) {
            this.copyLists.push(this.copyList.bind(this, listLength - 1));
            this.deleteLists.push(this.deleteList.bind(this, listLength - 1));
            this.showListActions.push(this.showListAction.bind(this, listLength - 1));
            this.showCardActions.push([]);
            this.deleteCards.push([]);
            this.copyCards.push([]);
            this.showAddCards.push(this.showAddCard.bind(this, listLength - 1));
            this.addCards.push(this.addCard.bind(this, listLength - 1));
        }
    }

    copyList(index) {
        temps.copyList(index);
        /*temps.get().lists.push({
            id: "L" + temps.get().ids.listsId,
            title: temps.get().lists[index].title,
            cards: [...temps.get().lists[index].cards.map((card) => {
                return {
                    id: "C" + temps.get().ids.cardsId++,
                    title: card.title, 
                    finished: card.finished
                };
            })]
        });
        temps.addListId();
        */
        let templistlength = temps.get().lists.length;

        if (this.copyCards.length < templistlength) {

            let cardLength = temps.get().lists[templistlength - 1].cards.length;
            let newarr1 = [];
            let newarr2 = [];
            let newarr3 = [];
            for (let j = 0; j < cardLength; j++) {
                newarr1.push(this.copyCard.bind(this, templistlength - 1, j));
                newarr2.push(this.deleteCard.bind(this, templistlength - 1, j));
                newarr3.push(this.showCardAction.bind(this, templistlength - 1, j));
            }

            if (this.copyCards[templistlength] !== undefined) {
                this.copyCards[templistlength] = [...newarr1];
                this.deleteCards[templistlength] = [...newarr2];
                this.showCardActions[templistlength] = [...newarr3];
            }

            this.copyCards.push(newarr1);
            this.deleteCards.push(newarr2);
            this.showCardActions.push(newarr3);
        }

        this.setState({
            lists: temps.getList(),
            showActionList: []
        });

        let listLength = temps.get().lists.length;
        if (this.copyLists.length < listLength) {
            this.copyLists.push(this.copyList.bind(this, listLength - 1));
            this.deleteLists.push(this.deleteList.bind(this, listLength - 1));
            this.showListActions.push(this.showListAction.bind(this, listLength - 1));
            this.showAddCards.push(this.showAddCard.bind(this, listLength - 1));
            this.addCards.push(this.addCard.bind(this, listLength - 1));
        }
    }

    deleteList(index) {
        temps.deleteList(index);
        this.setState({
            lists: temps.getList(),
            showActionList: []
        });
    }

    //list, index, this.showListActions[index]
    //,this.showActionList[index],this.copyList[index]
    //this.deleteList[index]

    render() {
        //this.state.lists,this.showListAction,this.state.showActionList
        //this.copyList,this.deleteLists,this.CardsComponent

        //cardsInList,listIndex,listId,this.showCardActions,this.showAdd
        //this.deleteCards,this.copyCards,this.state.showCardActionList
        //this.state.showAddCardList,this.showAddCards,this.handleCardChange
        //this.state.cardTitle,this.addCards

        let arr = this.state.lists.map((list, index) => {

            let props = {
                list: { ...list },
                index: index,
                showListAction: this.showListActions[index],
                showActionList: this.state.showActionList[index],
                copyList: this.copyLists[index],
                deleteList: this.deleteLists[index],
                CardsComponent: this.CardsComponent,
                showCardActionList: this.state.showCardActionList,
                showAddCardList: this.state.showAddCardList,
                newListTitle: ""
            };

            return <ReactBeautifulDnd.Draggable key={list.id + "dropper"} draggableId={list.id} index={index}>
                {(provided) => (
                    <div className="inlinetable divclass" {...provided.draggableProps} ref={provided.innerRef}>
                        <div {...provided.dragHandleProps} className="listtitle">
                            <ListTitleComponent id={list.id} /></div>
                        <div>
                            <ListComponent {...props} />
                            <button className={"btn btn-sm btn-link " + (this.state.showAddCardList[index] ? "hiddentextarea" : "")} onClick={this.showAddCards[index]}>Add another card</button>
                            <div className={(this.state.showAddCardList[index] ? "" : "hiddentextarea ")}>
                                <textarea className="w-100" placeholder="Enter a title for this card..." onChange={this.handleCardTitleChange} value={this.state.cardTitle} />
                                <div className="inlinetable just">
                                    <button className="btn btn-sm btn-success" onClick={this.addCards[index]}>Add card</button><button className="btn btn-sm btn-dark" onClick={this.showAddCards[index]}>x</button><button className="btn btn-sm btn-dark">...</button>
                                </div>
                            </div>
                        </div></div>)}</ReactBeautifulDnd.Draggable>
            return <ReactBeautifulDnd.Draggable key={list.id + "dropper"} draggableId={list.id} index={index}>
                {(provided) => (
                    <div className="inlinetable" {...provided.draggableProps} ref={provided.innerRef}>
                        <div key={list.id} className="divclass "><div {...provided.dragHandleProps} className="listtitle">
                            <ListTitleComponent id={list.id} />
                            <div><button className="btn btn-sm actionbutton" onClick={this.showListActions[index]}>...</button>

                                <div className={"actionlist " +
                                    (this.state.showActionList[index] ? "" : "hiddentextarea")}>

                                    <button className="btn actionbutton" onClick={this.deleteLists[index]}>Delete</button>
                                    <br />
                                    <button className="btn actionbutton" onClick={this.copyLists[index]}>Copy</button>
                                </div></div>

                        </div>
                            {this.CardsComponent(this.state.lists[index].cards, index, this.state.lists[index].id)}

                        </div>
                        {/*<ListTitleComponent id={list.id} />*/}</div>)}</ReactBeautifulDnd.Draggable>
        });

        return <ReactBeautifulDnd.DragDropContext onDragEnd={this.onDragEnd}>
            {<ReactBeautifulDnd.Droppable droppableId="all-col" direction="horizontal" type="column">
                {(provided) => (
                    <div className="inlinetable" {...provided.droppableProps} ref={provided.innerRef}>
                        <div className="inlinetable">
                            {arr}
                            {...provided.placeholder}

                        </div>
                        <div className="divclass">
                            <button className={"btn btn-sm btn-light " + (this.state.showAddList ? "hiddentextarea" : "")}
                                onClick={this.toggleAddList}>Add another List</button>
                            <div className={(this.state.showAddList ? "" : "hiddentextarea ")}>
                                <textarea className="w-100" placeholder="Enter list title..." onChange={this.handleListTitleChange} value={this.state.newListTitle} />
                                <div>
                                    <button className="btn btn-sm btn-success" onClick={this.addList}>Add List</button><button className="btn btn-sm btn-dark" onClick={this.toggleAddList}>x</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                )}

            </ReactBeautifulDnd.Droppable>}
        </ReactBeautifulDnd.DragDropContext>;
    }
}

class ListTitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                input: "",
                listTitle: temps.getById(this.props.id).title,
                tempListTitle: temps.getById(this.props.id).title,
                showListTitleEditor: false
            }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.showTitleEditor = this.showTitleEditor.bind(this);
        this.handleTitleSubmit = this.handleTitleSubmit.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.tempListTitle !== nextState.tempListTitle
            || this.state.input !== nextState.input
            || this.state.showListTitleEditor !== nextState.showListTitleEditor;
    }

    getById(array, id) {
        return array.find((item) => { return item.id === id; });
    }

    handleTitleChange() {
        this.setState(
            {
                tempListTitle: event.target.value
            }
        );
    }


    showTitleEditor() {
        this.setState({
            showListTitleEditor: !(this.state.showListTitleEditor)
        });

    }

    handleTitleSubmit() {
        event.preventDefault();
        if (this.state.tempListTitle.trim() !== "") {
            this.getById(temps.get().lists, this.props.id).title = this.state.tempListTitle;

            this.setState({
                tempListTitle: this.getById(temps.get().lists, this.props.id).title,
                showListTitleEditor: false
            });
        }
    }

    render() {
        return <div>
            <p className={"textis " + (this.state.showListTitleEditor ? "hiddentextarea" : "")}
                onClick={this.showTitleEditor}>
                <b>{this.state.tempListTitle + " (" +
                    temps.getById(this.props.id).id + ")"}</b>
            </p>
            <form className={this.state.showListTitleEditor ? "" : "hiddentextarea"} onSubmit={this.handleTitleSubmit}>
                <input id={"titlechange"} onChange={this.handleTitleChange}
                    value={this.state.tempListTitle}
                    type="text" />
                <input className="btn btn-sm btn-dark" type="submit" value="Change" />
                <button className="btn btn-sm btn-dark" onClick={this.showTitleEditor}>X</button>
            </form></div>;
    }
}



class BoardTitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardtitle: this.props.title,
            tempboardtitle: this.props.title,
            showboardtitleeditor: false
        }

        this.clickOutsideTarget = this.clickOutsideTarget.bind(this);
        this.changeBoardTitle = this.changeBoardTitle.bind(this);
        this.showBoardTitleEditor = this.showBoardTitleEditor.bind(this);
    }

    clickOutsideTarget() {

        window.addEventListener("click", ((event) => {
            if (!event.target.matches(".boardtitle")
                && this.state.showboardtitleeditor) {
                this.setState({
                    showboardtitleeditor: false
                });

                if (this.state.tempboardtitle.trim() !== "") {
                    temps.changeTitle(this.state.tempboardtitle);
                    this.setState({
                        boardtitle: temps.getTitle(),
                        tempboardtitle: temps.getTitle()
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

    render() {
        this.clickOutsideTarget();
        return (<div><p className={"whitetext " + (this.state.showboardtitleeditor ? "hiddentextarea" : "")}><b onClick={this.showBoardTitleEditor} className="actlikebutton padding5px boardtitle">{this.state.boardtitle}</b></p>
            <p className={"whitetext " + (this.state.showboardtitleeditor ? "" : "hiddentextarea")}><input id="boardtitleeditor" className="boardtitle" type="text" onChange={this.changeBoardTitle} value={this.state.tempboardtitle} /></p></div>);

    }
}

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: this.props.cardTitle,
            showTitleEditor: false,
            input: "",
            isFinished: this.props.card.finished,
            finishText: (this.props.card.finished ? "Unfinish" : "Finish")
        }
        this.showCardTitleEditor = this.showCardTitleEditor.bind(this);
        this.handleCardTitleChange = this.handleCardTitleChange.bind(this);
        this.changeCardTitle = this.changeCardTitle.bind(this);
        this.handleFinished = this.handleFinished.bind(this);
    }

    handleFinished() {
        temps.finishCard(this.props.listIndex, this.props.cardIndex);
        this.setState({
            isFinished: temps.get().lists[this.props.listIndex].cards[this.props.cardIndex].finished,
            finishText: (temps.get().lists[this.props.listIndex].cards[this.props.cardIndex].finished ? "Unfinish" : "Finish")
        });
    }

    changeCardTitle() {
        temps.changeCardTitle(this.props.listIndex, this.props.cardIndex, this.state.input);

        this.setState({
            cardTitle: temps.get().lists[this.props.listIndex].
                cards[this.props.cardIndex].title +
                " (" +
                temps.get().lists[this.props.listIndex].cards[this.props.cardIndex].id + ")",
            showTitleEditor: false
        });
    }

    handleCardTitleChange() {
        this.setState({
            input: event.target.value
        });
    }

    showCardTitleEditor() {
        this.setState({
            showTitleEditor: !this.state.showTitleEditor
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return <div className={this.state.isFinished ? "finished" : ""}>
            <div className={(this.state.showTitleEditor ? "hiddentextarea" : "")}>
                <p className={"fixwidth"} onClick={this.showCardTitleEditor}>
                    {this.state.cardTitle}</p>
                <button className="btn-info" onClick={this.handleFinished}>{this.state.finishText}</button>

            </div>
            <div className={(this.state.showTitleEditor ? "" : "hiddentextarea")}>
                <textarea className="w-100" placeholder="Enter card title..." onChange={this.handleCardTitleChange} value={this.state.input} />
                <div>
                    <button className="btn btn-sm btn-dark" onClick={this.changeCardTitle}>Change</button><button className="btn btn-sm btn-dark" onClick={this.showCardTitleEditor}>x</button>
                </div>
            </div>
        </div>
    }
}

class CardListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {

        if (this.props.listIndex !== nextProps.listIndex) {
            return true;
        }

        let cardLength = this.props.cardsInList.length;
        if (cardLength !== nextProps.cardsInList.length) {
            return true;
        }

        for (let i = 0; i < cardLength; i++) {

            if (this.props.cardsInList[i].id.localeCompare(nextProps.cardsInList[i].id) !== 0) {
                return true;
            }

            if (this.props.cardsInList[i].title.localeCompare(nextProps.cardsInList[i].title) !== 0) {
                return true;
            }

            if (this.props.cardsInList[i].finished !== nextProps.cardsInList.finished) {
                return true;
            }

        }

        if (this.props.showCardActionList[this.props.listIndex] !== undefined) {

            if (nextProps.showCardActionList[this.props.listIndex] === undefined) {
                return true;
            }

            for (let i = 0; i < this.props.showCardActionList[this.props.listIndex].length; i++) {
                if (this.props.showCardActionList[this.props.listIndex][i]
                    !== nextProps.showCardActionList[this.props.listIndex][i]) {
                    return true;
                }
            }
        }
        else {
            if (nextProps.showCardActionList[this.props.listIndex] !== undefined) {
                return true;
            }
        }

        return false;
    }

    render() {
        let arr = this.props.cardsInList.map((card, index) => {
            return <ReactBeautifulDnd.Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (<div {...provided.draggableProps}
                    {...provided.dragHandleProps} ref={provided.innerRef}>
                    <li><div className="white cardtitle">
                        <CardComponent listIndex={this.props.listIndex}
                            cardIndex={index} card={{ ...card }} cardTitle={card.title + " (" + card.id + ")"} />
                        <div>
                            <button className="btn btn-sm actionbutton" onClick={this.props.showCardActions[index]}>...</button>
                            <div className="inner">
                                <div className={"inline actionlist " +
                                    ((this.props.showAdd(this.props.showCardActionList, this.props.listIndex, index))
                                        ? "" : "hiddentextarea")}>
                                    <button className="btn actionbutton" onClick={this.props.deleteCards[index]}>Delete</button>
                                    <br />
                                    <button className="btn actionbutton" onClick={this.props.copyCards[index]}>Copy</button>
                                </div>
                            </div>
                        </div></div></li>
                </div>)}

            </ReactBeautifulDnd.Draggable>;
        });

        return <ReactBeautifulDnd.Droppable key={this.props.listId} droppableId={this.props.listId} type="task">
            {(provided) => (<div className="Container" {...provided.droppableProps}
                ref={provided.innerRef}>
                <div>
                    <ul>{arr}</ul>
                </div>
                {provided.placeholder}
            </div>)}
        </ReactBeautifulDnd.Droppable>

        return <div>{arr}</div>
    }
}

class CComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [...this.props.cards]
        }

    }

    render() {
        let arr = this.state.cards.map((card) => {
            return <div>{card.title}</div>
        })
        return <div>{arr}</div>
    }
}

/*class CardsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [...temps.getById(this.props.id).cards],
            showActionList: [],
            showAddCardList: false,
            cardTitle: ""
        }

        this.toggleAddCardList = this.toggleAddCardList.bind(this);
        this.addCard = this.addCard.bind(this);
        this.handleCardTitleChange = this.handleCardTitleChange.bind(this);
        this.copyCards = [];
        this.deleteCards = [];
        this.showCardActions = [];
        let cardLength = this.state.cards.length;

        for (let i = 0; i < cardLength; i++) {
            this.copyCards.push(this.copyCard.bind(this, i));
            this.deleteCards.push(this.deleteCard.bind(this, i));
            this.showCardActions.push(this.showCardAction.bind(this, i));
        }
    }

    toggleAddCardList() {
        this.setState({
            showAddCardList: !this.state.showAddCardList
        });
    }

    handleCardTitleChange() {
        this.setState({
            cardTitle: event.target.value
        });
    }

    showCardAction(index) {
        let newarr = [...this.state.showActionList];
        if (newarr[index]) {
            newarr[index] = !newarr[index];
        }
        else {
            newarr = [];
            newarr[index] = !newarr[index];
        }
        this.setState({
            showActionList: newarr
        });
    }

    addCard() {
        event.preventDefault();
        temps.getList(this.props.id).cards.push({
            id: "C" + temps.get().ids.cardsId,
            title: this.state.cardTitle
        });

        temps.addCardId();

        temps.get().listscards
        this.setState({
            cards: temps.getList(this.props.id).cards,
            cardTitle: ""
        });

        let cardLength = this.state.cards.length;
        this.copyCards.push(this.copyCard.bind(this, cardLength - 1));
        this.deleteCards.push(this.deleteCard.bind(this, cardLength - 1));
        this.showCardActions.push(this.showCardAction.bind(this, cardLength - 1));
    }

    deleteCard(index) {
        temps.getById(this.props.id).cards.splice(index, 1);

        this.setState({
            cards: temps.getById(this.props.id).cards,
            showActionList: []
        });
    }

    copyCard(index) {
        let tempcard = {
            id: "C" + temps.get().ids.cardsId,
            title: temps.getById(this.props.id).cards[index].title + "(1)"
        };
        temps.getById(this.props.id).cards.push(tempcard);

        temps.addCardId();

        this.setState({
            cards: temps.getById(this.props.id).cards,
            showActionList: []
        });

        let cardLength = this.state.cards.length;
        this.copyCards.push(this.copyCard.bind(this, cardLength - 1));
        this.deleteCards.push(this.deleteCard.bind(this, cardLength - 1));
        this.showCardActions.push(this.showCardAction.bind(this, cardLength - 1));
    }

    render() {
        let arr = this.state.cards.map((card, index) => {
            if (this.showCardActions[index] === undefined) {
                this.showCardActions.push(this.showCardAction.bind(this, index));
                this.copyCards.push(this.copyCard.bind(this, index));
                this.deleteCards.push(this.deleteCard.bind(this, index));
            }
            return <ReactBeautifulDnd.Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (<div {...provided.draggableProps}
                    {...provided.dragHandleProps} ref={provided.innerRef}>
                    <li><div className="white cardtitle"><p className="fixwidth">{card.title + " (" + card.id + ")"}</p><div>
                        <button className="btn btn-sm actionbutton" onClick={this.showCardActions[index]}>...</button>
                        <div className="inner"><div className={"inline actionlist " + (this.state.showActionList[index] ? "" : "hiddentextarea")}>
                            <button className="btn actionbutton" onClick={this.deleteCards[index]}>Delete</button>
                            <br />
                            <button className="btn actionbutton" onClick={this.copyCards[index]}>Copy</button>
                        </div>
                        </div>
                    </div></div></li>
                </div>)}

            </ReactBeautifulDnd.Draggable>;
        });

        return <div><ReactBeautifulDnd.Droppable key={this.props.id} droppableId={this.props.id} type="task">
            {(provided) => (<div className="Container" {...provided.droppableProps}
                ref={provided.innerRef}>
                <div>
                    <ul>{arr}</ul>
                </div>
                {provided.placeholder}
            </div>)}
        </ReactBeautifulDnd.Droppable>
            <button className={"btn btn-sm btn-link " + (this.state.showAddCardList ? "hiddentextarea" : "")}
                type="button" onClick={this.toggleAddCardList}>Add another card</button>
            <div className={(this.state.showAddCardList ? "" : "hiddentextarea ")}>
                <textarea className="w-100" placeholder="Enter a title for this card..." onChange={this.handleCardTitleChange} value={this.state.cardTitle} />
                <div className="inlinetable just">
                    <button className="btn btn-sm btn-success" onClick={this.addCard}>Add card</button><button className="btn btn-sm btn-dark" onClick={this.toggleAddCardList}>x</button><button className="btn btn-sm btn-dark">...</button>
                </div>
            </div>
        </div>;
    }
}
*/

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
        // this.state =
        //     {
        //         lists: [{
        //             id: "L0",
        //             title: "Stuff to try (this is a list)",
        //             cards: [{
        //                 id: "C0", title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        //                 displayaction: false
        //             }, { id: "C1", title: "Familiarize yourself with git + github", displayaction: false }]
        //         }, {
        //             id: "L1",
        //             title: "Another Listttttttttttttttttttttttttttttttttttttttttttttttttttt",
        //             cards: [{ id: "C3", title: "X", displayaction: false }, { id: "C4", title: "Y", displayaction: false }, { id: "C5", title: "Z", displayaction: false }]
        //         }, {
        //             id: "L2",
        //             title: "Bonus Considerations",
        //             cards: [{ id: "C6", title: "Test Units", displayaction: false },
        //             { id: "C7", title: "Make it mobile responsive", displayaction: false },
        //             {
        //                 id: "C8",
        //                 title: "Create a bookself for the users that stores bookmarked books",
        //                 displayaction: false
        //             },
        //             {
        //                 id: "C9",
        //                 title: "On search input, display the last 10 search queries.",
        //                 displayaction: false
        //             }]
        //         }],
        //         input: "",
        //         show: false,
        //         cardshows: [],
        //         displays: [],
        //         actionlistdisplays: [],
        //         actioncarddisplays: [],
        //         titleinput: "",
        //         cardinput: ""
        //     }
        // this.temptext = "";
        // this.listId = 3;
        // this.cardsId = 10;
        // let tempcardsid = this.cardsId;
        // this.clickOutsideTarget = this.clickOutsideTarget.bind(this);
        // this.changeBoardTitle = this.changeBoardTitle.bind(this);
        // this.showBoardTitleEditor = this.showBoardTitleEditor.bind(this);
        // this.cardList = this.cardList.bind(this);
        // this.listOfList = this.listOfList.bind(this);
        // this.addList = this.addList.bind(this);
        // this.displayForm = this.displayForm.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.hideTitleEditor = this.hideTitleEditor.bind(this);
        // this.ListComonpent = this.ListComonpent.bind(this);
        // this.handleCardChange = this.handleCardChange.bind(this);
        // this.hideCardMenu = this.displayCardMenu.bind(this);
        // this.onDragEnd = this.onDragEnd.bind(this);
        // //Bind methods to different lists
        // this.edits = [];
        // this.shows = [];
        // this.addcards = [];
        // this.copycards = [];
        // this.deletecards = [];
        // this.displayCardMenus = [];
        // this.displayActionLists = [];
        // this.listDisplayActionCards = [];
        // this.deletelists = [];
        // this.copylists = [];
        // let listlength = this.state.lists.length;
        // for (let i = 0; i < tempcardsid; i++) {
        //     this.listDisplayActionCards.push(this.displayActionCard.bind(this, i));
        // }

        // for (let i = 0; i < listlength; i++) {
        //     //I am trying to bind the index of lists to method
        //     //to make sure each changeListTitle and showTitleEditor
        //     //method work for different lists
        //     this.edits.push(this.changeListTitle.bind(this, i));
        //     this.shows.push(this.showTitleEditor.bind(this, i));
        //     this.displayCardMenus.push(this.displayCardMenu.bind(this, i));
        //     this.displayActionLists.push(this.displayActionList.bind(this, i));
        //     this.addcards.push(this.addcard.bind(this, i));
        //     this.deletelists.push(this.deleteList.bind(this, i));
        //     this.copylists.push(this.copyList.bind(this, i));
        //     let cardlength = this.state.lists[i].cards.length;
        //     let temparr = [];
        //     let temparr2 = [];
        //     for (let j = 0; j < cardlength; j++) {
        //         temparr.push(this.copyCard.bind(this, i, j));
        //         temparr2.push(this.deleteCard.bind(this, i, j));
        //     }
        //     this.copycards.push(temparr);
        //     this.deletecards.push(temparr2);

        // }
    }

    // clickOutsideTarget() {
    //     window.addEventListener("click", (event) => {
    //         if (!event.target.matches(".actionbutton")
    //             && this.state.actionlistdisplays.includes(true)) {
    //             this.setState({
    //                 actionlistdisplays: this.falseCardShowsList(this.state.actionlistdisplays.length),
    //             });
    //         }

    //     });
    // }

    // falseCardShowsList(length) {

    //     let newcardshows = [];
    //     for (let i = 0; i < length; i++) {
    //         newcardshows[i] = false;
    //     }
    //     return newcardshows;
    // }

    // hideCardMenu() {

    //     this.setState({
    //         cardshows: this.falseCardShowsList(this.state.cardshows.length),
    //         cardinput: ""
    //     });
    // }

    // displayCardMenu(id) {
    //     let newcardshows = this.falseCardShowsList(this.state.cardshows.length);

    //     newcardshows[id] = true;

    //     this.setState({
    //         cardshows: newcardshows,
    //         cardinput: ""
    //     });

    //     window.setTimeout(() => document.getElementById("addcardid" + id).focus(), 0);
    // }

    // displayActionCard(id) {
    //     this.setState(
    //         {
    //             actioncarddisplays: this.makeListTrue(this.state.actioncarddisplays[id], id, this.state.actioncarddisplays)
    //         });
    // }

    // makeListTrue(condition, id, length) {
    //     let newarr = [];
    //     for (let i = 0; i < length; i++) {
    //         newarr[i] = false;
    //     }

    //     if (!condition) {
    //         newarr[id] = true;
    //     }
    //     return newarr;
    // }

    // displayActionList(id) {
    //     this.setState({
    //         actionlistdisplays: this.makeListTrue(this.state.actionlistdisplays[id], id
    //             , this.state.actionlistdisplays.length)
    //     });
    // }

    // ListComonpent(cardlist) {
    //     return <div>
    //         {cardlist}
    //     </div>
    // }

    // cardList(cards = [], id) {
    //     //list the cards
    //     if (typeof cards === 'object' && typeof cards.map === 'function') {

    //         let arr = cards.map((card, index) => {
    //             let realid = parseInt(card.id.substr(1));
    //             return <ReactBeautifulDnd.Draggable key={card.id} draggableId={card.id} index={index}>
    //                 {(provided) => (<div {...provided.draggableProps}
    //                     {...provided.dragHandleProps} ref={provided.innerRef}>
    //                     <li><div className="white cardtitle"><p className="fixwidth">{card.title + " (" + card.id + ")"}</p><div>
    //                         <button className="btn btn-sm actionbutton" onClick={""}>...</button>
    //                         <div className={"inline actionlist " + ("" ? "WPWWP" : "hiddentextarea")}>
    //                             <button className="btn actionbutton" onClick={""}>Delete</button>
    //                             <br />
    //                             <button className="btn actionbutton" onClick={""}>Copy</button>
    //                         </div>
    //                     </div></div></li>
    //                 </div>)}

    //             </ReactBeautifulDnd.Draggable>;
    //         });
    //         return <ul>{arr}</ul>;
    //     }
    //     return [];
    // }

    // addcard(id) {

    //     event.preventDefault();
    //     if (this.state.cardinput.trim() !== "") {
    //         let newlist = [...this.state.lists];
    //         newlist[id].cards.push({ id: "C" + this.cardsId, title: this.state.cardinput });
    //         this.setState({
    //             id: newlist[id],
    //             cardinput: "",
    //             lists: newlist
    //         });
    //         this.cardsId++;
    //         this.listDisplayActionCards.push(this.displayActionCard.bind(this, this.cardsId - 1));
    //         this.copycards[id].push(this.copyCard.bind(this, id, newlist[id].cards.length - 1));
    //         this.deletecards[id].push(this.deleteCard.bind(this, id, newlist[id].cards.length - 1));
    //     }

    // }

    // copyCard(listindex, cardindex) {
    //     let tempcards = [...this.state.lists];
    //     tempcards[listindex].cards.push({
    //         id: "C" + this.cardsId,
    //         title: tempcards[listindex].cards[cardindex].title,
    //         displayaction: tempcards[listindex].cards[cardindex].displayaction
    //     });
    //     this.setState({
    //         lists: tempcards
    //     });
    //     this.cardsId++;
    //     this.listDisplayActionCards.push(this.displayActionCard.bind(this, this.cardsId - 1));
    //     this.copycards[listindex].push(this.copyCard.bind(this, listindex, tempcards[listindex].cards.length - 1));
    // }

    // deleteCard(listindex, cardindex) {
    //     let templist = [...this.state.lists];
    //     templist[listindex].cards.splice(cardindex, 1);
    //     this.setState({
    //         lists: templist
    //     });
    // }

    // showTitleEditor(id) {
    //     //show the title editor when clicked and make sure other title editor is hidden
    //     let newdisplay = [...this.state.displays].map((item) => {
    //         return false;
    //     });

    //     newdisplay[id] = true;

    //     this.setState({
    //         displays: newdisplay,
    //         titleinput: ""
    //     });
    //     window.setTimeout(function () {
    //         document.getElementById("titlechange" + id).focus();
    //     }, 0);
    // }

    // hideTitleEditor() {
    //     this.setState({
    //         displays: [...this.state.displays].map((item) => {
    //             return false;
    //         }),
    //         titleinput: ""
    //     });
    // }

    // handleTitleChange(event) {

    //     this.setState({
    //         titleinput: event.target.value
    //     });

    // }

    // handleCardChange(event) {
    //     this.setState({
    //         cardinput: event.target.value
    //     });
    // }

    // handleChange(event) {
    //     this.setState({
    //         input: event.target.value
    //     });
    // }

    // changeListTitle(id) {
    //     event.preventDefault();
    //     if (this.state.titleinput.trim() !== "") {
    //         let newlist = [...this.state.lists];
    //         let newdisplay = [...this.state.displays];
    //         let newcards = [...newlist[id].cards];
    //         newlist[id] = {
    //             id: newlist[id].id,
    //             title: this.state.titleinput,
    //             cards: newcards
    //         };
    //         newdisplay[id] = false;
    //         this.setState({ lists: newlist, displays: newdisplay });
    //     }

    // }

    // displayForm() {
    //     this.setState((state) => ({
    //         show: !state.show
    //     }));
    //     window.setTimeout(() => document.getElementById("addlistid").focus(), 0);

    // }

    // swapArray2(array, source, destination) {
    //     array.splice(destination, 0, array[source]);
    //     array.splice(source + 1, 1);
    //     return array;
    // }

    // swapArray(array, source, destination) {
    //     //reorder position when the destination index is greater than source index
    //     array.splice(destination + 1, 0, array[source]);
    //     array.splice(source, 1);
    //     return array;
    // }

    // findindexById(array, id) {
    //     let length = array.length;
    //     for (let i = 0; i < length; i++) {
    //         if (array[i].id === id) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }

    // onDragEnd = (result) => {
    //     if (!result.destination) {
    //         return;
    //     }

    //     if (result.type === "column") {

    //         //let newlist = [...temps.get().lists];
    //         let target = { ...temps.get().lists[result.source.index] };
    //         temps.get().lists.splice(result.source.index, 1);
    //         temps.get().lists.splice(result.destination.index, 0, target);
    //         return;
    //     }
    //     else if (result.type === "task") {
    //         if (result.source.droppableId === result.destination.droppableId) {

    //             return;
    //         }
    //     }

    //     let newlist = [...this.state.lists];
    //     if (result.source.droppableId === result.destination.droppableId) {
    //         if (result.source.index < result.destination.index) {
    //             newlist[this.findindexById(
    //                 newlist, result.source.droppableId)].cards =
    //                 this.swapArray(newlist[this.findindexById(
    //                     newlist, result.source.droppableId)].cards,
    //                     result.source.index, result.destination.index);

    //             this.setState(
    //                 {
    //                     lists: newlist
    //                 }
    //             );
    //         }
    //         else if (result.source.index > result.destination.index) {
    //             newlist[this.findindexById(
    //                 newlist, result.source.droppableId)].cards =
    //                 this.swapArray2(newlist[this.findindexById(
    //                     newlist, result.source.droppableId)].cards,
    //                     result.source.index, result.destination.index);

    //             this.setState(
    //                 {
    //                     lists: newlist
    //                 }
    //             );
    //         }
    //     }
    //     else {
    //         newlist[this.findindexById(
    //             newlist, result.destination.droppableId)].cards.splice(result.destination.index, 0,
    //                 newlist[this.findindexById(
    //                     newlist, result.source.droppableId)].cards[result.source.index]);
    //         newlist[this.findindexById(
    //             newlist, result.source.droppableId)].cards.splice(result.source.index, 1);
    //         this.setState(
    //             {
    //                 lists: newlist
    //             }
    //         );
    //     }
    // }

    // addList() {
    //     event.preventDefault();
    //     if (this.state.input.trim() !== "") {
    //         let newlist = [...this.state.lists];
    //         let realid = "L" + this.listId;
    //         newlist.push(realid = {
    //             id: "L" + this.listId,
    //             title: this.state.input, cards: []
    //         });
    //         this.setState({
    //             lists: newlist,
    //             input: ""
    //         });
    //         this.listId++;
    //         //Bind methods to new list again
    //         this.edits.push(this.changeListTitle.bind(this, newlist.length - 1));
    //         this.shows.push(this.showTitleEditor.bind(this, newlist.length - 1));
    //         this.displayCardMenus.push(this.displayCardMenu.bind(this, newlist.length - 1));
    //         this.addcards.push(this.addcard.bind(this, newlist.length - 1));
    //         this.deletelists.push(this.deleteList.bind(this, newlist.length - 1));
    //         this.displayActionLists.push(this.displayActionList.bind(this, newlist.length - 1));
    //         this.copylists.push(this.copyList.bind(this, newlist.length - 1));
    //         this.copycards.push([]);
    //         this.deletecards.push([]);
    //     }

    // }

    // deleteList(id) {
    //     let temp = [...this.state.lists];
    //     temp.splice(id, 1);
    //     this.setState({
    //         lists: temp
    //     });
    // }

    // copyList(id) {
    //     let newlist = [...this.state.lists];
    //     let newarr = newlist[id].cards.map((card) => {
    //         let obj = {
    //             id: "C" + this.cardsId,
    //             title: card.title
    //         };
    //         this.listDisplayActionCards.push(this.displayActionCard.bind(this, this.cardsId));
    //         this.cardsId++;
    //         return obj;
    //     })

    //     let templist = {
    //         id: "L" + this.listId,
    //         title: newlist[id].title,
    //         cards: newarr
    //     };

    //     newlist.push(templist);
    //     this.setState({
    //         lists: newlist
    //     });
    //     this.listId++;
    //     this.edits.push(this.changeListTitle.bind(this, newlist.length - 1));
    //     this.shows.push(this.showTitleEditor.bind(this, newlist.length - 1));
    //     this.displayCardMenus.push(this.displayCardMenu.bind(this, newlist.length - 1));
    //     this.addcards.push(this.addcard.bind(this, newlist.length - 1));
    //     this.deletelists.push(this.deleteList.bind(this, newlist.length - 1));
    //     this.copylists.push(this.copyList.bind(this, newlist.length - 1));
    //     this.displayActionLists.push(this.displayActionList.bind(this, newlist.length - 1));
    //     let cardlength = this.state.lists[id].cards.length;
    //     let temparr1 = [];
    //     let temparr2 = [];
    //     for (let i = 0; i < cardlength; i++) {
    //         temparr1.push(this.deleteCard.bind(this, newlist.length - 1, i));
    //         temparr2.push(this.copyCard.bind(this, newlist.length - 1, i));
    //     }
    //     this.deletecards.push(temparr1);
    //     this.copycards.push(temparr2);
    // }

    // listOfList() {
    //     let arr = this.state.lists.map((list, index) => {
    //         return <ReactBeautifulDnd.Draggable key={list.id + "dropper"} draggableId={list.id} index={index}>
    //             {(provided) => (
    //                 <div className="inlinetable" {...provided.draggableProps} ref={provided.innerRef}>
    //                     <div key={list.id} className="divclass "><div className="listtitle"><p {...provided.dragHandleProps}
    //                         className={this.state.displays[index] ? "hiddentextarea" : ""}
    //                         onClick={this.shows[index]}><b>{list.title + " (" + list.id + ")"}</b></p>
    //                         <form className={this.state.displays[index] ? "" : "hiddentextarea"}
    //                             onSubmit={this.edits[index]}>
    //                             <input id={"titlechange" + index} onChange={this.handleTitleChange}
    //                                 value={this.state.titleinput}
    //                                 type="text" />
    //                             <input className="btn btn-sm btn-dark" type="submit" value="Change" />
    //                             <button className="btn btn-sm btn-dark" onClick={this.hideTitleEditor}>X</button>
    //                         </form>
    //                         <div><button className="btn btn-sm actionbutton" onClick={this.displayActionLists[index]}>...</button>

    //                             <div className={"actionlist " +
    //                                 (this.state.actionlistdisplays[index] ? "" : "hiddentextarea")}>

    //                                 <button className="btn actionbutton" onClick={this.deletelists[index]}>Delete</button>
    //                                 <br />
    //                                 <button className="btn actionbutton" onClick={this.copylists[index]}>Copy</button>
    //                             </div></div>

    //                     </div>
    //                         <ReactBeautifulDnd.Droppable key={list.id} droppableId={list.id} type="task">

    //                             {(provided) => (<div className="Container" {...provided.droppableProps}
    //                                 ref={provided.innerRef}>
    //                                 {this.ListComonpent(this.cardList(list.cards, index))
    //                                 }
    //                                 {provided.placeholder}
    //                             </div>)}
    //                         </ReactBeautifulDnd.Droppable>
    //                         <div className={this.state.cardshows[index] ? "" : "hiddentextarea"}>
    //                             <form onSubmit={this.addcards[index]}>
    //                                 <textarea maxLength={250} id={"addcardid" + index} className="w-100" value={this.state.cardinput}
    //                                     onChange={this.handleCardChange}
    //                                     placeholder="Enter a title for this card" />
    //                                 <br />
    //                                 <input className="btn btn-sm btn-primary" type="submit" value="Add card" />
    //                                 <button onClick={this.hideCardMenu}>X</button>
    //                             </form>
    //                         </div>
    //                     </div>
    //                     {/*<ListTitleComponent id={list.id} />*/}</div>)}</ReactBeautifulDnd.Draggable>
    //     });
    //     return arr;
    // }

    // changeBoardTitle() {
    //     this.setState(
    //         {
    //             boardtitle: event.target.value
    //         }
    //     );
    // }

    // showBoardTitleEditor() {
    //     this.setState(
    //         {
    //             showboardtitleeditor: true
    //         }
    //     );
    //     window.setTimeout(() => document.getElementById("boardtitleeditor").select(), 0);
    // }

    render() {
        return <div className="h-100">
            <BoardTitleComponent title={temps.getTitle()} />
            <div className="inlinetable">
                <ListsComponent />
            </div>
        </div>;
    }
}

ReactDOM.render(<BoardComponent />, document.getElementById("board"));
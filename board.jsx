class ListComponent extends React.Component {
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

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                lists: [{
                    title: "Stuff to try (this is a list)"
                },
                {
                    title: "Stuff to try (this is a list)"
                }],
                input: "",
                show: false,
                displays: [],
                titleinput: "",
                titleinputs:[]
            }
        this.listOfList = this.listOfList.bind(this);
        this.addList = this.addList.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.edits = [];
        this.shows = [];
        let listlength = this.state.lists.length;
        for (let i = 0; i < listlength; i++) {
            //I am trying to bind the index of lists to method
            //to make sure each changeListTitle and showTitleEditor method work for different lists
            this.edits.push(this.changeListTitle.bind(this, i));
            this.shows.push(this.showTitleEditor.bind(this, i));
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
            titleinput:""
         });
    }

    handleTitleChange(event) {
        this.setState({
            titleinput: event.target.value
        });
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    changeListTitle(id) {
        event.preventDefault();
        if (this.state.titleinput.trim() !== "")
        {
            let newlist = [...this.state.lists];
            let newdisplay = [...this.state.displays];
            newlist[id] = {
            title: this.state.titleinput
        };
        newdisplay[id] = false;
        this.setState({ lists: newlist, displays: newdisplay });
        }
        
    }

    hideForm() {
        this.setState({
            show: false
        });
    }

    displayForm() {
        this.setState({
            show: true
        });
    }

    addList() {
        event.preventDefault();
        if (this.state.input.trim() !== "") {
            let newlist = [...this.state.lists];
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

    listOfList() {
        let arr = this.state.lists.map((list, index) => {
            return <div className="divclass" id="1d"><strong
                className={this.state.displays[index] ? "hiddentextarea" : ""}
                onClick={this.shows[index]}>{list.title}</strong>
                <form className={this.state.displays[index] ? "" : "hiddentextarea"} onSubmit={this.edits[index]}>
                    <input onChange={this.handleTitleChange} value={this.state.titleinput} type="text" required />
                    <input type="submit" value="Change list title" />
                </form>
                <ListComponent list={list} /></div>
        });
        return arr;
    }

    render() {
        return <div>{this.listOfList()}<div className="divclass">
            <button className={this.state.show ? "hiddentextarea" : ""}
                onClick={this.displayForm}>Add another List</button>
            <form id="on0" className={"small " + (this.state.show ? "" : "hiddentextarea")} onSubmit={this.addList}>
                <p>
                    <input onChange={this.handleChange} value={this.state.input} type="text" required />
                </p>
                <p>
                    <input type="submit" value="Add list" />
                    <button form="" onClick={this.hideForm}>X</button>
                </p>
            </form>
        </div>
        </div>;
    }
}

ReactDOM.render(<BoardComponent />, document.getElementById("board"));

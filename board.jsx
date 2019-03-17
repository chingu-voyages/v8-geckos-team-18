
let card = {
    content: "",
    description: "",
    comment: ""
}

let list = {
    title: "",
    cards: []
}

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{ title: "BD" }],
            show: false,
            input: ""
        }
        this.cardList = this.cardList.bind(this);
        this.addcard = this.addcard.bind(this);
        this.displayMenu = this.displayMenu.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    displayMenu() {
        this.setState({ show: true });
    }

    addcard(event) {
        let newlist = [...this.state.cards];
        newlist.push({ title: this.state.input });
        this.setState({
            cards: newlist,
            show: false
        });
        event.preventDefault();
    }

    cardList() {
        let arr = this.state.cards.map((card, item) => {
            return <li key={item + card.title}><div className="white">{card.title}</div></li>;
        });
        return <ul id="dv">{arr}</ul>;
    }

    render() {
        return <div className="divclass" id="1d">
            <strong>{this.props.list.title}</strong>
            {this.cardList()}
            <div className={this.state.show ? "f" : "hiddentextarea"}>
                <form onSubmit={this.addcard}>
                    <p>
                        <textarea onChange={this.handleChange} value={this.state.input} required></textarea>
                    </p>
                    <p><input type="submit" value="Add card" /><button onClick="">X</button></p>
                </form>
            </div>
            <button onClick={this.displayMenu} className="">Add another card</button>
        </div>
    }
}

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                lists: [{
                    title: "Stuff to try (this is a list)",
                    cards: [{ title: "Add all the cards and lists you need" }]
                },
                {
                    title: "Stuff to try (this is a list)",
                    cards: [{ title: "Add all the cards and lists you need" }]
                }]
            }
        this.listOfList = this.listOfList.bind(this);
    }

    listOfList() {
        let arr = this.state.lists.map((list, index) => {
            return <ListComponent list={list} />
        });
        return arr;
    }

    render() {
        return <div>{this.listOfList()}<div className="divclass">Add another list</div></div>;
    }
}

ReactDOM.render(<BoardComponent />, document.getElementById("board"));
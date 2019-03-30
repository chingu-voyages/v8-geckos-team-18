"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var BoardComponent=function(t){function e(t){_classCallCheck(this,e);var i=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.onDragEnd=function(t){var e=[].concat(_toConsumableArray(i.state.lists));t.source.droppableId===t.destination.droppableId?(console.log("Call"),t.source.index<t.destination.index?(e[t.source.droppableId].cards=i.swapArray(e[t.source.droppableId].cards,t.source.index,t.destination.index),i.setState({lists:e})):t.source.index>t.destination.index&&(e[t.source.droppableId].cards=i.swapArray2(e[t.source.droppableId].cards,t.source.index,t.destination.index),i.setState({lists:e}))):(e[t.destination.droppableId].cards.splice(t.destination.index,0,e[t.source.droppableId].cards[t.source.index]),e[t.source.droppableId].cards.splice(t.source.index,1),i.setState({lists:e}))},i.state={lists:[{id:"L0",title:"Stuff to try (this is a list)",cards:[{id:"C0",title:"A"},{id:"C1",title:"B"}]},{id:"L1",title:"Another List",cards:[{id:"C2",title:"X"},{id:"C3",title:"Y"},{id:"C4",title:"Z"}]}],input:"",show:!1,cardshows:[],displays:[],actionlistdisplays:[],titleinput:"",cardinput:""},i.listId=2,i.cardsId=5,i.clickOutsideTarget=i.clickOutsideTarget.bind(i),i.cardList=i.cardList.bind(i),i.listOfList=i.listOfList.bind(i),i.addList=i.addList.bind(i),i.displayForm=i.displayForm.bind(i),i.handleChange=i.handleChange.bind(i),i.handleTitleChange=i.handleTitleChange.bind(i),i.hideTitleEditor=i.hideTitleEditor.bind(i),i.ListComonpent=i.ListComonpent.bind(i),i.handleCardChange=i.handleCardChange.bind(i),i.hideCardMenu=i.displayCardMenu.bind(i),i.onDragEnd=i.onDragEnd.bind(i),i.edits=[],i.shows=[],i.addcards=[],i.displayCardMenus=[],i.displayActionLists=[],i.deletelists=[],i.copylists=[];for(var a=i.state.lists.length,s=0;s<a;s++)i.edits.push(i.changeListTitle.bind(i,s)),i.shows.push(i.showTitleEditor.bind(i,s)),i.displayCardMenus.push(i.displayCardMenu.bind(i,s)),i.displayActionLists.push(i.displayActionList.bind(i,s)),i.addcards.push(i.addcard.bind(i,s)),i.deletelists.push(i.deleteList.bind(i,s)),i.copylists.push(i.copyList.bind(i,s));return i}return _inherits(e,React.Component),_createClass(e,[{key:"clickOutsideTarget",value:function(){var t=this;window.onclick=function(e){e.target.matches(".actionbutton")||t.setState({actionlistdisplays:t.falseShowActionList(t.state.actionlistdisplays.length)})}}},{key:"componentDidMount",value:function(){}},{key:"falseCardShowsList",value:function(t){for(var e=[],i=0;i<t;i++)e[i]=!1;return e}},{key:"falseShowActionList",value:function(t){for(var e=[],i=0;i<t;i++)e[i]=!1;return e}},{key:"hideCardMenu",value:function(){this.setState({cardshows:this.falseCardShowsList(this.state.cardshows.length),cardinput:""})}},{key:"displayCardMenu",value:function(t){var e=this.falseCardShowsList(this.state.cardshows.length);e[t]=!0,this.setState({cardshows:e,cardinput:""}),window.setTimeout(function(){return document.getElementById("addcardid"+t).focus()},0)}},{key:"displayActionList",value:function(t){var e=this.falseShowActionList(this.state.actionlistdisplays.length);this.state.actionlistdisplays[t]||(e[t]=!0),this.setState({actionlistdisplays:e})}},{key:"ListComonpent",value:function(t){return React.createElement("div",null,t)}},{key:"cardList",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if("object"===(void 0===t?"undefined":_typeof(t))&&"function"==typeof t.map){var e=t.map(function(t,e){return React.createElement(ReactBeautifulDnd.Draggable,{key:t.id,draggableId:t.id,index:e},function(e){return React.createElement("div",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),React.createElement("li",null,React.createElement("div",{className:"white cardtitle"},t.title+"("+t.id+")",React.createElement("div",null,React.createElement("button",null,"...")))))})});return React.createElement("ul",null,e)}return[]}},{key:"addcard",value:function(t){if(event.preventDefault(),""!==this.state.cardinput.trim()){var e=[].concat(_toConsumableArray(this.state.lists));e[t].cards.push({id:"C"+this.cardsId,title:this.state.cardinput}),this.setState({id:e[t],cardinput:"",lists:e}),this.cardsId++}}},{key:"showTitleEditor",value:function(t){var e=[].concat(_toConsumableArray(this.state.displays)).map(function(t){return!1});e[t]=!0,this.setState({displays:e,titleinput:""}),window.setTimeout(function(){document.getElementById("titlechange"+t).focus()},0)}},{key:"hideTitleEditor",value:function(){this.setState({displays:[].concat(_toConsumableArray(this.state.displays)).map(function(t){return!1}),titleinput:""})}},{key:"handleTitleChange",value:function(t){this.setState({titleinput:t.target.value})}},{key:"handleCardChange",value:function(t){this.setState({cardinput:t.target.value})}},{key:"handleChange",value:function(t){this.setState({input:t.target.value})}},{key:"changeListTitle",value:function(t){if(event.preventDefault(),""!==this.state.titleinput.trim()){var e=[].concat(_toConsumableArray(this.state.lists)),i=[].concat(_toConsumableArray(this.state.displays)),a=[].concat(_toConsumableArray(e[t].cards));e[t]={id:e[t].id,title:this.state.titleinput,cards:a},i[t]=!1,this.setState({lists:e,displays:i})}}},{key:"displayForm",value:function(){this.setState(function(t){return{show:!t.show}}),window.setTimeout(function(){return document.getElementById("addlistid").focus()},0)}},{key:"swapArray2",value:function(t,e,i){var a=t.slice(0,i),s=t.slice(i,e),n=t.slice(e+1,t.length);return[].concat(_toConsumableArray(a),[t[e]],_toConsumableArray(s),_toConsumableArray(n))}},{key:"swapArray",value:function(t,e,i){var a=t.slice(0,e),s=t.slice(e+1,i+1),n=t.slice(i+1,t.length);return[].concat(_toConsumableArray(a),_toConsumableArray(s),[t[e]],_toConsumableArray(n))}},{key:"addList",value:function(){if(event.preventDefault(),""!==this.state.input.trim()){var t=[].concat(_toConsumableArray(this.state.lists));this.listId;t.push({id:"L"+this.listId,title:this.state.input,cards:[]}),this.setState({lists:t,input:""}),this.listId++,this.edits.push(this.changeListTitle.bind(this,t.length-1)),this.shows.push(this.showTitleEditor.bind(this,t.length-1)),this.displayCardMenus.push(this.displayCardMenu.bind(this,t.length-1)),this.addcards.push(this.addcard.bind(this,t.length-1)),this.deletelists.push(this.deleteList.bind(this,t.length-1)),this.displayActionLists.push(this.displayActionList.bind(this,t.length-1))}}},{key:"deleteList",value:function(t){var e=[].concat(_toConsumableArray(this.state.lists));e.splice(t,1),this.setState({lists:e})}},{key:"copyList",value:function(t){var e=this,i=[].concat(_toConsumableArray(this.state.lists)),a=i[t].cards.map(function(t){var i={id:"C"+e.cardsId,title:t.title};return e.cardsId++,i}),s={id:"L"+this.listId,title:i[t].title,cards:a};i.push(s),this.setState({lists:i}),this.listId++,this.edits.push(this.changeListTitle.bind(this,i.length-1)),this.shows.push(this.showTitleEditor.bind(this,i.length-1)),this.displayCardMenus.push(this.displayCardMenu.bind(this,i.length-1)),this.addcards.push(this.addcard.bind(this,i.length-1)),this.deletelists.push(this.deleteList.bind(this,i.length-1)),this.copylists.push(this.copyList.bind(this,i.length-1)),this.displayActionLists.push(this.displayActionList.bind(this,i.length-1))}},{key:"listOfList",value:function(){var t=this;return this.state.lists.map(function(e,i){return React.createElement("div",{key:e.id,className:"divclass"},React.createElement("div",{className:"listtitle"},React.createElement("h6",{className:t.state.displays[i]?"hiddentextarea":"",onClick:t.shows[i]},e.title+"("+e.id+")"),React.createElement("form",{className:t.state.displays[i]?"":"hiddentextarea",onSubmit:t.edits[i]},React.createElement("input",{id:"titlechange"+i,onChange:t.handleTitleChange,value:t.state.titleinput,type:"text"}),React.createElement("input",{type:"submit",value:"Change list title"}),React.createElement("button",{onClick:t.hideTitleEditor},"X")),React.createElement("div",null,React.createElement("button",{className:"actionbutton",onClick:t.displayActionLists[i]},"..."),React.createElement("div",{className:"actionlist "+(t.state.actionlistdisplays[i]?"f":"hiddentextarea")},React.createElement("button",{className:"actionbutton",onClick:t.deletelists[i]},"Delete List"),React.createElement("br",null),React.createElement("button",{className:"actionbutton",onClick:t.copylists[i]},"Copy List")))),React.createElement(ReactBeautifulDnd.Droppable,{key:e.id,droppableId:i.toString()},function(a){return React.createElement("div",Object.assign({className:"Container"},a.droppableProps,{ref:a.innerRef}),t.ListComonpent(t.cardList(e.cards),t.state.cardshows[i],t.addcards[i],t.state.cardinput,t.displayCardMenus[i]),a.placeholder)}),React.createElement("div",{className:t.state.cardshows[i]?"":"hiddentextarea"},React.createElement("form",{onSubmit:t.addcards[i]},React.createElement("textarea",{id:"addcardid"+i,className:"w-100",value:t.state.cardinput,onChange:t.handleCardChange,placeholder:"Enter a title for this card"}),React.createElement("br",null),"                            ",React.createElement("input",{type:"submit",value:"Add card"}),React.createElement("button",{onClick:t.hideCardMenu},"X"))),React.createElement("button",{onClick:t.displayCardMenus[i],className:t.state.cardshows[i]?"hiddentextarea":""},"Add another card"))})}},{key:"render",value:function(){return this.clickOutsideTarget(),React.createElement(ReactBeautifulDnd.DragDropContext,{onDragEnd:this.onDragEnd},React.createElement("div",null,this.listOfList(),React.createElement("div",{className:"divclass"},React.createElement("button",{className:this.state.show?"hiddentextarea":"",onClick:this.displayForm},"Add another List"),React.createElement("form",{id:"on0",className:"small "+(this.state.show?"":"hiddentextarea"),onSubmit:this.addList},React.createElement("p",null,React.createElement("input",{id:"addlistid",onChange:this.handleChange,value:this.state.input,type:"text"})),React.createElement("p",null,React.createElement("input",{type:"submit",value:"Add list"}),React.createElement("button",{onClick:this.displayForm},"X"))))))}}]),e}();ReactDOM.render(React.createElement(BoardComponent,null),document.getElementById("board"));

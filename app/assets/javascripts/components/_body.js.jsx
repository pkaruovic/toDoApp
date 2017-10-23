
var Body = React.createClass({

	getInitialState(){
		return { 
			items: [],
			messages: []
			}
	},

	handleUpdate(id, item){
		fetch('/items/'+id, {
  			method: 'PUT',
  			body: item
		}).then((res) => this.getHeader(res)).then((msg)=>this.handleSubmit(msg))
	},

	handleDelete(id){
		fetch("/items/"+id,
		{
			method: "DELETE"
		}).then((res) => this.getHeader(res)).then((msg)=>this.setState({messages: msg})).then(this.removeItem(id))
	},

	handleSubmit(msg){
		this.fetchData();
		this.setState({messages: msg});
	},

	getHeader(res){
		var msg = res.headers.get('X-FlashMessages');
		msg = JSON.parse(msg);
		message_array = new Array();
		count = 0
    	for (var key in msg) {
      		message_array[count] = new Array();
      		message_array[count][0] = key;
      		message_array[count][1] = msg[key];
      	count += 1;
   		}
		return message_array;
	},


	removeItem(id){
		var newItems = this.state.items.filter((item) => {
			return item.id != id;
		});

		this.setState({items: newItems });
	},

	componentDidMount(){
		this.fetchData();
	},

	fetchData(){
		fetch("http://localhost:3000/items.json", {
			cache: 'no-store'
		}).then((res) => res.json()).then(json => {
        this.setState({
          items: json
        	});
    	});
	},

	render(){
		return(
			<div>
				<FlashMessages  messages={this.state.messages}/>
				<NewItem getHeader={this.getHeader} handleSubmit={this.handleSubmit}/>
				<AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
			</div>
			)
	}

});
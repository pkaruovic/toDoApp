
var AllItems = React.createClass({

	onUpdate(id, item){
		this.props.onUpdate(id, item);
	},

	render(){
		var items = this.props.items.map((item) => {
			return(
			<div key = {item.id}>
				<Item item={item} handleDelete={this.props.handleDelete.bind(this, item.id)}
				 onUpdate={this.props.onUpdate}/>
			</div>
			)
		});

		return(
			<div>
				{items}
			</div>
			)
	}

});
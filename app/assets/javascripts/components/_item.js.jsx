

var Item = React.createClass({

	getInitialState(){
		return {editable: false}
	},

	handleEdit(){
		if(this.state.editable){
			var text = this.refs.text.value
			var id = this.props.item.id;
			var formData = new FormData();
			formData.append('item[text]', text);
			this.props.onUpdate(id, formData);
		}
		this.setState({editable: !this.state.editable})
	},

	handleCheckBox(e){
		var checked = e.target.checked;
		var formData = new FormData();
		formData.append('item[finished]', checked);
		var id = this.props.item.id;
		this.props.onUpdate(id, formData);
	},

	handleKeyPress(target) {
    	if(target.key=="Enter"){
            this.handleEdit();
    	}
	},

	render(){
		var style = {
			padding: '20px 00px 00px 00px',
			display: 'inline-block'
		}
		var editDeleteStyle = {'padding': '10px 0px 0px 0px'}
		var textStyle = {'word-wrap': 'break-word'}
		var styleCh = {'margin-top': '10px'}
		var styleOverLine = {'text-decoration': 'line-through'}

		var text = this.props.item.finished ? <h4 style={styleOverLine}>{this.props.item.text}</h4>
		 : <h4 style={textStyle}>{this.props.item.text}</h4>
		var item = this.state.editable ? <input className="form-control" 
		type="text" ref="text" onKeyPress={this.handleKeyPress} 
		defaultValue={this.props.item.text} autoFocus='autofocus'/> : text
		
		return(

      		<form className="form-horizontal">
				<div className="form-group">
					<input type="checkbox" style={styleCh} className="col-sm-1" ref="check" name="item[finished]" value={this.props.item.finished} defaultChecked={this.props.item.finished} onChange={this.handleCheckBox}/>
				<div style={textStyle} className="col-sm-7">
					{item}
				</div>
				<div style={editDeleteStyle} className="col-sm-4">
					<a onClick={this.props.handleDelete} > Delete </a>
					|
					<a onKeyPress={this.handleKeyPress} onClick={this.handleEdit} >{this.state.editable ? " Submit " : " Edit "}</a>
				</div>
				</div>
			</form>
			
			)
	}
});
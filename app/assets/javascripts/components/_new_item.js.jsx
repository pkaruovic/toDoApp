
var NewItem = React.createClass({

	handleClick(){
		var text = this.refs.text.value;
		this.refs.text.value = "";
		var formData = new FormData();
		formData.append('item[text]', text);

		fetch('/items', {
			header: {
        	'Accept': 'application/json',
        	'Content-Type': 'application/json',
    		},
  			method: 'POST',
  			body: formData
		}).then((res)=>this.props.getHeader(res)).then((msg)=>this.props.handleSubmit(msg))
	},

	handleKeyPress(target) {
    	if(target.key === "Enter"){
            this.handleClick();
    	}
	},

	render(){
		var style = {padding: '00px 00px 20px 00px'}
		var btnStyle = {'margin-left': '20px'}
		return(
			<div style={style} className="form-group form-inline">
					<input ref='text' type="text" className="form-control col-sm-12"
					 name="item[text]" onKeyPress={this.handleKeyPress} placeholder='enter your to do item'
					  autoFocus='autofocus'/>
				<div className="col-sm-3" >
					<button style={btnStyle} className="btn btn-primary" 
					onKeyPress={this.handleKeyPress} onClick={this.handleClick} >Add</button>
				</div><br></br>
			</div>
			)
	}
});
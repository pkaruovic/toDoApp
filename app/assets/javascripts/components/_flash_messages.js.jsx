

var FlashMessages = React.createClass({
	
	render(){
		var messages = this.props.messages.map( message =>
			<div>
        		<h5 align="justify"> { message[1] } </h5>
			</div>
			)

		return(
			<div className="flash-container">           
            	{messages}
          	</div>
			)
	}


});
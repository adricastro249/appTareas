import React, { Component } from 'react';

class TodosForm extends Component {
    constructor (){
        super();
        this.state = {
    title: '',
    responsible: '',
    description: '',
    priority: 'low',
        };
        this.handelInput = this.handelInput.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    
        }
   
   
handelInput(e){
  const {value, name} = e.target;
    this.setState({
[name]:value
    } )


}

handelSubmit(e){
    e.preventDefault();
  this.props.onAddTodo(this.state);

}

formReset(e)
{
    e.preventDefault();
    this.props.onAddTodo(this.state).reset();
//document.getElementById("myForm").reset();
}


    render(){ 
return( 

    <div className="card">
        <form className="card-body" onSubmit={this.handelSubmit} id="myForm">
            <div className="form-group">
                <input type="text"
                name="title"
                onChange={this.handelInput}
                className="form-control"
              
                placeholder="Title"/>
            </div>
            <div className="form-group">
            <input type="text"
                name="responsible"
                className="form-control"
              
                placeholder="Responsible"
                onChange={this.handelInput}/>
            </div>
            <div className="form-group">
            <input type="text"
                name="description"
                className="form-control"
              
                placeholder="Description"
                onChange={this.handelInput}
                />
            </div>
            <div className="form-group">
                <select 
                  name="priority"
                  className="form-control"
                
                  onChange={this.handelInput}>
                <option>low</option>
              <option>medium</option>
              <option>high</option>

                  </select>
            </div>
<div>
<div class="d-flex justify-content-around">
<button className="btn btn-danger" type="reset" value="Reset"  onclick="formReset()">Clean</button>
            <button type="submit" className="btn btn-success">Save</button>
          </div>

</div>

        </form>
    </div>

)

}
}

export default TodosForm;
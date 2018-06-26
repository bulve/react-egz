import React from 'react'

const BookFormComp = (props) => {
    return(
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input value={props.name} name="name" className="form-control" onChange={props.onChange}/>
            </div>
            <div className="form-group">
                <label>Years</label>
                <input value={props.years} name="years" className="form-control" onChange={props.onChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    )
}

export default BookFormComp
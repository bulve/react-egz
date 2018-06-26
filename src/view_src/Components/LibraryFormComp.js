import React from 'react'

const LibraryFormComp = (props) => {
    return(
        <form onSubmit={props.onSubmit} >
            <div className="form-group">
                <label>Name</label>
                <input value={props.name} name="name" className="form-control" onChange={props.onChange}/>
            </div>
            <div className="form-group">
                <label>Location</label>
                <input value={props.location} name="location" className="form-control" onChange={props.onChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    )
}

export default LibraryFormComp
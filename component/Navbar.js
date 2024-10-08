

function Navbar()
{
    return (
        <>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2><b>VibeNest</b></h2>
					</div>
					<div className="col-sm-6">
					<a href="#addeventModal" className="btn btn-success" data-toggle="modal">
    <i className="material-icons">&#xE147;</i> <span>Add New Event</span>
</a>

						<a href="#" className="delete_all_data btn btn-danger"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
						<input type = "text" className = "form-control" style ={{ width: "200px", float: "right", height: "34px" }} />
					</div>
				</div>
			</div>
        </>
    );
}
export default Navbar;
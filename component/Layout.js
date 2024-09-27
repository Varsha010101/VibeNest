import Alert from './Alert';
import Navbar from './Navbar';
import UserTable from './UserTable';
import Pagination from './Pagination';



function Layout(){
	return(
	
       <>
        <div id="addEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form action = "#" method = "POST" >
				<div className="modal-header">						
					<h4 className="modal-title">Add an event</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name of the event</label>
						<input type="text" className="form-control" name="username" required></input>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" name="email" required></input>
					</div>				
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" name="submit" data-dismiss="modal" value="Cancel"></input>
					<input type="submit" className="btn btn-success" value="Add"></input>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="editEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form action = "#" method = "POST">
				<div className="modal-header">						
					<h4 className="modal-title">Edit Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">
                    <input type="hidden" name="updateId" className = "updateId" ></input>					
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control updateUsername" name = "username" required></input>
					</div>
					<div className="form-group">
						<label>password</label>
						<input type="text" className="form-control updatePassword" name = "password"  required></input>
                    </div>			
				</div>
				<div className="modal-footer">
					<input type="button" name = "submit" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
					<input type="submit" className="btn btn-info" value="Save"></input>
				</div>
			</form>
		</div>
	</div>
</div>
<div className="container-xl">
	<div className="table-responsive d-flex flex-column">
        <Alert/>
        <div className="table-wrapper">
            <Navbar/>
            <UserTable/>
            <Pagination/>
        </div>
        </div>
    </div>

</>
    );
}
export  default Layout;
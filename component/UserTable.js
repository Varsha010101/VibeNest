function UserTable(){
    return (
        <>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll"></label>
                    </span>
                </th>
                <th>Event Name</th>
                <th>Location</th>
                <th>Date & Time</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <input type="hidden" id="eventId" name="id" value="" />
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="data_checkbox_1" className="data_checkbox" name="data_checkbox" value="Annual Tech Conference" />
                        <label htmlFor="data_checkbox_1"></label>
                    </span>
                </td>
                <td>Annual Tech Conference</td>
                <td>City Hall, Downtown</td>
                <td>2024-10-15 09:00</td>
                <td>A gathering of tech enthusiasts to discuss innovations and trends.</td>
                <td>
                    <a href="#editEventModal" className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#deleteEventModal" className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </a>
                </td>
            </tr>
            <tr>
                <input type="hidden" id="eventId" name="id" value="" />
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="data_checkbox_2" className="data_checkbox" name="data_checkbox" value="Community Fundraiser" />
                        <label htmlFor="data_checkbox_2"></label>
                    </span>
                </td>
                <td>Community Fundraiser</td>
                <td>Central Park</td>
                <td>2024-11-05 14:00</td>
                <td>Fundraising event for local charities.</td>
                <td>
                    <a href="#editEventModal" className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#deleteEventModal" className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </a>
                </td>
            </tr>
            <tr>
                <input type="hidden" id="eventId" name="id" value="" />
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="data_checkbox_3" className="data_checkbox" name="data_checkbox" value="Music Festival" />
                        <label htmlFor="data_checkbox_3"></label>
                    </span>
                </td>
                <td>Music Festival</td>
                <td>Riverfront Stage</td>
                <td>2024-12-20 18:00</td>
                <td>A night of performances by local bands.</td>
                <td>
                    <a href="#editEventModal" className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#deleteEventModal" className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </a>
                </td>
            </tr>
            <tr>
                <input type="hidden" id="eventId" name="id" value="" />
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="data_checkbox_4" className="data_checkbox" name="data_checkbox" value="Art Exhibition" />
                        <label htmlFor="data_checkbox_4"></label>
                    </span>
                </td>
                <td>Art Exhibition</td>
                <td>Art Gallery</td>
                <td>2024-09-30 17:00</td>
                <td>Showcasing local artists' work.</td>
                <td>
                    <a href="#editEventModal" className="edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#deleteEventModal" className="delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</>

    );
}
export default UserTable;
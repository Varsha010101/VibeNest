function User(){
    return (
        <>
       <tr>
    <td>
        <span className="custom-checkbox">
            <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value="Annual Tech Conference" />
            <label for="data_checkbox"></label>
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

					
        </>
    );

}
export default User;
import { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import UserTable from './UserTable';
import Pagination from './Pagination';

function Layout() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && (
                <div id="addeventModal" className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal form goes here */}
                            <form action="#" method="POST">
                                <div className="modal-header">
                                    <h4 className="modal-title">Add an Event</h4>
                                    <button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    {/* Form fields here */}
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" onClick={() => setShowModal(false)} value="Cancel" />
                                    <input type="submit" className="btn btn-success" value="Add" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">
                    <Alert />
                    <div className="table-wrapper">
                        <Navbar onAddEvent={() => setShowModal(true)} />
                        <UserTable />
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;

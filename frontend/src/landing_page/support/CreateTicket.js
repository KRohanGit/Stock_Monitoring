import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="mb-4">Create Support Ticket</h2>
                    
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input type="text" className="form-control" placeholder="Brief description of your issue" />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <select className="form-select">
                                <option>Select a category</option>
                                <option>Trading Issues</option>
                                <option>Account Problems</option>
                                <option>Payment Issues</option>
                                <option>Technical Support</option>
                            </select>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Priority</label>
                            <select className="form-select">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Urgent</option>
                            </select>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" rows="5" placeholder="Please describe your issue in detail"></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit Ticket</button>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;
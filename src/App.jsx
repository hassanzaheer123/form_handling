import React, { useState } from 'react';
import { MdDeleteSweep } from 'react-icons/md';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = () => {
    if (!(name === '' || email === '' || complaint === '')) {
      setEntries([...entries, { name, email, complaint, showMore: false }]);
      setName('');
      setEmail('');
      setComplaint('');
    }
  };

  const toggleShowMore = (index) => {
    setEntries(
      entries.map((entry, i) =>
        i === index ? { ...entry, showMore: !entry.showMore } : entry
      )
    );
  };

  const handleDelete = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-4">
          Please Enter the following information
        </h2>
        <div className="row">
          <div className="col-lg-5 mt-3 rounded p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                />
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Enter at your own Risk 😒
                </div>
                <label
                  htmlFor="exampleInputcomplaint"
                  className="form-label mt-3"
                >
                  Complaint or Suggestion
                </label>
                <textarea
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  className="form-control"
                  id="exampleInputcomplaint"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-7 p-3">
            <h3 className="text-center mb-4">Complaints Box</h3>
            <div className="row gap-3 ps-5">
              {entries.map((entry, index) => (
                <div
                  className="col-lg-5 border rounded p-2 ps-4 position-relative"
                  key={index}
                >
                  {entry.showMore ? (
                    <>
                      <strong>Name:</strong> {entry.name}
                      <br />
                      <strong>Email:</strong> {entry.email}
                      <br />
                      <strong>Complaint:</strong> {entry.complaint}
                      <br />
                      <button
                        className="btn btn-link p-0"
                        onClick={() => toggleShowMore(index)}
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <>
                      
                      {entry.complaint.slice(0, 20)}...
                      <br />
                      <button
                        className="btn btn-link p-0"
                        onClick={() => toggleShowMore(index)}
                      >
                        Show More
                      </button>
                    </>
                  )}
                  <MdDeleteSweep size={30} className='position-absolute top-0 end-0 m-2' color='red' onClick={() => handleDelete(index)} />

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

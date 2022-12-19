import React from "react";

const Note = () => {
  return (
    <div>
      <h1>Note Taking Application</h1>
      <div className="row">
        <div className="column left">
          <div className="newNote-Container">
            <div className="newNote-Content">
              <div className="Header">
                <h2> Add New Note</h2>
              </div>
              <form>
                <div className="newNote-title">
                  <label>Title</label>
                  <input type="text" />
                </div>
                <div className="newNote-text">
                  <label>Description</label>
                  <textarea defaultValue={""} />
                </div>
                <div className="newNote-footer">
                  {/*<span>Oct 16 2022</span>*/}
                  <br />
                  <button type="button">Add Note</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="column right">
          <div className="displayNote-Container"></div>
        </div>
      </div>
    </div>
  );
};

export default Note;

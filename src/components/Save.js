import React from 'react'

function Save() {
    const save = () => {
        alert('you know what you gotta do bitch! ;)')
    }
  return (
      <div className="buttons">
          <h4>The formations are looking fine! Would you like to save these changes?</h4>
          <button className="btn btn-save" onClick={save}>Save changes</button>
          <button className="btn btn-draft" onClick={save}>Save draft</button>
      </div>
  )
}

export default Save
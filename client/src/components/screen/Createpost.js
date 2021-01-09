import React from 'react'

function Createpost() {
    return (
        <div>
            <div style={{ maxWidth: "700px", Height: "400px" }} className="card post-card">
                <div class="row">
                    <div className="input-field col s6">
                        <input id="input_text" type="text" data-length="10" />
                        <label for="input_text">Title...</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Body...</label>
                    </div>
                </div>

                <form action="#">
                    <div className="file-field input-field">
                        <div className="btn waves-effect waves-light #64b5f6 blue darken-1">
                            <span>Upload File</span>
                            <input type="file" />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Createpost

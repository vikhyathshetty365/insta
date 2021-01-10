import React, { useEffect } from 'react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'


import M from 'materialize-css'
function Createpost() {



    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const [image, setimage] = useState("")
    const [url, seturl] = useState("")
    const history = useHistory()
    useEffect(() => {
        if (url) {
            fetch('/createpost', {

                method: "post",
                body: JSON.stringify({
                    title: title,
                    body: body,
                    pic: url
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")

                }

            }).then(res => res.json()).then(data => {
                if (data.eror) {

                    M.toast({ html: 'Upload failed!!', classes: '#d32f2f red darken-2' })
                }

                else {
                    M.toast({ html: 'Upload sucessfull', classes: '#4caf50 green' })

                    history.push('/')

                }

            }).catch(err => { console.log(err) });

        }
    }, [url])
    const postdata = () => {



        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "dwo4czxxj")

        fetch("https://api.cloudinary.com/v1_1/dwo4czxxj/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).then(data => {
            seturl(data.url)
            console.log(url)
        }).catch(err => {
            console.log(err)
        })






    }

    return (
        <div>
            <div style={{ maxWidth: "700px", Height: "400px" }} className="card post-card">
                <div class="row">
                    <div className="input-field col s6">
                        <input id="input_text" type="text" data-length="10" value={title}
                            onChange={(e) => settitle(e.target.value)} />
                        <label for="input_text">Title....</label>
                    </div>


                </div>


                <div className="row">
                    <div className="input-field col s12">
                        <input id="textarea2" type="text" value={body} onChange={(e) => setbody(e.target.value)} />
                        <label for="textarea2">Body...</label>
                    </div>
                </div>

                <form action="#">
                    <div className="file-field input-field">
                        <div className="btn waves-effect waves-light #64b5f6 blue darken-1">
                            <span>Upload File</span>
                            <input onChange={(e) => setimage(e.target.files[0])} type="file" />
                        </div>

                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>

                        <button onClick={() => postdata()} className="btn waves-effect waves-light #64b5f6 blue darken-1"> Post </button>




                    </div>

                </form>
            </div>

        </div>
    )
}

export default Createpost

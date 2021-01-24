import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Usercontext } from '../App'

import M from 'materialize-css'
function Home() {

    const [data, setdata] = useState([])
    const { state, dispatch } = useContext(Usercontext)

    //console.log(state._id)
    console.log(state)
    useEffect(() => {

        fetch('/allposts', {


            headers: { "Authorization": "Bearer " + localStorage.getItem("jwt") }
        }).then(res => res.json()).then(post => setdata(post.posts))
    }, [])

    console.log(data)


    const likepost = (id) => {

        fetch('/like', {
            method: 'put',
            headers: {

                "Authorization": "Bearer " + localStorage.getItem('jwt'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId: id,
            })


        }).then(res => res.json()).then(result => {
            console.log(result)
            const newdata = data.map(item => {
                if (item._id == result._id)
                    return result;
                else
                    return item


            })
            setdata(newdata)
        }).catch(err => {
            console.log(err)
        })
    }




    const unlikepost = (id) => {

        fetch('/unlike', {
            method: 'put',
            headers: {

                "Authorization": "Bearer " + localStorage.getItem('jwt'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId: id,
            })


        }).then(res => res.json()).then(result => {

            console.log(result)
            const newdata = data.map(item => {
                if (item._id == result._id)
                    return result;
                else
                    return item;


            })
            setdata(newdata)

        }).catch(err => {
            console.log(err)
        })
    }



    const makeComment = (text, postId) => {
        fetch('/comments', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setdata(newData)
            }).catch(err => {
                console.log(err)
            })
    }




    return (
        data.map(item => {

            return (
                <div className="home">

                    <div style={{ margin: "20px auto" }} className="card home-card">
                        <h5 style={{ margin: "2px 25px" }}></h5>
                        <img className="homeimg" src={item.pic} />


                        <div style={{ margin: "2px 25px" }} className="description">
                            <i style={{ color: "red" }} class="material-icons">favorite</i>
                            {item.likes.length}<span> likes</span>
                            {
                                item.likes.includes(state._id) ?
                                    <i class="material-icons" onClick={() => unlikepost(item._id)}>thumb_down</i> :
                                    <i onClick={() => likepost(item._id)} class="material-icons">thumb_up</i>
                            }
                            <h6>{item.title}</h6>
                            <p>{item.body}</p>
                            {
                                item.comments.map((rec) => {
                                    return (<h6 key={rec._id}><span style={{ fontweight: 600 }}>{rec.postedby.username}</span>{rec.text}</h6>)
                                })
                            }
                            <form onSubmit={(e) => {
                                e.preventDefault()

                                makeComment(e.target[0].value, item._id)

                            }}>



                                <input type="text" placeholder="add comment" />
                            </form>

                        </div>
                    </div>







                </div>
            )


        })
    )





}

export default Home
import React, { useEffect, useRef, useState } from 'react'
import { delete_data, get_api, get_data, post_data, update_data } from '../api'
import { BASE_URL, GET_API, deleteApi, getApi, postApi, updateApi, url } from '../constant'

function Crud() {

    const [data, setdata] = useState([])
    const [update, setupdate] = useState([])

    const title = useRef();
    const author = useRef();


    const saveData = () => {
        const result = {
            title: title.current.value,
            author: author.current.value
        }
        post_data(url, postApi, result).then((res) => {
            console.log(res, 'post');
            setdata(...data, res)
        })
    }

    const removeData = (id) => {
        console.log(id);
        delete_data(url, deleteApi, id);
        setdata(data.filter((e) => e.id !== id))
    }

    const putData = (id, ind) => {
        console.log(id);

        const final = data[ind]
        setupdate(final)
        console.log(final);
    }

    const inputUpdate = (e) => {
        setupdate({ ...update, [e.target.name]: e.target.value })
    }

    const finalUpdate = () => {
        update_data(url, updateApi, update.id);
        setdata(data.map((data) => data.id === update.id ? { ...data, title: update.title, author: update.author } : data))
    }

    useEffect(() => {
        get_data(url, getApi).then((res) => {
            setdata(res);
        })
    }, [])

    return (
        <div>


            <input type='text' name='title' ref={title} />
            <input type='text' name='author' ref={author} />
            <button onClick={saveData}>AddData</button>


            <input type='text' name='title' value={update.title} onChange={inputUpdate} />
            <input type='text' name='author' onChange={inputUpdate} value={update.author} />
            <button onClick={finalUpdate}>updateData</button>


            {
                data?.map((val, ind) => {
                    return (
                        <>
                            <h1>{val.id}</h1>
                            <h3>{val.title}</h3>
                            <h4>{val.author}</h4>
                            <button onClick={() => removeData(val.id)}>DeleteData</button>
                            <button onClick={() => putData(val.id, ind)}>viewData</button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Crud
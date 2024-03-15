import React, { useContext } from 'react'
import { StringContext } from './String_context';


export default function StringUpdate(Props){
    const [setName] = useContext(StringContext);
    return(
        <div>
        <h1>String Update</h1>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name: </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Enter the Name"
                    onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
            
        </form>
        </div>
    )
}
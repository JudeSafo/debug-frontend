import { withAuthenticator } from "@aws-amplify/ui-react"
import { useState } from "react"
import { API, Storage } from 'aws-amplify'

function CreatePark () {
    const [question, setQuestion ] = useState('')
    const [context, setContext  ] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        const uploadedImage = await Storage.put(image.name, image)
    }
    return (
        <form>
            <h1>OpenManual</h1>
            <label htmlFor="question">Question</label> 
            <input type="text" id="question" onChange={e => setQuestion(e.target)} />
            <label htmlFor="Context">Context</label> 
            <input type="text" id='text' onChange={e => setContext(e.target)}/>
            <input type="submit" value="search" />
        </form>
    )  
}

//export default withAuthenticator(CreatePark)
export default CreatePark


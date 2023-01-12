import { useState } from "react"


export const Input = () => {

    

    const [inputText, setInputText] = useState('')
    const [historyList, setHistoryList] = useState<string[]>([])

    const updateTextField = (newText: string) => {
        setInputText(newText)
    }

    return (
        <>
            <input
                onChange={(textChange) => {
                    updateTextField(textChange.target.value)
                    setHistoryList([...historyList, textChange.target.value])
                }}
                type="text"
                placeholder="enter text here" />

            <p>{inputText}</p>
            
            {historyList.map(entry => <p>{entry}</p> )}

            
        </>
    )
}
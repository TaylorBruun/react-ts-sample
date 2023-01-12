import { useEffect } from "react"
import { event } from "../Interfaces/Event"

export const PostTest = () => {
    const tokenValue: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IklaTkJRRE9kbFFTOE5xVm9EWjRBTSJ9.eyJpc3MiOiJodHRwczovL2Rldi05YjRsOGwwei51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjNhMzMzY2QwMGExNzVjYTM2ZjAzZTE4IiwiYXVkIjpbImh0dHBzOi8vVGF5RGV2LmNvbSIsImh0dHBzOi8vZGV2LTliNGw4bDB6LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzM0NjU1MDIsImV4cCI6MTY3MzU1MTkwMiwiYXpwIjoiSTRQdDhGbFVMa0JQRm92T2NXZEREWlNxTzF1REpEUWEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOltdfQ.tzohVn5eJmz1iD9SlHTZOIF-c9ypgFJrNq5vicsiNzKMDQFc9YYuf3DHY7p5jbkoLWKVW45XTNVMZQd-S3jLDJlgKgjiG066rzdSEImTrYp5v_6HrXTYOCxIgj2VhRTtTvaCeIj4pWMaKy_aG1BPq0FnaD3Zoa2sXVwWWdM5wS1m7u3qas9svAYIs-XMGg1J6TX-L4G4-5trjg_ckg52tmzpqroQRXKI-zvHjBBzR1406hyNEvwCwLqyqP39nXF1O5YQ6dER8bgPP_G70HcUl0xzfkGQeKlGmK-t6evyGB21rjmjWxU9rhclpGq-Ha-QYwLifPH2cphD4rJ-ssJZmQ'

    let authorization: string = "Bearer " + tokenValue

    let dateTest = new Date(1673868448000)

    const eventData: event = {
        id: "",
        creatorId: "63a333cee89ed1f66a73db70",
        name: "Test Event 5",
        description: "Test Description",
        coverImg: "https://thiscatdoesnotexist.com/",
        location: "Test Blvd",
        capacity: 506,
        startDate: dateTest,
        isCanceled: false,
        type: "sport",
        creator: {
            id: "63a333cee89ed1f66a73db70",
            name: "greattesting@test.com",
            picture: "https://s.gravatar.com/avatar/67386a211c9bf5591b48b3896c8633cb?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgr.png"
        }
    }

    async function postEvent() {
        await fetch('http://localhost:3000/api/events',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authorization
                },
                body: JSON.stringify(eventData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
    }

    

    return (
        <button onClick={postEvent}>Post Test</button>
    )

}
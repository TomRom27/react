import React, { useEffect, useState } from "react"

import WithLoading from "../utils/withLoading"
import RepoList from "./RepoList";

export default function HOCExample() {

    const ListWithLoading = WithLoading(RepoList);
    const [listState, setListState] = useState({isLoading:true, repos:[]})

    useEffect(() => {

        fetch(`https://api.github.com/users/TomRom27/repos`)
            .then((json) => json.json())
            .then((repos) => {
                setListState({isLoading:false, repos:repos})
            })
            .catch((e) => {
                console.log(e);
            })

    },[])

    return (
        <ListWithLoading 
            isLoading={listState.isLoading} 
            repos={listState.repos}
            />
    )
}
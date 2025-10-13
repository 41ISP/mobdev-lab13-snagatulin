import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/store";

export function Logout(){
const {clearJWT} = useUserStore()
const navigate = useNavigate()

useEffect(() => {
        clearJWT()
        navigate("/")
     }, [])
    
     return <></>

}
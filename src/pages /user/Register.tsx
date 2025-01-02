import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setAge, setName } from "../../store/userSlice"


function Register(){
    const data = useAppSelector((store)=>store.user)
    console.log(data)
    const dispatch = useAppDispatch()
    dispatch(setName("Hari Bahadur"))
    dispatch(setAge(100))
    // insertion garne or update garne, POST, PUT/Patch, INSERT, update, --> useDispatch() + types, --> kunai action trigger garnu paryo vane paaani

    // select garnu paryo, select * from , .find()
    // useSelector() + types

    return ( 
        <h1>Register page </h1>
    )
}

export default Register
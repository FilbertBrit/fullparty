import { useDispatch, useSelector } from "react-redux";


export function RsvpShow () {
    const dispatch = useDispatch();
    const rsvps = useSelector(state => state.rsvps)
    // console.log({rsvps})
    // console.log(rsvps)

    return(<></>)
}
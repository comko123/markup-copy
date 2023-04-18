import { Dispatch, SetStateAction } from "react";

interface profilButtonProps {
    click:string,
    expert:string,
    state:{[key:string]:boolean},
    setState:Dispatch<SetStateAction<{
        Follower: boolean;
        Request: boolean;
    }>>
}
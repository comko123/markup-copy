interface state {[key:string]:{
    category:{[key:string]:string|undefined},
    title:string,
    level:string,
    id:string,
    level:string,
    date:string,
    cycle?:string,
    range?:string,
    reason?:string,
    friends?:string[],
    location?:string[]
    feedback?:string[]
    note?:string[]
}[]}


interface dragListProps {
    item:{
        category:{[key:string]:string|undefined},
        title:string,
        level:string,
        id:string,
        level:string,
        date:string,
        cycle?:string,
        range?:string,
        reason?:string,
        friends?:string[],
        location?:string[]
        feedback?:string[]
        note?:string[]
    },
    index:number,
}
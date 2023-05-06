interface state {[key:string]:{
    category:{[key:string]:string},
    title:string,
    level:string,
    id:string,
    level:string,
    date:string,
    cycle?:string,
    range?:string,
    reason?:string,
    // every?:boolean
}[]}


interface dragListProps {
    item:{
        category:{[key:string]:string|undefined},
        title:string,
        level:string,
        id:string,
        level:string,
        date:string
    },
    index:number,
}
interface state {[key:string]:{
    category:{[key:string]:string},
    title:string,
    level:string,
    id:string,
    level:string,
    date:string
}[]}


interface dragListProps {
    item:{
        category:{[key:string]:string},
        title:string,
        level:string,
        id:string,
        level:string,
        date:string
    },
    index:number,
}
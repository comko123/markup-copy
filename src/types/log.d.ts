interface log{
    title:string,
    id:string,
    contentList?:{[key:string]:string},
    avatar?:string|null,
    content?:{[key:string]:string},
    friendContent?:{[key:string]:string}
}
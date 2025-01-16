type Obj={ [key: string]: boolean }
export default (arr:any[])=>{
    const obj:Obj={}
    arr.forEach((el:any)=>{
        obj[el.order]=false
    });
    return obj
}
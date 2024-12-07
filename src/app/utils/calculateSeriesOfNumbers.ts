export default (p:any,iterator:any,length:number)=>{
  const numbers=[];
  for(let i=1;i<length+1;i++){
    const el=p.data[`${iterator}${i}`];
    if(el !== null || el!==undefined) numbers.push(+el)
  }
  if (numbers.length===length) return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return "-"
}

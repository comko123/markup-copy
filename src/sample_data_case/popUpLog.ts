export const popUpSetting = ({select,itemList,reason}:dragListProps["item"]["category"]):sampleCase["issuLog"] => {
   return {
      progress:[itemList as string,...["To Do","In Progress","Done"].filter(item=>item!==itemList)],
      level:!select?["High","Medium","Low"]:[select,...["High","Medium","Low"].filter(item=>item!==select)],
      issue:reason?[reason,...["게으름","일정 빡빡","특별한 일정","우선순위 변화","기타"].filter(item=>item!==reason)]:
      ["게으름","일정 빡빡","특별한 일정","우선순위 변화","기타"]
}} 

export const rangeCycle = ({range,cycle}:any ):any => {
   return {
      cycle:cycle?[cycle,...["반복","반복 안함"].filter(item=>item!==cycle)]:["반복","반복 안함"],
      range:range?[range,...["Public","Private"].filter(item=>item!==range)]:["Public","Private"]
   }
}
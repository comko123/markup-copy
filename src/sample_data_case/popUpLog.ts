export const popupIssueLog:sampleCase["issuLog"]= {retry:["반복 안함","반복"],state:["상태"],secert:["공개","비공개"]}
export const popUpSetting = (select:string):{[key:string]:string[]} => {
   return {issue:["게으름","일정 빡빡","특별한 일정","우선순위 변화","기타"],
level:!select?["High","Medium","Low"]:[select,...["High","Medium","Low"].filter(item=>item!==select)]}
} 
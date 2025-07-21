addEventListener("message",({data:e})=>{debugger;let s=`worker response to ${e}`;postMessage(s)});

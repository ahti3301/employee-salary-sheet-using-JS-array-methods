const employees = document.getElementById("employees")
const developer = document.getElementById("developer")
const manager = document.getElementById("manager")
const incrementSalary = document.getElementById("increment")
const sortN = document.getElementById("sortName")
const sortS= document.getElementById("sortSalary")
const highPay = document.getElementById("highPaid")
const totalB = document.getElementById("total")
const empData = document.querySelector(".employeeData")
const totalBinc = document.getElementById("totalinc")


// --------------********************------------------------------------
//we works on array of objects
const employee = [
    {employeeId:"001",name:"bashir",designation:"manager",salary:20000},
    {employeeId:"002",name:"kareem",designation:"developer",salary:50000},
    {employeeId:"003",name:"arif",designation:"developer",salary:30000},
    {employeeId:"004",name:"jafar",designation:"manager",salary:10000},
    {employeeId:"005",name:"majid",designation:"developer",salary:60000},
    {employeeId:"006",name:"sarim",designation:"manager",salary:40000},
    {employeeId:"007",name:"irfan",designation:"developer",salary:80000},
    {employeeId:"008",name:"lareeb",designation:"developer",salary:70000}
];
// developer list buttons
const developerList = ()=>{
    const ans = employee.filter(data=>{
        if(data.designation==="developer"){
            return{employeeId:data.employeeId,name:data.name,designation:data.designation,salary:data.salary}
        }
    })
    ans.forEach(items=>{
        empData.innerHTML+= `<h6><span>${items.employeeId}</span><span>${items.name}</span><span>${items.designation}</span><span>RS ${items.salary}</span></h6>`
        
        
    })
    console.log(ans);
    
}

// manager list buttons
const managerList = ()=>{
    const ans = employee.filter(data=>{
        if(data.designation==="manager"){
            return{employeeId:data.employeeId,name:data.name,designation:data.designation,salary:data.salary}
        }
    })  
    ans.forEach(items=>{
        empData.innerHTML+= `<h6><span>${items.employeeId}</span><span>${items.name}</span><span>${items.designation}</span><span>RS ${items.salary}</span></h6>`
        
        
    })
    console.log(ans);

}
// ---------------------------------------------------
const updateDom = ()=>{
    empData.innerHTML = " "
}
const employeesData = ()=>{
    
    employee.forEach(items=>{
        empData.innerHTML+= `<h6><span>${items.employeeId}</span><span>${items.name}</span><span>${items.designation}</span><span>RS ${items.salary}</span></h6>`
        
        
    })
}
// 50% increment in all employee salary

// sort by name
const sortName = ()=>{
   const ans = employee.sort((a,b)=>{
        if(a.name<b.name){
            return -1
        }else if(a.name>b.name){
            return 1
        }else{
            return 0
        }
   })
   ans.forEach(items=>{
    empData.innerHTML+= `<h6><span>${items.employeeId}</span><span>${items.name}</span><span>${items.designation}</span><span>RS ${items.salary}</span></h6>`
    
    
})

   

    
}
// sort by salary
const sortSalary = ()=>{
   const ans = employee.sort((a,b)=>{
        // if(a.salary<b.salary){
        //     return -1
        // }else if(a.name>b.name){
        //     return 1
        // }else{
        //     return 0
        // }
        //OR
        return a.salary-b.salary
    })
    ans.forEach(items=>{
        empData.innerHTML+= `<h6><span>${items.employeeId}</span><span>${items.name}</span><span>${items.designation}</span><span>RS ${items.salary}</span></h6>`
        
        
    })
    console.log(ans);
    
    
}

// highest paid
const highestPaid = ()=>{
    const ans = employee.find(data=>{
        return data.salary>70000
    })
    empData.innerHTML+= `<h6><span>${ans.employeeId}</span><span>${ans.name}</span><span>${ans.designation}</span><span</span></h6>`  
    
    console.log(ans);
}

// total salary budget
const salaryBudget = ()=>{
    const ans = employee.reduce((acc,curr)=>{
        acc+=curr.salary
        return acc
    },0)
    empData.innerHTML+= `<h6>The Salary Budget of your employees is RS ${ans} <strong>(without increment)</strong></h6>`
    
    console.log(ans);
}
const increment = ()=>{
    const ans = employee.map(data=>{
        return{employeeId:data.employeeId,name:data.name,designation:data.designation,salary:data.salary+(data.salary*50)/100}
    })
    ans.forEach(items=>{
        empData.innerHTML+= `<h6><span>${items.employeeId}</span><span>${items.name}</span><span>${items.designation}</span><span>RS ${items.salary}</span></h6>`
        
    })
    console.log(ans);
}
const salaryBudgetIncr = ()=>{
    const ans = employee.map(data=>{
        return{employeeId:data.employeeId,name:data.name,designation:data.designation,salary:data.salary+(data.salary*50)/100}
    }).reduce((acc,curr)=>{
        acc+=curr.salary
        return acc
    },0)
    empData.innerHTML+= `<h6>The Salary Budget of your employees is RS ${ans} <strong>(with increment)</strong></h6>`
    }
    
    
    


// btn -1
employees.addEventListener("click",()=>{
    updateDom();
    employeesData();
})
//btn-2
developer.addEventListener("click",()=>{
    updateDom()
    developerList()
})
manager.addEventListener("click",()=>{
    updateDom()
    managerList();
})
sortN.addEventListener("click",()=>{
    updateDom();
    sortName();
})
sortS.addEventListener("click",()=>{
    updateDom();
    sortSalary();
})
//btn-4
incrementSalary.addEventListener("click",()=>{
    updateDom();
    increment();
})
highPay.addEventListener("click",()=>{
    updateDom();
    highestPaid();
})
totalB.addEventListener("click",()=>{
    updateDom();
    salaryBudget();
})
totalBinc.addEventListener("click",()=>{
    updateDom();
    salaryBudgetIncr();
})














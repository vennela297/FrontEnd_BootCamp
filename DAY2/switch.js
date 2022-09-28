// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Tech Academy  role-based access to course content
//	Master – view/add/delete/create/update content
//	Admin – view/create
//	User – view/edit


//const role=prompt("Please specify your role")
//alert(`Your name is ${input}`);
const role="Master"
switch(role)
{
    case "Master":
        {
        // const choice=prompt("Enter 1 for view , 2 for add, 3to delete 4 to create , 5 to update")
        // alert(`your choice is ${choice}`)
        const choice=1
        
        switch(choice)
        {
            case 1:console.log("view")
            break;
            case 2:console.log("add")
            break;
            case 3:console.log("delete")
            break;
            case 4:console.log("create")
            break;
            case 5:console.log("update")
            break;
        }
        }
        break;
        case "Admin":
            {
            // const choice=prompt("Enter 1 for view , 2 to create")
            const choice=2;
            switch(choice)
            {
                case 1:console.log("view")
                break;
                case 2: console.log("create")
                break;
            }
            }
            break;
        case "User":
            {
                console.log("view , edit")
            }
            break;
            
}


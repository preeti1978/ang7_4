import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Users ';
  subtitle='click role to view users of that role'

//defining the lisst of users. It is an array of objects
userObj=[
{"name":"ABC","role":"ADMIN"},
{"name":"DEF", "role":"SUPERWISER"},
{"name":"GHI","role":"MEMBER"},
{"name":"JKL","role":"SUPER ADMIN"},
{"name":"MNO","role":"ADMIN"},
{"name":"PQR","role":"ADMIN"},
{"name":"STU","role":"MEMBER"},
{"name":"VWX","role":"MEMBER"},
{"name":"YZA","role":"MEMBER"},
{"name":"BCD","role":"MEMBER"}
];
//this variable holds the array of matching user objects
matchingUsers=[];

ngOnInit(){
	this.matchingUsers= Array.from(this.userObj);
}
//this variable  binds the input typed in view
myRole:String="";

//function which is called on click of button to fetch all records matching the role 
fetchUsersMatchingRole=(inputrole)=>{
	var i=0;
	//empty the matchingUsers array
   while(this.matchingUsers.length > 0) {
    this.matchingUsers.pop();
	}

    //iterating through the userObj array
	for (i=0;i<this.userObj.length;i++){
		var obj=this.userObj[i];
		//If the role of the object matches the user typed value 
		if (obj["role"]==inputrole){
			//then push it to matchingUsers array
			this.matchingUsers.push(obj);
		}//end if
	}//end for
  }
}

 
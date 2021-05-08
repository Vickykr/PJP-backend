
 
         document.getElementById("btn2").addEventListener('click', Display_profile);
        
         var output1 = document.getElementById("output1");
         var myContainer = "";
        
         
         function Display_profile() {
             selectElement = document.querySelector('#select2');
             myContainer = selectElement.value;
             s2="<table><tr>"+
             "<th>First Name</th>"+
             "<th>Last Name</th>"+
             "<th>Gender</th>"+
             "<th>Date of Birth</th>"+
             "<th>Email</th>"+
             "<th>Phone</th>"+
             "<th>Work Experience</th>"+
             "<th>Job Profile</th>"+
             "<th>Location</th>"+
             "</tr>";
             s2+="<td>Peter</td>"+
             "<td>Parker</td>"+
             "<td>Male</td>"+
             "<td>02-12-1998</td>"+
             "<td>peter@gmail.com</td>"+
             "<td>9875678765</td>"+
             "<td>2</td>";
             s2+="<td>"+myContainer+"</td>"+
                  "<td>Banglore</td>";
             
             s2+="<tr><td>Juliana</td><td>Bennett</td><td>Female</td><td>09-01-1991</td><td>julianabennett@gmail.com</td><td>7800126578</td>"+
             "<td>7</td><td>"+myContainer+"</td><td>Delhi</td></tr>";
             output1.innerHTML = s2;
             s2="";
         }
        
        document.getElementById("btn3").addEventListener('click', Display_user);
        
         var output2 = document.getElementById("output2");
        
         
         function Display_user() {
             var a = parseInt(document.getElementById("years").value);
           
             s3="<table><tr>"+
             "<th>First Name</th>"+
             "<th>Last Name</th>"+
             "<th>Gender</th>"+
             "<th>Date of Birth</th>"+
             "<th>Email</th>"+
             "<th>Phone</th>"+
             "<th>Work Experience</th>"+
             "<th>Job Profile</th>"+
             "<th>Location</th>"+
             "</tr>";
             
             s3+="<td>Adele</td>"+
             "<td>Flores</td>"+
             "<td>Female</td>"+
             "<td>26-03-1993</td>"+
             "<td>adeleflores@gmail.com</td>"+
             "<td>8987789541</td>";
            
             s3+= "<td>"+a+"</td>"+"<td>Android Developer</td>"+
                  "<td>Gurgaon</td>";
             s3+="<tr><td>Marlin</td><td>Bryant</td><td>Male</td><td>16-05-1987</td><td>mbryant@gmail.com</td><td>8976510098</td>"+
             "<td>"+a+"</td><td>C/C++ Developer</td><td>Chennai</td></tr>";
             output2.innerHTML = s3;
             s3="";
         }
        
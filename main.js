const nname=["Anchit Chawla"];
let roll=["1510991072"];
const pass=["2019"];
const stream=["cse"];
let i=1;
let pos=0;
let count=0;
let fg=0;
	//TO DISPLAY THE INITIAL ENTRY OF THE STUDENTS
	$( document ).ready(()=> { 
		$('#del').hide();
		$('#edi').hide();
		$('#demo').hide();
		const tr=document.createElement("tr");
		const ttd=document.createElement("td");
		ttd.appendChild(document.createTextNode(roll[0]));
		tr.appendChild(ttd);
		const ttdd=document.createElement("td");
		ttdd.appendChild(document.createTextNode(nname[0]));
		tr.appendChild(ttdd);
		const tttd=document.createElement("td");
		tttd.appendChild(document.createTextNode(stream[0]));
		tr.appendChild(tttd);
		const ttddd=document.createElement("td");
		ttddd.appendChild(document.createTextNode(pass[0]));
		tr.appendChild(ttddd);	
		document.getElementById('table-body').appendChild(tr);
		tr.className="data";
	});
//TO DISPLAY THE CHECKBOXES WHEN CLICK ON THE DELETE BUTTON 
$(document).on('click', '#delle', ()=> 
{
	let tra=document.getElementsByClassName("data");
	if(tra.length==0)
		return;
	count++;
	if(count==1)
	{
	fg=1;
	const rr=document.getElementsByTagName("tr");
	const thh=document.createElement("th");
	const nodee=document.createTextNode("Select");
	thh.appendChild(nodee);
	rr[0].appendChild(thh);
	for(let val=1;val<rr.length;val++)
	{
		let tdd=document.createElement("td");
		let inputt=document.createElement("input");
		inputt.type="checkbox";
		inputt.className="checkk";
		tdd.appendChild(inputt);
		rr[val].appendChild(tdd);	
	}
			$('#del').show();
			$('#delle').hide();
}
});
// TO DISPLAY THE INFO OF THAT STUDENT WHOM YOU WANT TO EIT
$(document).on('click', '#edit_m', ()=> 
{
	let traa=document.getElementsByClassName("data");
	if(traa.length==0)
		return;
	let temp=document.getElementById("rollno").value;
	let trr=document.getElementById("data");
	let flag=0;
	pos=0;
	for(let i of roll)
	{
		if(i==temp)	
		{	
			flag=1;
			break;
		}
		pos++;
	}
	if(flag ==0)
	{
		alert("Roll Number doesnot exist");
		document.getElementById("form1").reset();
		return;
	}
	if(fg==1)
		{
		$('#list tr').find('th:last, td:last').remove();
		fg=0;
		$('#del').hide();
		count=0;
		}
	let box1=document.getElementById("rolll");
	box1.value=roll[pos];
	let box2=document.getElementById("namee");
	box2.value=nname[pos];
	let box3=document.getElementById("streamm");
	box3.value=stream[pos];
	let box4=document.getElementById("passs");
	box4.value=pass[pos];	
	$('#edi').show();
	$('#demo').show();
	$('#enter').hide();
	$('#delle').hide();
	$('#editt').hide();
});
//TO SUBMIT THE RECORDS IN THE ARRAY USED WHEN CLICKED ON THE SUBMIT BUTTON 
$(document).on('click', '#enter', ()=> 
{	
	if(!(frm1.rolll.value) || !(frm1.namee.value) || !(frm1.streamm.value) || !(frm1.passs.value))
	{
		alert ("Enter the Complete Student Information");
		return ;
	}
	let ds=document.getElementsByTagName("tr");
	let k=0;
	let flag=0;
	while(k<ds.length)
	{
		if(roll[k]==document.getElementById("rolll").value)
		{
			flag=1;
		}
		k++;
	}
	if(flag==1)
	{
		alert("Roll Number Already Exist");
		return;
	}
	if(fg==1)
		{
		$('#list tr').find('th:last, td:last').remove();
		fg=0;
		$('#del').hide();
		$('#delle').show();
		count=0;
		}
	roll.push(document.getElementById("rolll").value);
	nname.push(document.getElementById("namee").value);
	stream.push(document.getElementById("streamm").value);
	pass.push(document.getElementById("passs").value);
	let tr =document.createElement("tr");
		let tdr=document.createElement("td");
		tdr.appendChild(document.createTextNode(roll[i]));
		tr.appendChild(tdr);
		let tdn=document.createElement("td");
		tdn.appendChild(document.createTextNode(nname[i]));
		tr.appendChild(tdn);
		let tda=document.createElement("td");
		tda.appendChild(document.createTextNode(stream[i]));
		tr.appendChild(tda);
		let tds=document.createElement("td");
		tds.appendChild(document.createTextNode(pass[i]));
		tr.appendChild(tds);
		i++;
	document.getElementById('table-body').appendChild(tr);
	tr.className="data";
	 $('#myModal').modal();
	$('#demo').hide();
	document.getElementById("form1").reset();
});
//TO DELETE THE RECORD FROM THE TABLE AFTER CLICKING ON THE CHECKBOXES
$(document).on('click', '#del', ()=> 
{
	let tablee=document.getElementById("table-body");
	let checkkk=document.getElementsByClassName("checkk");
	 let tr = document.getElementsByClassName("rowData");   
	let c=0;
	for(let i=0;i<checkkk.length;i++)
	{
		if(checkkk[i].checked)
		{
			tablee.deleteRow(i);
			nname.splice(i,1);
			roll.splice(i,1);
			pass.splice(i,1);
			stream.splice(i,1);
			i=i-1;
			c++;
		}
	}
	i=i-c;
	if(c==0)
	{
		alert("Select any row");
		return;
	}
		$('#list tr').find('th:last, td:last').remove();
		count=0;
		fg=0;
		$('#del').hide();
		$('#delle').show();
	$('#myModalll').modal();
});
// TO COMMIT EDITTED CHANGES
$(document).on('click', '#edi', ()=> 
{
	let eroll=document.getElementById("rolll").value;
	let ename=document.getElementById("namee").value;
	let estream=document.getElementById("streamm").value;
	let epass=document.getElementById("passs").value;
	roll[pos]=eroll;
	nname[pos]=ename;
	stream[pos]=estream;
	pass[pos]=epass;
	let trrr=document.getElementsByClassName("data");
	let tc=trrr[pos].childNodes;
	tc[0].innerHTML=roll[pos];
	tc[1].innerHTML=nname[pos];
	tc[2].innerHTML=stream[pos];
	tc[3].innerHTML=pass[pos];
	$('#demo').hide();
	$('#edi').hide();
	document.getElementById("form1").reset();
	$('#enter').show();
	$('#delle').show();
	$('#editt').show();
});

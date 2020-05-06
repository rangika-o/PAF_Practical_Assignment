$(document).ready(function() 
		{  
	if ($("#alertSuccess").text().trim() == "")  
    {   
		$("#alertSuccess").hide();  
     }  
	     $("#alertError").hide(); 
	  
});

$(document).on("click", "#btnSave", function(event) 
		{  
			$("#alertSuccess").text("");  
			$("#alertSuccess").hide();  
			$("#alertError").text("");  
			$("#alertError").hide(); 
			
			
			var status = validatePharmacyForm();  
			if (status != true)  
			{   
				$("#alertError").text(status);   
				$("#alertError").show();   
				return;  
			} 
			
			var type = ($("#hidMedicineIDSave").val() == "") ? "POST" : "PUT"; 
			
			$.ajax( 
			{  
				url : "PharmacysAPI",  
				type : type,  
				data : $("#formPharmacy").serialize(),  
				dataType : "text",  
				complete : function(response, status)  
				{   
					onPharmacySaveComplete(response.responseText, status);  
					
				} 
			
		}); 
}); 
		
function onPharmacySaveComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 

			$("#divPharmacysGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 

		} else if (status == "error")  
		{   
			$("#alertError").text("Error while saving.");   
			$("#alertError").show();  
		} else  
		{   
			$("#alertError").text("Unknown error while saving..");   
			$("#alertError").show();  
		} 

		$("#hidMedicineIDSave").val("");  
		$("#formPharmacy")[0].reset(); 
		
}

$(document).on("click", ".btnRemove", function(event) 
{  
	$.ajax(  
	{   
		url : "PharmacysAPI",   
		type : "DELETE",   
		data : "MedicineId=" + $(this).data("medicineid"),   
		dataType : "text",   
		complete : function(response, status)   
		{    
			onPharmacyDeleteComplete(response.responseText, status);   
		}  
	}); 
}); 


function onPharmacyDeleteComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully deleted.");    
			$("#alertSuccess").show(); 

			$("#divPharmacysGrid").html(resultSet.data);   
			} else if (resultSet.status.trim() == "error")   
			{    
				$("#alertError").text(resultSet.data);    
				$("#alertError").show();   
			} 

			} else if (status == "error")  
			{   
				$("#alertError").text("Error while deleting.");   
				$("#alertError").show();  
			} else  
			{   
				$("#alertError").text("Unknown error while deleting..");   
				$("#alertError").show();  
			} 
	} 

$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidMedicineIDSave").val($(this).closest("tr").find('#hidMedicineIDUpdate').val());     
	$("#MedicineType").val($(this).closest("tr").find('td:eq(0)').text());     
	$("#MedicineName").val($(this).closest("tr").find('td:eq(1)').text());     
	$("#UnitPrice").val($(this).closest("tr").find('td:eq(2)').text());     
	$("#QtyOfAvailableMedicine").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#ReorderLimit").val($(this).closest("tr").find('td:eq(4)').text()); 

}); 


function validatePharmacyForm() 
{  
	// CODE  
	if ($("#MedicineType").val().trim() == "")  
	{   
		return "Insert Medicine Type.";   
	}

	 
	 // NAME  
	if ($("#MedicineName").val().trim() == "")  
	{   
		return "Insert Medicine Name.";  
	}
	
	if ($("#UnitPrice").val().trim() == "")  
	{   
		return "Insert Unit Price.";  
	} 
	 
	 // is numerical value  
	var tmpPrice = $("#UnitPrice").val().trim();  
	if (!$.isNumeric(tmpPrice))  
	{   
		return "Insert a numerical value for Unit Price.";  
	} 
	 

	 // convert to decimal price  
	$("#UnitPrice").val(parseFloat(tmpPrice).toFixed(2)); 
	 
 
	if ($("#QtyOfAvailableMedicine").val().trim() == "")  
	{   
		return "Insert QtyOfAvailableMedicine.";  
		
	} 
	 
	if ($("#ReorderLimit").val().trim() == "")  
	{   
		return "Insert ReorderLimit.";  
		
	} 
	 return true;
	
}




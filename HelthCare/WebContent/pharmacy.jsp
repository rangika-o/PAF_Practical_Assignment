<%@page import="model.Pharmacy"%> 
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%> 
 
<!DOCTYPE html> 
<html> 
<head> 
<meta charset="ISO-8859-1"> 
<title>Pharmacy Management</title> 
<link rel="stylesheet" href="Views/bootstrap.min.css"> 
<script src="Component/jquery-3.2.1.min.js"></script> 
<script src="Component/pharmacy.js"></script> 
</head> 
<body> 
<div class="container">
 <div class="row"> <div class="col-6">  
 <h1>Pharmacy Management </h1> 
 
<form id="formPharmacy" name="formPharmacy" >  
 
 Medicine Type:   
 <input id="MedicineType" name="MedicineType" type="text"     class="form-control form-control-sm"> 
 
  <br> Medicine Name:   
  <input id="MedicineName" name="MedicineName" type="text"        class="form-control form-control-sm"> 
 
  <br> Unit price:   
  <input id="UnitPrice" name="UnitPrice" type="text"        class="form-control form-control-sm"> 
 
  <br> QtyOfAvailableMedicine:   
  <input id="QtyOfAvailableMedicine" name="QtyOfAvailableMedicine" type="text"        class="form-control form-control-sm"> 
 
 <br> ReorderLimit:   
  <input id="ReorderLimit" name="ReorderLimit" type="text"        class="form-control form-control-sm"> 
 
  <br>   
  <input id="btnSave" name="btnSave" type="button" value="Save"      
  class="btn btn-primary">   <input type="hidden" id="hidMedicineIDSave"         
  name="hidMedicineIDSave" value="">  </form> 
 
 <div id="alertSuccess" class="alert alert-success"></div>  
 <div id="alertError" class="alert alert-danger"></div> 
 
 <br>  <div id="divPharmacysGrid">   
 <%    
 	Pharmacy PharObj = new Pharmacy();    
 	out.print(PharObj.readPharmacys());   
 %>  </div>
 </div>
 </div>
 </div>
 </body>
 </html>
 
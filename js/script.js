/// <reference path="angular.min.js" />

var app = angular
            .module("MyApp",[])
            .controller("MyCTRL",function($scope){


                $scope.regForm = true;
                $scope.openRegistrationForm = function(){
                    $scope.regForm = false;
                    $scope.flag=false;
                }

                //when the user clicks on the button toggle between hiding and showing the dropdown content.
                $scope.click = function(){
                    document.getElementById("myDropDown").classList.toggle("show");
                }

                // Get the modal
                var modal = document.getElementById("myModal");
                var btn = document.getElementById("save-btn");
                // Get the <span> element that closes the modal
                // var span = document.getElementsByClassName("close")[0];
                // // When the user clicks the button, open the modal 
                // btn.onclick = function() {
                //     modal.style.display = "block";
                // }

                $scope.openModal = function(){
                    modal.style.display = "block";
                }

                $scope.closeTab=function(){
                    modal.style.display = "none";
                    $scope.flag=false;
                    $scope.formData.category = '--Select an issue type--';
                    $scope.formData.longDescription='';
                    $scope.formData.description='';
                }

                $scope.AddUser = function(){
                    window.alert("You have successfully registered with us!!");
                    $scope.regForm = true;
                }
  


                //Close the dropdown if the user clicks outside of it.
                window.onclick=function(e){
                    if(!e.target.matches('.dropbtn')){
                        var myDropDown = document.getElementById("myDropDown");
                        if(myDropDown.classList.contains("show")){
                            myDropDown.classList.remove("show");
                        }
                    }
                }
                $scope.flag=false;
                $scope.openForm=function(){
                    $scope.flag=true;
                    $scope.regForm=true;
                }
                $scope.closeForm=function(){
                    $scope.flag=false;
                    $scope.formData.category='--Select an issue type--';
                    $scope.formData.longDescription='';
                    $scope.formData.description='';
                }
                $scope.openBox=false;
                $scope.IssueBoxOpen=function(){
                    
                    $scope.openBox=true;
                }
                $scope.formData={
                    category: '--Select an issue type--',
                    description: '',
                    longDescription: ''
                }
                $scope.resetDescription = function(){
                    if($scope.formData.category !== 'Other - Please Explain'){
                        $scope.formData.longDescription = '';
                    }else{
                        $scope.formData.description = '';
                        $scope.formData.longDescription ='';
                    }
                }
                $scope.categories = [
                    { label: '--Select an issue type--', value: 'default' },
                    { label: 'Data Issue', value: 'dataissue' },
                    { label: 'Inquiry / Help', value: 'inquiry' },
                    { label: 'Application Issue', value: 'applicationIssue' },
                    { label: 'Other - Please Explain', value: 'others' },]

                $scope.disableSubmitForm = function(){
                    if(!$scope.formData.longDescription){
                        return true;
                    }else if($scope.formData.category == '--Select an issue type--'){
                        return true;
                    }else if($scope.formData.category == 'Other - Please Explain'){
                        if(!$scope.formData.description){
                            return true;
                        }
                    }
                    return false;
                }

                var saveBtn = document.getElementById("save-btn");
                function colorChangeButton(){
                    if(saveBtn.enabled == true){
                        saveBtn.style.background='blue';
                        
                    }else{
                        saveBtn.style.background='grey';
                    }
                }
               
            })

app.service("RegistrationService",function(){
    
})

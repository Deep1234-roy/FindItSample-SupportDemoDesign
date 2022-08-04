/// <reference path="angular.min.js" />

var app = angular
            .module("MyApp",[])
            .controller("MyCTRL",function($scope){

                //when the user clicks on the button toggle between hiding and showing the dropdown content.
                $scope.click = function(){
                    document.getElementById("myDropDown").classList.toggle("show");
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
                $scope.categories = [
                    { label: '--Select an issue type--', value: 'default' },
                    { label: 'Data Issue', value: 'dataissue' },
                    { label: 'Inquiry / Help', value: 'inquiry' },
                    { label: 'Application Issue', value: 'applicationIssue' },
                    { label: 'Other - Please Explain', value: 'others' },]

                $scope.disableSubmitForm = function(){
                    if($scope.formData.category == '--Select an issue type--'){
                        return true;
                    }else if($scope.formData.category == 'Other - Please Explain'){
                        if(!$scope.formData.description){
                            return true;
                        }
                    }else if(!$scope.formData.longDescription){
                        return true;
                    }
                    return false;
                }

                $scope.showIt=false;
                $scope.opensomething=function(){
                    $scope.showIt=true;
                }

                $scope.closeModal=function(){
                    $scope.showIt=false;
                }

                

               
            })

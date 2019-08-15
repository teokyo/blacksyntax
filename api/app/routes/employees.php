<?php

    $app->get('/employees', 'EmployeesController:getEmployees');
    $app->get('/employees/{id}', 'EmployeesController:getEmployeesByBranch');
   
?>
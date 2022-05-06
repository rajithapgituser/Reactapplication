//import axios from 'axios';
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://169.51.203.100:30062/api/v1/getAllEmployees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()

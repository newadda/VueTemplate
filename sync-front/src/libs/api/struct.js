class ApiResponse
{   
    constructor(name="",message={}, error={},exception=null) {
        this.statusCode = name;
        this.message=message;
        this.error=error;
        this.exception=exception;
    }
}
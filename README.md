# a simple crud api

----------

### API FUNCTIONS 

## DOCTOR ROUTES
- GET  `/doctor`
    > gets all the doctors 
- POST  `/doctor/create'`
    > creates  doctor
    ```JS
    BODY
    {
      "email": test@test.com,
      "name": "test"
    }
    ```
- PUT  `/doctor/:id`
    > update a single doctor item
    ```JS
    BODY
    {
      "email": test@test.com,
      "name": "test"
    }
    ```
- DELETE  `/doctor/:id`
    > Deletes a  single doctor 
- GET  `/doctor/:id`
    > gets a single doctor by providing its id

--------------
-----------
## PATIENT ROUTES
- GET  `/patient`
    > gets all the patients 
- POST  `/patient/create'`
    > creates a patient
    ```JS
    BODY
    {
      "email": test@test.com,
      "name": "test",
      "doctor_name": "docotor name"
    }
    ```
- PUT  `/patient/:id`
    > update a single patient item
    ```JS
    BODY
    {
      "email": test@test.com,
      "name": "test",
      "doctor_name": "docotor name"
    }
    ```
- DELETE  `/patient/:id`
    > Deletes a  single doctor 
- GET  `/patient/:id`
    > gets a single patient by providing its id

--------------
-----------
## APPOINTMENT ROUTES
- GET  `/appointment`
    > gets all the patients 
- POST  `/appointment/create'`
    > creates a patient
    ```JS
    BODY
    {
      "date": "date of appointment(2021-11-19)",
      "name": "test",
      "doctor_name": "docotor name",
      **"patient_name": "patient name",
      "appointment_reason": "reason for appointment"
    }
    ```
- PUT  `/appointment/:id`
    > update a single patient item
    ```JS
    BODY
    {
      "date": "date of appointment(2021-11-19)",
      "name": "test",
      "doctor_name": "docotor name",
      **"patient_name": "patient name",
      "appointment_reason": "reason for appointment"
    }
    ```
- DELETE  `/appointment/:id`
    > Deletes a  single doctor 
- GET  `/appointment/:id`
    > gets a single patient by providing its id


###  NB fields with ** is not required
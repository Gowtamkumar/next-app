
## departments
id, name, description, is_active 

## designations
id, name, type, description, is_active 
- type: Doctor, Staff 

## documents
id, name, type, staff_id, patient_id, description, 

## users
id, username, password, staff_id, patient_id, is_active

## roles
id, name, note
- name: admin, doctor, accountant, laboratorist, nurse, pharmacist, receptionist, representative, case manager, patient. 

## user_roles
id, user_id, role_id

## modules
id, name, note

## permissions
id, role_id, module_id, add, view, update, delete


<!-- module -->

## staffs
id, code, name, email, phone_no, nid, nationality, address, specialist, designation_id, department_id, bio, dob, gender, blood_type, education, photo, signature, experience, joinding_date, leaving_date, facebook_url, instagram_url, twitter_url, linkedin_url, bank_name, branch_name, ac_name, ac_no, note, is_active


<!-- ## doctors
id, name, email, phone_no, nid, nationality, address, specialist, designationId, departmentId, bio, dob, gender, blood_type, education, photo, signature, experience, joinding_date, leaving_date,  facebook_url, instagram_url, twitter_url, linkedin_url, bank_name, branch_name, ac_name, ac_no, note, is_active -->


## patients
id, code,  name, email, phone_no,nid,nationality, dob, gender, marital_status, blood_type, age, photo, present_address,permanent_address, is_active
* patient nije online patient registration korte parbe

## schedules
id, staff_id, day, start_time, end_time, per_patient_time, max_patient,  appointment_type, is_active
- day: sunday, monday, ...
- appointment_type: sequntial, timestamp
- jodi timestamp select hoy then per_patient_time show hobe
- time aviable ar uper nivor korbe koto jon patient dekte parbe (jodi per patient time diya dai hoy.)  aviable time and per patient  vag korte hobe. 

<!-- module -->



## appointments (Doctor appointment)
id, patient_id, department_id, staff_id, schedule_id, date, serial_no, problem, is_active
* patient nije online appointment nite parbe.
-1, appointment data add hobe and (patientid data asbe patients table thake)(department name asbe department table thake) (doctor name hobe doctor table thake) serial number hobe auto increment. doctor name jokhon select korbo tokhon doctor aviable availeable ache ki na and kobe ache koytai ache seta niche show korbe.

-2, appointment list a all appointments data show hobe and crud oparation hobe. 
-3, assign by all akta list thakle. ke assign korlo setar akta list thakle exmp: assign by admin and appointment info thakbe.


## case_study_types
id, name, note, is_active
name: - diabetic, blood pressure

## case_studies
id, department_id, case_study_type_id, is_active,

1, patientid hobe patient table thakle. just patient ar case study add korte hobe.
2, patient list a patients ar all case study list hobe. and crud oparation korte hobe. 


## patient_case_studies
id, patient_id, case_study_type_id, description, is_active,


## prescriptions (db te table kora hoy nai)
id, appointment_id, date,  

      ## tests akta table korte hobe ki ki test hobe segula thakbe. (db te table kora hoy nai)
      ## medicine akta table korte hobe all medicin thakle. (db te table kora hoy nai.)
      ## presscription table ar under a tests and medicin table thakbe. (db te table kora hoy nai.)

-1, doctorid thakle doctor ar name asbe and patient id thakle patinet name asbe and appointments thake serial number asbe.

-2, tests table and medichin table diya korte hobe prescription.  prescription korte je gula lagbe all add kore prescription complete hobe. 
 3, presscripiton list a all prescription data thakbe. and list thakle prescriptin prient dite prbe. and crud oparation korte hobe.

 note: all medicin show korbe presscription then doctor jodi kono medicin delete korte cai sesta korte parbe. 

## prescription_items
id, prescription_id, type, name, qty, description 
- type: medicin, test



## medicins
id, code, name, room_id, cost, note, is_active,

## tests
id, code, name, building_id, room_id, cost, note, is_active,

## buildings
id, name, note

## room
id, name, room_no


<!-- ---------------------Apatoto etotukui ---------------------------- -->

##  payment
id, data, accountName, payTo, description, amount, isActive



## patient admission
id, date, patientName,RoomNumber, bedNumber,bedType, phoneNumber,blood, gender, maritalStatus, occupation, dob, photo, PermanenAddress, city, age, religion, payment,  nationality,  problem, guardianName, isActive

1, just data add hobe. 
2, admission patient list thakbe and crud oparation hobe.

## Emergency Admission
 id, patientName, date, phoneNumber, RoomNumber, bedNumber, bedType, problem, guardianName, guardianPhoneNumber, isActive 

 1, just add korte hobe.
 2, emergency addmission list and crud oparation




 ## Services 
 id, service_name, , qty, description, price, status

1, just add service
2, and list service and crud oparation

## Package
id, packageName, description, package including (1. { serviceName, quantity, rate},2{ serviceName, quantity, rate}), discount, isActive

1, just add data.
2, package list and package list crud oparation.

## Billing 
id, patientName, packageName, price,  age, gender, phoneNumber, doctorName, date 
 1, all bill akhon thake pawa jabe. 
 2, bill number thakbe, serial number thakbe, 

 ## pharmacy management
id, name, quantity, perPrice, price, 
data add korte hobe,  medicin stock management system thakle hobe.
<!-- 
## hospital activities

      ## add birth Report
       id, patientId, date, doctorName, status

      1, Birth Report all data add hobe, and patientId asbe patient table thake, and doctor name asbe doctor table thake. doctor name asbe doctor table thake
      2, Birth report list asbe. and crud oparation hobe,
      
      ## add Death report
       id, patientId, date, doctorName, status
       1, just add korte hobe and death report list thakle and crud oparation hobe. print korer option thakte hobe.doctor name asbe doctor table thake

      ## investigation report
      id, patientId, date, doctorName, status

      1, just add korte hobe and investigation report list thakle and crud oparation hobe. print korer option thakte hobe.doctor name asbe doctor table thake

      ## add oparation Report
      id, patientId, date, doctorName, status
       1, just add korte hobe and add oparation report list thakle and crud oparation hobe. print korer option thakte hobe. doctor name asbe doctor table thake -->

## modules

## users
id, username, password, staff_id, patient_id, is_active

### patient registration management, billing and discharge summary

1. patient registration
- add patient, patient details

- id, code,  name, email, phone_no,nid,nationality,dob,gender, marital_status, blood_type, age,photo, address, is_active



- manage online register patient
- id, code,  name, email, phone_no, blood_type, gender, age, dob, nid, nationality, photo, address, is_active
* patient nije online patient registration korte parbe

- patient case studies
      ## case_study_types
      id, name, note, is_active
      name: - diabetic, blood pressure

      ## case_studies
      id, department_id, case_study_type_id, is_active

      1, patientid hobe patient table thakle. just patient ar case study add korte hobe.
      2, patient list a patients ar all case study list hobe. and crud oparation korte hobe. 

      ## patient_case_studies
      id, patient_id, case_study_type_id, description, is_active,


2. out door management
- patient activity dashboards
- dashboards for user activity
- dashboard for advances/ payments/ refunds etc
- schedules for doctors
- diagnosis, lab orders
- medication orders, procedure ordors
- data reports on user activity/ patients activity/ doctor activity

3. indoor management
- patient admission and bed location
- admission cancel of patient
- record of patients bed change 
- patient service and clinical test 
- doctor consultation for indoor
- wards, rooms and beds configuration
- medical observation and nursing notes
- indoor invoicing & patient bill
- indoor patient settlement
- summary of bill & note for patients

4. out patient managment
 - distribution duty for on duty consultant
 - patients history and diagnossis details
 - schedule summary for daily, weekly and monthly
 - summary generation for investigation and treatment
 - details information of clinical service
 - nurse progress notes
 - scheduling patients surgery
 - OP medical observation 
 - discharge notification
 - discharge summary

 5. emergency patient management
 - Emergency Admission

   - id, patientName, date, phoneNumber, RoomNumber, bedNumber, bedType, problem, guardianName, guardianPhoneNumber, isActive 
      1, just add korte hobe.
      2, emergency addmission list and crud oparation


 6. billing management
 ## Billing 
      id, patientName, packageName, price,  age, gender, phoneNumber, doctorName, date 
      1, all bill akhon thake pawa jabe. 
      2, bill number thakbe, serial number thakbe, 

 - quick billing and payment option
 - printable invoice and receipts
 - insurance and sponsor bills
 
### doctor service management

 1. doctor services
 - add doctor, doctor details
      - id, code, name, email, phone_no, nid, nationality, address, specialist, designation_id, department_id, bio, dob, gender, blood_type, education, photo, signature, experience, joinding_date, leaving_date, facebook_url, instagram_url, twitter_url, linkedin_url, bank_name, branch_name, ac_name, ac_no, note, is_active

 - doctor schedule
      - id, staff_id, day, start_time, end_time, per_patient_time, max_patient,  appointment_type, is_active
      - day: sunday, monday, ...
      - appointment_type: sequntial, timestamp
      - jodi timestamp select hoy then per_patient_time show hobe
      - time aviable ar uper nivor korbe koto jon patient dekte parbe (jodi per patient time diya dai.)  available time and per patient vag korte hobe. 

 - notification alert sms to patients
 - doctor by patient details
 - doctors time slot
 - view track and schedule individual doctors appointments 
 - check doctors availablity for patients appointment
 - maintain patients appointment information

 - appointments
      ## appointments (Doctor appointment)
      id, patient_id, department_id, staff_id, schedule_id, date, serial_no, problem, is_active
      * patient nije online appointment nite parbe.
      -1, appointment data add hobe and (patientid data asbe patients table thake)(department name asbe department table thake) (doctor name hobe doctor table thake) serial number hobe auto increment. doctor name jokhon select korbo tokhon doctor aviable availeable ache ki na and kobe ache koytai ache seta niche show korbe.

      -2, appointment list a all appointments data show hobe and crud oparation hobe. 
      -3, assign by all akta list thakle. ke assign korlo setar akta list thakle exmp: assign by admin and appointment info thakbe.

 - prescriptions 
      
      ## tests akta table korte hobe ki ki test hobe segula thakbe. (db te table kora hoy nai)
      ## medicine akta table korte hobe all medicin thakle. (db te table kora hoy nai.)
      ## presscription table ar under a tests and medicin table thakbe. (db te table kora hoy nai.)

      -1, doctorid thakel doctor ar name asbe and patient id thakle patinet name asbe and appointments thake serial number asbe.

      -2, tests table and medichin table diya korte hobe prescription.  prescription korte je gula lagbe all add kore prescription complete hobe. 
      3, presscripiton list a all prescription data thakbe. and list thakle prescriptin prient dite prbe. and crud oparation korte hobe.

       note: all medicin show korbe presscription then doctor jodi kono medicin delete korte cai sesta korte parbe. 

      ## prescription_items
      id, prescription_id, type, name, qty, description 
      - type: medicin, test


### bed & wards management
- categorize (Department) ward rooms
- assign patient to ward room / beds
- check beds availablity
- maintain patient discharge information
- track patient information when shifted from one ward to another ward
- maintain wards rooms information and status

 - add room
      ## building
      id, name, note
      ## room
      id, name, room_no

 - add bed 
  - id, bed_no, note
 - shifted ward 
  - id, patientName(patientId), bednumber(bed_id), Department_id(wardName), to Department_id(wardName), bednumber(bed_id)
 - ward and room details

### laboratory management 
- test
- test details
- id, code, name, building_id, room_id, cost, note, is_active,

### account & financial management
- keeping record of daily payment and receive 
- report generation of daily accounts
- generate monthly balance sheet
- yearly balance sheet report generation 

- Dashboard (acconting all calculation show this)
- Income Head
- Income
- Expense head
- Expense
- Advance Payment Voucher
- Instalment
- Petty cash
- vendor/ supplier
- accounts configuratin

3.1 Bank Account Setup
3.1.1 Bank Name Setup
3.1.2 Account Type Setup
3.1.3 Account Info Setup
3.2 Company Transaction
3.2.1 Company Transaction
3.2.2 Employee Salary Payment
3.3 Accounts
3.3.1 Head Creation
3.3.2 Chart of accounts (COA)
3.3.3 Voucher Information
3.3.4 Journal
3.4 Report
3.4.1 Trial Balance
3.4.2 Journal
3.4.3 Ledger
3.4.4 Profit & Loss
3.4.5 Balance Sheet
3.4.6 Statement
3.4.7 Payable Account
3.4.8 Receivable Account
3.4.9 Asset Registration
3.4.10 Cash Flow



### HR management

1. employee management
- traceable daily work time of each employee
- Empoly,s total working hours calculations
- easy leaves management
- editable time-sheet record
- empolyee, approver and administrator module
- maintors employess attendance and login time

2. payroll management
- hospital employee pay scale wise salary distribution
- employee increment information
- updated employee salary calculation and tax deductions
- maintain employee leaves information & salary deductions
- printable pay slips


1. employee management
- staff add, staff details
      - id, code, name, email, phone_no, nid, nationality,dob, gender, marital_status, religion,specialist, blood_type, address,photo, signature,joinding_date, designation_id, department_id,experience, education, bio, leaving_date, facebook_url, instagram_url, twitter_url, linkedin_url, bank_name, branch_name, ac_name, ac_no, note, is_active

- employes attendance
- employees attendance list

- department
- id, name, description, is_active 

- designation
- id, name, type, description, is_active
- type: Doctor, Staff

2. payroll management
- salary
 - id, employeeName(staff_id), amount, date
- payroll
- employee increment information

### inventory & stock management 
1. pharmacy management
- medicin add, medicin details
      - id, name, quantity, perPrice, totalPrice, 
      - data add korte hobe, medicin stock management system thakle hobe.
- sales
      - id, medicin_id, qty, note, 
      (medicin price niche show korbe. )
- Purchase
      id, productName, qty, perPrice, note
- stock 
      

2. medical equipment management
- equipment add, details
      - id, name, qty, perPrice, totalPrice, 
      - data add korte hobe, medicin equipment stock management system thakle hobe.
- stock

3. fixed asset inventory
- add new asset, asset details,
  - id, name, qty, perPrice, totalPrice, 
      - data add korte hobe, medicin equipment stock management system thakle hobe.
- stock


6.1 Company Information
6.2 Product Category
6.3 Product Entry
6.4 Under Stock
6.5 Purchase requisition
6.6 Purchase Order
6.7 Stock In
6.8 Stock Out
6.9 Report
6.9.1 Last Purchase Order
6.9.2 Last Stock In
6.9.3 Last Stock Out
6.9.4 Stock Status

### others
- patient feedback dite parbe

## hospital activities

      ## add birth Report
       id, patient_id, date, doctorName, note,status

      1, Birth Report all data add hobe, and patientId asbe patient table thake, and doctor name asbe doctor table thake. doctor name asbe doctor table thake
      2, Birth report list asbe. and crud oparation hobe,
      
      ## add Death report
       id, patient_id, date, doctorName, note,status
       1, just add korte hobe and death report list thakle and crud oparation hobe. print korer option thakte hobe.doctor name asbe doctor table thake

      ## investigation report
      id, patient_id, date, doctorName, note, status

      1, just add korte hobe and investigation report list thakle and crud oparation hobe. print korer option thakte hobe.doctor name asbe doctor table thake

      ## add oparation Report
      id, patient_id, date, doctorName, note,status
       1, just add korte hobe and add oparation report list thakle and crud oparation hobe. print korer option thakte hobe. doctor name asbe doctor table thake

      ## noticeboard

      id, title, person_type, description, start_date, end_date, status



### setting
      ## roles
      id, name, note
      - name: admin, doctor, accountant, laboratorist, nurse, pharmacist, receptionist, representative, case manager, patient. 

      ## user_roles
      id, user_id, role_id

      ## modules
      id, name, note

      ## permissions
      id, role_id, module_id, add, view, update, delete



### banking

      ##Bank
      id name, note

      ## account
      id, date, bank_id, brance_name, ac_no, ac_type, ac_holder, ac_holder_phone, status


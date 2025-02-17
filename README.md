# Practo-elastic

## Overview
This project is a **Practo-like healthcare management system** that facilitates clinic and doctor management. It utilizes **Spring Boot, MySQL, Elasticsearch, and React (migrating to Next.js)** for seamless performance and efficient search functionality.

## Tech Stack
- **Frontend:** React (Next.js migration in progress), TailwindCSS, Material-UI
- **Backend:** Spring Boot (REST APIs)
- **Database:** MySQL (Relational Data Storage)
- **Search Engine:** Elasticsearch (Fast Searching)

## Features
### Backend:
✅ **Clinic & Doctor Registration** (SQL + Elasticsearch Sync)  
✅ **Search Functionality** (Doctors, Clinics, Specialties)  
✅ **CRUD Operations** (Clinics, Doctors)  
✅ **API Handling** (Spring Boot REST APIs)  
✅ **Data Syncing** (MySQL ↔ Elasticsearch)  

### Frontend:
✅ **Search & Filtering** (Elasticsearch-powered)  
✅ **Doctor & Clinic Profiles**  
✅ **Navigation & State Management** (React Router, Context/Redux)  
✅ **Forms Handling** (React Hook Form)  

## Database Schema (MySQL)
```sql
CREATE TABLE clinics (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    address TEXT NOT NULL,
    contact_number VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    website VARCHAR(255) NULL
);

CREATE TABLE doctors (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    speciality VARCHAR(255) NOT NULL,
    registration_number VARCHAR(50) NOT NULL UNIQUE,
    mobile_number VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    experience INT NULL,
    qualification VARCHAR(255) NULL,
    clinic_id BIGINT NOT NULL,
    FOREIGN KEY (clinic_id) REFERENCES clinics(id) ON DELETE CASCADE
);
```

## Elasticsearch Index Mapping
```json
{
  "mappings": {
    "properties": {
      "id": { "type": "long" },
      "name": { "type": "text" },
      "speciality": { "type": "text" },
      "mobileNumber": { "type": "text" },
      "registrationNumber": { "type": "text" }
    }
  }
}
```
## API Endpoints
### Clinic API
- **Create Clinic**  
  `POST /clinics`  
  ```json
  {
    "name": "HealthCare Clinic",
    "address": "123 Main St, NY",
    "contactNumber": "1234567890",
    "email": "contact@clinic.com",
    "website": "https://clinic.com"
  }
  ```
- **Get All Clinics**  
  `GET /clinics`
- **Get Clinic by ID**  
  `GET /clinics/{id}`
- **Update Clinic**  
  `PUT /clinics/{id}`
- **Delete Clinic**  
  `DELETE /clinics/{id}`

### Doctor API
- **Create Doctor**  
  `POST /doctors/{clinicId}`  
  ```json
  {
    "name": "Dr. John Doe",
    "speciality": "Cardiologist",
    "registrationNumber": "REG12345",
    "mobileNumber": "9876543210",
    "email": "dr.john@example.com",
    "experience": 10,
    "qualification": "MBBS, MD"
  }
  ```
- **Get All Doctors**  
  `GET /doctors`
- **Get Doctor by ID**  
  `GET /doctors/{id}`
- **Get Doctors by Clinic**  
  `GET /doctors/clinic/{clinicId}`
- **Update Doctor**  
  `PUT /doctors/{id}`
- **Delete Doctor**  
  `DELETE /doctors/{id}`

### Search API
- **Search Doctors**  
  `GET /search/doctors?query={name_or_speciality}`
- **Search Clinics**  
  `GET /search/clinics?query={name}`

## Setup & Installation
### Backend:
1. Clone the repo:  
   ```sh
   git clone [your-repo-url]
   ```
2. Navigate to the backend directory:  
   ```sh
   cd backend
   ```
3. Run the Spring Boot application:  
   ```sh
   mvn spring-boot:run
   ```

### Frontend:
1. Navigate to the frontend directory:  
   ```sh
   cd frontend
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the development server:  
   ```sh
   npm start
   ```



